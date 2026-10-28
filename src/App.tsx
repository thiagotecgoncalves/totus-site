/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  Camera,
  Check,
  Flame,
  Gauge,
  Menu,
  MessageCircle,
  ScanFace,
  ShieldCheck,
  Sun,
  Wifi,
  X,
  Zap,
} from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  PortfolioProject,
  SEGMENTS,
  SPECIALTIES,
  SpecialtyItem,
  getWhatsAppUrl,
} from './data/totusData';
import {
  HeroFilamentCircuitVisual,
  ProjectSchematicGraphic,
} from './components/TechnicalVisuals';
import { ContactQuoteSection } from './components/ContactQuoteSection';

function renderSpecialtyIcon(iconName: SpecialtyItem['iconName']) {
  const props = { className: 'w-4 h-4 sm:w-5 sm:h-5 text-[#F3C742]' };
  switch (iconName) {
    case 'zap':
      return <Zap {...props} />;
    case 'sun':
      return <Sun {...props} />;
    case 'camera':
      return <Camera {...props} />;
    case 'scan-face':
      return <ScanFace {...props} />;
    case 'shield-check':
      return <ShieldCheck {...props} />;
    case 'flame':
      return <Flame {...props} />;
    case 'gauge':
      return <Gauge {...props} />;
    case 'wifi':
      return <Wifi {...props} />;
  }
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegmentId, setActiveSegmentId] = useState<
    'residencial' | 'condominial' | 'comercial'
  >('residencial');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const [activeModalSpecialty, setActiveModalSpecialty] = useState<SpecialtyItem | null>(null);

  const whatsappDirectUrl = getWhatsAppUrl();

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'topo' || id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const headerEl = document.querySelector('header');
      const headerOffset = headerEl
        ? headerEl.getBoundingClientRect().height
        : window.innerWidth < 640
          ? 56
          : 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - headerOffset),
        behavior: 'smooth',
      });
    }
  };

  const activeSegment =
    SEGMENTS.find((seg) => seg.id === activeSegmentId) || SEGMENTS[0];

  return (
    <div className="min-h-screen bg-[#080E18] text-slate-100 flex flex-col selection:bg-[#F3C742] selection:text-[#080E18]">
      {/* 1. Header Fixo (Sticky) — Alinhado com max-w-7xl */}
      <header className="sticky top-0 z-40 bg-[#080E18]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-4">
          {/* Logotipo Oficial da TOTU'S TECNOLOGIA com Fonte Montserrat */}
          <a
            href="#inicio"
            onClick={scrollToTop}
            className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group cursor-pointer"
          >
            <img
              src="/assets/aistudio/logo-totus-amarelo__1__f1fd2d6e.png"
              alt="TOTU'S TECNOLOGIA"
              className="w-9 h-9 sm:w-12 sm:h-12 object-contain rounded-lg transition-transform group-hover:scale-105"
            />
            <span className="font-brand font-bold tracking-wider text-xs sm:text-base md:text-lg">
              TOTU&apos;S TECNOLOGIA
            </span>
          </a>

          {/* Menu de Páginas */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300"
          >
            <a
              href="#solucoes"
              onClick={(e) => scrollToSection('solucoes', e)}
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Soluções
            </a>
            <a
              href="#servicos"
              onClick={(e) => scrollToSection('servicos', e)}
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              onClick={(e) => scrollToSection('portfolio', e)}
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Portfólio
            </a>
            <a
              href="#contato"
              onClick={(e) => scrollToSection('contato', e)}
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Contato
            </a>
          </nav>

          {/* Botão de Ação Primário Direto para WhatsApp + Toggle Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Solicitar Orçamento
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden p-2 rounded-xl border border-slate-800 text-slate-200 hover:border-[#F3C742] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-4 space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Soluções', id: 'solucoes' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Portfólio', id: 'portfolio' },
                { label: 'Contato', id: 'contato' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3.5 py-2.5 rounded-lg bg-[#080E18] border border-slate-800 text-xs sm:text-sm font-medium text-slate-200 hover:border-[#F3C742] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs sm:text-sm text-center cursor-pointer shadow-md"
            >
              Solicitar Orçamento Técnico
            </a>
          </div>
        )}
      </header>

      <main id="topo" className="flex-1">
        {/* PÁGINA 1: Seção Inicial (100% da Altura Útil e Alinhada em max-w-7xl) */}
        <section
          id="inicio"
          className="page-section relative py-6 sm:py-10 overflow-hidden bg-[#080E18]"
        >
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[380px]"
            style={{
              background:
                'radial-gradient(circle at 65% 30%, rgba(243, 199, 66, 0.12) 0%, rgba(255, 153, 0, 0.03) 50%, rgba(8, 14, 24, 0) 80%)',
            }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Coluna Esquerda: Mensagem Principal */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6">
                <h1
                  className="font-display font-semibold tracking-tight text-white leading-[1.15]"
                  style={{ fontSize: 'clamp(1.7rem, 3.6vw, 3.4rem)' }}
                >
                  Soluções em{' '}
                  <span className="text-[#F3C742]">Segurança Eletrônica</span>, Redes e Energia
                </h1>

                <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Projetos, instalações normatizadas e manutenção especializada em elétrica, CFTV
                  com IA, energia solar, controle de acesso e automação predial com execução de
                  técnico eletrotécnico qualificado em Campo Grande - MS e região.
                </p>

                {/* Botão de Ação Único Direto para WhatsApp */}
                <div className="pt-1">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs sm:text-base transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-[0_0_24px_rgba(243,199,66,0.22)]"
                  >
                    <span>Solicitar Orçamento Técnico</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Coluna Direita: Card Interativo com Lâmpada / Câmera / Cancela */}
              <div className="lg:col-span-5 flex">
                <HeroFilamentCircuitVisual />
              </div>
            </div>
          </div>
        </section>

        {/* PÁGINA 2: Seção de Soluções (100% da Altura Útil e Alinhada em max-w-7xl) */}
        <section
          id="solucoes"
          className="page-section py-6 sm:py-10 bg-[#080E18] border-t border-slate-800/70"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
                  Soluções Sob Medida para Cada Necessidade
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Projetos e instalações desenvolvidos para o padrão de exigência de residências,
                  condomínios e empresas.
                </p>
              </div>

              {/* Botões Seletores: Residencial - Condomínio - Comercial */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#0F172A] rounded-xl border border-slate-800 max-w-md">
                {[
                  { id: 'residencial', label: 'Residencial' },
                  { id: 'condominial', label: 'Condomínio' },
                  { id: 'comercial', label: 'Comercial' },
                ].map((tab) => {
                  const isActive = activeSegmentId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() =>
                        setActiveSegmentId(
                          tab.id as 'residencial' | 'condominial' | 'comercial'
                        )
                      }
                      className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#F3C742] text-[#080E18] font-semibold shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-[#080E18]/50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Card do Segmento Selecionado Alinhado em Toda a Largura (max-w-7xl) */}
            <div
              key={activeSegment.id}
              className="w-full rounded-2xl bg-[#0F172A] border border-slate-800 p-4 sm:p-6 lg:p-7 space-y-4 sm:space-y-5 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3.5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {activeSegment.title}
                    </h3>
                    <span className="text-xs font-medium text-[#F3C742]">
                      · {activeSegment.formValue}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{activeSegment.subtitle}</p>
                </div>

                <div className="sm:text-right shrink-0">
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#F3C742]">
                    {activeSegment.highlightMetric}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {activeSegment.highlightLabel}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {activeSegment.summary}
              </p>

              {/* Lista de Recursos Alinhada na Grade */}
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 pt-1">
                {activeSegment.features.map((feat) => (
                  <li
                    key={feat.title}
                    className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-[#080E18]/80 border border-slate-800/80"
                  >
                    <Check className="w-4 h-4 text-[#F3C742] shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <span className="font-semibold text-white">{feat.title}: </span>
                      <span className="text-slate-300">{feat.detail}</span>
                    </div>
                  </li>
                ))}

                {/* Bloco de Ação Direta na Grade para Fechamento Visual Simétrico */}
                <li className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-[#080E18] border border-[#F3C742]/30">
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-[#F3C742]">
                      ATENDIMENTO TÉCNICO DIRETO
                    </div>
                    <div className="text-xs font-medium text-slate-200 truncate">
                      Projeto sob medida para {activeSegment.formValue}
                    </div>
                  </div>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PÁGINA 3: Seção de Serviços Especializados (100% da Altura Útil e Alinhada em max-w-7xl) */}
        <section
          id="servicos"
          className="page-section py-6 sm:py-8 lg:py-10 bg-[#0B1220] border-y border-slate-800/80"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1 max-w-2xl">
                <div className="text-xs font-mono tracking-wider text-[#F3C742]">
                  ESPECIALIDADES TÉCNICAS
                </div>
                <h2 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
                  Serviços Especializados
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Soluções normatizadas executadas diretamente para sua residência, condomínio ou
                  empresa.
                </p>
              </div>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#F3C742] hover:text-[#FF9900] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Falar com técnico no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {SPECIALTIES.map((spec) => (
                <div
                  key={spec.id}
                  className="flex flex-col justify-between rounded-xl p-3 sm:p-4 transition-colors border bg-[#080E18] border-slate-800 hover:border-[#F3C742]/60"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center">
                        {renderSpecialtyIcon(spec.iconName)}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                        {spec.number}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                        {spec.title}
                      </h3>
                      <p className="hidden sm:line-clamp-2 text-xs text-slate-300 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>

                    <div className="text-[10px] sm:text-[11px] font-mono text-[#F3C742] truncate">
                      {spec.norm}
                    </div>
                  </div>

                  <div className="mt-2.5 sm:mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between gap-1.5">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18]"
                    >
                      Orçar
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModalSpecialty(spec)}
                      className="text-[11px] sm:text-xs text-slate-400 hover:text-[#F3C742] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Detalhes →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PÁGINA 4: Seção de Portfólio (100% da Altura Útil e Alinhada em max-w-7xl) */}
        <section
          id="portfolio"
          className="page-section py-6 sm:py-10 bg-[#080E18]"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-7">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1.5 max-w-2xl">
                <div className="text-xs font-mono tracking-wider text-[#F3C742]">
                  PORTFÓLIO TÉCNICO
                </div>
                <h2 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
                  Projetos Executados em Campo Grande - MS
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Exemplos de instalações de portaria autônoma, quadros QGBT, energia solar e CFTV
                  IA.
                </p>
              </div>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-[#F3C742] hover:text-[#FF9900] transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
              >
                Solicitar orçamento para meu imóvel →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {PORTFOLIO_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/50 overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    <ProjectSchematicGraphic type={project.schematicType} />
                    <div className="p-3.5 sm:p-4 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                        <span className="text-[#F3C742]">{project.category}</span>
                        <span>·</span>
                        <span className="truncate">{project.location}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#F3C742] truncate">
                      {project.metrics}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-white hover:text-[#F3C742] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Ver Ficha →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PÁGINA 5: Seção de Contato Simplificada + Rodapé Integrado (100% da Altura Útil e Alinhada em max-w-7xl) */}
        <ContactQuoteSection onNavigate={scrollToSection} />
      </main>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a TOTU'S TECNOLOGIA"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#080E18] font-semibold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105 whitespace-nowrap shrink-0"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Modal: Ficha Técnica do Projeto */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-[#0F172A] border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectSchematicGraphic type={activeModalProject.schematicType} />
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-[#F3C742]">
                    {activeModalProject.category} · {activeModalProject.norm}
                  </div>
                  <h3 id="modal-project-title" className="text-lg font-semibold text-white mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-[#080E18] border border-slate-800 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400">ESPECIFICAÇÕES:</div>
                <ul className="space-y-1.5">
                  {activeModalProject.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-[#F3C742] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-xs font-mono text-[#F3C742]">
                  {activeModalProject.metrics}
                </span>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs transition-colors cursor-pointer"
                >
                  Solicitar Projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Detalhes da Especialidade */}
      {activeModalSpecialty && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-specialty-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalSpecialty(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-[#0F172A] border border-slate-700 p-5 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#080E18] border border-slate-800 flex items-center justify-center">
                  {renderSpecialtyIcon(activeModalSpecialty.iconName)}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#F3C742]">
                    {activeModalSpecialty.norm}
                  </div>
                  <h3 id="modal-specialty-title" className="text-base font-semibold text-white">
                    {activeModalSpecialty.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalSpecialty(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-[#080E18] border border-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeModalSpecialty.description}
            </p>

            <div className="space-y-1.5">
              <div className="text-xs font-mono text-slate-400">ESCOPO DE EXECUÇÃO:</div>
              <ul className="space-y-1.5">
                {activeModalSpecialty.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F3C742] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveModalSpecialty(null)}
                className="px-4 py-2 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs transition-colors cursor-pointer"
              >
                Orçar {activeModalSpecialty.shortTitle}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
