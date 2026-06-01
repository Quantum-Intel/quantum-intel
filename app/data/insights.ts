export type Article = {
  slug: string;
  title: string;
  capability: string;
  capabilityLabel: string;
  capabilitySlug: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: number;
  excerpt: string;
  body: string[];
  featured: boolean;
};

export const articles: Article[] = [
  {
    slug: "ai-in-african-intelligence-analysis",
    title: "Applied AI in African Intelligence Analysis",
    capability: "artificial-intelligence",
    capabilityLabel: "Artificial Intelligence",
    capabilitySlug: "artificial-intelligence",
    author: "Quantum Intel Faculty",
    authorRole: "Faculty, Artificial Intelligence",
    date: "2026-04-15",
    readingTime: 9,
    featured: true,
    excerpt:
      "The integration of artificial intelligence into intelligence analysis workflows presents both significant opportunity and distinct institutional risk. This piece examines the current state of applied AI in African intelligence contexts and the capability requirements for responsible adoption.",
    body: [
      "The adoption of artificial intelligence in intelligence analysis is no longer a future consideration for African security institutions. AI-enabled tools for open-source intelligence exploitation, pattern recognition across large datasets, and automated translation are already available commercially, and adversaries — state and non-state — are actively deploying them. The question for African intelligence organisations is not whether to engage with AI, but how to do so in a way that strengthens rather than degrades analytic capability.",
      "The risk of AI in intelligence analysis is not primarily a technical risk. It is a tradecraft risk. When analysts rely on AI-generated summaries without understanding the model's limitations, when automated tools replace rather than support structured analytic reasoning, or when institutions procure AI capabilities without the governance frameworks to manage them, the result is a degradation of the analytic function — not an enhancement. This is the pattern we are already seeing in intelligence organisations globally, and it is a pattern African institutions must deliberately work to avoid.",
      "The foundational requirement is analytic literacy — not technical literacy. Senior analysts and intelligence leaders need to understand what AI tools can and cannot do in an intelligence context: where they add genuine value in processing and exploitation, where they introduce bias and error, and where they create new attack surfaces for adversaries. This understanding cannot come from vendor briefings or generic technology training. It must come from practitioner-led capability development grounded in the specific requirements of the intelligence function.",
      "Applied AI in intelligence analysis covers several distinct domains. In open-source intelligence, large language models and computer vision tools have materially accelerated the exploitation of textual, visual, and social media data — reducing the time required to process large volumes of content and enabling analysts to focus on the higher-order analytical task. In signals environments, AI-enabled processing is changing the economics of collection and exploitation. In predictive analytics, AI tools are being deployed — with variable success and significant governance challenges — to forecast threat indicators and identify patterns in historical data.",
      "Each of these domains requires a different set of analytic competencies, governance frameworks, and risk management approaches. The institutions that develop these competencies systematically — through structured training that addresses both capability and limitation — will be substantially better positioned than those that simply procure AI tools and deploy them without the supporting tradecraft infrastructure.",
      "Quantum Intel's approach to AI capability development in intelligence contexts is grounded in applied practice. We work with intelligence organisations to build the analytic literacy, governance frameworks, and practical skills required to use AI tools effectively — while preserving the structured analytic tradecraft that distinguishes professional intelligence analysis from automated data processing.",
    ],
  },
  {
    slug: "information-operations-in-west-africa",
    title: "Information Operations in the West African Security Environment",
    capability: "strategic-communications",
    capabilityLabel: "Strategic Communications",
    capabilitySlug: "strategic-communications",
    author: "Quantum Intel Faculty",
    authorRole: "Faculty, Strategic Communications",
    date: "2026-03-22",
    readingTime: 12,
    featured: false,
    excerpt:
      "The West African security environment has become a contested terrain for information operations by state and non-state actors. This analysis examines the patterns, actors, and institutional responses required to navigate this environment effectively.",
    body: [
      "Information operations in West Africa have reached a level of sophistication and scale that demands a structured institutional response from governments, security agencies, and major corporate organisations operating in the region. What was once a marginal concern — the province of foreign policy analysts and technology researchers — has become a core operational challenge for institutions across every sector.",
      "The actors conducting these operations are diverse: external state actors pursuing strategic influence objectives, domestic political actors seeking to manipulate the information environment ahead of electoral cycles, terrorist and insurgent organisations using digital platforms for recruitment, financing, and propaganda, and criminal networks exploiting the same infrastructure for fraud and social engineering at scale. Each category of actor uses the information environment differently, but all are operating in an environment where the barriers to entry are low and the institutional capacity to respond remains under-developed.",
      "The patterns are well-established. Coordinated inauthentic behaviour — networks of fake accounts designed to amplify particular narratives — has been documented extensively in Nigeria, Ghana, Senegal, and across the Sahel. Foreign state actors, most notably from outside the continent, have run sustained influence operations targeting West African publics on issues ranging from security force deployments to electoral legitimacy. Disinformation campaigns during security crises have undermined public trust in institutions and complicated crisis communications for security agencies and governments.",
      "The institutional response to date has been inadequate — not from lack of commitment, but from a structural capability gap. Most government communications functions and security agency public affairs offices are oriented toward traditional broadcast media. They lack the monitoring infrastructure to detect information operations at scale, the analytic tradecraft to attribute operations and assess their impact, and the rapid response protocols to counter disinformation before it metastasises across platform ecosystems.",
      "Closing this gap requires capability development that is specific, practitioner-led, and grounded in the actual information environment that West African institutions must navigate. Generic digital communications training is insufficient. What is required is structured capability in information environment assessment — the ability to monitor, characterise, and analyse the information environment as a strategic terrain — combined with counter-disinformation tradecraft adapted to the specific platform dynamics, language environments, and actor profiles of the West African context.",
      "Quantum Intel's strategic communications capability development addresses precisely this gap: building the institutional capacity to assess the information environment, design effective strategic narratives, and execute counter-disinformation responses that are grounded in tradecraft rather than reactive media management.",
    ],
  },
  {
    slug: "cyber-threats-to-african-critical-infrastructure",
    title: "Cyber Threats to African Critical Infrastructure: 2025 Assessment",
    capability: "cyber-security",
    capabilityLabel: "Cyber Security",
    capabilitySlug: "cyber-security",
    author: "Quantum Intel Faculty",
    authorRole: "Faculty, Cyber Security & Infrastructure Defence",
    date: "2026-02-18",
    readingTime: 11,
    featured: false,
    excerpt:
      "Critical infrastructure across Africa — energy, finance, telecoms — faces a materially elevated cyber threat environment. This assessment reviews the 2025 threat landscape and the capability gaps facing African institutions in response.",
    body: [
      "The 2025 cyber threat assessment for African critical infrastructure presents a significantly elevated risk picture compared to any prior assessment period. The convergence of three trends — the rapid digitisation of African critical infrastructure, the growing sophistication of threat actors targeting the continent, and the persistent under-investment in defensive cyber capability — has created conditions for high-impact incidents that most African institutions are not adequately prepared to manage.",
      "The critical infrastructure sectors facing the most acute threat are financial services, energy, and telecommunications. Nigerian banking infrastructure was the target of multiple sophisticated intrusion attempts during 2025, with at least two incidents involving advanced persistent threat actors demonstrating nation-state-level capabilities. Energy infrastructure across the region faces both espionage-focused intrusions targeting operational intelligence and disruptive attacks against operational technology systems. Telecom operators face a distinctive threat profile — their infrastructure is both a target in its own right and a vector for attacks against downstream sectors.",
      "The threat actor landscape has diversified materially. Ransomware operators targeting African organisations increased their activity significantly in 2025, driven by the perception that African institutions are less likely to have mature incident response capabilities and therefore more likely to pay. Nation-state actors from multiple countries are conducting persistent intrusion campaigns against African government and commercial targets. Insider threat remains systematically underestimated — the majority of significant incidents reviewed involved some element of insider facilitation, whether deliberate or through negligence.",
      "Against this threat picture, the defensive capability of most African critical infrastructure operators remains insufficient. Security operations centre functions, where they exist, are often under-resourced and under-trained. Threat intelligence programmes are rare outside the largest financial institutions. Incident response planning is frequently either absent or not exercised. Governance frameworks for cyber risk at board level are immature in most sectors outside banking, where regulatory pressure has driven some improvement.",
      "The capability development required to close these gaps is not primarily a technology problem. The tools for effective cyber defence are widely available. The gap is in the human capability to deploy, manage, and leverage those tools — the analysts who can run a security operations centre, the threat intelligence practitioners who can track adversary activity, the executives who can manage cyber risk at institutional scale. Quantum Intel's cyber security capability development is designed to build this human capability in a structured, practitioner-led way, calibrated to the specific threat environment and institutional context of African critical infrastructure operators.",
    ],
  },
  {
    slug: "uncrewed-systems-sub-saharan-africa",
    title: "Uncrewed Systems and the Evolving Threat in Sub-Saharan Africa",
    capability: "emerging-technologies",
    capabilityLabel: "Emerging Technologies",
    capabilitySlug: "emerging-technologies",
    author: "Quantum Intel Faculty",
    authorRole: "Faculty, Emerging Technologies",
    date: "2026-01-30",
    readingTime: 8,
    featured: false,
    excerpt:
      "The proliferation of uncrewed aerial and ground systems has fundamentally altered the tactical and operational calculus for security forces across Sub-Saharan Africa. This piece examines the current state of the threat and the counter-UAS capability requirements for African militaries.",
    body: [
      "The proliferation of uncrewed aerial systems across Sub-Saharan African conflict environments has been one of the most significant tactical developments of the past three years. What began as the deployment of commercial off-the-shelf quadcopters for intelligence, surveillance, and reconnaissance by non-state armed groups has evolved into a more sophisticated threat that now includes modified commercial systems for weapons delivery, first-person-view drones used in precision strikes, and the emergence of locally-produced systems adapted to specific operational requirements.",
      "The operational impact has been significant. Security forces across the Sahel, the Lake Chad Basin, and the Horn of Africa have reported ISR degradation as armed groups use small UAS to monitor force movements and counter military operations in real time. The psychological impact of even relatively unsophisticated drone activity on conventional military formations has been marked. And the asymmetric economics of the threat — a $500 commercial drone versus the cost of the defensive measures required to defeat it — creates a structural challenge that cannot be resolved through equipment procurement alone.",
      "The counter-UAS capability requirements for African militaries span multiple domains: detection and identification of UAS threats across a range of operational environments; electronic warfare capabilities for jamming and spoofing; kinetic and directed energy defeat mechanisms appropriate to the operational context; and, critically, the command and control frameworks required to integrate these capabilities into existing operational doctrine. Most African militaries currently have limited capability across all of these domains.",
      "The doctrine dimension is often underweighted in capability development discussions. Counter-UAS is not simply a technical capability — it requires changes to how units are organised, how they train, how they manage the electromagnetic spectrum, and how they integrate information from multiple detection systems. Developing this doctrinal understanding at the officer and senior NCO level is as important as acquiring the physical systems.",
      "Quantum Intel's emerging technologies capability development addresses this gap through structured programmes that build the conceptual and doctrinal understanding required for effective counter-UAS operations — grounded in the specific operational environments and force structures of African militaries, and delivered by faculty with direct operational experience in this domain.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
