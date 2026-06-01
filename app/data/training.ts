export type TrainingModule = {
  number: string;
  name: string;
  summary: string;
};

export type TrainingProgramme = {
  slug: string;
  title: string;
  isACP: boolean;
  capabilitySlug: string | null;
  capabilityLabel: string | null;
  oneLiner: string;
  overview: string[];
  whoFor: string[];
  outcomes: string[];
  modules: TrainingModule[];
  deliveryFormat: string;
  duration: string;
  seo: { title: string; description: string };
};

export const programmes: TrainingProgramme[] = [
  {
    slug: "advanced-capability-program",
    title: "The Advanced Capability Program",
    isACP: true,
    capabilitySlug: null,
    capabilityLabel: null,
    oneLiner:
      "An integrated capability development programme across the five domains shaping the future of African security and governance.",
    overview: [
      "The Advanced Capability Program is Quantum Intel's flagship offering. It delivers integrated capability development across strategic communications, military intelligence, cyber security and infrastructure defence, artificial intelligence, and emerging technologies in modern warfare.",
      "The programme is designed for institutions that require coordinated uplift across these domains rather than isolated training. It recognises that the most significant capability challenges facing African security and governance institutions are cross-domain — and that standalone training in any single area leaves critical gaps in institutional readiness.",
      "Delivered in cohort formats appropriate to the seniority, mandate, and confidentiality requirements of the participating organisation, the ACP draws on senior practitioners and subject-matter authorities across all five domains. All engagements are conducted with strict confidentiality as a default.",
    ],
    whoFor: [
      "Senior officers and officials with cross-domain responsibilities",
      "Leadership teams within security, intelligence, and defence institutions",
      "Strategy, risk, and security leadership within major corporate organisations",
      "Inter-agency cohorts assembled around a specific national or organisational mandate",
    ],
    outcomes: [
      "Apply the intelligence cycle and analytic tradecraft to institutional decision-making",
      "Assess and respond to the information environment as a strategic terrain",
      "Evaluate cyber risk and infrastructure defence posture at institutional scale",
      "Interpret the operational implications of artificial intelligence and emerging technologies",
      "Develop integrated capability plans across the five domains",
    ],
    modules: [
      {
        number: "01",
        name: "Strategic Communications",
        summary:
          "Strategic narrative, information environment assessment, and counter-influence operations in complex environments.",
      },
      {
        number: "02",
        name: "Military Intelligence",
        summary:
          "The intelligence cycle, analytic tradecraft, structured analytic techniques, and intelligence support to decision-making.",
      },
      {
        number: "03",
        name: "Cyber Security & Infrastructure Defence",
        summary:
          "Critical infrastructure protection, cyber defence operations, threat intelligence, and institutional cyber risk governance.",
      },
      {
        number: "04",
        name: "Artificial Intelligence for Defence & Security",
        summary:
          "Applied AI in analysis and operations, AI governance, adversarial AI, and procurement and evaluation of AI capabilities.",
      },
      {
        number: "05",
        name: "Emerging Technologies in Modern Warfare",
        summary:
          "Uncrewed systems, space, electronic warfare, quantum technologies, and technology horizon scanning for defence planners.",
      },
    ],
    deliveryFormat:
      "In-person residential, private cohort by default. Hybrid and modular formats available by arrangement.",
    duration: "Tailored. Indicative range: 2–6 weeks across modules.",
    seo: {
      title: "Advanced Capability Program — Quantum Intel",
      description:
        "Quantum Intel's flagship integrated programme across strategic communications, military intelligence, cyber security, artificial intelligence, and emerging technologies.",
    },
  },
  {
    slug: "strategic-communications",
    title: "Strategic Communications",
    isACP: false,
    capabilitySlug: "strategic-communications",
    capabilityLabel: "Strategic Communications",
    oneLiner:
      "Training and capability development in strategic communications for institutional clients in complex environments.",
    overview: [
      "The Strategic Communications training programme delivers structured capability development across the full spectrum of institutional communications in security-sensitive environments — from strategic narrative design to operational counter-disinformation.",
      "The programme is built around practitioner-led instruction, case-based analysis drawn from real information environment contests, and structured frameworks that participants can apply directly within their institutions.",
      "Delivered as a standalone programme or as a module within the Advanced Capability Program, the Strategic Communications programme is designed for senior communicators, policy advisors, information operations practitioners, and institutional leaders who must navigate the information environment as a core operational responsibility.",
    ],
    whoFor: [
      "Government communications and public affairs officials",
      "Information operations and psychological operations practitioners",
      "Heads of communications within security agencies and defence formations",
      "Corporate communications and public affairs leaders with security exposure",
      "Policy officials with responsibility for media and information environment strategy",
    ],
    outcomes: [
      "Design and evaluate institutional strategic narratives in complex environments",
      "Conduct structured information environment assessments",
      "Develop and implement counter-disinformation and counter-influence responses",
      "Manage crisis communications under operational and security constraints",
      "Apply public affairs doctrine in security-sensitive institutional contexts",
    ],
    modules: [
      {
        number: "01",
        name: "The Information Environment",
        summary:
          "Structure, actors, and dynamics of the contemporary information environment — state and non-state influence operations.",
      },
      {
        number: "02",
        name: "Strategic Narrative Design",
        summary:
          "Frameworks for developing, testing, and sustaining institutional strategic narratives across audiences and platforms.",
      },
      {
        number: "03",
        name: "Counter-Disinformation",
        summary:
          "Detection, assessment, attribution, and response to disinformation and influence operations.",
      },
      {
        number: "04",
        name: "Crisis Communications",
        summary:
          "Managing institutional communications during crises, incidents, and operational events — protocols and decision frameworks.",
      },
      {
        number: "05",
        name: "Media Engagement Under Constraints",
        summary:
          "Public affairs doctrine and media engagement protocols in security-sensitive and operationally restricted contexts.",
      },
    ],
    deliveryFormat:
      "In-person residential. Private cohort and modular formats available.",
    duration: "Indicative: 3–5 days. Tailored by cohort and format.",
    seo: {
      title: "Strategic Communications Training — Quantum Intel",
      description:
        "Training and capability development in strategic communications for institutional clients — narrative, counter-disinformation, crisis communications.",
    },
  },
  {
    slug: "military-intelligence",
    title: "Military Intelligence",
    isACP: false,
    capabilitySlug: "military-intelligence",
    capabilityLabel: "Military Intelligence",
    oneLiner:
      "Training across the intelligence cycle and analytic tradecraft for defence and security institutions.",
    overview: [
      "The Military Intelligence training programme delivers structured capability development across the core disciplines of the intelligence function — requirements management, collection, processing, analysis, and dissemination — with a strong emphasis on the analytic tradecraft that produces credible, actionable intelligence products.",
      "The programme is built on the premise that intelligence analysis is a professional discipline with structured techniques, not an intuitive skill. Participants are trained in the application of structured analytic techniques, the identification and management of cognitive bias, and the production of intelligence products to the standard required by senior decision-makers.",
      "All content is grounded in the African operational environment and calibrated to the institutional context of defence and security organisations operating across Nigeria and the continent.",
    ],
    whoFor: [
      "Intelligence analysts and all-source analysts in military and security institutions",
      "Intelligence officers with collection and requirements management responsibilities",
      "Operations staff with intelligence support responsibilities",
      "Senior officials requiring a structured understanding of the intelligence function",
      "Defence planning staff with intelligence-dependent responsibilities",
    ],
    outcomes: [
      "Apply the intelligence cycle as an operational management framework",
      "Produce structured analytic intelligence products using validated tradecraft",
      "Conduct open-source intelligence collection and exploitation",
      "Develop and communicate threat assessments to senior decision-makers",
      "Manage intelligence requirements and collection plans for operational support",
    ],
    modules: [
      {
        number: "01",
        name: "The Intelligence Cycle",
        summary:
          "Requirements management, collection planning, processing, exploitation, analysis, and dissemination — applied as an operational management system.",
      },
      {
        number: "02",
        name: "Analytic Tradecraft",
        summary:
          "Structured analytic techniques, cognitive bias identification, argument mapping, and intelligence product standards.",
      },
      {
        number: "03",
        name: "Open-Source Intelligence",
        summary:
          "OSINT collection, verification, exploitation, and integration within the all-source analysis framework.",
      },
      {
        number: "04",
        name: "Geospatial & Signals Fundamentals",
        summary:
          "Foundational literacy in GEOINT and SIGINT collection, exploitation, and integration for the all-source analyst.",
      },
      {
        number: "05",
        name: "Threat Assessment & Warning",
        summary:
          "Frameworks for threat assessment, warning intelligence production, and intelligence support to operational planning.",
      },
    ],
    deliveryFormat:
      "In-person residential. Enhanced confidentiality protocols as standard.",
    duration: "Indicative: 5–10 days. Tailored by cohort seniority and mandate.",
    seo: {
      title: "Military Intelligence Training — Quantum Intel",
      description:
        "Training across the intelligence cycle, analytic tradecraft, and operational decision support for defence and security institutions.",
    },
  },
  {
    slug: "cyber-security",
    title: "Cyber Security & Infrastructure Defence",
    isACP: false,
    capabilitySlug: "cyber-security",
    capabilityLabel: "Cyber Security",
    oneLiner:
      "Cyber security and infrastructure defence training for governments, security agencies, and corporate institutions.",
    overview: [
      "The Cyber Security & Infrastructure Defence training programme delivers capability development across the full spectrum of institutional cyber security — from technical operations and incident response through threat intelligence, secure architecture, and governance.",
      "The programme is designed to build coherent capability across the institution, not just within the technical team. Senior leaders must understand the cyber threat environment at a strategic level; security operations staff must have the tradecraft to respond to incidents and track adversaries; procurement and architecture teams must embed security principles into institutional systems design.",
      "Quantum Intel delivers this breadth through differentiated modules, calibrated to each participant cohort by seniority, technical background, and institutional role.",
    ],
    whoFor: [
      "Chief Security Officers, Chief Information Security Officers, and Heads of Risk",
      "Cyber security operations and incident response teams",
      "National cyber security body staff and government technology officials",
      "Defence and security agency personnel with cyber security responsibilities",
      "Board members and senior executives with cyber risk governance responsibilities",
    ],
    outcomes: [
      "Assess the cyber threat landscape as it applies to the institution's specific infrastructure and sector",
      "Manage cyber incident response through structured operational protocols",
      "Develop and implement threat intelligence programmes for institutional protection",
      "Establish cyber risk governance frameworks appropriate to institutional scale",
      "Evaluate and improve institutional security architecture and culture",
    ],
    modules: [
      {
        number: "01",
        name: "Critical Infrastructure Protection",
        summary:
          "Threat landscape for national and corporate critical infrastructure — sectors, attack patterns, and protective frameworks.",
      },
      {
        number: "02",
        name: "Cyber Defence Operations",
        summary:
          "Security operations centre management, incident response protocols, triage, and post-incident analysis.",
      },
      {
        number: "03",
        name: "Threat Intelligence",
        summary:
          "Adversary tracking, threat intelligence production, intelligence-led defence, and integration with wider intelligence functions.",
      },
      {
        number: "04",
        name: "Secure Systems Architecture",
        summary:
          "Security-by-design principles, zero-trust architecture fundamentals, and security review of institutional systems.",
      },
      {
        number: "05",
        name: "Cyber Risk Governance",
        summary:
          "Board-level cyber risk frameworks, regulatory compliance, incident reporting, and governance structures for cyber security.",
      },
    ],
    deliveryFormat:
      "In-person residential or modular by format. Separate cohorts available for technical and executive audiences.",
    duration: "Indicative: 2–5 days per format. Tailored by cohort and scope.",
    seo: {
      title: "Cyber Security Training — Quantum Intel",
      description:
        "Cyber security and infrastructure defence training for governments, security agencies, and corporate institutions across Africa.",
    },
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence for Defence & Security",
    isACP: false,
    capabilitySlug: "artificial-intelligence",
    capabilityLabel: "Artificial Intelligence",
    oneLiner:
      "Applied AI training for defence, security, and intelligence professionals.",
    overview: [
      "The Artificial Intelligence for Defence & Security training programme delivers practical capability in understanding, evaluating, and applying AI tools and systems in defence, security, and intelligence contexts — without requiring a technical background.",
      "The programme is designed around two primary audiences: senior leaders who must make decisions about AI adoption and governance, and analysts and operations staff who are integrating AI tools into their day-to-day work. Content is practical and applied — grounded in real AI deployments in security contexts, not theoretical frameworks.",
      "Quantum Intel's faculty bring direct experience of AI deployment in intelligence analysis, security operations, and defence applications — delivering content that reflects the actual state of AI in the sectors we serve, not generic technology briefings.",
    ],
    whoFor: [
      "Senior leaders making decisions about AI adoption, procurement, and governance",
      "Intelligence analysts integrating AI tools into analysis workflows",
      "Cyber security and operations staff working with AI-enabled platforms",
      "Policy officials responsible for AI governance and regulation in security contexts",
      "Corporate technology and risk executives with AI exposure in security-adjacent roles",
    ],
    outcomes: [
      "Evaluate AI and machine learning capabilities and their limitations in security contexts",
      "Apply AI tools to enhance intelligence analysis and security operations",
      "Assess the governance and ethical dimensions of AI in institutional contexts",
      "Identify and respond to adversarial AI threats and AI-enabled attack patterns",
      "Lead AI procurement and evaluation processes for defence and security applications",
    ],
    modules: [
      {
        number: "01",
        name: "AI Foundations for Decision-Makers",
        summary:
          "Machine learning, large language models, and computer vision — practical literacy for senior leaders without technical backgrounds.",
      },
      {
        number: "02",
        name: "AI in Intelligence Analysis",
        summary:
          "AI tools in open-source intelligence, data fusion, pattern recognition, and structured analytic support.",
      },
      {
        number: "03",
        name: "AI in Defence & Security Operations",
        summary:
          "AI applications in cyber defence, surveillance, logistics, and operational decision support.",
      },
      {
        number: "04",
        name: "AI Governance, Ethics & Risk",
        summary:
          "Responsible AI frameworks, bias and error in security AI systems, legal and regulatory dimensions, and institutional governance.",
      },
      {
        number: "05",
        name: "Adversarial AI & the Threat Landscape",
        summary:
          "AI-enabled attacks, deepfakes, adversarial inputs, and how adversaries are deploying AI capabilities against institutions.",
      },
    ],
    deliveryFormat:
      "In-person residential. Executive and practitioner cohorts can be run separately or combined.",
    duration: "Indicative: 3–5 days. Tailored by audience profile and depth required.",
    seo: {
      title: "Artificial Intelligence Training — Quantum Intel",
      description:
        "Applied AI training for defence, security, and intelligence professionals — analysis, operations, governance, and risk.",
    },
  },
  {
    slug: "emerging-technologies",
    title: "Emerging Technologies in Modern Warfare",
    isACP: false,
    capabilitySlug: "emerging-technologies",
    capabilityLabel: "Emerging Technologies",
    oneLiner:
      "Capability development on the technologies reshaping modern warfare for defence planners and security leaders.",
    overview: [
      "The Emerging Technologies in Modern Warfare training programme delivers structured capability development for defence planners, security leaders, and intelligence analysts who need to understand and respond to the technology-driven transformation of the operational environment.",
      "The programme covers the technologies that are already reshaping conflict on the African continent and globally — from the proliferation of uncrewed systems and the militarisation of space to the growing importance of electronic warfare and the emerging implications of quantum technologies. Content focuses on operational implications and doctrine development, not engineering.",
      "Quantum Intel's faculty include practitioners with direct operational experience across these technology domains, delivering content grounded in the African security environment and calibrated to the institutional and strategic level at which participants operate.",
    ],
    whoFor: [
      "Defence planners and acquisition officials",
      "Intelligence analysts with technology assessment responsibilities",
      "Senior military and security officials with strategic planning responsibilities",
      "Policy officials responsible for defence technology and modernisation",
      "Corporate security executives with exposure to emerging technology threats",
    ],
    outcomes: [
      "Assess the operational impact of uncrewed systems and counter-UAS capabilities on the African security environment",
      "Evaluate the implications of space and electronic warfare for institutional operations",
      "Apply technology horizon scanning frameworks to institutional planning processes",
      "Develop doctrinal responses to autonomy, robotics, and human-machine teaming",
      "Lead technology acquisition and evaluation processes for emerging capabilities",
    ],
    modules: [
      {
        number: "01",
        name: "Uncrewed Systems & Counter-UAS",
        summary:
          "Proliferation of UAVs, UGVs, and USVs — operational employment, threat assessment, and counter-uncrewed systems doctrine.",
      },
      {
        number: "02",
        name: "Space & the Orbital Environment",
        summary:
          "Military and commercial space capabilities, satellite imagery, space domain awareness, and anti-satellite threats.",
      },
      {
        number: "03",
        name: "Electronic Warfare",
        summary:
          "Electromagnetic spectrum management, jamming, spoofing, signals intelligence, and EW in the African operational context.",
      },
      {
        number: "04",
        name: "Autonomy & Human-Machine Teaming",
        summary:
          "Autonomous systems in defence, decision-making under autonomy, legal and ethical frameworks, and operational integration.",
      },
      {
        number: "05",
        name: "Technology Horizon Scanning",
        summary:
          "Structured frameworks for monitoring, evaluating, and integrating emerging technology developments into defence planning.",
      },
    ],
    deliveryFormat:
      "In-person residential. Available as a standalone programme or as a module within the Advanced Capability Program.",
    duration: "Indicative: 3–5 days. Tailored by seniority and scope.",
    seo: {
      title: "Emerging Technologies Training — Quantum Intel",
      description:
        "Capability development on the technologies reshaping modern warfare — uncrewed systems, space, electronic warfare, and autonomy.",
    },
  },
];

export function getProgrammeBySlug(slug: string): TrainingProgramme | undefined {
  return programmes.find((p) => p.slug === slug);
}
