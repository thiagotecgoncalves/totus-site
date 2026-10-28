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
  COMPANY_INFO,
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
  const props = { className: 'w-5 h-5 text-[#F3C742]' };
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
  const [activeSegmentTab, setActiveSegmentTab] = useState<
    'todos' | 'residencial' | 'condominial' | 'comercial'
  >('todos');
  const [selectedSegmentForForm, setSelectedSegmentForForm] = useState<
    'Residencial' | 'Condomínio' | 'Comercial'
  >('Condomínio');
  const [selectedServicesForForm, setSelectedServicesForForm] = useState<string[]>([
    'Instalações Elétricas e Manutenção',
    "Portaria Autônoma (CondTotu's)",
  ]);
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const [activeModalSpecialty, setActiveModalSpecialty] = useState<SpecialtyItem | null>(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSegmentQuote = (
    formValue: 'Residencial' | 'Condomínio' | 'Comercial',
    recommended: string[]
  ) => {
    setSelectedSegmentForForm(formValue);
    setSelectedServicesForForm(recommended);
    scrollToSection('contato');
  };

  const handleToggleServiceInQuote = (serviceTitle: string) => {
    setSelectedServicesForForm((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((item) => item !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  const handleQuickQuoteSpecialty = (serviceTitle: string) => {
    setSelectedServicesForForm((prev) =>
      prev.includes(serviceTitle) ? prev : [...prev, serviceTitle]
    );
    scrollToSection('contato');
  };

  const filteredSegments =
    activeSegmentTab === 'todos'
      ? SEGMENTS
      : SEGMENTS.filter((seg) => seg.id === activeSegmentTab);

  return (
    <div className="min-h-screen bg-[#080E18] text-slate-100 flex flex-col selection:bg-[#F3C742] selection:text-[#080E18]">
      {/* 1. Header Fixo (Sticky) — Ajustado para Mobile */}
      <header className="sticky top-0 z-40 bg-[#080E18]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logotipo Oficial da TOTU'S TECNOLOGIA */}
          <a
            href="#topo"
            className="flex items-center gap-3 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <img
              src="/assets/aistudio/logo-totus-amarelo__1__f1fd2d6e.png"
              alt="TOTU'S TECNOLOGIA"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg transition-transform group-hover:scale-105"
            />
            <span className="font-display tracking-wider text-sm sm:text-base md:text-lg">
              TOTU&apos;S TECNOLOGIA
            </span>
          </a>

          {/* Menu de Páginas (sem metodologia e sobre) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300"
          >
            <a
              href="#solucoes"
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Soluções
            </a>
            <a
              href="#servicos"
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Portfólio
            </a>
            <a
              href="#contato"
              className="hover:text-[#F3C742] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Contato
            </a>
          </nav>

          {/* Botão de Ação Primário + Toggle Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('contato')}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Solicitar Orçamento
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden p-2.5 rounded-xl border border-slate-800 text-slate-200 hover:border-[#F3C742] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
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
                  className="text-left px-3.5 py-3 rounded-lg bg-[#080E18] border border-slate-800 text-sm font-medium text-slate-200 hover:border-[#F3C742] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('contato')}
              className="w-full py-3.5 rounded-xl bg-[#F3C742] text-[#080E18] font-semibold text-sm text-center cursor-pointer shadow-md"
            >
              Solicitar Orçamento Técnico
            </button>
          </div>
        )}
      </header>

      <main id="topo" className="flex-1">
        {/* 2. Hero Section (Dobra Principal Simplificada e Mobile-First) */}
        <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px]"
            style={{
              background:
                'radial-gradient(circle at 65% 30%, rgba(243, 199, 66, 0.12) 0%, rgba(255, 153, 0, 0.03) 50%, rgba(8, 14, 24, 0) 80%)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Coluna Esquerda: Mensagem Principal */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
                {/* Tag Superior */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest text-[#F3C742]">
                  <span>RESIDENCIAL</span>
                  <span aria-hidden="true">•</span>
                  <span>CONDOMINIAL</span>
                  <span aria-hidden="true">•</span>
                  <span>COMERCIAL</span>
                </div>

                {/* Título Principal Conforme Requisitado */}
                <h1
                  className="font-display font-semibold tracking-tight text-white leading-[1.14]"
                  style={{ fontSize: 'clamp(2rem, 3.8vw, 3.5rem)' }}
                >
                  Soluções em{' '}
                  <span className="text-[#F3C742]">Segurança Eletrônica</span>, Redes e Energia
                </h1>

                {/* Subtítulo Técnico */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Projetos, instalações normatizadas e manutenção especializada em elétrica, CFTV
                  com IA, energia solar, controle de acesso e automação predial com execução de
                  técnico eletrotécnico qualificado em Campo Grande - MS e região.
                </p>

                {/* Botão de Ação Único (Sem o botão WhatsApp no Hero) */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => scrollToSection('contato')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-sm sm:text-base transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-[0_0_24px_rgba(243,199,66,0.22)]"
                  >
                    <span>Solicitar Orçamento Técnico</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Coluna Direita: Ilustração Técnica com Lâmpada e Circuitos */}
              <div className="lg:col-span-5 flex">
                <HeroFilamentCircuitVisual onSelectDomain={handleQuickQuoteSpecialty} />
              </div>
            </div>

          </div>
        </section>

        {/* 3. Seção de Segmentos de Atuação (3 Segmentos Principais) */}
        <section id="solucoes" className="py-12 sm:py-16 lg:py-20 bg-[#080E18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono tracking-wider text-[#F3C742]">
                  SEGMENTOS DE ATUAÇÃO
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Soluções Sob Medida para Cada Necessidade
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Projetos e instalações desenvolvidos para o padrão de exigência do seu imóvel.
                </p>
              </div>

              {/* Filtro Rápido */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0F172A] rounded-xl border border-slate-800 self-start sm:self-auto">
                {[
                  { id: 'todos', label: 'Todos' },
                  { id: 'residencial', label: 'Residencial' },
                  { id: 'condominial', label: 'Condomínios' },
                  { id: 'comercial', label: 'Comercial' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveSegmentTab(
                        tab.id as 'todos' | 'residencial' | 'condominial' | 'comercial'
                      )
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      activeSegmentTab === tab.id
                        ? 'bg-[#F3C742] text-[#080E18] font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid dos Segmentos */}
            <div
              className={`grid grid-cols-1 ${
                filteredSegments.length === 1 ? 'lg:grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
              } gap-6`}
            >
              {filteredSegments.map((segment) => (
                <div
                  key={segment.id}
                  className="flex flex-col justify-between rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/50 transition-colors p-5 sm:p-6"
                >
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#F3C742]">{segment.normativeRef}</div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-white">{segment.title}</h3>
                      <p className="text-xs text-slate-400 font-medium">{segment.subtitle}</p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                        {segment.summary}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-2 border-t border-slate-800/80">
                      {segment.features.map((feat) => (
                        <li key={feat.title} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#F3C742] shrink-0 mt-0.5" />
                          <div className="text-xs">
                            <span className="font-semibold text-white">{feat.title}: </span>
                            <span className="text-slate-300">{feat.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/90 space-y-3">
                    <div>
                      <div className="text-base font-mono font-semibold text-[#F3C742]">
                        {segment.highlightMetric}
                      </div>
                      <div className="text-[11px] text-slate-400">{segment.highlightLabel}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleSelectSegmentQuote(segment.formValue, segment.recommendedServices)
                      }
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#080E18] hover:bg-[#F3C742] text-white hover:text-[#080E18] border border-slate-700 hover:border-[#F3C742] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>Orçar para {segment.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Grade de Especialidades Técnicas (8 Cards) */}
        <section
          id="servicos"
          className="py-12 sm:py-16 lg:py-20 bg-[#0B1220] border-y border-slate-800/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono tracking-wider text-[#F3C742]">
                  ESPECIALIDADES TÉCNICAS
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Serviços Especializados
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Selecione as especialidades desejadas para adicioná-las ao seu orçamento.
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400">
                <span>NO ORÇAMENTO: </span>
                <span className="text-[#F3C742] font-semibold tabular-nums">
                  {selectedServicesForForm.length} selecionada(s)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {SPECIALTIES.map((spec) => {
                const isSelected = selectedServicesForForm.includes(spec.title);
                return (
                  <div
                    key={spec.id}
                    className={`flex flex-col justify-between rounded-xl p-5 transition-colors border ${
                      isSelected
                        ? 'bg-[#0F172A] border-[#F3C742]'
                        : 'bg-[#080E18] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center">
                          {renderSpecialtyIcon(spec.iconName)}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">{spec.number}</span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-semibold text-white leading-snug">
                          {spec.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {spec.description}
                        </p>
                      </div>

                      <div className="text-[11px] font-mono text-[#F3C742]">{spec.norm}</div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleToggleServiceInQuote(spec.title)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-[#F3C742] text-[#080E18] font-semibold'
                            : 'bg-[#0F172A] text-slate-200 hover:text-[#F3C742] border border-slate-800'
                        }`}
                      >
                        {isSelected ? '✓ No Orçamento' : '+ Incluir'}
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveModalSpecialty(spec)}
                        className="text-xs text-slate-400 hover:text-[#F3C742] transition-colors cursor-pointer"
                      >
                        Detalhes →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Portfólio de Projetos Recentes */}
        <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-[#080E18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono tracking-wider text-[#F3C742]">
                  PORTFÓLIO TÉCNICO
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Projetos Executados em Campo Grande - MS
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Exemplos de instalações de portaria autônoma, quadros QGBT, energia solar e CFTV IA.
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection('contato')}
                className="text-xs sm:text-sm font-medium text-[#F3C742] hover:text-[#FF9900] transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
              >
                Solicitar orçamento para meu imóvel →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PORTFOLIO_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl bg-[#0F172A] border border-slate-800 hover:border-[#F3C742]/50 overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    <ProjectSchematicGraphic type={project.schematicType} />
                    <div className="p-4 sm:p-5 space-y-2">
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

                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
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

        {/* 7. Formulário de Contato e Conversão */}
        <ContactQuoteSection
          selectedSegment={selectedSegmentForForm}
          onChangeSegment={setSelectedSegmentForForm}
          selectedServices={selectedServicesForForm}
          onToggleService={handleToggleServiceInQuote}
        />
      </main>

      {/* 8. Footer Institucional Simplificado */}
      <footer className="bg-[#060A12] border-t border-slate-800/90 pt-10 pb-10 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Logo e Resumo Institucional */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-3 text-white font-bold">
                <img
                  src="/assets/aistudio/logo-totus-amarelo__1__f1fd2d6e.png"
                  alt="TOTU'S TECNOLOGIA"
                  className="w-10 h-10 object-contain rounded-lg"
                />
                <span className="font-display tracking-wider text-base sm:text-lg">
                  TOTU&apos;S TECNOLOGIA
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                Soluções em segurança eletrônica, redes e infraestrutura elétrica normatizada em
                Campo Grande - MS e região.
              </p>
              <div className="text-[11px] font-mono text-slate-500">
                NBR 5410 · NBR 16690 · NBR 17240 · NBR 14565 · NR-10
              </div>
            </div>

            {/* Links Rápidos (sem metodologia e sobre) */}
            <div className="lg:col-span-3 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Navegação
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#solucoes" className="hover:text-[#F3C742] transition-colors">
                    Soluções por Segmento
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-[#F3C742] transition-colors">
                    Especialidades Técnicas
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-[#F3C742] transition-colors">
                    Portfólio de Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#F3C742] transition-colors">
                    Solicitar Orçamento
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato Direto */}
            <div className="lg:col-span-3 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Atendimento
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <span className="text-slate-500">WhatsApp: </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#F3C742] font-mono transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">E-mail: </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-slate-200 hover:text-[#F3C742] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">Instagram: </span>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#F3C742] transition-colors"
                  >
                    {COMPANY_INFO.instagramHandle}
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">Local: </span>
                  <span className="text-slate-300">{COMPANY_INFO.location}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} TOTU&apos;S TECNOLOGIA. Todos os direitos reservados.
            </div>
            <div>Campo Grande - MS</div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={getWhatsAppUrl()}
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
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalProject(null);
                    scrollToSection('contato');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs transition-colors cursor-pointer"
                >
                  Solicitar Projeto
                </button>
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
              <button
                type="button"
                onClick={() => {
                  const title = activeModalSpecialty.title;
                  setActiveModalSpecialty(null);
                  handleQuickQuoteSpecialty(title);
                }}
                className="px-4 py-2 rounded-xl bg-[#F3C742] hover:bg-[#FF9900] text-[#080E18] font-semibold text-xs transition-colors cursor-pointer"
              >
                Orçar {activeModalSpecialty.shortTitle}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
