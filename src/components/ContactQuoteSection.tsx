import React from 'react';
import {
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/totusData';

export function ContactQuoteSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-14 sm:scroll-mt-20 py-10 sm:py-14 lg:py-16 bg-[#080E18] border-t border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
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

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(243,199,66,0.22)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>
        </div>

        {/* Canais Diretos de Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3.5 p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-slate-400">WhatsApp / Telefone Técnico</div>
              <div className="text-sm sm:text-base font-semibold text-white group-hover:text-[#F3C742] transition-colors tabular-nums">
                {COMPANY_INFO.phoneDisplay}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Clique para iniciar atendimento no WhatsApp →
              </div>
            </div>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="group flex items-start gap-3.5 p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
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
            className="group flex items-start gap-3.5 p-4 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-slate-400">Instagram Oficial</div>
              <div className="text-sm sm:text-base font-medium text-white group-hover:text-[#F3C742] transition-colors">
                {COMPANY_INFO.instagramHandle}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Acompanhe obras, quadros QGBT e instalações em execução
              </div>
            </div>
          </a>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0F172A]/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center text-[#F3C742] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Localidade e Abrangência</div>
              <div className="text-sm sm:text-base font-medium text-white">
                {COMPANY_INFO.location}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Vistorias presenciais agendadas para residências, condomínios e empresas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
