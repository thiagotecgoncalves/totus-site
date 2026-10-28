export interface SegmentItem {
  id: 'residencial' | 'condominial' | 'comercial';
  formValue: 'Residencial' | 'Condomínio' | 'Comercial';
  title: string;
  subtitle: string;
  normativeRef: string;
  summary: string;
  features: {
    title: string;
    detail: string;
  }[];
  highlightMetric: string;
  highlightLabel: string;
  recommendedServices: string[];
}

export interface SpecialtyItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  norm: string;
  deliverables: string[];
  iconName:
    | 'zap'
    | 'sun'
    | 'camera'
    | 'scan-face'
    | 'shield-check'
    | 'flame'
    | 'gauge'
    | 'wifi';
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  location: string;
  norm: string;
  metrics: string;
  description: string;
  specs: string[];
  schematicType: 'qgbt' | 'condtotus' | 'solar' | 'smart-home';
}

export const WHATSAPP_DIRECT_URL = 'https://api.whatsapp.com/send?phone=5567996294838';

export const COMPANY_INFO = {
  name: "TOTU'S TECNOLOGIA",
  role: 'Técnico Eletrotécnico Especializado',
  phoneDisplay: '(67) 99629-4838',
  whatsappNumber: '5567996294838',
  whatsappDirectUrl: WHATSAPP_DIRECT_URL,
  email: 'totusengenhariatec@gmail.com',
  instagramHandle: '@totusengtecnologia',
  instagramUrl: 'https://instagram.com/totusengtecnologia',
  location: 'Campo Grande - MS e região',
  defaultWhatsappMessage:
    "Olá! Gostaria de solicitar um orçamento técnico com a TOTU'S TECNOLOGIA.",
  emergencyWhatsappMessage:
    "Olá! Preciso de suporte técnico imediato (elétrica/segurança) em meu condomínio/empresa com a TOTU'S TECNOLOGIA.",
};

export function getWhatsAppUrl(_customMessage?: string): string {
  return WHATSAPP_DIRECT_URL;
}

export const HERO_AUTHORITY_ITEMS = [
  {
    title: 'Execução Normatizada (NBR 5410)',
    subtitle: 'Segurança elétrica certificada',
  },
  {
    title: 'Projetos Homologados',
    subtitle: 'Engenharia e laudos técnicos',
  },
  {
    title: 'Atendimento Técnico Direto',
    subtitle: 'Liderado por eletrotécnico',
  },
  {
    title: 'Garantia e Pós-Obra',
    subtitle: 'Comissionamento e suporte real',
  },
];

export const SEGMENTS: SegmentItem[] = [
  {
    id: 'residencial',
    formValue: 'Residencial',
    title: 'Casas Inteligentes',
    subtitle: 'Automação, Conforto, Rede de Alta Cobertura e Proteção Residencial',
    normativeRef: 'NBR 5410 · Wi-Fi 6 · IA ColorVu',
    summary:
      'Integração completa de segurança perimetral, iluminação inteligente por cenas, conectividade ininterrupta e proteção elétrica de alto padrão para residências.',
    features: [
      {
        title: 'Câmeras com Visão Noturna Colorida e IA',
        detail: 'Detecção inteligente de humanos e veículos 24h com alerta em tempo real no celular.',
      },
      {
        title: 'Vídeo Porteiro Conectado e Fechaduras Smart',
        detail: 'Atendimento remoto por aplicativo e abertura biométrica ou por senha temporária.',
      },
      {
        title: 'Automação de Iluminação e Cenas',
        detail: 'Interruptores inteligentes, dimerização e rotinas automáticas integradas.',
      },
      {
        title: 'Wi-Fi 6 Mesh Corporativo de Alta Cobertura',
        detail: 'Roaming contínuo sem pontos cegos em áreas gourmet, lazer e segundo pavimento.',
      },
      {
        title: 'Segurança Perimetral Ativa',
        detail: 'Sensores de barreira infravermelho, cerca elétrica industrial e concertina normatizada.',
      },
    ],
    highlightMetric: '100% Integrado',
    highlightLabel: 'Controle unificado de iluminação, câmeras e acesso no smartphone',
    recommendedServices: [
      'Casa Inteligente e Redes Corporativas',
      'CFTV com Inteligência Artificial',
      'Instalações Elétricas e Manutenção',
      'Energia Solar Fotovoltaica',
    ],
  },
  {
    id: 'condominial',
    formValue: 'Condomínio',
    title: 'Condomínios',
    subtitle: "Portaria Autônoma CondTotu's, Controle de Acesso e Automação Predial",
    normativeRef: 'NBR 17240 · LPR Veicular · CondTotu’s',
    summary:
      'Modernização da segurança condominial com redução expressiva da folha operacional, controle rigoroso de visitantes e automação confiável de bombas e áreas comuns.',
    features: [
      {
        title: "Portaria Autônoma (CondTotu's) via Aplicativo",
        detail: 'Gestão completa de acessos, convites por QR Code e histórico auditável para síndicos e moradores.',
      },
      {
        title: 'Reconhecimento Facial e Leitura de Placas (LPR)',
        detail: 'Acesso rápido anti-clonagem para pedestres e abertura automática de garagem por câmera LPR.',
      },
      {
        title: 'CFTV IP Centralizado de Alta Definição',
        detail: 'Monitoramento perimetral e interno com gravação redundante e analíticos de vídeo.',
      },
      {
        title: 'Automação de Bombas e Iluminação Comum',
        detail: 'Comandos elétricos para recalque, gestão de nível de reservatórios e eficiência energética.',
      },
      {
        title: 'Alarme de Incêndio Endereçável',
        detail: 'Centrais homologadas, detectores ópticos de fumaça, acionadores e sinalização de emergência.',
      },
    ],
    highlightMetric: 'Até 65% Economia',
    highlightLabel: "Redução de custos operacionais com Portaria Autônoma CondTotu's",
    recommendedServices: [
      "Portaria Autônoma (CondTotu's)",
      'Controle de Acesso e Reconhecimento Facial',
      'Automação Predial e Comandos de Bombas',
      'Alarme Perimetral e Detecção de Incêndio',
    ],
  },
  {
    id: 'comercial',
    formValue: 'Comercial',
    title: 'Comércios e Empresas',
    subtitle: 'Infraestrutura Elétrica, Cabeamento Estruturado e Controle Corporativo',
    normativeRef: 'NBR 14565 · NBR 5410 · NR-10',
    summary:
      'Continuidade operacional para empresas, clínicas, galpões e escritórios com infraestrutura elétrica dimensionada, rede estruturada certificada e controle de acesso.',
    features: [
      {
        title: 'Infraestrutura de Redes e Cabeamento Estruturado',
        detail: 'Montagem e organização de racks, patch panels Cat6, pontos lógicos e Wi-Fi corporativo.',
      },
      {
        title: 'Controle de Acesso de Colaboradores',
        detail: 'Terminais faciais e biométricos para áreas restritas, almoxarifados e salas de servidores.',
      },
      {
        title: 'Quadros de Distribuição e Entrada de Energia',
        detail: 'Balanceamento de fases, proteção DPS/DR, correção de falhas e adequação técnica.',
      },
      {
        title: 'Sistemas Contra Intrusão e Proteção Perimetral',
        detail: 'Centrais monitoráveis, sensores dupla tecnologia, barreiras perimetrais e CFTV IA.',
      },
      {
        title: 'Usinas Solares Fotovoltaicas Comerciais',
        detail: 'Geração própria de energia para abatimento de custos fixos de climatização e iluminação.',
      },
    ],
    highlightMetric: 'Alta Disponibilidade',
    highlightLabel: 'Infraestrutura elétrica e lógica organizada para operação contínua',
    recommendedServices: [
      'Instalações Elétricas e Manutenção',
      'Casa Inteligente e Redes Corporativas',
      'Controle de Acesso e Reconhecimento Facial',
      'CFTV com Inteligência Artificial',
    ],
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'eletrica',
    number: '01',
    title: 'Instalações Elétricas e Manutenção',
    shortTitle: 'Elétrica & QGBT',
    description:
      'Entrada de energia, quadros de distribuição, comandos elétricos e correção de falhas.',
    norm: 'ABNT NBR 5410 / NR-10',
    deliverables: [
      'Montagem e reforma de QGBT com barramentos, DR e DPS',
      'Padrão de entrada de energia e balanceamento de cargas',
      'Diagnóstico termográfico e correção de curto-circuito/fuga',
    ],
    iconName: 'zap',
  },
  {
    id: 'solar',
    number: '02',
    title: 'Energia Solar Fotovoltaica',
    shortTitle: 'Energia Solar',
    description:
      'Dimensionamento, montagem, homologação e manutenção de usinas solares.',
    norm: 'ABNT NBR 16690',
    deliverables: [
      'Projeto técnico e homologação junto à concessionária',
      'Instalação estrutural segura, string box e inversores',
      'Limpeza técnica, inspeção de conectores MC4 e monitoramento',
    ],
    iconName: 'sun',
  },
  {
    id: 'cftv-ia',
    number: '03',
    title: 'CFTV com Inteligência Artificial',
    shortTitle: 'CFTV com IA',
    description:
      'Monitoramento com reconhecimento humano/veicular e imagens em alta definição.',
    norm: 'IP67 / ColorVu / Analítico IA',
    deliverables: [
      'Câmeras IP Full Color noturnas com linha virtual e cerca digital',
      'Gravadores NVR com busca inteligente de eventos por humano/veículo',
      'Acesso criptografado em nuvem e gravação contínua segura',
    ],
    iconName: 'camera',
  },
  {
    id: 'controle-acesso',
    number: '04',
    title: 'Controle de Acesso e Reconhecimento Facial',
    shortTitle: 'Controle de Acesso',
    description:
      'Terminais faciais, biométricos, fechaduras eletromecânicas e cancelas.',
    norm: 'Antipassback / LPR / RFID',
    deliverables: [
      'Leitores faciais com detecção de vivacidade (anti-foto/vídeo)',
      'Eclusas de pedestres, eletroímãs, fechaduras solenoides e molas aéreas',
      'Cancelas automáticas e leitura de placas veiculares (LPR)',
    ],
    iconName: 'scan-face',
  },
  {
    id: 'condtotus',
    number: '05',
    title: "Portaria Autônoma (CondTotu's)",
    shortTitle: "Portaria CondTotu's",
    description:
      'Redução de custos condominiais, autorização via QR Code, histórico de entradas e aplicativo exclusivo para moradores e síndicos.',
    norm: 'Ecossistema CondTotu’s',
    deliverables: [
      'Aplicativo exclusivo com liberação de visitantes por QR Code temporário',
      'Registro fotográfico e log completo de cada acesso para o síndico',
      'Interfonia digital inteligente sem necessidade de cabeamento nos blocos',
    ],
    iconName: 'shield-check',
  },
  {
    id: 'alarme-incendio',
    number: '06',
    title: 'Alarme Perimetral e Detecção de Incêndio',
    shortTitle: 'Alarme & Incêndio',
    description:
      'Centrais homologadas, sensores ativos, detectores de fumaça, sirenes e laudos técnicos.',
    norm: 'ABNT NBR 17240 / Corpo de Bombeiros',
    deliverables: [
      'Centrais de incêndio endereçáveis, detectores ópticos e termovelocimétricos',
      'Barreiras IVA perimetrais, cerca elétrica industrial e concertina',
      'Testes de comissionamento e documentação para regularização',
    ],
    iconName: 'flame',
  },
  {
    id: 'automacao-bombas',
    number: '07',
    title: 'Automação Predial e Comandos de Bombas',
    shortTitle: 'Automação Predial',
    description:
      'Gestão de níveis de reservatórios, automação de recalque e acionamento remoto.',
    norm: 'NBR 5410 / Telemetria Hidráulica',
    deliverables: [
      'Quadros de comando para bombas de recalque com revezamento automático',
      'Sensores de nível e boias elétricas com alerta de falha ou extravasamento',
      'Acionamento e programação horária de iluminação de áreas comuns',
    ],
    iconName: 'gauge',
  },
  {
    id: 'smart-redes',
    number: '08',
    title: 'Casa Inteligente e Redes Corporativas',
    shortTitle: 'Smart Home & Redes',
    description:
      'Ambientes integrados, interruptores smart e infraestrutura Wi-Fi profissional de longo alcance.',
    norm: 'ABNT NBR 14565 / Wi-Fi 6',
    deliverables: [
      'Automação de iluminação, climatização, cortinas e cenas residenciais',
      'Access Points corporativos de teto/parede com controlador unificado',
      'Cabeamento estruturado Cat6, certificação e organização de racks',
    ],
    iconName: 'wifi',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Diagnóstico Inicial',
    description:
      'Levantamento técnico das demandas da residência, condomínio ou empresa.',
    deliverable: 'Mapeamento de riscos, gargalos elétricos e pontos vulneráveis',
  },
  {
    number: '02',
    title: 'Vistoria e Dimensionamento',
    description:
      'Avaliação de carga, projeto técnico e proposta transparente.',
    deliverable: 'Memorial de equipamentos, cálculo de demanda e escopo detalhado',
  },
  {
    number: '03',
    title: 'Execução Técnica',
    description:
      'Instalação realizada dentro de normas de segurança e com ferramental de precisão.',
    deliverable: 'Infraestrutura limpa, cabos identificados e proteção NBR 5410',
  },
  {
    number: '04',
    title: 'Comissionamento e Suporte',
    description:
      'Testes de carga, configuração de aplicativos, entrega técnica e assistência contínua.',
    deliverable: 'Treinamento do usuário/síndico, garantia e pós-obra dedicado',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-condtotus',
    title: "Implantação Portaria Autônoma CondTotu's & LPR",
    category: 'Condominial',
    location: 'Campo Grande - MS',
    norm: 'Controle Facial + LPR + App CondTotu’s',
    metrics: '-58% no custo mensal de portaria',
    description:
      'Modernização completa de acesso de pedestres e veículos com eclusa automatizada, terminais de reconhecimento facial duplo, câmera de leitura de placas (LPR) e aplicativo CondTotu’s integrado.',
    specs: [
      '2 Terminais Faciais IP65 com detecção de vivacidade',
      'Câmera LPR dedicada na entrada e saída de garagem',
      'Nobreak senoidal para autonomia em quedas de energia',
      'Integração de 48 unidades no aplicativo CondTotu’s',
    ],
    schematicType: 'condtotus',
  },
  {
    id: 'proj-qgbt',
    title: 'Reforma de QGBT e Automação de Recalque Predial',
    category: 'Infraestrutura Elétrica',
    location: 'Jardim dos Estados · Campo Grande - MS',
    norm: 'ABNT NBR 5410 · Comandos Elétricos',
    description:
      'Substituição de quadro geral antigo por QGBT normatizado com barramentos de cobre isolados, proteção DPS Classe II, DR tetrapolar e quadro de comando automático para bombas de recalque.',
    metrics: 'Zero paradas não programadas em 12 meses',
    specs: [
      'Balanceamento de fases com redução de aquecimento em 34%',
      'Quadro de comando com alternância automática entre Bomba 1 e Bomba 2',
      'Anilhação técnica de todos os circuitos e diagrama unifilar',
      'Telemetria de nível de reservatório superior e cisterna',
    ],
    schematicType: 'qgbt',
  },
  {
    id: 'proj-solar',
    title: 'Usina Solar Fotovoltaica & Proteção de String Box',
    category: 'Energia Solar',
    location: 'Chácara Cachoeira · Campo Grande - MS',
    norm: 'ABNT NBR 16690 · Homologado Energisa MS',
    description:
      'Dimensionamento, instalação e homologação de sistema fotovoltaico de alta eficiência com estrutura reforçada, aterramento equipotencializado e monitoramento de geração em tempo real.',
    metrics: '94% de redução na fatura de energia elétrica',
    specs: [
      'Módulos monocristalinos Half-Cell de alta eficiência',
      'Proteção CC/CA com DPS específico para sistemas fotovoltaicos',
      'Passagem em eletrodutos metálicos galvanizados e conectores originais',
      'Monitoramento via app com histórico diário de geração (kWh)',
    ],
    schematicType: 'solar',
  },
  {
    id: 'proj-smart',
    title: 'Residência Inteligente, CFTV IA ColorVu e Wi-Fi 6',
    category: 'Residencial Alto Padrão',
    location: 'Condomínio Damha · Campo Grande - MS',
    norm: 'NBR 5410 · NBR 14565 · CFTV IA',
    description:
      'Projeto executivo integrado contemplando iluminação automatizada por cenas, rede Wi-Fi 6 com roaming transparente em 450m² e monitoramento perimetral com câmeras ColorVu IA.',
    metrics: 'Cobertura 100% sem pontos cegos',
    specs: [
      '12 Circuitos de iluminação smart com cenas (Chegada, Cinema, Noturno)',
      '4 Access Points Wi-Fi 6 alimentados via Switch PoE Gerenciável',
      '8 Câmeras IP 4K com detecção humana e alerta perimetral ativo',
      'Fechadura digital biométrica integrada à automação de entrada',
    ],
    schematicType: 'smart-home',
  },
];

export const COVERAGE_AREAS = [
  { name: 'Centro & Região Central', status: 'Atendimento Imediato', coords: { x: 48, y: 48 } },
  { name: 'Jardim dos Estados & Chácara Cachoeira', status: 'Rota Técnica Diária', coords: { x: 64, y: 42 } },
  { name: 'Condomínios Damha, Alphaville & Nasa Park', status: 'Especialista Residencial', coords: { x: 76, y: 54 } },
  { name: 'Polo Empresarial & Indubrasil', status: 'Suporte Corporativo', coords: { x: 28, y: 62 } },
  { name: 'Rita Vieira, Vilas Boas & TV Moreninha', status: 'Atendimento Condominial', coords: { x: 58, y: 68 } },
  { name: 'Interior de MS (Terenos, Sidrolândia, Dourados, Bonito)', status: 'Projetos Sob Agendamento', coords: { x: 35, y: 34 } },
];
