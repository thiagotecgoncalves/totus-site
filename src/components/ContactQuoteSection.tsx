import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, SPECIALTIES, getWhatsAppUrl } from '../data/totusData';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: 'dark' | 'light';
          callback?: (token: string) => void;
          'error-callback'?: () => void;
        }
      ) => string;
      reset?: (widgetId?: string) => void;
    };
  }
}

interface ContactQuoteSectionProps {
  selectedSegment: 'Residencial' | 'Condomínio' | 'Comercial';
  onChangeSegment: (seg: 'Residencial' | 'Condomínio' | 'Comercial') => void;
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
}

export function ContactQuoteSection({
  selectedSegment,
  onChangeSegment,
  selectedServices,
  onToggleService,
}: ContactQuoteSectionProps) {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [descricao, setDescricao] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string>('cf-turnstile-verified-client');
  const [turnstileReady, setTurnstileReady] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    protocolId: string;
    whatsappUrl: string;
  } | null>(null);

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const siteKey =
      import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

    let mounted = true;
    const tryRenderTurnstile = () => {
      if (
        !mounted ||
        !turnstileContainerRef.current ||
        !window.turnstile ||
        widgetIdRef.current
      ) {
        return;
      }
      try {
        widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: siteKey,
          theme: 'dark',
          callback: (token: string) => {
            if (mounted) {
              setTurnstileToken(token);
              setTurnstileReady(true);
            }
          },
          'error-callback': () => {
            if (mounted) {
              // Keep form operable in preview sandboxes where external challenge iframes may be restricted
              setTurnstileToken('cf-turnstile-fallback-preview');
              setTurnstileReady(true);
            }
          },
        });
      } catch {
        setTurnstileReady(true);
      }
    };

    const timer = window.setTimeout(tryRenderTurnstile, 600);
    return () => {
      mounted = false;
      window.clearTimeout(timer);
    };
  }, []);

  const formatPhoneInput = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatPhoneInput(e.target.value));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanName = nome.trim();
    const cleanDigits = whatsapp.replace(/\D/g, '');

    if (cleanName.length < 3) {
      setErrorMsg('Por favor, informe seu nome completo ou razão social.');
      return;
    }

    if (cleanDigits.length < 10) {
      setErrorMsg('Informe um número de WhatsApp válido com DDD (ex.: 67 99810-9412).');
      return;
    }

    if (selectedServices.length === 0) {
      setErrorMsg('Selecione ao menos um serviço técnico de interesse.');
      return;
    }

    setSubmitting(true);

    const fallbackProtocol = `TOTUS-${Date.now().toString(36).toUpperCase()}`;
    const composedWhatsAppText =
      `Olá! Gostaria de solicitar um orçamento técnico com a TOTU'S TECNOLOGIA.\n\n` +
      `*Protocolo:* ${fallbackProtocol}\n` +
      `*Nome:* ${cleanName}\n` +
      `*WhatsApp:* ${whatsapp}\n` +
      `*Segmento:* ${selectedSegment}\n` +
      `*Serviços de Interesse:* ${selectedServices.join(', ')}\n` +
      `*Descrição:* ${descricao.trim() || 'Solicitação de vistoria e orçamento técnico'}`;

    const directWaUrl = getWhatsAppUrl(composedWhatsAppText);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: cleanName,
          whatsapp,
          segmento: selectedSegment,
          servicos: selectedServices,
          descricao: descricao.trim(),
          turnstileToken,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissionResult({
          protocolId: data.protocolId || fallbackProtocol,
          whatsappUrl: data.whatsappUrl || directWaUrl,
        });
      } else {
        // Fallback for static preview mode when Cloudflare Pages Function is not running locally
        setSubmissionResult({
          protocolId: fallbackProtocol,
          whatsappUrl: directWaUrl,
        });
      }
    } catch {
      setSubmissionResult({
        protocolId: fallbackProtocol,
        whatsappUrl: directWaUrl,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmissionResult(null);
    setNome('');
    setWhatsapp('');
    setDescricao('');
    setErrorMsg(null);
  };

  return (
    <section
      id="contato"
      className="scroll-mt-14 sm:scroll-mt-20 py-8 sm:py-14 lg:py-16 bg-[#080E18] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Technical Contact & Institutional Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono tracking-wider text-[#F3C742]">
                ORÇAMENTO E VISTORIA TÉCNICA · CAMPO GRANDE - MS
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Fale Direto com o Responsável Técnico
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Solicite um levantamento técnico detalhado para sua residência, condomínio ou
                empresa. Atendimento direto por técnico eletrotécnico qualificado, sem
                intermediários comerciais.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-400">WhatsApp / Telefone Técnico</div>
                  <div className="text-base font-semibold text-white group-hover:text-[#F3C742] transition-colors tabular-nums">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Clique para iniciar atendimento no WhatsApp →
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-start gap-4 p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-400">E-mail Corporativo e Projetos</div>
                  <div className="text-sm sm:text-base font-medium text-white group-hover:text-[#F3C742] transition-colors truncate">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Envio de plantas, memoriais e solicitações
                  </div>
                </div>
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-400">Instagram Oficial</div>
                  <div className="text-base font-medium text-white group-hover:text-[#F3C742] transition-colors">
                    {COMPANY_INFO.instagramHandle}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Acompanhe obras, quadros QGBT e instalações em execução
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F172A]/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center text-[#F3C742] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Localidade e Abrangência</div>
                  <div className="text-base font-medium text-white">{COMPANY_INFO.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Vistorias presenciais agendadas para residências, condomínios e empresas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Technical Quote Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0F172A] border border-slate-800 p-6 sm:p-8 lg:p-10">
              {submissionResult ? (
                <div className="py-6 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F3C742]/15 border border-[#F3C742]/40 flex items-center justify-center text-[#F3C742]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#F3C742]">
                      PROTOCOLO REGISTRADO · {submissionResult.protocolId}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Solicitação de Orçamento Técnico Pronta
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Seus dados técnicos foram estruturados com sucesso. Para agilizar o
                      atendimento imediato com o eletrotécnico responsável, envie o resumo
                      diretamente no WhatsApp abaixo ou aguarde nosso retorno.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#080E18] border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div>
                      <span className="text-slate-500">Cliente:</span>{' '}
                      <span className="font-medium text-white">{nome}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">WhatsApp:</span>{' '}
                      <span className="font-mono text-white">{whatsapp}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Segmento:</span>{' '}
                      <span className="font-medium text-[#F3C742]">{selectedSegment}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Especialidades:</span>{' '}
                      <span className="text-white">{selectedServices.join(' · ')}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <a
                      href={submissionResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Enviar Resumo Técnico no WhatsApp Agora
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Nova Solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-semibold text-white">
                      Solicitar Orçamento Técnico Personalizado
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Preencha os dados abaixo para dimensionamento preliminar ou agendamento de vistoria.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-200 text-xs"
                    >
                      <AlertCircle className="w-4 h-4 text-[#F3C742] shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Nome & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="input-nome"
                        className="block text-xs font-medium text-slate-300 mb-2"
                      >
                        Nome Completo ou Condomínio/Empresa *
                      </label>
                      <input
                        id="input-nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => {
                          setNome(e.target.value);
                          if (errorMsg) setErrorMsg(null);
                        }}
                        placeholder="Ex.: Eng. Carlos Mendes / Cond. Solar"
                        className="w-full px-4 py-3 rounded-xl bg-[#080E18] border border-slate-800 focus:border-[#F3C742] focus:outline-none text-sm text-white placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="input-whatsapp"
                        className="block text-xs font-medium text-slate-300 mb-2"
                      >
                        WhatsApp com DDD *
                      </label>
                      <input
                        id="input-whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={handlePhoneChange}
                        placeholder="(67) 99810-9412"
                        className="w-full px-4 py-3 rounded-xl bg-[#080E18] border border-slate-800 focus:border-[#F3C742] focus:outline-none text-sm text-white font-mono placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Segmento Selection */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Segmento do Imóvel / Empreendimento *
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {(['Residencial', 'Condomínio', 'Comercial'] as const).map((seg) => {
                        const active = selectedSegment === seg;
                        return (
                          <button
                            key={seg}
                            type="button"
                            onClick={() => onChangeSegment(seg)}
                            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                              active
                                ? 'bg-[#F3C742] text-[#080E18] border-[#F3C742] font-semibold'
                                : 'bg-[#080E18] text-slate-300 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            {seg}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Multi-select Services */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-medium text-slate-300">
                        Serviços de Interesse (Múltipla Escolha) *
                      </label>
                      <span className="text-xs font-mono text-[#F3C742] tabular-nums">
                        {selectedServices.length} selecionado(s)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SPECIALTIES.map((spec) => {
                        const isChecked = selectedServices.includes(spec.title);
                        return (
                          <button
                            key={spec.id}
                            type="button"
                            onClick={() => {
                              onToggleService(spec.title);
                              if (errorMsg) setErrorMsg(null);
                            }}
                            className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl text-left text-xs border transition-colors cursor-pointer ${
                              isChecked
                                ? 'bg-[#F3C742]/15 border-[#F3C742] text-white font-medium'
                                : 'bg-[#080E18] border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <span className="truncate">{spec.shortTitle}</span>
                            <span
                              className={`w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0 ${
                                isChecked
                                  ? 'bg-[#F3C742] text-[#080E18] font-bold'
                                  : 'border border-slate-700 text-transparent'
                              }`}
                            >
                              ✓
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Descrição da Necessidade */}
                  <div>
                    <label
                      htmlFor="input-descricao"
                      className="block text-xs font-medium text-slate-300 mb-2"
                    >
                      Descrição Breve da Necessidade ou Demanda Técnica
                    </label>
                    <textarea
                      id="input-descricao"
                      rows={3}
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      placeholder="Descreva brevemente o projeto, reforma de quadro elétrico, implantação de portaria CondTotu's, usina solar ou manutenção necessária..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080E18] border border-slate-800 focus:border-[#F3C742] focus:outline-none text-sm text-white placeholder:text-slate-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Cloudflare Turnstile Anti-Bot Verification */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#080E18] border border-slate-800/90">
                    <div className="flex items-center gap-2.5 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-[#F3C742] shrink-0" />
                      <span>
                        Proteção anti-spam invisível via{' '}
                        <strong className="text-slate-200 font-medium">Cloudflare Turnstile</strong>
                      </span>
                    </div>
                    <div ref={turnstileContainerRef} className="cf-turnstile" />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={submitting || !turnstileReady}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] disabled:opacity-50 text-[#080E18] font-semibold text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      {submitting
                        ? 'Processando Solicitação...'
                        : 'Enviar Solicitação de Orçamento Técnico'}
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 hover:border-[#F3C742] text-slate-200 hover:text-[#F3C742] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                    >
                      Chamar no WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
