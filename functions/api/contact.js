/**
 * Cloudflare Pages Function — Serverless Lead & Technical Quote Dispatcher
 * Route: POST /api/contact (mapped automatically by Cloudflare Pages from /functions/api/contact.js)
 */

const ALLOWED_SEGMENTS = ['Residencial', 'Condomínio', 'Comercial'];

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  };

  try {
    const body = await request.json();
    const {
      nome = '',
      whatsapp = '',
      segmento = '',
      servicos = [],
      descricao = '',
      turnstileToken = '',
    } = body || {};

    // 1. Validate required fields
    const cleanName = String(nome).trim();
    const cleanPhone = String(whatsapp).replace(/\D/g, '');
    const cleanDesc = String(descricao).trim();

    if (cleanName.length < 2) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Informe seu nome completo para identificação técnica.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (cleanPhone.length < 10 || cleanPhone.length > 13) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Informe um número de WhatsApp válido com DDD.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (!ALLOWED_SEGMENTS.includes(segmento)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Selecione um segmento de atendimento válido.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (!Array.isArray(servicos) || servicos.length === 0) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Selecione ao menos uma especialidade técnica de interesse.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 2. Verify Cloudflare Turnstile token when secret key is configured in Cloudflare environment
    if (env && env.TURNSTILE_SECRET_KEY) {
      const ip = request.headers.get('CF-Connecting-IP') || '';
      const formData = new FormData();
      formData.append('secret', env.TURNSTILE_SECRET_KEY);
      formData.append('response', turnstileToken);
      formData.append('remoteip', ip);

      const turnstileRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          body: formData,
        }
      );
      const turnstileOutcome = await turnstileRes.json();
      if (!turnstileOutcome.success) {
        return new Response(
          JSON.stringify({
            ok: false,
            error: 'Falha na verificação anti-bot Cloudflare Turnstile. Tente novamente.',
          }),
          { status: 403, headers: corsHeaders }
        );
      }
    }

    // 3. Build structured payload for Webhook / Telegram / Email notification
    const protocolId = `TOTUS-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const formattedText = [
      `⚡ *NOVO ORÇAMENTO TÉCNICO — TOTU'S TECNOLOGIA*`,
      `Protocolo: ${protocolId}`,
      `Nome: ${cleanName}`,
      `WhatsApp: ${whatsapp}`,
      `Segmento: ${segmento}`,
      `Especialidades: ${servicos.join(', ')}`,
      `Descrição: ${cleanDesc || 'Não informada'}`,
      `Data/Hora: ${timestamp}`,
    ].join('\n');

    // Optional Webhook / Telegram / Email dispatch via Cloudflare env secrets
    if (env && env.WEBHOOK_NOTIFICATION_URL) {
      await fetch(env.WEBHOOK_NOTIFICATION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          protocolId,
          nome: cleanName,
          whatsapp,
          segmento,
          servicos,
          descricao: cleanDesc,
          text: formattedText,
          timestamp,
        }),
      });
    }

    if (env && env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: formattedText,
          parse_mode: 'Markdown',
        }),
      });
    }

    const whatsappRedirectMessage = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento técnico com a TOTU'S TECNOLOGIA.\n\n` +
        `*Protocolo:* ${protocolId}\n` +
        `*Nome:* ${cleanName}\n` +
        `*Segmento:* ${segmento}\n` +
        `*Serviços:* ${servicos.join(', ')}\n` +
        `*Necessidade:* ${cleanDesc || 'Avaliação e vistoria técnica'}`
    );

    return new Response(
      JSON.stringify({
        ok: true,
        protocolId,
        timestamp,
        message: 'Solicitação técnica registrada com sucesso.',
        whatsappUrl: `https://wa.me/5567998109412?text=${whatsappRedirectMessage}`,
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'Erro ao processar requisição. Utilize o botão direto do WhatsApp.',
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
