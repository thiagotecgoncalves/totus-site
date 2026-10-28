import React from 'react';
import {
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/totusData';

export function ContactQuoteSection({
  onNavigate,
}: {
  onNavigate?: (id: string, e?: React.MouseEvent) => void;
}) {
  const whatsappDirectUrl = getWhatsAppUrl();

  return (
    <section
      id="contato"
      className="page-section justify-between bg-[#080E18] border-t border-slate-800/80 pt-8 sm:pt-12 pb-6 sm:pb-8"
    >
      {/* Conteúdo Centralizado de Contato */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono tracking-wider text-[#F3C742]">
              ORÇAMENTO E VISTORIA TÉCNICA · CAMPO GRANDE - MS
            </div>
            <h2 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
              Fale Direto com o Responsável Técnico
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Solicite um levantamento técnico detalhado para sua residência, condomínio ou
              empresa. Atendimento direto por técnico eletrotécnico qualificado, sem
              intermediários comerciais.
            </p>
          </div>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(243,199,66,0.22)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>
        </div>

        {/* Canais Diretos de Contato Alinhados com a Grade Principal (max-w-7xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between gap-3 p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-slate-400">WhatsApp / Telefone Técnico</div>
              <div className="text-sm sm:text-base font-semibold text-white group-hover:text-[#F3C742] transition-colors tabular-nums mt-0.5">
                {COMPANY_INFO.phoneDisplay}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Atendimento direto no WhatsApp →
              </div>
            </div>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="group flex flex-col justify-between gap-3 p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-slate-400">E-mail Corporativo e Projetos</div>
              <div className="text-sm sm:text-base font-medium text-white group-hover:text-[#F3C742] transition-colors truncate mt-0.5">
                {COMPANY_INFO.email}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Envio de plantas e memoriais
              </div>
            </div>
          </a>

          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between gap-3 p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3C742]/10 border border-[#F3C742]/30 flex items-center justify-center text-[#F3C742] shrink-0">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-slate-400">Instagram Oficial</div>
              <div className="text-sm sm:text-base font-medium text-white group-hover:text-[#F3C742] transition-colors mt-0.5">
                {COMPANY_INFO.instagramHandle}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Obras, quadros QGBT e instalações
              </div>
            </div>
          </a>

          <div className="flex flex-col justify-between gap-3 p-4 sm:p-5 rounded-xl bg-[#0F172A]/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center text-[#F3C742] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Localidade e Abrangência</div>
              <div className="text-sm sm:text-base font-medium text-white mt-0.5">
                {COMPANY_INFO.location}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Vistorias presenciais agendadas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Institucional Integrado na Base da Página de Contato */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 mt-6 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <img
              src="/assets/aistudio/logo-totus-amarelo__1__f1fd2d6e.png"
              alt="TOTU'S TECNOLOGIA"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg"
            />
            <div>
              <div className="font-brand font-bold tracking-wider text-xs sm:text-sm">
                TOTU&apos;S TECNOLOGIA
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                NBR 5410 · NBR 16690 · NBR 17240 · NBR 14565 · NR-10
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <a
              href="#solucoes"
              onClick={(e) => onNavigate?.('solucoes', e)}
              className="hover:text-[#F3C742] transition-colors"
            >
              Soluções
            </a>
            <a
              href="#servicos"
              onClick={(e) => onNavigate?.('servicos', e)}
              className="hover:text-[#F3C742] transition-colors"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              onClick={(e) => onNavigate?.('portfolio', e)}
              className="hover:text-[#F3C742] transition-colors"
            >
              Portfólio
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-500">
              © {new Date().getFullYear()} TOTU&apos;S TECNOLOGIA · Campo Grande - MS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
