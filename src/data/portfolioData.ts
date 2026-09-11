import { 
  KnifeToolConfig, 
  ProjectCaseStudy, 
  ResearchTopic, 
  LifeExperience, 
  SkillCategory, 
  EducationEntry, 
  CertificationEntry 
} from '../types';

export const KNIFE_TOOLS: KnifeToolConfig[] = [
  {
    id: 'blade',
    mode: 'make',
    name: 'Main Blade',
    handwrittenLabel: 'things i’ve built',
    shortAction: 'MAKE',
    pivot: { x: 380, y: 70 },
    closedAngle: 180,
    openAngle: 25,
    hoverLift: 8,
    side: 'top',
    description: 'Digital products, software frameworks & AI experiments built from zero.',
    figNum: 'FIG. 01'
  },
  {
    id: 'scissors',
    mode: 'create',
    name: 'Scissors',
    handwrittenLabel: 'things i’ve made',
    shortAction: 'CREATE',
    pivot: { x: 380, y: 70 },
    closedAngle: 180,
    openAngle: 68,
    hoverLift: 7,
    side: 'top',
    description: 'Founder brands, design logic, garments for tall humans, and visual craft.',
    figNum: 'FIG. 02'
  },
  {
    id: 'screwdriver',
    mode: 'build',
    name: 'Screwdriver',
    handwrittenLabel: 'things i’ve engineered',
    shortAction: 'BUILD',
    pivot: { x: 380, y: 70 },
    closedAngle: 180,
    openAngle: 110,
    hoverLift: 6,
    side: 'top',
    description: 'Workflows, decision engines, system architectures and automated pipelines.',
    figNum: 'FIG. 03'
  },
  {
    id: 'awl',
    mode: 'investigate',
    name: 'Awl / Punch',
    handwrittenLabel: 'things i’ve investigated',
    shortAction: 'INVESTIGATE',
    pivot: { x: 380, y: 620 },
    closedAngle: 180,
    openAngle: 142,
    hoverLift: 6,
    side: 'bottom',
    description: 'Deconstructive industry sector maps, valuation theses & commodity research.',
    figNum: 'FIG. 04'
  },
  {
    id: 'bottle-opener',
    mode: 'venture',
    name: 'Bottle Opener',
    handwrittenLabel: 'things i’ve tried to turn into businesses',
    shortAction: 'VENTURE',
    pivot: { x: 380, y: 620 },
    closedAngle: 180,
    openAngle: 112,
    hoverLift: 7,
    side: 'bottom',
    description: '0-to-1 commercial partnerships, B2B procurement portals & dealer networks.',
    figNum: 'FIG. 05'
  },
  {
    id: 'small-tool',
    mode: 'live',
    name: 'Small Tool',
    handwrittenLabel: 'things i did because they mattered',
    shortAction: 'LIVE',
    pivot: { x: 380, y: 620 },
    closedAngle: 180,
    openAngle: 48,
    hoverLift: 6,
    side: 'bottom',
    description: 'Hindustani music, theatre, 20k-person festivals, volunteering & forensics of life.',
    figNum: 'FIG. 06'
  },
  {
    id: 'key-ring',
    mode: 'me',
    name: 'Key Ring',
    handwrittenLabel: 'the person behind all this',
    shortAction: 'ME',
    pivot: { x: 380, y: 620 },
    closedAngle: 0,
    openAngle: 0,
    hoverLift: 8,
    side: 'bottom',
    description: 'Curiosity index, education, verified skills, certifications & contact line.',
    figNum: 'FIG. 07'
  }
];

export const SQI_PROJECT: ProjectCaseStudy = {
  id: 'sqi',
  title: 'Service Quality Intelligence',
  mode: 'make',
  year: '2026',
  type: 'Deterministic AI Measurement System + Browser Extension',
  tagline: 'Know the quality behind the rating that actually matters.',
  question: 'In a class, I was told the service industry is difficult to quantify because customer reviews and ratings are inherently noisy, subjective, and distorted by recency bias. That made me ask: Can service quality actually be measured more systematically?',
  problem: 'Consumer review platforms aggregate subjective 1-to-5 star ratings into raw arithmetic means. This produces critical distortion: Volume Conflation (a 4.8★ with 30 reviews looks identical to a 4.8★ with 30,000 reviews), Dimensional Invisibility (food quality, wait times, hygiene, and room cleanliness are collapsed into one single number), and Recency Blindness (management or chef departures 3 months ago are washed out by 5 years of historical review momentum).',
  idea: 'Replace opaque user-generated star ratings with an open, mathematically deterministic scoring framework grounded in operational parameters, disaggregated service dimensions, and statistical evidence quality weights.',
  build: 'Built an end-to-end service measurement specification (v1.0) calibrated against 50 Mumbai restaurant & luxury hotel benchmark properties (including The Oberoi Mumbai and The Taj Mahal Palace). Formulated 6 disaggregated service dimensions: Accommodation Quality, Guest Experience, Operational Reliability, Service Consistency, Perceived Value, and Trust & Hygiene. Developed confidence scoring (0-100), uncertainty intervals (±1 pts), and trend stability tracking. Paired this with a working Chrome Extension that injects live SQI intelligence widgets directly into Google Search results and Google Maps when visitors look up hotels or restaurants.',
  evidenceSummary: 'Complete web application suite + functioning Chrome browser extension overlaying Google Search results in real-time.',
  liveUrl: 'https://servicequalityintelligence.ai.studio/',
  outcome: 'The product worked with impressive precision. The scoring framework disaggregated complex customer feedback cleanly, and the browser extension brought deterministic quality scores straight into the user’s search workflow without leaving Google.',
  whatFailed: 'The extension worked better than the business model. While technically effective, commercial monetization was difficult because visitors and businesses were increasingly turning to generic AI tools to summarize text reviews on demand. Building a standalone paid subscription for review intelligence was difficult to defend without proprietary distribution.',
  realization: 'Building a technically functional product and building a commercially defensible product are two entirely different problems.',
  artifacts: [
    {
      id: 'sqi-1',
      title: 'SQI Intelligence Platform (Mumbai Registry)',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (163).png',
      mockType: 'sqi-home',
      caption: 'Initial calibrated registry of 50 Mumbai properties: 25 restaurants and 25 luxury hotels with standardized service metrics.',
      annotation: '“I was told services are hard to quantify. So I tried to quantify them.”',
      annotationPosition: 'top',
      badge: 'V1.0 LIVE REGISTRY'
    },
    {
      id: 'sqi-2',
      title: 'The Mathematical Specification & Premise',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (164).png',
      mockType: 'sqi-methodology',
      caption: 'Documented failure modes of star ratings: Volume Conflation, Dimensional Invisibility, and Recency Blindness.',
      annotation: 'Deterministic math > subjective thumbs-up.',
      annotationPosition: 'left',
      badge: 'METHODOLOGY'
    },
    {
      id: 'sqi-3',
      title: 'Disaggregated Property Benchmark Matrix',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (165).png',
      mockType: 'sqi-compare',
      caption: 'Side-by-side comparative analysis of The Oberoi Mumbai (SQI 96/100, Grade A+, 98% Confidence, 97% Coverage, Uncertainty: ±1 pts).',
      annotation: 'Uncertainty intervals prevent statistical overconfidence.',
      annotationPosition: 'right',
      badge: 'BENCHMARK MATRIX'
    },
    {
      id: 'sqi-4',
      title: '50-Property Search & Live Rankings Modal',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (166).png',
      mockType: 'sqi-home',
      caption: 'Instant search console indexing 50 Mumbai venues with platform star ratings directly contrasted against calculated SQI scores (e.g. Fiona 95 vs Fi’lia 76 despite both having 4.9★).',
      annotation: '4.9★ vs 4.9★: Seeing what the rating alone misses.',
      annotationPosition: 'bottom',
      badge: 'MUMBAI RANKINGS'
    },
    {
      id: 'sqi-5',
      title: 'SQI Chrome Extension Setup & City Hub',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (167).png',
      mockType: 'sqi-extension',
      caption: 'Browser extension v1.0.0 managing real-time Google Search overlay toggles, manual lookups, and multi-city expansion across Mumbai, Delhi, Bangalore, and Goa.',
      annotation: '“Putting the intelligence right where people search.”',
      annotationPosition: 'top',
      badge: 'CHROME EXTENSION'
    },
    {
      id: 'sqi-6',
      title: 'Google Search Live Overlay Extension',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (169).png',
      mockType: 'sqi-extension',
      caption: 'Chrome extension actively parsing Google Search for “The Taj Mahal Palace, Mumbai” and rendering SQI score (94/100, Grade A) with 6-dimension breakdown and 100% confidence.',
      annotation: 'The build was about putting the data where people actually make decisions.',
      annotationPosition: 'bottom',
      badge: 'GOOGLE OVERLAY'
    }
  ],
  tags: ['Deterministic Math', 'Browser Extension', 'Service Quality', 'Product Design', 'Commercial Lesson']
};

export const SPECULATE_PROJECT: ProjectCaseStudy = {
  id: 'speculate',
  title: 'Speculate',
  mode: 'make',
  year: '2026',
  type: 'Scientific Evidence Quality Appraisal Experiment',
  tagline: 'Is your research lying to you?',
  question: 'Everyone reads the abstract and stops there. But how good is the evidence actually underneath the research paper?',
  problem: 'In exercise science, nutrition, and dietary supplements, the literature is riddled with structural failure modes: underpowered acute trials, industry-funded supplement trials with self-reported outcomes, animal models extrapolated directly to humans, and abstract conclusions that contradict the paper’s own statistical limitations.',
  idea: 'A research-appraisal tool that ingests study text, DOIs, or PDFs, dissects the experimental methodology against established research quality benchmarks, flags unscientific or hyperbolic language, and computes an objective Evidence Reliability Score.',
  build: 'Created a scoring framework evaluating papers across 5 core research dimensions: Study Design (25 pts), Sample & Statistical Rigor (20 pts), Duration & Real-World Relevance (15 pts), Population & Generalizability (13 pts), and Funding & Conflicts of Interest (15 pts). Built an automated analysis pipeline with red-flag detection (e.g. cherry-picked citations, missing control groups, lack of pre-registration).',
  evidenceSummary: 'Live web interface evaluating contrasting scientific literature with clear numerical and qualitative distinctions.',
  liveUrl: 'https://speculate.lovable.app/',
  outcome: 'Successfully demonstrated how drastically papers diverge beneath polished abstracts. In test benchmarks, a narrative Ashwagandha review scored 13/100 (Unreliable/Insufficient due to rodent extrapolation and hyperbolic language), whereas a 14-trial Creatine meta-analysis with matched placebos scored 76/100 (Moderate Evidence).',
  whatFailed: 'Scientific evidence appraisal has deep nuances that automated rule-based frameworks cannot fully resolve without domain-specific meta-regression and human peer refereeing.',
  realization: 'Most popular health debates aren’t debates about biology — they are debates about poorly designed studies.',
  artifacts: [
    {
      id: 'spec-1',
      title: 'Speculate Research Appraisal Console',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (171).png',
      mockType: 'speculate-eval',
      caption: 'Ingestion console supporting PDF drops, DOI links (e.g. 10.1186/s12970-021-00412-w), and raw abstracts with 10–30s failure-mode evaluation.',
      annotation: '“Is your research lying to you? Built for the failure modes that plague exercise & nutrition science.”',
      annotationPosition: 'top',
      badge: 'APPRAISAL ENGINE'
    },
    {
      id: 'spec-2',
      title: 'Paper Evaluation: Ashwagandha Narrative Review (13/100)',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (172).png',
      mockType: 'speculate-eval',
      caption: 'Evaluation of Ashwagandha paper flagged as Unreliable/Insufficient (13/100) with 4 critical red flags: rodent extrapolation, cherry-picked narrative, missing COI disclosures, and hyperbolic marketing claims.',
      annotation: '“Sweeping claims built on rodent models and cherry-picked trials.”',
      annotationPosition: 'left',
      badge: 'UNRELIABLE / 13 PTS'
    },
    {
      id: 'spec-3',
      title: 'Disaggregated Category Breakdown (Ashwagandha)',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (173).png',
      mockType: 'speculate-eval',
      caption: '5-dimensional methodological score dissection: Study Design (2/25), Sample & Statistical Rigor (0/20), Duration & Relevance (3/15), Population (2/13), Funding & COI (3/15).',
      annotation: '0/20 on statistical rigor: no original sample size, power calculations, or control comparators.',
      annotationPosition: 'right',
      badge: '5-DIMENSION BREAKDOWN'
    },
    {
      id: 'spec-4',
      title: 'High-Rigor Contrast: Creatine Supplementation Meta-Analysis (76/100)',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (174).png',
      mockType: 'speculate-compare',
      caption: 'Benchmarked against a 14-RCT systematic review and meta-analysis on creatine scoring 76/100 (Moderate Evidence), earning 24/25 on Study Design with matched placebos.',
      annotation: '13 vs 76: Revealing how drastically papers diverge beneath polished abstracts.',
      annotationPosition: 'bottom',
      badge: 'MODERATE EVIDENCE / 76 PTS'
    }
  ],
  tags: ['Research Methodology', 'Scientific Appraisal', 'Evidence Rigor', 'Health Science']
};

export const NBFC_ENGINE_PROJECT: ProjectCaseStudy = {
  id: 'nbfc-engine',
  title: 'NBFC Loan Origination Engine',
  mode: 'build',
  year: '2026',
  type: 'Automated Credit Decision Architecture (Make.com + JavaScript)',
  tagline: 'How far can an institutional loan decision be turned into an autonomous workflow?',
  question: 'Could a multi-step credit assessment process — document ingestion, bureau checks, knockout policies, debt-to-income analysis, and sanction letters — be completely automated without sacrificing risk prudence?',
  problem: 'Traditional non-banking financial companies (NBFCs) spend hours manually downloading application forms, cross-checking credit scores against static policies, calculating FOIR (Fixed Obligation to Income Ratio), and drafting repetitive approval or rejection emails.',
  idea: 'Design a modular, auditable digital loan origination engine that ingests loan files from Google Drive, retrieves bureau parameters, executes programmatic knockout gates in JavaScript, logs decisions to an audit trail, and issues customized legal sanction or rejection notices automatically.',
  build: 'Engineered a 9-module workflow scenario on Make.com (Scenario 7146849). Integrated Google Drive file watcher and document parsers with Google Sheets database tables. Developed a custom JavaScript decision engine evaluating knockout rules (minimum bureau cutoffs, delinquency history), weighted scorecard algorithms, risk-based pricing, EMI calculation, and loan-to-income caps. Configured a dynamic router with Gmail nodes generating formal sanction letters or itemized rejection notices citing specific failed criteria.',
  evidenceSummary: 'Actual Make.com visual workflow scenario blueprint, JSON execution logic, and automated email dispatch architecture.',
  outcome: 'Demonstrated complete end-to-end automation of the underwriting lifecycle for retail credit applications in an academic and demonstration sandbox.',
  whatFailed: 'Edge cases involving unconventional document formats or irregular self-employed income streams still required human underwriter intervention.',
  realization: 'The hardest part of credit automation is not scoring the good borrowers; it is creating watertight knockout rules that politely reject high-risk borrowers with legal auditability.',
  roleExplanation: 'Academic & demonstration system built to explore programmatic credit origination. Not deployed in live banking production.',
  artifacts: [
    {
      id: 'nbfc-1',
      title: 'Make.com Underwriting Orchestration',
      type: 'screenshot',
      imageUrl: '/images/projects/nbfc/Screenshot (181).png',
      mockType: 'nbfc-make-flow',
      caption: 'Make.com Scenario 7146849: Automated NBFC Loan Origination Engine showing Google Drive file watcher, Google Sheets ingestion, Make Code (JS decision engine), Sheets audit logging, conditional router, and dual Gmail sanction/rejection dispatch.',
      annotation: '“this is a loan approval system for an NBFC built on Make.com.”',
      annotationPosition: 'top',
      badge: 'MAKE.COM SCENARIO 7146849'
    }
  ],
  tags: ['Workflow Automation', 'Make.com', 'Credit Underwriting', 'JavaScript Engine', 'NBFC Systems']
};

export const TONERSCART_PROJECT: ProjectCaseStudy = {
  id: 'tonerscart',
  title: 'TonersCart',
  mode: 'venture',
  year: '2024–2025',
  type: 'Commercial B2B Marketplace & Public Procurement Portal',
  tagline: 'We weren’t just building another printer store. We organized a fragmented printing procurement ecosystem.',
  question: 'Why is commercial printing procurement in India — across corporate offices, legal institutions, and government bodies — still plagued by opaque dealer cartels, counterfeit consumables, and manual GST quotation rounds?',
  problem: 'Institutional printing involves heavy consumable consumption (toners, drums, paper, MFDs). Traditional buyers struggle with price transparency, verified OEM warranties, GST quotation compliance (L1/L2/L3 comparisons), and structured 30-day credit terms.',
  idea: 'Build a unified multi-category digital marketplace for hardware and consumables, integrated with a specialized government and enterprise procurement portal that automates formal quotation generation and credit management.',
  build: 'As Director of Strategic Partnerships, drove 0-to-1 business strategy, GTM execution, and dealer network expansion. Onboarded 20+ major hardware and consumable dealers across Delhi NCR and Mumbai. Structured a landmark institutional partnership with the Karnataka High Court, delivering verified supply lines and transparent procurement. Guided feature definition for the procurement portal: automated L1/L2/L3 price comparisons, instant formal 7-day GST PDF quotations, and PO upload tracking.',
  evidenceSummary: 'Live marketplace catalog with Brother, Canon, HP hardware alongside the specialized Government & Corporate Procurement Portal.',
  liveUrl: 'https://www.tonerscart.com/',
  outcome: 'Organized reliable supply channels, validated marketplace demand across both public sector and private institutional buyers, and established verified dealer credibility.',
  whatFailed: 'Corporate credit terms (30-60 days) in traditional Indian B2B procurement impose heavy working-capital strain on early-stage marketplace operations.',
  realization: 'In B2B commerce, marketplace software is secondary to trust, localized distribution, and reliable supplier relationships.',
  roleExplanation: 'Role: Director of Strategic Partnerships (business strategy, dealer onboarding, institutional accounts, GTM). The underlying software was built collaboratively with engineering teams.',
  artifacts: [
    {
      id: 'tc-1',
      title: 'TonersCart Digital Marketplace',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (177).png',
      mockType: 'tonerscart-home',
      caption: 'Pan-India marketplace covering Toners, Printers, MFDs, MPS Rentals, Inks & Consumables, Bulk Orders, Dealer-to-Dealer, and Govt Portal.',
      annotation: '“We weren’t just building another printer store.”',
      annotationPosition: 'top',
      badge: 'B2B MARKETPLACE'
    },
    {
      id: 'tc-2',
      title: 'Institutional Hardware & Multi-Brand Catalog',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (178).png',
      mockType: 'tonerscart-catalog',
      caption: 'Verified multi-brand inventory (Brother laser series: MFC-B7810DW, DCP-B7640DW, DCP-B7620DW, DCP-B7600DW) with live regional warehouse stock and GST-inclusive pricing.',
      annotation: 'Real stock, verified dealers, transparent pricing.',
      annotationPosition: 'right',
      badge: 'PRODUCT CATALOG'
    },
    {
      id: 'tc-3',
      title: 'Government & Corporate Procurement Portal',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (179).png',
      mockType: 'tonerscart-procurement',
      caption: 'Dedicated institutional procurement portal: verified Government & Corporate sign-in, automated L1/L2/L3 lowest-price comparison, formal 7-day GST PDF quotations, and 30-day credit accounts.',
      annotation: '“...then there was the procurement side. And the dealer ecosystem.”',
      annotationPosition: 'bottom',
      badge: 'ENTERPRISE PORTAL'
    },
    {
      id: 'tc-4',
      title: 'Institutional Verification & Credit Workflow',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (180).png',
      mockType: 'tonerscart-procurement',
      caption: '3-stage B2B procurement engine: 01 Register & 1-day credential review, 02 L1/L2/L3 comparative quotation generation, 03 30-day NEFT/RTGS credit lines with official PO upload & tracking.',
      annotation: 'Structuring institutional trust for public sector & enterprise buyers.',
      annotationPosition: 'bottom',
      badge: '3-STEP PROCUREMENT'
    }
  ],
  tags: ['B2B Marketplace', 'Strategic Partnerships', 'Govt Procurement', 'GTM Strategy', 'Karnataka High Court']
};

export const LANKY_KID_PROJECT: ProjectCaseStudy = {
  id: 'diary-of-a-lanky-kid',
  title: 'Diary of a Lanky Kid',
  mode: 'create',
  year: '2025',
  type: 'Direct-to-Consumer Apparel Brand & Editorial Storytelling',
  tagline: 'Pants that actually reach my ankles.',
  question: 'I am 6’3”. For 20 years, every pair of pants I bought betrayed me at the bottom of an escalator. Why does the apparel industry treat tall people as if they are simply wider, rather than longer?',
  problem: 'Mass apparel brands scale garment length linearly with waist size. A tall, lean individual with a 30-32” waist is forced to buy oversized 36” waists just to get sufficient inseam length — resulting in ill-fitting, baggy silhouettes.',
  idea: 'Create Diary of a Lanky Kid: an honest, notebook-styled DTC brand crafting trousers, chinos, and joggers engineered specifically for tall, lean builds, framed through self-deprecating diary entries and playful visual design.',
  build: 'Developed the brand identity, product narrative, and custom sizing matrix. Designed flagship pieces including “The Endless Track” — custom track pants offering waist sizes from 28” to 44” paired with specialized tall inseams (36”, 38”, 40”, 42”). Crafted the brand website with an interactive notebook aesthetic, hand-drawn stick figure illustrations, and editorial storytelling.',
  evidenceSummary: 'Live DTC brand storefront, founder story narrative, and custom inseam selection architecture.',
  liveUrl: 'https://diarlyofalankykid.lovable.app/',
  outcome: 'Proved the resonance of hyper-niche positioning. Customers who struggled with standard retail sizing immediately bonded with the authentic, non-corporate storytelling.',
  whatFailed: 'Garment manufacturing minimum order quantities (MOQs) for non-standard inseams require significant upfront capital and inventory commitments.',
  realization: 'The best brands don’t start with TAM slides. They start when someone is genuinely annoyed enough by a personal problem to make the thing themselves.',
  artifacts: [
    {
      id: 'dlk-1',
      title: 'Brand Cover & Founder Diary Entry',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (175).png',
      mockType: 'lanky-home',
      caption: 'Notebook-styled storefront: “Pants that actually reach my ankles. Hi. I’m 6’3”. For 20 years every pair of pants I owned betrayed me at the bottom of an escalator.”',
      annotation: '“I had the problem, couldn’t find the product, so I started the brand.”',
      annotationPosition: 'top',
      badge: 'FOUNDER STORY'
    },
    {
      id: 'dlk-2',
      title: 'The Endless Track & Custom Inseam Sizing Engine',
      type: 'screenshot',
      imageUrl: '/images/projects/Screenshot (176).png',
      mockType: 'lanky-shop',
      caption: 'Product configurator for The Endless Track: Soft brushed cotton, deep pockets, non-disappearing drawstrings, and tall inseams reaching up to 42”.',
      annotation: '“actual pants will be less squiggly.”',
      annotationPosition: 'bottom',
      badge: 'CUSTOM INSEAM SIZING'
    }
  ],
  tags: ['Founder Story', 'DTC Brand', 'Product Design', 'Niche Apparel', 'Editorial Tone']
};

export const NBFC_SECTOR_MAP: ResearchTopic = {
  id: 'nbfc-sector-map',
  title: 'NBFC Sector Map: Anatomy of the Lending Value Chain',
  year: '2026',
  headline: '19 slides. One argument. A lot of numbers.',
  deckSummary: 'A comprehensive structural dissection of the Indian Non-Banking Financial Company (NBFC) ecosystem, decomposing lending into a five-stage value chain to determine where enduring economic profit and risk actually concentrate.',
  stages: [
    '01 · Raise Capital (Cost of borrowing, credit ratings & ALM matching)',
    '02 · Find the Borrower (Origination channels, DSA networks & CAC)',
    '03 · Decide (Underwriting depth, bureau coverage & credit risk modeling)',
    '04 · Collect (Collection efficiency, soft touches & automated mandates)',
    '05 · Recover (Legal repossession, SARFAESI, haircuts & auction recovery)'
  ],
  findings: [
    'Value does not sit evenly across the chain: Pure origination (fintechs finding borrowers) is constantly commoditized, while capital access and collections create the actual moat.',
    'Underwriting without feet-on-the-ground collections fails in semi-urban tier-3/4 markets where informal cash flows dominate.',
    'Asset-Liability Mismatch (ALM) remains the existential threat that destroys NBFC equity, not minor default rate variations.'
  ],
  honestWeakness: 'The thesis assumes historical liquidity conditions and does not fully model sudden regulatory shocks by the RBI on unsecured personal lending risk weights.',
  lesson: 'A great research deck is not an encyclopedia; it is a thesis defended with forensic evidence.',
  artifacts: [
    {
      id: 'deck-1',
      title: '19-Slide Lending Value Chain Thesis',
      type: 'slide',
      mockType: 'nbfc-deck',
      caption: 'Five-stage lending value chain decomposition examining margin retention from wholesale borrowing to NPA recovery.',
      annotation: '“Where does the margin actually hide?”',
      annotationPosition: 'top',
      badge: '19-SLIDE RESEARCH DECK'
    }
  ]
};

export const OTHER_RESEARCH: ResearchTopic[] = [
  {
    id: 'indian-urea',
    title: 'The Political Economy of Indian Urea Subsidies',
    year: '2025',
    headline: 'Subsidies, Soil Toxicity, and Supply Chain Distortion',
    deckSummary: 'An investigation into India’s heavily distorted fertilizer subsidy regime: how the fixation of maximum retail prices for urea induces agricultural over-use, disrupts the NPK ratio, and inflates government fiscal deficits while harming long-term farm productivity.',
    findings: [
      'The current direct benefit transfer system still leaks value through diversion to industrial and non-agricultural sectors.',
      'Soil nutrient imbalances (NPK ratio skewed to 8:3:1 vs ideal 4:2:1) directly depress crop yields despite rising fertilizer consumption.'
    ],
    honestWeakness: 'Agricultural reform in India is politically constrained; economic efficiency models often ignore farm-union vote bank dynamics.',
    lesson: 'In policy research, if an economic solution ignores electoral incentives, it isn’t a solution.'
  },
  {
    id: 'car-buying',
    title: 'Automotive Purchasing Decision Matrix',
    year: '2025',
    headline: 'Deconstructing Total Cost of Ownership vs. Emotional Preference',
    deckSummary: 'A quantitative decision model evaluating Indian passenger car choices across 30+ parameters: depreciation curves, real-world fuel economy vs ARAI claims, safety ratings (Bharat NCAP), service network density, and 5-year resale value.',
    findings: [
      'Buyers consistently underweight 3-year depreciation and insurance renewal increments relative to upfront dealer discounts.'
    ],
    honestWeakness: 'Subjective driving feel and cabin ergonomics cannot be perfectly scored in a spreadsheet.',
    lesson: 'People buy cars with emotion and justify them with arithmetic.'
  }
];

export const LIFE_EXPERIENCES: LifeExperience[] = [
  {
    id: 'cultural-forum',
    title: 'University Cultural Forum',
    role: 'Subhead of Organizing → Security Head',
    organization: 'Somaiya Cultural Forum',
    period: '2023–2025',
    fig: 'FIG. 08',
    highlights: [
      'Managed ground logistics, crowd management, and multi-team coordination for a 20,000+ attendee university festival.',
      'Coordinated security perimeters, local law enforcement coordination, and emergency crisis protocols.',
      'Directly supervised 60+ student volunteers across stage, backstage, and campus gates.'
    ],
    anecdote: 'When 20,000 people show up for a concert, your fancy spreadsheet matters much less than how calmly you react when a gate barricade starts wobbling.',
    artifacts: [
      {
        id: 'photo-fest',
        title: 'Festival Organizing Committee & Security Council',
        type: 'photo',
        imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 7.22.41 PM.jpeg',
        mockType: 'photo-fest',
        caption: 'With the student organizing council and core team after managing the 20,000-attendee annual university festival.',
        annotation: 'Logistics, crowd safety, and crisis management under pressure.',
        badge: 'CULTURAL FORUM'
      }
    ]
  },
  {
    id: 'interact-club',
    title: 'Interact Club & Social Service League',
    role: 'President',
    organization: 'Interact / Social Service League',
    period: '2021–2023',
    fig: 'FIG. 09',
    highlights: [
      'Led a 20-member core volunteer council executing community outreach, youth empowerment, and mental health awareness programs.',
      'Organized direct educational workshops and creative arts sessions impacting 200+ underprivileged school children.',
      'Spearheaded campus environmental sustainability and donation drives.'
    ],
    anecdote: 'Sitting on the floor with 40 school kids drawing posters taught me more about genuine communication than any business presentation.',
    artifacts: [
      {
        id: 'photo-interact-1',
        title: 'Art & Expression Workshop with Children',
        type: 'photo',
        imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 7.23.17 PM.jpeg',
        mockType: 'photo-interact',
        caption: 'Conducting creative expression, drawing, and storytelling sessions on the floor with young students.',
        annotation: 'The most grounding work I’ve ever done.',
        badge: 'PRESIDENT · INTERACT'
      },
      {
        id: 'photo-interact-2',
        title: 'Educational Outreach at the Children’s Home',
        type: 'photo',
        imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 7.24.14 PM.jpeg',
        mockType: 'photo-interact',
        caption: 'Full-group session with the children and volunteer team during the December outreach visit to the children’s home.',
        annotation: 'Service is showing up, repeatedly.',
        badge: 'COMMUNITY OUTREACH'
      },
      {
        id: 'photo-interact-3',
        title: 'Mindfulness & Group Activity Session',
        type: 'photo',
        imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 7.23.32 PM (1).jpeg',
        mockType: 'photo-interact',
        caption: 'Guided mindfulness and group activity circle with the children during the outreach program.',
        annotation: 'They taught me as much as I taught them.',
        badge: 'YOUTH ENGAGEMENT'
      }
    ]
  },
  {
    id: 'theatre',
    title: 'Theatre & Stage Acting',
    role: 'Core Member & Actor',
    organization: 'Campus Dramatics Society',
    period: '2022–2025',
    fig: 'FIG. 10',
    highlights: [
      'Performed in full-length stage productions across comedy, drama, and experimental street theatre.',
      'Mastered vocal projection, improvisational timing, emotional calibration, and ensemble discipline.'
    ],
    anecdote: 'Putting on Joker makeup backstage before stepping out into blinding stage spotlights is the ultimate cure for social anxiety.',
    artifacts: [
      {
        id: 'photo-theatre-1',
        title: 'Stage Production in Motion',
        type: 'photo',
        imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 7.07.30 PM - Copy.jpeg',
        mockType: 'photo-theatre',
        caption: 'Full-length ensemble stage production under dramatic stage lighting with physical freeze-frame choreography.',
        annotation: 'Presence, timing, and holding an audience.',
        badge: 'STAGE PERFORMANCE'
      },
      {
        id: 'photo-theatre-2',
        title: 'Backstage Makeup & Preparation',
        type: 'photo',
        imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 7.07.45 PM - Copy.jpeg',
        mockType: 'photo-theatre-joker',
        caption: 'Backstage before stepping onto the stage for an experimental character piece with theatrical Joker smile makeup.',
        annotation: 'Zero stage fright left after this.',
        badge: 'BACKSTAGE'
      }
    ]
  },
  {
    id: 'classical-music',
    title: 'Hindustani Classical Vocal Music',
    role: 'Trained Vocalist & Tanpura Accompanist',
    organization: 'Indian Classical Tradition',
    period: 'Long-standing Practice',
    fig: 'FIG. 11',
    highlights: [
      'Trained in traditional Hindustani Classical vocal discipline, raga architecture, and tala rhythms.',
      'Performed classical recitals accompanying vocalists with the Tanpura in front of live cultural audiences.'
    ],
    anecdote: 'Raga music forces you to listen twice as hard as you speak. If your note is 2 millimeters off pitch, the whole harmony collapses.',
    artifacts: [
      {
        id: 'photo-music',
        title: 'Live Hindustani Classical Recital',
        type: 'photo',
        imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 7.09.13 PM - Copy.jpeg',
        mockType: 'photo-music',
        caption: 'Performing on stage playing the Tanpura during a traditional evening classical concert recital.',
        annotation: 'Patience, pitch, and listening before producing sound.',
        badge: 'HINDUSTANI CLASSICAL'
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Business & Strategy',
    description: 'Deconstructing markets, structuring ambiguous opportunities, and commercial deal-making.',
    items: [
      'Business Strategy & 0-to-1 Execution',
      'Strategic Partnerships & B2B GTM',
      'Market Research & Sector Mapping',
      'Competitive Intelligence',
      'Product Strategy & Positioning',
      'Customer Discovery & Insights',
      'Financial Modeling & Value Chains'
    ]
  },
  {
    category: 'Technical & Analytical',
    description: 'Transforming logic into functioning systems, automated workflows, and research algorithms.',
    items: [
      'Workflow Automation (Make.com / Zapier)',
      'Prompt Engineering & LLM Systems',
      'AI-Assisted Fullstack Prototyping',
      'Microsoft Excel (Advanced Financial Models)',
      'Data Analysis & Visualization (Tableau)',
      'R Programming for Statistical Analysis',
      'JavaScript Engine Scripting',
      'Deterministic Scoring Architecture'
    ]
  }
];

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    institution: "Masters' Union",
    degree: 'PGP in Technology & Business Management',
    period: '2026–Present',
    location: 'Gurugram, Haryana',
    details: "Young Leader's Cohort · Building hands-on venture experiments, financial systems, and technology solutions."
  },
  {
    institution: 'Dr. Shantilal K Somaiya School of Commerce and Business Studies',
    degree: 'Bachelor of Business Administration (BBA)',
    period: '2023–2026',
    location: 'Mumbai, Maharashtra',
    details: 'CGPA: 7.99 · Subhead of Organizing @ Cultural Forum · Leadership in campus initiatives.'
  },
  {
    institution: "St. Joseph's Indian Composite Pre-University College",
    degree: 'Class XII (Pre-University)',
    period: '2021–2023',
    location: 'Bengaluru, Karnataka',
    details: 'Score: 86.16% · Commerce & Economics concentration.'
  },
  {
    institution: 'Chatrabhuj Narsee Memorial School & N.D. Parekh ICSE',
    degree: 'Class X (ICSE)',
    period: '2018–2019',
    location: 'Mumbai, Maharashtra',
    details: 'Score: 89.50% · Foundation in mathematics, science, and literature.'
  }
];

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    title: 'Certified Personal Trainer (CPT)',
    issuer: 'National Academy of Sports Medicine (NASM)',
    note: 'Biomechanics, exercise physiology & kinetic chain assessment.'
  },
  {
    title: 'Nutrition & Weight Management for Fitness Professionals',
    issuer: 'National Academy of Sports Medicine (NASM)',
    note: 'Macronutrient metabolism, behavioral nutrition & metabolic health.'
  },
  {
    title: 'NISM Series V-A: Mutual Fund Distributors Certification',
    issuer: 'National Institute of Securities Markets (NISM)',
    note: 'Asset allocation, mutual fund regulations & investor profiling.'
  },
  {
    title: 'The Strategy of Content Marketing',
    issuer: 'University of California, Davis',
    note: 'Audience acquisition, editorial frameworks & brand authority.'
  }
];

export const ACHIEVEMENTS = [
  { metric: '98.60', unit: '%ile', label: 'CAT Examination', sub: 'National percentile' },
  { metric: '99.87', unit: '%ile', label: 'VARC Section', sub: 'Verbal Ability & Reading' },
  { metric: '252', unit: 'Score', label: 'NMAT Examination', sub: '99th percentile band' },
  { metric: '1st', unit: 'Place', label: 'Just A Minute', sub: 'Extempore speaking contest' },
  { metric: 'Runner-Up', unit: 'Award', label: 'Fresher of the Year', sub: 'Somaiya University' },
  { metric: 'Gold', unit: 'Medal', label: 'Chess Championship', sub: 'Inter-collegiate tournament' }
];

export const PERSONAL_PHOTOS = [
  {
    id: 'photo-formal',
    title: 'Vedanth Bhat',
    type: 'photo' as const,
    imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 6.51.11 PM - Copy.jpeg',
    mockType: 'photo-formal' as const,
    caption: 'Formal portrait · 2026',
    annotation: '“I get curious. Then I usually make the mistake of trying to build something about it.”',
    annotationPosition: 'top' as const,
    badge: 'PORTRAIT'
  },
  {
    id: 'photo-presentation',
    title: 'Speaking on Mind & Strategy · Masters’ Union',
    type: 'photo' as const,
    imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 6.53.13 PM - Copy.jpeg',
    mockType: 'photo-presentation' as const,
    caption: '“Our life is shaped by our mind; we become what we think.” — Buddha. Live speaking presentation & extempore competition at Masters’ Union.',
    annotation: 'Comfortable under the lights.',
    annotationPosition: 'right' as const,
    badge: 'SPEAKING COMPETITION'
  },
  {
    id: 'photo-mentorship',
    title: 'At Masters’ Union · Academic & Faculty Mentorship',
    type: 'photo' as const,
    imageUrl: '/images/life/WhatsApp Image 2026-09-10 at 6.51.23 PM - Copy.jpeg',
    mockType: 'photo-mentorship' as const,
    caption: 'Classroom discussion with faculty mentor and leadership at Masters’ Union, Gurugram.',
    annotation: 'Asking questions that don’t have neat answers.',
    annotationPosition: 'bottom' as const,
    badge: 'MASTERS’ UNION'
  }
];
