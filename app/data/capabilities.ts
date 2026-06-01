export type Capability = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  definition: string;
  overview: string[];
  areasOfFocus: string[];
  howWeEngage: string;
  trainingSlug: string;
  adjacent: { title: string; slug: string }[];
  seo: { title: string; description: string };
};

export const capabilities: Capability[] = [
  {
    slug: "strategic-communications",
    number: "01",
    title: "Strategic Communications",
    shortTitle: "Strategic Comms",
    definition:
      "Capability development for influence, narrative, and information operations in complex environments.",
    overview: [
      "Strategic communications has become one of the most contested domains in contemporary security and governance. The information environment is no longer a peripheral concern for defence and intelligence institutions — it is a primary operational terrain, shaped by state and non-state actors, technology platforms, and the accelerating pace of digital media.",
      "Quantum Intel's strategic communications capability development is designed for institutions that must operate in this environment at scale — governments managing national narratives, security agencies countering hostile influence, corporate organisations protecting institutional reputation, and military formations engaged in information operations alongside kinetic activity.",
      "Our approach is grounded in tradecraft and doctrine, not communications theory. We draw on practitioners with direct experience of information operations, crisis communications in security environments, and the design and execution of strategic narratives under operational constraints.",
    ],
    areasOfFocus: [
      "Strategic narrative development",
      "Information environment assessment",
      "Counter-disinformation and counter-influence",
      "Crisis communications for security and government institutions",
      "Public affairs in security-sensitive contexts",
      "Media engagement under operational constraints",
    ],
    howWeEngage:
      "Quantum Intel delivers strategic communications capability through residential training programmes, tailored institutional workshops, and advisory engagements. All formats are calibrated to the seniority and mandate of the client institution, and conducted under confidentiality arrangements appropriate to the sensitivity of the work.",
    trainingSlug: "strategic-communications",
    adjacent: [
      { title: "Military Intelligence", slug: "military-intelligence" },
      { title: "Artificial Intelligence", slug: "artificial-intelligence" },
    ],
    seo: {
      title: "Strategic Communications — Quantum Intel",
      description:
        "Quantum Intel delivers strategic communications training and capability development for governments, security agencies, and corporate clients in complex environments.",
    },
  },
  {
    slug: "military-intelligence",
    number: "02",
    title: "Military Intelligence",
    shortTitle: "Military Intelligence",
    definition:
      "Training across the intelligence cycle, analytic tradecraft, and operational decision support.",
    overview: [
      "Intelligence is the foundation of effective decision-making in defence, security, and governance. Yet the intelligence function across many African institutions remains under-resourced, under-trained, and operating without the structured tradecraft that characterises mature intelligence communities.",
      "Quantum Intel's military intelligence capability development addresses this gap directly. We deliver training across the full intelligence cycle — from requirements management through collection, processing, analysis, and dissemination — with an emphasis on the analytic tradecraft that produces actionable intelligence products rather than data summaries.",
      "Our faculty bring operational backgrounds in military intelligence, national intelligence, and specialised collection disciplines. Content is grounded in the African operational environment and calibrated to the institutional realities of security and defence organisations across the continent.",
    ],
    areasOfFocus: [
      "The intelligence cycle and intelligence requirements management",
      "Analytic tradecraft and structured analytic techniques",
      "Open-source intelligence (OSINT) for defence and security",
      "Geospatial and signals intelligence fundamentals",
      "Threat assessment and warning",
      "Intelligence support to operations and decision-making",
    ],
    howWeEngage:
      "Quantum Intel delivers military intelligence capability development through residential cohort programmes, command-level advisory engagements, and structured workshops embedded within existing institutional training cycles. All engagements are subject to enhanced confidentiality protocols appropriate to the sensitivity of the domain.",
    trainingSlug: "military-intelligence",
    adjacent: [
      { title: "Strategic Communications", slug: "strategic-communications" },
      { title: "Cyber Security & Infrastructure Defence", slug: "cyber-security" },
    ],
    seo: {
      title: "Military Intelligence — Quantum Intel",
      description:
        "Quantum Intel delivers military intelligence training across the intelligence cycle, analytic tradecraft, and operational decision support.",
    },
  },
  {
    slug: "cyber-security",
    number: "03",
    title: "Cyber Security & Infrastructure Defence",
    shortTitle: "Cyber Security",
    definition:
      "Capability building for the protection of national and corporate digital infrastructure.",
    overview: [
      "Cyber threats to African institutions have escalated significantly in scale, sophistication, and impact. Governments, security agencies, financial institutions, energy operators, and telecoms are all operating in a threat environment that demands institutional-grade cyber capability — not compliance checklists or awareness training.",
      "Quantum Intel's cyber security and infrastructure defence capability development is designed for institutions that carry real responsibility for critical national or corporate infrastructure. We work with Chief Security Officers, heads of national cyber security bodies, and defence formations to build the technical, analytical, and governance capability required to operate effectively in this environment.",
      "Our approach integrates threat intelligence, defensive operations, secure architecture principles, and cyber risk governance — delivering coherent capability across the full spectrum from technical analyst to institutional decision-maker.",
    ],
    areasOfFocus: [
      "Critical national infrastructure protection",
      "Cyber defence operations and incident response",
      "Threat intelligence and adversary tracking",
      "Secure systems architecture",
      "Cyber risk governance for institutions",
      "Awareness and security culture programmes",
    ],
    howWeEngage:
      "Quantum Intel delivers cyber security capability through residential training programmes, executive-level governance workshops, and advisory support for institutional cyber posture assessments. Engagements range from multi-day residential programmes for technical and operational staff to half-day board-level briefings on cyber risk governance.",
    trainingSlug: "cyber-security",
    adjacent: [
      { title: "Military Intelligence", slug: "military-intelligence" },
      { title: "Artificial Intelligence", slug: "artificial-intelligence" },
    ],
    seo: {
      title: "Cyber Security & Infrastructure Defence — Quantum Intel",
      description:
        "Quantum Intel delivers cyber security and infrastructure defence training for governments, security agencies, and corporate institutions across Africa.",
    },
  },
  {
    slug: "artificial-intelligence",
    number: "04",
    title: "Artificial Intelligence for Defence & Security",
    shortTitle: "Artificial Intelligence",
    definition:
      "Applied AI training for defence, security, and intelligence environments.",
    overview: [
      "Artificial intelligence is reshaping the operational environment across every domain in which Quantum Intel works — intelligence analysis, cyber operations, strategic communications, and the conduct of modern warfare itself. The institutions that navigate this transition effectively will be defined by the quality of their capability development, not the sophistication of their procurement.",
      "Quantum Intel's artificial intelligence capability development is designed for the defence, security, and intelligence professional — not the data scientist. We focus on applied AI: how AI tools and systems change the practice of intelligence analysis, how adversaries are deploying AI capabilities, how institutions should govern and evaluate AI adoption, and what the operational implications of AI are for decision-makers at every level.",
      "Content is grounded in practical application and delivered by faculty with direct experience of AI in defence, intelligence, and security contexts — not management consultants or academic theorists.",
    ],
    areasOfFocus: [
      "Foundations of AI and machine learning for non-technical leaders",
      "Applied AI in intelligence analysis",
      "AI in defence and security operations",
      "AI governance, ethics, and risk",
      "Adversarial AI and the threat landscape",
      "Procurement and evaluation of AI capabilities",
    ],
    howWeEngage:
      "Quantum Intel delivers artificial intelligence capability development across three formats: foundational programmes for senior leaders without technical backgrounds, practitioner-level programmes for analysts and operations staff integrating AI tools, and executive advisory engagements for institutions managing AI adoption and procurement decisions.",
    trainingSlug: "artificial-intelligence",
    adjacent: [
      { title: "Cyber Security & Infrastructure Defence", slug: "cyber-security" },
      { title: "Emerging Technologies in Modern Warfare", slug: "emerging-technologies" },
    ],
    seo: {
      title: "Artificial Intelligence for Defence & Security — Quantum Intel",
      description:
        "Quantum Intel delivers applied artificial intelligence training for defence, security, and intelligence institutions — analysis, operations, governance, and risk.",
    },
  },
  {
    slug: "emerging-technologies",
    number: "05",
    title: "Emerging Technologies in Modern Warfare",
    shortTitle: "Emerging Technologies",
    definition:
      "Capability development across the technologies reshaping contemporary conflict.",
    overview: [
      "The operational environment has been fundamentally altered by a set of converging technology developments: the mass proliferation of uncrewed systems, the militarisation of space, the growing importance of the electromagnetic spectrum, and the emerging capabilities enabled by quantum technologies and autonomous systems. African security institutions must understand and adapt to this environment — not as a future consideration, but as a present operational reality.",
      "Quantum Intel's emerging technologies capability development is designed to give defence planners, intelligence analysts, and security leaders the conceptual and practical frameworks to assess, respond to, and eventually develop doctrine around these technologies. We focus on the operational implications of emerging technology, not the engineering — building the analytical capacity to understand what these capabilities mean for the African security environment.",
      "Our faculty include practitioners with direct experience in uncrewed systems, electronic warfare, space operations, and technology horizon scanning across both defence and intelligence contexts.",
    ],
    areasOfFocus: [
      "Uncrewed systems and counter-uncrewed systems",
      "Space and the contested orbital environment",
      "Electronic warfare and the electromagnetic spectrum",
      "Quantum technologies in security contexts",
      "Autonomy, robotics, and human-machine teaming",
      "Technology horizon scanning for defence planners",
    ],
    howWeEngage:
      "Quantum Intel delivers emerging technologies capability development through structured briefing programmes for senior decision-makers, practitioner-level training across specific technology domains, and strategic advisory engagements covering technology horizon scanning and procurement evaluation. All formats are calibrated to the institutional mandate and seniority profile of the client.",
    trainingSlug: "emerging-technologies",
    adjacent: [
      { title: "Artificial Intelligence", slug: "artificial-intelligence" },
      { title: "Military Intelligence", slug: "military-intelligence" },
    ],
    seo: {
      title: "Emerging Technologies in Modern Warfare — Quantum Intel",
      description:
        "Quantum Intel delivers training on the emerging technologies reshaping modern warfare — uncrewed systems, space, electronic warfare, and autonomy.",
    },
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
