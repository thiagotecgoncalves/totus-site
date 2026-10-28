import React, { useState } from 'react';
import { COVERAGE_AREAS } from '../data/totusData';

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
        <span className="font-display font-bold tracking-wider text-white text-base sm:text-lg whitespace-nowrap">
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
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] flex flex-col justify-between rounded-2xl bg-[#0B1220] border border-slate-800/90 p-4 sm:p-7 overflow-hidden">
      {/* Subtle Ambient Radial Glow matching the reference image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 55% 48%, rgba(255, 153, 0, 0.22) 0%, rgba(243, 199, 66, 0.08) 38%, rgba(8, 14, 24, 0) 72%)',
        }}
      />

      {/* Top Technical Header inside Visual Frame */}
      <div className="relative z-10 flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="text-xs font-mono text-slate-400">
          <span>SISTEMA TÉCNICO INTEGRADO</span>
          <span className="mx-2 text-slate-600">·</span>
          <span className="text-[#F3C742]">{current.code}</span>
        </div>
        <span className="text-xs font-mono text-slate-400 tabular-nums">{current.metric}</span>
      </div>

      {/* Central Glowing Filament Bulb + Technical Circuitry SVG (Inspired by reference image) */}
      <div className="relative z-10 my-auto flex items-center justify-center py-4">
        <svg
          viewBox="0 0 420 340"
          className="w-full max-w-[390px] h-auto select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Ilustração técnica de energia, segurança e automação inteligente"
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
          </defs>

          {/* Ambient Backlight Circle */}
          <circle cx="210" cy="195" r="145" fill="url(#amberCoreGlow)" />

          {/* Left & Right Technical Circuit Traces */}
          <path
            d="M25 130 H105 L135 160"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <path
            d="M25 130 H105 L135 160"
            stroke="#F3C742"
            strokeWidth="1.5"
            className="circuit-trace"
          />
          <circle cx="25" cy="130" r="4" fill="#F3C742" />

          <path
            d="M395 130 H315 L285 160"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <path
            d="M395 130 H315 L285 160"
            stroke="#FF9900"
            strokeWidth="1.5"
            className="circuit-trace"
          />
          <circle cx="395" cy="130" r="4" fill="#FF9900" />

          <path
            d="M40 245 H115 L142 220"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <path
            d="M40 245 H115 L142 220"
            stroke="#F3C742"
            strokeWidth="1.5"
            className="circuit-trace"
          />
          <circle cx="40" cy="245" r="4" fill="#F3C742" />

          <path
            d="M380 245 H305 L278 220"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <path
            d="M380 245 H305 L278 220"
            stroke="#FF9900"
            strokeWidth="1.5"
            className="circuit-trace"
          />
          <circle cx="380" cy="245" r="4" fill="#FF9900" />

          {/* Top Power Cord descending into Socket */}
          <line x1="210" y1="0" x2="210" y2="38" stroke="#FF9900" strokeWidth="5" />
          <line x1="210" y1="0" x2="210" y2="38" stroke="#F3C742" strokeWidth="1.5" />

          {/* Matte Industrial Bulb Socket */}
          <rect
            x="184"
            y="34"
            width="52"
            height="16"
            rx="4"
            fill="url(#socketMetal)"
            stroke="#475569"
            strokeWidth="1.2"
          />
          <rect
            x="176"
            y="48"
            width="68"
            height="54"
            rx="6"
            fill="url(#socketMetal)"
            stroke="#475569"
            strokeWidth="1.5"
          />
          <line x1="176" y1="66" x2="244" y2="66" stroke="#1E293B" strokeWidth="2" />
          <line x1="176" y1="84" x2="244" y2="84" stroke="#1E293B" strokeWidth="2" />

          {/* Glowing Amber Bulb Contour (Inspired by Voltex reference image) */}
          <g className="filament-glow">
            <path
              d="M182 102 C182 132, 138 164, 138 214 C138 258, 169 292, 210 292 C251 292, 282 258, 282 214 C282 164, 238 132, 238 102 Z"
              stroke="url(#bulbOutline)"
              strokeWidth="4.5"
              fill="rgba(255, 153, 0, 0.05)"
            />
            {/* Inner precision filament & smart shield geometry */}
            <path
              d="M196 102 V168 L178 198 L210 182 L242 198 L224 168 V102"
              stroke="#F3C742"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="210"
              cy="224"
              r="26"
              stroke="#FF9900"
              strokeWidth="1.75"
              strokeDasharray="4 4"
            />
            <path
              d="M210 207 L198 225 H211 L208 241 L222 221 H209 L210 207 Z"
              fill="#F3C742"
            />
          </g>

          {/* Technical Callout Labels around the Core */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#94A3B8">
            <text x="24" y="118">QGBT · NBR 5410</text>
            <text x="302" y="118">SOLAR · FOTOVOLTAICO</text>
            <text x="24" y="264">CFTV IA · COLORVU</text>
            <text x="294" y="264">PORTARIA CONDTOTU'S</text>
          </g>
        </svg>
      </div>

      {/* Bottom Interactive Mode Switcher + Direct Action */}
      <div className="relative z-10 space-y-3 pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-slate-300">{current.label}</span>
          {onSelectDomain && (
            <button
              type="button"
              onClick={() => onSelectDomain(current.service)}
              className="text-xs font-medium text-[#F3C742] hover:text-[#FF9900] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Cotar esta área →
            </button>
          )}
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
    <div className="relative w-full h-48 bg-[#080E18] overflow-hidden flex items-center justify-center border-b border-slate-800/80">
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
