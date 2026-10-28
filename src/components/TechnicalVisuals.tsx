import React, { useState } from 'react';
import { COVERAGE_AREAS, getWhatsAppUrl } from '../data/totusData';

export function TotusBrandMark({
  className = 'w-10 h-10',
  showWordmark = false,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img
        src="/assets/aistudio/logo-totus-amarelo__1__f1fd2d6e.png"
        alt="TOTU'S TECNOLOGIA"
        className={`${className} object-contain rounded-lg`}
        loading="eager"
      />
      {showWordmark && (
        <span className="font-brand font-bold tracking-wider text-white text-base sm:text-lg whitespace-nowrap">
          TOTU&apos;S TECNOLOGIA
        </span>
      )}
    </div>
  );
}

export function HeroFilamentCircuitVisual({
  onSelectDomain,
}: {
  onSelectDomain?: (serviceTitle: string) => void;
}) {
  const [activeMode, setActiveMode] = useState<'energia' | 'seguranca' | 'condtotus'>('energia');

  const modeDetails = {
    energia: {
      label: 'ENGENHARIA ELÉTRICA & SOLAR',
      code: 'NBR 5410 · NBR 16690',
      metric: '380V / 220V Estabilizado',
      service: 'Instalações Elétricas e Manutenção',
    },
    seguranca: {
      label: 'CFTV IA & PERÍMETRO ATIVO',
      code: 'COLORVU 4K · ANALÍTICO IA',
      metric: 'Detecção Humana 99.4%',
      service: 'CFTV com Inteligência Artificial',
    },
    condtotus: {
      label: "PORTARIA AUTÔNOMA CONDTOTU'S",
      code: 'FACIAL · LPR VEICULAR · QR',
      metric: 'Acesso < 0.4s Liberado',
      service: "Portaria Autônoma (CondTotu's)",
    },
  };

  const current = modeDetails[activeMode];

  return (
    <div className="relative w-full h-full min-h-[240px] sm:min-h-[340px] lg:min-h-[400px] flex flex-col justify-between rounded-2xl bg-[#0B1220] border border-slate-800/90 p-3.5 sm:p-5 overflow-hidden">
      {/* Subtle Ambient Radial Glow matching the reference image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 55% 48%, rgba(255, 153, 0, 0.22) 0%, rgba(243, 199, 66, 0.08) 38%, rgba(8, 14, 24, 0) 72%)',
        }}
      />

      {/* Top Technical Header inside Visual Frame */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2 text-[11px] font-mono">
        <span className="text-[#F3C742] truncate">{current.code}</span>
        <span className="text-slate-400 tabular-nums shrink-0">{current.metric}</span>
      </div>

      {/* Central Interactive Technical Graphic SVG (Switches by activeMode) */}
      <div className="relative z-10 my-auto flex items-center justify-center py-1">
        <svg
          viewBox="0 0 420 310"
          className="w-full max-w-[260px] sm:max-w-[330px] lg:max-w-[360px] h-auto select-none transition-all duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={
            activeMode === 'energia'
              ? 'Ilustração de engenharia elétrica e energia solar'
              : activeMode === 'seguranca'
                ? 'Ilustração de câmera CFTV com Inteligência Artificial'
                : 'Ilustração de cancela automatizada e veículo na portaria CondTotus'
          }
        >
          <defs>
            <radialGradient id="amberCoreGlow" cx="50%" cy="56%" r="48%">
              <stop offset="0%" stopColor="#FF9900" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#F3C742" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#080E18" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="bulbOutline" x1="140" y1="70" x2="280" y2="290" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F3C742" />
              <stop offset="50%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#F3C742" />
            </linearGradient>
            <linearGradient id="socketMetal" x1="175" y1="20" x2="245" y2="105" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="cameraBeamGrad" x1="200" y1="160" x2="380" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F3C742" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#FF9900" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF9900" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="lprBeamGrad" x1="250" y1="70" x2="165" y2="225" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F3C742" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF9900" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Ambient Backlight Circle */}
          <circle cx="210" cy="175" r="145" fill="url(#amberCoreGlow)" />

          {/* Circuit Traces — Left and Right */}
          <path d="M25 130 H95 L125 160" stroke="#334155" strokeWidth="1.5" />
          <path d="M25 130 H95 L125 160" stroke="#F3C742" strokeWidth="1.5" className="circuit-trace" />
          <circle cx="25" cy="130" r="4" fill="#F3C742" />

          <path d="M395 130 H325 L295 160" stroke="#334155" strokeWidth="1.5" />
          <path d="M395 130 H325 L295 160" stroke="#FF9900" strokeWidth="1.5" className="circuit-trace" />
          <circle cx="395" cy="130" r="4" fill="#FF9900" />

          <path d="M35 245 H105 L132 220" stroke="#334155" strokeWidth="1.5" />
          <path d="M35 245 H105 L132 220" stroke="#F3C742" strokeWidth="1.5" className="circuit-trace" />
          <circle cx="35" cy="245" r="4" fill="#F3C742" />

          <path d="M385 245 H315 L288 220" stroke="#334155" strokeWidth="1.5" />
          <path d="M385 245 H315 L288 220" stroke="#FF9900" strokeWidth="1.5" className="circuit-trace" />
          <circle cx="385" cy="245" r="4" fill="#FF9900" />

          {/* 1. MODO ENERGIA: Lâmpada e Filamento Tecnológico */}
          {activeMode === 'energia' && (
            <g>
              {/* Power Cord into Socket */}
              <line x1="210" y1="0" x2="210" y2="38" stroke="#FF9900" strokeWidth="5" />
              <line x1="210" y1="0" x2="210" y2="38" stroke="#F3C742" strokeWidth="1.5" />

              {/* Socket Industrial Metal */}
              <rect x="184" y="34" width="52" height="16" rx="4" fill="url(#socketMetal)" stroke="#475569" strokeWidth="1.2" />
              <rect x="176" y="48" width="68" height="54" rx="6" fill="url(#socketMetal)" stroke="#475569" strokeWidth="1.5" />
              <line x1="176" y1="66" x2="244" y2="66" stroke="#1E293B" strokeWidth="2" />
              <line x1="176" y1="84" x2="244" y2="84" stroke="#1E293B" strokeWidth="2" />

              {/* Glowing Amber Bulb Contour */}
              <g className="filament-glow">
                <path
                  d="M182 102 C182 132, 138 164, 138 214 C138 258, 169 292, 210 292 C251 292, 282 258, 282 214 C282 164, 238 132, 238 102 Z"
                  stroke="url(#bulbOutline)"
                  strokeWidth="4.5"
                  fill="rgba(255, 153, 0, 0.05)"
                />
                {/* Precision Filament Core */}
                <path
                  d="M196 102 V168 L178 198 L210 182 L242 198 L224 168 V102"
                  stroke="#F3C742"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="210" cy="224" r="26" stroke="#FF9900" strokeWidth="1.75" strokeDasharray="4 4" />
                <path d="M210 207 L198 225 H211 L208 241 L222 221 H209 L210 207 Z" fill="#F3C742" />
              </g>

              {/* Technical Labels */}
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#94A3B8">
                <text x="24" y="118">QGBT · NBR 5410</text>
                <text x="396" y="118" textAnchor="end">SOLAR · FOTOVOLTAICO</text>
                <text x="24" y="264">CORRENTE ESTABILIZADA</text>
                <text x="396" y="264" textAnchor="end">PROTEÇÃO DPS CLASSE II</text>
              </g>
            </g>
          )}

          {/* 2. MODO SEGURANÇA: Câmera CFTV com IA ColorVu & Feixe Analítico */}
          {activeMode === 'seguranca' && (
            <g>
              {/* Camera Wall Mount & Articulated Arm */}
              <path d="M50 85 H92 V128 H120" stroke="#475569" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="92" cy="128" r="8" fill="#1E293B" stroke="#F3C742" strokeWidth="2" />
              <rect x="42" y="70" width="16" height="34" rx="3" fill="url(#socketMetal)" stroke="#334155" strokeWidth="1.5" />

              {/* PoE Network Cable Conduit */}
              <line x1="50" y1="85" x2="120" y2="128" stroke="#F3C742" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Camera Main Body & Hood (Bullet 4K ColorVu) */}
              <g className="filament-glow">
                {/* Sunshield / Visor Hood */}
                <path
                  d="M110 102 H235 L248 124 H116 Z"
                  fill="#1E293B"
                  stroke="#F3C742"
                  strokeWidth="2"
                />
                {/* Camera Housing Body */}
                <rect
                  x="116"
                  y="120"
                  width="112"
                  height="72"
                  rx="10"
                  fill="url(#socketMetal)"
                  stroke="#475569"
                  strokeWidth="2"
                />
                {/* Camera Lens Bezel */}
                <ellipse cx="228" cy="156" rx="14" ry="34" fill="#0F172A" stroke="url(#bulbOutline)" strokeWidth="3.5" />
                <ellipse cx="228" cy="156" rx="8" ry="22" fill="#080E18" stroke="#FF9900" strokeWidth="2" />
                {/* Central Optical Sensor Aperture */}
                <circle cx="228" cy="156" r="6" fill="#F3C742" />
                {/* ColorVu Auxiliary Lighting Diode */}
                <circle cx="224" cy="132" r="3" fill="#FF9900" />
                <circle cx="224" cy="180" r="3" fill="#FF9900" />
              </g>

              {/* Analytical AI Scanning Cone (Feixe de Detecção IA) */}
              <polygon
                points="232,156 390,88 390,224"
                fill="url(#cameraBeamGrad)"
              />
              <line x1="232" y1="156" x2="390" y2="88" stroke="#F3C742" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="232" y1="156" x2="390" y2="224" stroke="#F3C742" strokeWidth="1.5" strokeDasharray="5 5" />

              {/* AI Recognition Target Bounding Box (Detecção Humana/Veicular) */}
              <g>
                <rect
                  x="305"
                  y="114"
                  width="78"
                  height="84"
                  rx="6"
                  stroke="#F3C742"
                  strokeWidth="1.75"
                  fill="rgba(243, 199, 66, 0.08)"
                />
                {/* Corner Target Brackets */}
                <path d="M305 128 V114 H319" stroke="#FF9900" strokeWidth="2.5" />
                <path d="M369 114 H383 V128" stroke="#FF9900" strokeWidth="2.5" />
                <path d="M305 184 V198 H319" stroke="#FF9900" strokeWidth="2.5" />
                <path d="M369 198 H383 V184" stroke="#FF9900" strokeWidth="2.5" />

                {/* Target Crosshairs */}
                <circle cx="344" cy="156" r="14" stroke="#F3C742" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="344" y1="136" x2="344" y2="176" stroke="#F3C742" strokeWidth="1" />
                <line x1="324" y1="156" x2="364" y2="156" stroke="#F3C742" strokeWidth="1" />
              </g>

              {/* Technical Labels */}
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#94A3B8">
                <text x="24" y="118">CFTV IP 4K · COLORVU</text>
                <text x="396" y="104" textAnchor="end" fill="#F3C742">IA HUMANO / VEÍCULO</text>
                <text x="24" y="264">CERCA VIRTUAL ATIVA</text>
                <text x="396" y="264" textAnchor="end">DETECÇÃO 24H COLORIDA</text>
              </g>
            </g>
          )}

          {/* 3. MODO CONDTOTU'S: Cancela Automatizada e Carro com Leitura de Placa (LPR) */}
          {activeMode === 'condtotus' && (
            <g>
              {/* Asfalto / Guia do Portão de Acesso */}
              <line x1="20" y1="230" x2="400" y2="230" stroke="#334155" strokeWidth="3" />
              <line x1="30" y1="234" x2="390" y2="234" stroke="#1E293B" strokeWidth="2" strokeDasharray="16 10" />

              {/* Carro em Aproximação (Silhueta Moderna com Faróis e Placa LPR) */}
              <g>
                {/* Chassi do Veículo */}
                <path
                  d="M32 216 L48 190 L85 184 L118 152 L172 152 L198 184 L232 190 L242 216 Z"
                  fill="#0F172A"
                  stroke="#475569"
                  strokeWidth="2"
                />
                {/* Linha de Teto & Vidros em Âmbar */}
                <path
                  d="M92 184 L122 158 H168 L190 184 Z"
                  fill="rgba(243, 199, 66, 0.12)"
                  stroke="#F3C742"
                  strokeWidth="1.5"
                />
                {/* Rodas com Detalhe Metálico */}
                <circle cx="78" cy="216" r="14" fill="#080E18" stroke="#F3C742" strokeWidth="2" />
                <circle cx="78" cy="216" r="6" fill="#1E293B" />
                <circle cx="196" cy="216" r="14" fill="#080E18" stroke="#F3C742" strokeWidth="2" />
                <circle cx="196" cy="216" r="6" fill="#1E293B" />

                {/* Farol Dianteiro com Feixe */}
                <polygon points="234,196 280,188 280,214 234,204" fill="rgba(243, 199, 66, 0.18)" />
                <path d="M228 196 H238 L235 204 H226 Z" fill="#F3C742" />

                {/* Placa Dianteira Destacada com Foco LPR */}
                <rect x="226" y="208" width="18" height="9" rx="1.5" fill="#080E18" stroke="#F3C742" strokeWidth="1.5" />
                <line x1="229" y1="212" x2="241" y2="212" stroke="#FF9900" strokeWidth="1.5" />

                {/* Alvo Bounding Box do LPR na Placa */}
                <rect x="218" y="202" width="34" height="20" rx="3" stroke="#FF9900" strokeWidth="1.5" strokeDasharray="3 3" />
              </g>

              {/* Totem da Cancela (Barreira Automatizada CondTotu's) */}
              <g className="filament-glow">
                {/* Pedestal Vertical */}
                <rect x="278" y="132" width="36" height="98" rx="6" fill="url(#socketMetal)" stroke="#F3C742" strokeWidth="2" />
                {/* Eixo de Articulação */}
                <circle cx="296" cy="150" r="12" fill="#080E18" stroke="#FF9900" strokeWidth="2" />
                <circle cx="296" cy="150" r="5" fill="#F3C742" />
                {/* Sinalizador LED no Topo do Totem */}
                <rect x="290" y="118" width="12" height="14" rx="3" fill="#FF9900" stroke="#F3C742" strokeWidth="1.2" />
              </g>

              {/* Cancela (Haste da Barreira) — Em Movimento de Abertura Elevada */}
              <g transform="rotate(-32 296 150)">
                {/* Haste Principal */}
                <rect x="296" y="145" width="138" height="10" rx="2" fill="#F3C742" stroke="#FF9900" strokeWidth="1.5" />
                {/* Faixas Reflexivas da Cancela */}
                <line x1="322" y1="145" x2="330" y2="155" stroke="#080E18" strokeWidth="4" />
                <line x1="348" y1="145" x2="356" y2="155" stroke="#080E18" strokeWidth="4" />
                <line x1="374" y1="145" x2="382" y2="155" stroke="#080E18" strokeWidth="4" />
                <line x1="400" y1="145" x2="408" y2="155" stroke="#080E18" strokeWidth="4" />
              </g>

              {/* Câmera LPR no Topo Escaneando a Placa do Carro */}
              <g>
                <rect x="264" y="68" width="28" height="16" rx="4" fill="#1E293B" stroke="#F3C742" strokeWidth="1.5" />
                <line x1="278" y1="84" x2="278" y2="132" stroke="#475569" strokeWidth="3" />
                {/* Feixe Laser LPR descendo até a placa */}
                <polygon points="266,80 218,206 254,206" fill="url(#lprBeamGrad)" />
                <line x1="278" y1="80" x2="236" y2="212" stroke="#F3C742" strokeWidth="1.5" strokeDasharray="4 3" />
              </g>

              {/* Ícone de Liberação e Checkmark */}
              <circle cx="348" cy="88" r="14" fill="#080E18" stroke="#F3C742" strokeWidth="2" />
              <path d="M342 88 L346 92 L354 84" stroke="#F3C742" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="328" y="112" fill="#F3C742" fontFamily="JetBrains Mono, monospace" fontSize="9">
                ACESSO LIBERADO
              </text>

              {/* Technical Labels */}
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#94A3B8">
                <text x="24" y="118">LEITURA LPR VEICULAR</text>
                <text x="396" y="56" textAnchor="end" fill="#F3C742">PORTARIA CONDTOTU'S</text>
                <text x="24" y="264">LIBERAÇÃO &lt; 0.4s</text>
                <text x="396" y="264" textAnchor="end">AUTOMAÇÃO DE CANCELA</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Interactive Mode Switcher + Direct Action */}
      <div className="relative z-10 space-y-3 pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-slate-300">{current.label}</span>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#F3C742] hover:text-[#FF9900] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Cotar esta área →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#080E18] rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveMode('energia')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeMode === 'energia'
                ? 'bg-[#F3C742] text-[#080E18] font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Elétrica & Solar
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('seguranca')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeMode === 'seguranca'
                ? 'bg-[#F3C742] text-[#080E18] font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            CFTV IA & Alarme
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('condtotus')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeMode === 'condtotus'
                ? 'bg-[#F3C742] text-[#080E18] font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            CondTotu's
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProjectSchematicGraphic({
  type,
}: {
  type: 'qgbt' | 'condtotus' | 'solar' | 'smart-home';
}) {
  return (
    <div className="relative w-full h-32 sm:h-40 lg:h-44 bg-[#080E18] overflow-hidden flex items-center justify-center border-b border-slate-800/80">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(243, 199, 66, 0.14) 0%, rgba(8, 14, 24, 0) 70%)',
        }}
      />
      {type === 'condtotus' && (
        <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
          {/* Eclusa & Portaria Autônoma Schematic */}
          <rect x="34" y="28" width="95" height="124" rx="6" stroke="#334155" strokeWidth="1.5" fill="#0F172A" />
          <rect x="46" y="42" width="71" height="62" rx="4" stroke="#F3C742" strokeWidth="1.5" />
          {/* Facial Scan Reticle */}
          <circle cx="81.5" cy="73" r="16" stroke="#FF9900" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="81.5" cy="69" r="5" stroke="#F3C742" strokeWidth="1.5" />
          <path d="M71 84C73.5 79 89.5 79 92 84" stroke="#F3C742" strokeWidth="1.5" strokeLinecap="round" />
          {/* LPR Vehicle Gate */}
          <rect x="158" y="54" width="128" height="98" rx="6" stroke="#334155" strokeWidth="1.5" fill="#0F172A" />
          <line x1="168" y1="95" x2="276" y2="95" stroke="#F3C742" strokeWidth="3" strokeLinecap="round" />
          <rect x="192" y="114" width="60" height="20" rx="3" stroke="#FF9900" strokeWidth="1.5" />
          <text x="201" y="128" fill="#F3C742" fontFamily="JetBrains Mono, monospace" fontSize="10">
            MS·2026
          </text>
          <text x="46" y="138" fill="#94A3B8" fontFamily="JetBrains Mono, monospace" fontSize="9">
            FACIAL + QR CODE
          </text>
        </svg>
      )}

      {type === 'qgbt' && (
        <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
          {/* DIN Rail & Breakers Schematic */}
          <rect x="44" y="22" width="232" height="136" rx="6" stroke="#475569" strokeWidth="1.5" fill="#0F172A" />
          {/* Copper Busbars */}
          <line x1="64" y1="44" x2="256" y2="44" stroke="#FF9900" strokeWidth="3" />
          <line x1="64" y1="54" x2="256" y2="54" stroke="#F3C742" strokeWidth="3" />
          {/* Breakers Row */}
          {[68, 98, 128, 158, 188, 218].map((x, idx) => (
            <g key={x}>
              <rect
                x={x}
                y="68"
                width="22"
                height="48"
                rx="2"
                fill="#080E18"
                stroke={idx < 2 ? '#F3C742' : '#475569'}
                strokeWidth="1.5"
              />
              <rect x={x + 5} y="86" width="12" height="8" rx="1" fill="#F3C742" />
              <line x1={x + 11} y1="54" x2={x + 11} y2="68" stroke="#F3C742" strokeWidth="1.5" />
            </g>
          ))}
          <text x="64" y="140" fill="#F3C742" fontFamily="JetBrains Mono, monospace" fontSize="10">
            QGBT · DR + DPS CLASSE II · NBR 5410
          </text>
        </svg>
      )}

      {type === 'solar' && (
        <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
          {/* Solar Array + Inverter Telemetry */}
          <polygon
            points="48,125 90,48 215,48 185,125"
            fill="#0F172A"
            stroke="#F3C742"
            strokeWidth="1.75"
          />
          <line x1="69" y1="86" x2="200" y2="86" stroke="#334155" strokeWidth="1.2" />
          <line x1="125" y1="48" x2="100" y2="125" stroke="#334155" strokeWidth="1.2" />
          <line x1="168" y1="48" x2="143" y2="125" stroke="#334155" strokeWidth="1.2" />
          {/* Sun / Amber Energy Node */}
          <circle cx="56" cy="40" r="12" fill="rgba(243, 199, 66, 0.2)" stroke="#F3C742" strokeWidth="1.75" />
          {/* Inverter Box */}
          <rect x="226" y="56" width="54" height="72" rx="6" fill="#0F172A" stroke="#FF9900" strokeWidth="1.75" />
          <path d="M244 88 H262 M253 79 V97" stroke="#F3C742" strokeWidth="1.5" />
          <path d="M196 104 H226" stroke="#F3C742" strokeWidth="2" strokeDasharray="4 4" />
          <text x="48" y="150" fill="#94A3B8" fontFamily="JetBrains Mono, monospace" fontSize="10">
            USINA FOTOVOLTAICA HOMOLOGADA · NBR 16690
          </text>
        </svg>
      )}

      {type === 'smart-home' && (
        <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
          {/* Smart Residence Architectural Outline */}
          <path
            d="M48 136 V78 L118 38 L188 78 V136 H48 Z"
            fill="#0F172A"
            stroke="#F3C742"
            strokeWidth="1.75"
          />
          <rect x="172" y="88" width="98" height="48" rx="3" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
          {/* Wi-Fi 6 & IA Camera Cone */}
          <path
            d="M188 78 L278 52 V102 L188 78 Z"
            fill="rgba(243, 199, 66, 0.14)"
            stroke="#FF9900"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <circle cx="118" cy="96" r="18" stroke="#F3C742" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="118" cy="96" r="5" fill="#F3C742" />
          <text x="48" y="156" fill="#94A3B8" fontFamily="JetBrains Mono, monospace" fontSize="10">
            AUTOMAÇÃO DE CENAS · WI-FI 6 · CFTV COLORVU
          </text>
        </svg>
      )}
    </div>
  );
}

export function CampoGrandeCoverageMap({
  selectedAreaIndex,
  onSelectArea,
}: {
  selectedAreaIndex: number;
  onSelectArea: (idx: number) => void;
}) {
  return (
    <div className="relative w-full rounded-2xl bg-[#0B1220] border border-slate-800 p-6 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 52% 50%, rgba(255, 153, 0, 0.16) 0%, rgba(8, 14, 24, 0) 70%)',
        }}
      />
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
        <span>MALHA DE ATENDIMENTO · CAMPO GRANDE - MS</span>
        <span className="text-[#F3C742]">RAIO REGIONAL ATIVO</span>
      </div>

      <svg
        viewBox="0 0 400 280"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized MS / Campo Grande Perimeter Polygon */}
        <path
          d="M85 45 L210 24 L325 65 L350 155 L295 242 L165 258 L75 205 L52 118 Z"
          fill="#080E18"
          stroke="#1E293B"
          strokeWidth="2"
        />
        {/* Ring Roads & Radial Arteries */}
        <circle cx="205" cy="140" r="78" stroke="#1E293B" strokeWidth="1.2" strokeDasharray="4 4" />
        <circle cx="205" cy="140" r="42" stroke="#334155" strokeWidth="1" />
        <line x1="85" y1="140" x2="335" y2="140" stroke="#1E293B" strokeWidth="1" />
        <line x1="205" y1="35" x2="205" y2="245" stroke="#1E293B" strokeWidth="1" />

        {/* Connection Traces between Nodes */}
        <path
          d="M192 134 L256 117 L304 151 L232 190 L112 173 L140 95 Z"
          stroke="rgba(243, 199, 66, 0.3)"
          strokeWidth="1.2"
        />

        {/* Interactive Glowing Coverage Nodes */}
        {COVERAGE_AREAS.map((area, idx) => {
          const cx = (area.coords.x / 100) * 400;
          const cy = (area.coords.y / 100) * 280;
          const isSelected = selectedAreaIndex === idx;
          return (
            <g
              key={area.name}
              onClick={() => onSelectArea(idx)}
              className="cursor-pointer"
            >
              <circle
                cx={cx}
                cy={cy}
                r={isSelected ? 18 : 11}
                fill={isSelected ? 'rgba(243, 199, 66, 0.25)' : 'rgba(255, 153, 0, 0.12)'}
              />
              <circle
                cx={cx}
                cy={cy}
                r={isSelected ? 6.5 : 4.5}
                fill={isSelected ? '#F3C742' : '#FF9900'}
                stroke="#080E18"
                strokeWidth="1.5"
              />
            </g>
          );
        })}
      </svg>

      <div className="relative z-10 mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-4 text-xs">
        <span className="text-slate-200 font-medium truncate">
          {COVERAGE_AREAS[selectedAreaIndex]?.name}
        </span>
        <span className="font-mono text-[#F3C742] shrink-0">
          {COVERAGE_AREAS[selectedAreaIndex]?.status}
        </span>
      </div>
    </div>
  );
}
