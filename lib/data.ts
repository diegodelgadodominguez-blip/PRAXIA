export type Area = {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  lead: string;
  industryNote: string;
  cta: string;
  paras: string[];
  services: string[];
};

export type Person = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  short: string;
  email: string;
  languages: string;
  linkedin?: string;
  tags: string[];
  bio: string[];
  publications?: string[];
  honor?: string;
  education: string[];
  areaSlugs: string[];
};

export type Insight = {
  date: string;
  topic: string;
  title: string;
  excerpt: string;
  status: string;
};

export const PEOPLE: Person[] = [
  {
    slug: "manuel-viera-flores",
    name: "Manuel Viera Flores",
    initials: "MV",
    role: "Director · Ph.D. en Economía Minera y Finanzas · Presidente de la Cámara Minera de Chile",
    short:
      "Fundador y presidente de la Cámara Minera de Chile y CEO de Metaproject. Aporta criterio sectorial, opinión experta y vinculación institucional con la industria.",
    email: "mviera@praxia.com",
    languages: "Español · Inglés · Portugués",
    linkedin: "https://www.linkedin.com/in/manuelvieraf/",
    tags: [
      "Economía minera",
      "Valorización de activos",
      "Evaluación de proyectos",
      "Gestión de riesgo",
      "Política sectorial",
    ],
    bio: [
      "Manuel Viera Flores es Director de PRAXIA. Desde 1992 es CEO y Managing Partner de Metaproject, compañía de ingeniería multidisciplinaria con operaciones en Chile, Perú, Ecuador y Colombia, y desde 2019 es fundador y primer Presidente de la Cámara Minera de Chile y preside el comité chileno del World Mining Congress.",
      "Su trayectoria en la industria supera los cuarenta años en dirección de operaciones, planificación minera y evaluación de proyectos. Fue superintendente de Ingeniería Industrial y desarrollo de proyectos de inversión en Codelco Andina (1989–1992), consultor senior de planificación y valorización en RTZ Consultores (1988–1990), ingeniero de minas senior en Cía. Minera El Indio (1984–1988) y superintendente de operaciones en Cía. Minera Santa Rita (1977–1979).",
      "En gobierno corporativo fue director de Cía. Minera Carmen de Andacollo, de Teck (7 años), director de la Empresa Nacional de Minería, ENAMI (7 años), presidente del directorio de Cía. Minera Panulcillo (7 años) y director del Instituto de Ingenieros de Minas de Chile (18 años).",
      "Es Qualified Person para la certificación de recursos y reservas bajo los códigos NI 43-101, JORC y VALMIN, y especialista en valorización de activos mineros mediante opciones reales y simulación de Monte Carlo bajo riesgo e incertidumbre.",
      "En PRAXIA no conduce áreas de práctica: su rol es de criterio sectorial y relación institucional. Aporta la lectura de industria sobre cada encargo —qué implica una estructura determinada para una faena en operación, cómo se comporta frente al royalty y qué exposición genera ante la autoridad— y la vinculación de la firma con el ecosistema minero-energético. Fue profesor de las escuelas de minas de la Universidad de Chile y de la Universidad de Santiago, y de programas de posgrado de la Pontificia Universidad Católica de Chile; dirigió la Escuela de Minas de la Universidad de las Américas entre 2012 y 2020, y presidió la Cámara Chileno Polaca de Comercio entre 2018 y 2021.",
    ],
    publications: [
      "Enfoque pragmático a la tasación económica de yacimientos",
      "Evaluación económica de un proyecto de inversiones mediante simulación de Montecarlo, bajo riesgo e incertidumbre",
      "Computerized model for the optimization of blasting patterns in tunnels",
      "Simulación computarizada en operaciones carguío-transporte en operaciones subterráneas con LHD",
    ],
    honor: "Premio a la Excelencia Profesional",
    education: [
      "Ph.D. en Finanzas y Economía Mineral, Universidad Autónoma de Madrid",
      "MSc en Ingeniería Industrial, Universidad de Chile",
      "Ingeniero de Minas, Universidad de Santiago de Chile",
      "Qualified Person — códigos NI 43-101, JORC y VALMIN",
      "Miembro del Project Management Institute, Chile Chapter",
    ],
    areaSlugs: [],
  },
  {
    slug: "manuel-berrios",
    name: "Manuel Berríos",
    initials: "MB",
    role: "Director · Abogado, LLM en Tributación (University of Chicago)",
    short:
      "Abogado UAH, Tax LLM de la Universidad de Chicago y director de empresas. Encabeza las materias tributarias, corporativas y de planificación patrimonial.",
    email: "mberrios@praxia.com",
    languages: "Español · Inglés",
    tags: [
      "Tributación corporativa",
      "Reorganizaciones",
      "Compliance",
      "Planificación patrimonial",
      "Gobierno corporativo",
    ],
    bio: [
      "Manuel Berríos es Director de PRAXIA, abogado de la Universidad Alberto Hurtado y director de empresas. Concentra el trabajo técnico de la firma en estructuración fiscal, reorganizaciones societarias, cumplimiento normativo y planificación patrimonial familiar.",
      "Su formación combina tributación y compliance en tres jurisdicciones: Tax LLM en la Universidad de Chicago, Magíster en Tributación Corporativa en la Universidad Mayor, el programa Core International Business de Harvard University y una Maestría en Compliance en el Centro de Investigación y Desarrollo Crimint. Esa base le permite trabajar tanto la norma chilena como los estándares que exigen matrices e inversionistas extranjeros.",
      "Su práctica parte del funcionamiento real de la compañía: la estructura que se propone debe poder ejecutarse, documentarse y sostenerse ante una fiscalización del Servicio de Impuestos Internos.",
      "Asesora a grupos empresariales y family offices en reorganizaciones y procesos de sucesión, coordinando el diseño tributario con las estructuras societarias existentes y con los asesores contables y financieros de cada grupo.",
      "En su rol de director de empresas participa además en la discusión de gobierno corporativo, política de distribución de resultados y modelos de prevención de delitos bajo la Ley N° 20.393.",
    ],
    education: [
      "Abogado, Universidad Alberto Hurtado",
      "Tax LLM, University of Chicago",
      "Magíster en Tributación Corporativa, Universidad Mayor",
      "Core International Business, Harvard University",
      "Maestría en Compliance, Centro de Investigación y Desarrollo Crimint",
    ],
    areaSlugs: [
      "optimizacion-tributaria",
      "derecho-laboral",
      "ley-karin",
      "derecho-corporativo",
      "compliance",
      "planificacion-de-herencia",
    ],
  },
  {
    slug: "diego-delgado",
    name: "Diego Delgado",
    initials: "DD",
    role: "Director · Ingeniero civil industrial UC · Inteligencia artificial y gestión documental",
    short:
      "Lidera la aplicación de inteligencia artificial y la gestión documental de los expedientes, además del análisis financiero de cada estructura.",
    email: "ddelgado@praxia.com",
    languages: "Español · Inglés",
    linkedin: "https://www.linkedin.com/in/diego-delgado-dom%C3%ADnguez-4733072a4/",
    tags: [
      "Inteligencia artificial",
      "Gestión documental",
      "Análisis financiero",
      "Estrategia",
      "Compliance",
    ],
    bio: [
      "Diego Delgado es Director de PRAXIA, ingeniero civil industrial de la Pontificia Universidad Católica de Chile, con experiencia en análisis financiero, inteligencia artificial aplicada y estrategia corporativa.",
      "Conduce la incorporación de inteligencia artificial al trabajo de la firma: revisión asistida de contratos y documentación societaria, extracción estructurada de datos desde expedientes extensos y detección temprana de inconsistencias entre lo declarado y lo respaldado. La herramienta acelera la revisión; la decisión técnica sigue siendo de los directores.",
      "Dirige además la gestión documental de cada encargo. Cada estructura tributaria, cada modelo de prevención de delitos y cada proceso laboral se sostienen en el respaldo que exista al momento de la fiscalización, por lo que la firma mantiene los expedientes indexados, versionados y trazables desde su origen.",
      "Aporta la capa cuantitativa del trabajo: modelamiento del efecto financiero de una estructura, evaluación de escenarios y construcción de indicadores para el seguimiento de programas de cumplimiento.",
      "Trabaja de forma conjunta con el área tributaria para que cada recomendación esté respaldada por un número verificable y por un documento localizable, y no solo por una lectura normativa.",
    ],
    education: [
      "Ingeniería Civil Industrial, Pontificia Universidad Católica de Chile",
      "Formación en análisis financiero y ciencia de datos aplicada",
      "Formación en inteligencia artificial aplicada a procesos documentales",
    ],
    areaSlugs: ["optimizacion-de-capital", "compliance"],
  },
];

export const AREAS: Area[] = [
  {
    slug: "optimizacion-tributaria",
    num: "01",
    name: "Optimización tributaria",
    tagline:
      "Estructuración de la carga impositiva dentro del marco legal vigente, con foco en operaciones intensivas en capital.",
    lead: "manuel-berrios",
    industryNote:
      "Tratamiento del royalty minero, depreciación acelerada de activos de larga vida y créditos por gastos en exploración.",
    cta: "Conversemos sobre la estructura tributaria de su operación.",
    paras: [
      "Analizamos la situación tributaria de la compañía o del grupo empresarial y proponemos una estructura que reduzca la carga impositiva dentro de los márgenes que permite la legislación chilena, sin exponer al contribuyente ante la autoridad fiscalizadora.",
      "El trabajo parte del diagnóstico de la operación real —contratos, activos, flujos entre relacionadas— y no de un modelo genérico. Cada recomendación se acompaña de su fundamento normativo y de la estimación del efecto financiero asociado.",
      "Acompañamos además la implementación y la defensa posterior de la estructura frente a requerimientos del Servicio de Impuestos Internos.",
    ],
    services: [
      "Diagnóstico integral de la situación tributaria de la empresa o grupo",
      "Diseño de estructuras eficientes de tributación conforme a la normativa vigente",
      "Revisión de operaciones entre partes relacionadas y precios de transferencia",
      "Análisis de regímenes especiales aplicables al sector minero y energético",
      "Preparación de respuestas a requerimientos y fiscalizaciones",
      "Evaluación del efecto tributario de proyectos de inversión antes de su ejecución",
    ],
  },
  {
    slug: "optimizacion-de-capital",
    num: "02",
    name: "Optimización de capital",
    tagline:
      "Estructura de financiamiento, uso de activos y asignación de recursos con impacto tributario y financiero medido.",
    lead: "diego-delgado",
    industryNote:
      "Estructura de financiamiento de proyectos de larga maduración y tratamiento de CAPEX en faena.",
    cta: "Conversemos sobre la estructura de capital de su proyecto.",
    paras: [
      "Evaluamos la estructura de capital de la compañía para identificar dónde el financiamiento, la tenencia de activos o la distribución de resultados están generando un costo evitable, tributario o financiero.",
      "El análisis integra modelamiento cuantitativo con la revisión jurídica de los instrumentos utilizados, de modo que la recomendación sea ejecutable en los términos contractuales existentes.",
      "Aplica de forma particular a proyectos de inversión de larga maduración, donde la decisión de estructura se toma años antes de la generación de flujo.",
    ],
    services: [
      "Análisis de la estructura de financiamiento y su efecto tributario",
      "Modelamiento financiero de escenarios de inversión y distribución",
      "Revisión del tratamiento de activos fijos y su depreciación",
      "Evaluación de alternativas de aporte, préstamo y capitalización entre relacionadas",
      "Definición de indicadores de seguimiento para la administración",
    ],
  },
  {
    slug: "derecho-laboral",
    num: "03",
    name: "Derecho laboral",
    tagline:
      "Relación laboral individual y colectiva en operaciones con turnos, faenas y contratistas.",
    lead: "manuel-berrios",
    industryNote:
      "Sistemas excepcionales de jornada, subcontratación en faena y negociación colectiva en operaciones continuas.",
    cta: "Conversemos sobre su relación laboral y de contratistas.",
    paras: [
      "Asesoramos en la gestión de la relación laboral en entornos operativos exigentes: sistemas excepcionales de distribución de jornada, trabajo en faena, régimen de subcontratación y relación con empresas de servicios transitorios.",
      "Intervenimos tanto en la etapa preventiva —contratos, reglamento interno, protocolos— como en la contingencia: fiscalizaciones de la Dirección del Trabajo, término de contratos y procesos judiciales.",
      "El enfoque es documental: la posición de la empresa se sostiene con el respaldo que existía antes del conflicto, no con el que se construye después.",
    ],
    services: [
      "Elaboración y revisión de contratos individuales y reglamento interno",
      "Autorización y control de sistemas excepcionales de jornada",
      "Asesoría en régimen de subcontratación y suministro de personal",
      "Acompañamiento en fiscalizaciones de la Dirección del Trabajo",
      "Negociación colectiva y relación con organizaciones sindicales",
      "Defensa en juicios laborales y procedimientos de tutela",
    ],
  },
  {
    slug: "derecho-corporativo",
    num: "04",
    name: "Derecho corporativo",
    tagline:
      "Constitución, reorganización y gobierno de sociedades, con foco en la trazabilidad de las decisiones.",
    lead: "manuel-berrios",
    industryNote:
      "Vehículos de proyecto, joint ventures y estructuras de holding para activos mineros y de generación.",
    cta: "Conversemos sobre la estructura societaria de su grupo.",
    paras: [
      "Acompañamos la constitución y reorganización de sociedades, la redacción de pactos de accionistas y la formalización del gobierno corporativo, de modo que la estructura societaria responda a la operación y no al revés.",
      "Trabajamos habitualmente sobre estructuras que combinan sociedades operativas, vehículos de proyecto y holdings familiares, cuidando la coherencia tributaria del conjunto.",
      "Incluye la preparación de la documentación societaria que exigen los procesos de due diligence, financiamiento bancario y entrada de nuevos socios.",
    ],
    services: [
      "Constitución de sociedades y vehículos de proyecto",
      "Reorganizaciones societarias: fusiones, divisiones y transformaciones",
      "Redacción y revisión de pactos de accionistas y estatutos",
      "Formalización de gobierno corporativo y actas de directorio",
      "Due diligence societario y preparación de documentación para financiamiento",
      "Contratos entre partes relacionadas y su respaldo formal",
    ],
  },
  {
    slug: "compliance",
    num: "05",
    name: "Compliance",
    tagline:
      "Modelos de prevención de delitos bajo la Ley N° 20.393 y estándares exigidos por matrices e inversionistas.",
    lead: "diego-delgado",
    industryNote:
      "Exigencias de casas matrices extranjeras y de la banca de proyecto sobre operaciones en Chile.",
    cta: "Conversemos sobre su modelo de prevención de delitos.",
    paras: [
      "Diseñamos e implementamos modelos de prevención de delitos conforme a la Ley N° 20.393 sobre responsabilidad penal de las personas jurídicas, incorporando las ampliaciones de catálogo introducidas por la legislación posterior.",
      "El modelo se construye sobre el mapa de riesgos real de la operación: proveedores, permisos, relación con autoridad, manejo de efectivo y contratación de terceros en faena.",
      "Incluye la definición de indicadores y evidencia de funcionamiento, elemento que resulta determinante ante una eventual imputación o ante la revisión de una matriz extranjera.",
    ],
    services: [
      "Diagnóstico y mapa de riesgos penales de la organización",
      "Diseño e implementación del modelo de prevención de delitos (Ley N° 20.393)",
      "Elaboración de códigos de ética, políticas y canales de denuncia",
      "Capacitación a directorio, administración y personal en faena",
      "Auditoría de funcionamiento y evidencia del modelo",
      "Due diligence de integridad sobre proveedores y contrapartes",
    ],
  },
  {
    slug: "ley-karin",
    num: "06",
    name: "Ley Karin",
    tagline:
      "Prevención, investigación y sanción del acoso laboral y sexual bajo la Ley N° 21.643.",
    lead: "manuel-berrios",
    industryNote:
      "Protocolos aplicables a faenas con régimen de turnos y campamentos, donde la convivencia excede la jornada.",
    cta: "Conversemos sobre la implementación de la Ley N° 21.643 en su organización.",
    paras: [
      "La Ley N° 21.643 obliga a toda organización a contar con un protocolo de prevención del acoso laboral, sexual y de la violencia en el trabajo, y con un procedimiento de investigación con plazos y garantías definidas.",
      "Acompañamos la elaboración del protocolo, su incorporación al reglamento interno y la capacitación de quienes deberán aplicarlo, incluyendo el rol de investigador.",
      "Cuando la denuncia ya existe, conducimos o revisamos la investigación para que el procedimiento resista una revisión posterior de la Dirección del Trabajo o de un tribunal.",
    ],
    services: [
      "Elaboración del protocolo de prevención conforme a la Ley N° 21.643",
      "Adecuación del reglamento interno de orden, higiene y seguridad",
      "Diseño del procedimiento de investigación y sus plazos",
      "Capacitación a jefaturas e investigadores designados",
      "Conducción o revisión externa de investigaciones en curso",
      "Acompañamiento ante la Dirección del Trabajo",
    ],
  },
  {
    slug: "planificacion-de-herencia",
    num: "07",
    name: "Planificación de herencia",
    tagline:
      "Ordenamiento patrimonial y sucesorio de grupos familiares con participación en sociedades operativas.",
    lead: "manuel-berrios",
    industryNote:
      "Sucesión en grupos familiares con participación en concesiones, faenas y sociedades de servicios.",
    cta: "Conversemos sobre el ordenamiento patrimonial de su familia.",
    paras: [
      "Estructuramos el traspaso patrimonial entre generaciones considerando de forma conjunta la normativa sucesoria, el impuesto a las herencias y la estructura societaria en la que el patrimonio está radicado.",
      "El objetivo es que la sucesión no obligue a desarmar la operación: se define con anticipación quién administra, cómo se distribuyen los frutos y qué ocurre ante la salida de un integrante del grupo.",
      "El trabajo incorpora la redacción de los instrumentos necesarios y la coordinación con los asesores financieros y contables de la familia.",
    ],
    services: [
      "Diagnóstico patrimonial y societario del grupo familiar",
      "Diseño de la estructura de traspaso y su efecto en el impuesto a las herencias",
      "Constitución de sociedades de inversión y vehículos familiares",
      "Redacción de pactos familiares y protocolos de sucesión",
      "Coordinación con asesores contables y financieros",
      "Acompañamiento en la posesión efectiva y trámites sucesorios",
    ],
  },
];

export const INSIGHTS: Insight[] = [
  {
    date: "PRÓXIMAMENTE",
    topic: "TRIBUTARIO",
    title: "Royalty minero: efecto en la carga efectiva de operaciones medianas",
    excerpt:
      "Nota técnica en preparación sobre el impacto del régimen de royalty en la tributación total de faenas de escala media.",
    status: "EN PREPARACIÓN",
  },
  {
    date: "PRÓXIMAMENTE",
    topic: "LABORAL",
    title: "Ley N° 21.643: primeros criterios de la Dirección del Trabajo",
    excerpt:
      "Revisión de los pronunciamientos administrativos y su efecto práctico sobre los protocolos ya implementados.",
    status: "EN PREPARACIÓN",
  },
  {
    date: "PRÓXIMAMENTE",
    topic: "COMPLIANCE",
    title: "Modelos de prevención de delitos: qué se revisa realmente",
    excerpt:
      "Qué evidencia de funcionamiento exigen matrices e instituciones financieras al revisar un modelo bajo la Ley N° 20.393.",
    status: "EN PREPARACIÓN",
  },
  {
    date: "PRÓXIMAMENTE",
    topic: "CORPORATIVO",
    title: "Vehículos de proyecto en generación: estructura y tributación",
    excerpt:
      "Comparación de alternativas societarias para proyectos de generación y su tratamiento fiscal.",
    status: "EN PREPARACIÓN",
  },
  {
    date: "PRÓXIMAMENTE",
    topic: "PATRIMONIAL",
    title: "Sucesión en grupos familiares con activos productivos",
    excerpt:
      "Cómo anticipar el traspaso sin interrumpir la operación ni gatillar cargas tributarias evitables.",
    status: "EN PREPARACIÓN",
  },
];

export const FACTS = [
  { value: "7", label: "Áreas de práctica integradas" },
  { value: "3", label: "Directores a cargo directo de cada encargo" },
  {
    value: "Minería y Energía",
    label: "Industria de especialización declarada en la razón social",
  },
  { value: "Santiago", label: "Av. Vitacura 2939, Las Condes" },
];

export const ABOUT_PARAS = [
  "PRAXIA es el nombre comercial de Centro de Estudios Tributarios en Minería y Energía SpA, una firma constituida para atender de manera especializada las materias tributarias, corporativas, laborales y de cumplimiento de las compañías del sector minero-energético y de los grupos familiares vinculados a él.",
  "La firma nace de una constatación concreta: la asesoría tributaria general no resuelve bien los problemas de una industria con reglas propias —regímenes especiales, activos de larga vida, contratación en faena y estándares de cumplimiento exigidos por matrices e inversionistas extranjeros.",
  "Trabajamos con un modelo de atención directa: los tres directores participan del análisis de cada encargo y responden personalmente al cliente. No intermediamos la relación a través de equipos junior.",
  "Nuestro marco de trabajo es la legislación chilena vigente. Cada recomendación se entrega con su fundamento normativo explícito y con la estimación del efecto financiero que produce.",
];

export const PILLARS = [
  {
    title: "Especialización sectorial",
    text: "La industria minero-energética está declarada en nuestra razón social, no es un vertical más de la firma.",
  },
  {
    title: "Atención directa",
    text: "Los directores conducen el encargo. El cliente conversa con quien toma la decisión técnica.",
  },
  {
    title: "Respaldo verificable",
    text: "Cada propuesta indica la norma que la sustenta y el efecto financiero que produce.",
  },
];

export const LEGAL_ROWS = [
  { k: "Razón social", v: "Centro de Estudios Tributarios en Minería y Energía SpA" },
  { k: "RUT", v: "78.471.797-6" },
  {
    k: "Domicilio",
    v: "Av. Vitacura 2939, piso 11, oficina 1101, Las Condes, Región Metropolitana",
  },
  { k: "Correo", v: "contacto@praxia.com" },
  { k: "Teléfono", v: "[pendiente — completar antes de publicar]" },
];

export const CREDENTIALS = [
  {
    kind: "MEMBRESÍA",
    title: "Cámara Minera de Chile",
    note: "Presidencia ejercida por uno de nuestros directores.",
  },
  {
    kind: "PUBLICACIONES",
    title: "Notas técnicas del equipo",
    note: "Serie de análisis normativo en preparación.",
  },
  {
    kind: "RANKING",
    title: "Espacio reservado",
    note: "Estructura lista para incorporar reconocimientos de directorios legales.",
  },
  {
    kind: "CASOS",
    title: "Casos representativos",
    note: "Se publicarán con autorización expresa de los clientes.",
  },
];

export const INDUSTRY_PARAS = [
  "La minería y la generación de energía concentran en Chile una parte relevante de la inversión de largo plazo, y con ella un conjunto de reglas que no se aplican al resto de la economía: regímenes tributarios específicos, sistemas excepcionales de jornada, permisos sectoriales y exigencias de cumplimiento impuestas por casas matrices y por la banca de proyecto.",
  "PRAXIA organiza sus siete áreas de práctica en torno a ese conjunto de reglas. Un mismo expediente puede requerir simultáneamente una decisión de estructura societaria, una revisión de la carga tributaria efectiva, la autorización de un sistema de turnos y la actualización de un modelo de prevención de delitos.",
  "El equipo trabaja de forma integrada sobre ese expediente único, con un director responsable frente al cliente.",
];

export const NORMS = [
  {
    title: "Ley N° 20.393",
    note: "Responsabilidad penal de las personas jurídicas y modelos de prevención de delitos.",
  },
  {
    title: "Ley N° 21.643",
    note: "Prevención, investigación y sanción del acoso laboral y sexual en el trabajo.",
  },
  {
    title: "Régimen de royalty minero",
    note: "Determinación de la carga efectiva sobre la renta operacional minera.",
  },
  {
    title: "Código del Trabajo",
    note: "Jornadas excepcionales, subcontratación y negociación colectiva en faena.",
  },
];

export function getPerson(slug: string): Person | undefined {
  return PEOPLE.find((p) => p.slug === slug);
}

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getLeadFor(area: Area): Person {
  const lead = getPerson(area.lead);
  if (!lead) throw new Error(`No se encontró director para el área ${area.slug}`);
  return lead;
}

export function getAreasFor(person: Person): Area[] {
  return person.areaSlugs
    .map((slug) => getArea(slug))
    .filter((a): a is Area => Boolean(a));
}
