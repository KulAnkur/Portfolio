export const social = {
  github: "https://github.com/KulAnkur",
  linkedin: "https://www.linkedin.com/in/ankurkul95/",
};

export const perspectives = {
  software: {
    number: "01",
    label: "Software + AI",
    eyebrow: "THE SOFTWARE & AI ENGINEER",
    headline: ["Thoughtful code.", "Intelligent", "systems."],
    description:
      "I’m Ankur. I turn complex problems into reliable software — from scalable data platforms to AI that makes everyday work better.",
    caption: "From an idea to a system that delivers.",
    stack: ["Python", "TypeScript", "React", "PyTorch", "PostgreSQL", "Docker"],
    metrics: [
      { value: "99.9%", label: "Service uptime", context: "GovRecover" },
      { value: "25K+", label: "Records enriched", context: "USC Marshall" },
      { value: "4+", label: "State data systems", context: "GovRecover" },
    ],
  },
  autonomy: {
    number: "02",
    label: "Autonomy + AI",
    eyebrow: "THE AUTONOMOUS SYSTEMS & AI ENGINEER",
    headline: ["Beyond the code.", "Into the", "real world."],
    description:
      "I’m Ankur. I connect AI with the physical world — exploring safer autonomy through drone simulation, resilient controls, and real-time intelligence.",
    caption: "From intelligent decisions to safer motion.",
    stack: ["Python", "C++", "ROS 2", "PX4", "CARLA", "PyTorch"],
    metrics: [
      { value: "4", label: "Sensor attack types", context: "Drone simulation" },
      {
        value: "30%",
        label: "Stability improvement",
        context: "CARLA simulation",
      },
      {
        value: "85/85",
        label: "Simulated tests passed",
        context: "Privacy prototype",
      },
    ],
  },
};

export const projects = [
  {
    id: "recruitment",
    category: "software",
    type: "AI AUTOMATION",
    title: "Recruitment, reimagined.",
    subtitle: "AI-powered recruitment intelligence",
    description:
      "From unstructured resumes to structured decisions. An end-to-end workflow for parsing, matching, and evaluating candidates.",
    tags: ["LangChain", "LLM agents", "REST APIs"],
    artwork: "pipeline",
    metric: "End-to-end",
    metricLabel: "recruitment workflow",
    problem:
      "Recruitment teams work across unstructured job descriptions, candidate resumes, and disconnected applicant tracking systems.",
    approach:
      "Connected ATS data through REST APIs, then used prompt-chained LLM agents to extract skills, distinguish required and optional criteria, and apply explicit state-level constraints. Structured evaluation considers technical depth, experience recency, domain alignment, and measurable impact.",
    outcome:
      "The workflow produces normalized fit scores, ranked candidate summaries, interview questions, and cloud-hosted reports with automated stakeholder notifications.",
  },
  {
    id: "pulse",
    category: "software",
    type: "APPLIED MACHINE LEARNING",
    title: "AI. Closer to the patient.",
    subtitle: "PulseAI · local medical dialogue inference",
    description:
      "A fine-tuned language model with local inference, designed to keep sensitive medical conversations on device.",
    tags: ["Llama 3", "PyTorch", "Docker"],
    artwork: "neural",
    metric: "25K",
    metricLabel: "medical training dialogues",
    problem:
      "Medical dialogue applications need useful contextual responses while limiting exposure of sensitive queries to external services.",
    approach:
      "Fine-tuned Llama-3-8B on 25,000 medical dialogues with Hugging Face’s parameter-efficient fine-tuning framework. Packaged inference with a Dockerized Text Generation Inference server for offline operation.",
    outcome:
      "Built a local inference prototype that can handle contextual queries without an external API call. This is a technical project, not a clinically validated medical product.",
  },
  {
    id: "housing",
    category: "software",
    type: "DATA ENGINEERING",
    title: "Data with a human impact.",
    subtitle: "Post-wildfire housing analysis · USC Marshall",
    description:
      "Turning fragmented property listings into a clearer picture of housing and recovery after the Los Angeles wildfires.",
    tags: ["Python", "Azure Maps", "Pandas"],
    artwork: "data",
    metric: "500+",
    metricLabel: "ZIP codes analyzed",
    problem:
      "Understanding post-wildfire housing trends requires connecting fragmented listings with geographic and disaster impact data.",
    approach:
      "Designed Python pipelines to collect Zillow listings across more than 500 ZIP codes. Used Azure Maps geocoding and Pandas transformations to enrich over 25,000 fire-affected records.",
    outcome:
      "Improved housing trend accuracy by 30% and built visual reports to help stakeholders explore relationships between wildfire damage and property values.",
    url: "https://github.com/KulAnkur/Zillow_Scrape",
  },
  {
    id: "droneclaw",
    category: "autonomy",
    type: "AUTONOMOUS SYSTEMS · SIMULATION",
    title: "Intelligence. With guardrails.",
    subtitle: "DroneClaw · drone safety & mission planning",
    description:
      "AI mission planning meets safety-aware flight control, with every command checked before it reaches the simulated drone.",
    tags: ["ROS 2", "PX4", "Safety systems"],
    artwork: "drone",
    metric: "Layered",
    metricLabel: "command validation",
    problem:
      "High-level AI mission plans can contain malformed or unsafe commands. Flight execution needs a separate layer of checks and recovery behavior.",
    approach:
      "Connected AI mission planning to PX4 through ROS 2 in a simulator-based prototype. Validated command structure, geofences, altitude and velocity limits, and emergency overrides before flight execution.",
    outcome:
      "Explored telemetry monitoring and hold, return-to-launch, and landing responses to navigation anomalies and communication loss. Persistent logs capture commands, telemetry, and safety events. Validation was simulation-based.",
  },
  {
    id: "sensor-defense",
    category: "autonomy",
    type: "CYBER-PHYSICAL SECURITY · SIMULATION",
    title: "When sensors can’t be trusted.",
    subtitle: "Drone sensor attack & defense",
    description:
      "Stress-testing closed-loop flight against GPS, IMU, time-of-flight, and optical-flow attacks — then designing for recovery.",
    tags: ["PID control", "Anomaly detection", "Telemetry"],
    artwork: "radar",
    metric: "4",
    metricLabel: "sensor attack types",
    problem:
      "Spoofed navigation sensors can cause trajectory drift and unstable flight. A controller must detect corruption and transition toward safer behavior.",
    approach:
      "Built a 3D point-mass drone simulator with three-axis PID control, obstacle avoidance, and figure-eight tracking. Simulated individual and combined sensor attacks, then added residual-based anomaly monitoring and recovery logic.",
    outcome:
      "Observed reduced drift and oscillation with defense enabled, with gradual recovery toward the reference trajectory. Live telemetry and event logs support post-mission analysis. Results are from simulation.",
  },
  {
    id: "cruise",
    category: "autonomy",
    type: "AUTONOMOUS VEHICLES · SIMULATION",
    title: "A little more foresight.",
    subtitle: "Adaptive cruise control in CARLA",
    description:
      "Combining classical control with learned motion prediction for smoother, more stable vehicle following in simulation.",
    tags: ["CARLA", "LSTM", "PyTorch"],
    artwork: "road",
    metric: "30%",
    metricLabel: "improved stability in simulation",
    problem:
      "Reactive cruise control can overshoot when the lead vehicle changes speed. Short-term motion prediction offers an additional signal for control.",
    approach:
      "Implemented a hybrid PID + LSTM cruise-control system in CARLA. Trained a PyTorch LSTM on simulated lead-vehicle telemetry and integrated real-time inference through CARLA’s Python API.",
    outcome:
      "Improved stability by 30% and reduced PID overshoot in simulation while maintaining inter-vehicle distance under variable speeds.",
  },
];

export const experience = [
  {
    company: "Arco/Murray",
    role: "AI Developer",
    date: "JAN 2026 — PRESENT",
    current: true,
    description:
      "Connecting field operations with intelligent automation. Building error-resilient Procore integrations and backend services that turn site activity into accurate, real-time manpower reports.",
    tags: ["API integration", "Automation", "OAuth"],
  },
  {
    company: "GovRecover",
    role: "Software Engineer",
    date: "JUN 2025 — JAN 2026",
    description:
      "Built modular ETL pipelines for unclaimed property data across 4+ U.S. state systems. Worked with a team of five engineers to scale ingestion infrastructure with 99.9% service uptime.",
    tags: ["TypeScript", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    company: "USC Marshall",
    role: "Software Engineer",
    date: "JAN 2025 — AUG 2025",
    description:
      "Made complex housing data useful for post-disaster research. Built pipelines covering 500+ ZIP codes and enriched 25K+ records to support housing analysis after the LA wildfires.",
    tags: ["Python", "Azure Maps", "Data pipelines"],
  },
];
