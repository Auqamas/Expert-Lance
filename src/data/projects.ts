export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string[];
  gradient: string;
  stack: string[];
  builtBy: string;
  year: string;
  highlight: string;
};

export const projects: Project[] = [
  {
    id: 'url-shortener',
    title: 'ExpertLance LinkForge',
    category: 'System Design · Backend',
    description:
      'A production-grade URL shortener built by ExpertLance with sharded storage, Redis caching, and queue-based click analytics for high-traffic workloads.',
    metrics: ['10M req/day model', 'Redis caching', 'Queue analytics'],
    gradient: 'from-blue-500 to-cyan-500',
    stack: ['Node.js', 'Redis', 'PostgreSQL', 'RabbitMQ'],
    builtBy: 'ExpertLance Engineering Team',
    year: '2025',
    highlight: 'Designed for distributed scale and low-latency redirects.',
  },
  {
    id: 'ai-resume-screener',
    title: 'ExpertLance HireMatch AI',
    category: 'Machine Learning · NLP',
    description:
      'End-to-end resume screening platform developed in-house at ExpertLance with embedding search, role ranking, and recruiter dashboard workflows.',
    metrics: ['NLP pipeline', 'FastAPI backend', 'Model evaluation'],
    gradient: 'from-purple-500 to-pink-500',
    stack: ['Python', 'FastAPI', 'Transformers', 'React'],
    builtBy: 'ExpertLance AI Lab',
    year: '2025',
    highlight: 'Cuts manual screening time with explainable AI scoring.',
  },
  {
    id: 'ecommerce-app',
    title: 'ExpertLance CommerceHub',
    category: 'Full Stack · E-Commerce',
    description:
      'A complete commerce platform built by ExpertLance featuring auth, cart/checkout, payment gateway integration, and admin analytics.',
    metrics: ['React + TypeScript', 'Secure payments', 'Admin dashboard'],
    gradient: 'from-orange-500 to-amber-500',
    stack: ['React', 'TypeScript', 'Stripe', 'Node.js'],
    builtBy: 'ExpertLance Product Team',
    year: '2024',
    highlight: 'Real checkout flow with role-based admin controls.',
  },
  {
    id: 'graph-visualizer',
    title: 'ExpertLance AlgoViz Studio',
    category: 'Computer Science · DSA',
    description:
      'Interactive algorithm visualizer created by ExpertLance to teach BFS, DFS, shortest path, and MST with live complexity overlays.',
    metrics: ['Live animation', 'Complexity overlays', 'Interactive UI'],
    gradient: 'from-green-500 to-emerald-500',
    stack: ['React', 'Canvas API', 'TypeScript'],
    builtBy: 'ExpertLance CS Curriculum Team',
    year: '2024',
    highlight: 'Used in DSA classes for visual learning and debugging.',
  },
  {
    id: 'cyber-lab',
    title: 'ExpertLance CyberRange',
    category: 'Cybersecurity · Training',
    description:
      'Hands-on cyber lab simulator built by ExpertLance where learners practice secure coding, vulnerability detection, and incident response.',
    metrics: ['OWASP scenarios', 'Secure coding drills', 'Attack simulation'],
    gradient: 'from-red-500 to-orange-500',
    stack: ['Docker', 'Node.js', 'React', 'Linux'],
    builtBy: 'ExpertLance Security Team',
    year: '2025',
    highlight: 'Practical cyber exercises mapped to real attack patterns.',
  },
  {
    id: 'lms-platform',
    title: 'ExpertLance LearnOS',
    category: 'EdTech · Platform',
    description:
      'Custom LMS platform engineered by ExpertLance with course modules, assignment tracking, mentor reviews, and student progress analytics.',
    metrics: ['Course modules', 'Mentor reviews', 'Progress analytics'],
    gradient: 'from-indigo-500 to-violet-500',
    stack: ['React', 'PostgreSQL', 'Node.js', 'Tailwind'],
    builtBy: 'ExpertLance Platform Team',
    year: '2024',
    highlight: 'Central system powering cohort-based learning delivery.',
  },
  {
    id: 'iot-dashboard',
    title: 'ExpertLance CircuitWatch',
    category: 'IoT · Embedded + Cloud',
    description:
      'IoT monitoring dashboard built by ExpertLance connecting microcontroller sensor data to cloud APIs with real-time charts and alerts.',
    metrics: ['Live telemetry', 'MQTT ingestion', 'Alert engine'],
    gradient: 'from-cyan-500 to-blue-600',
    stack: ['MQTT', 'ESP32', 'Node.js', 'Chart.js'],
    builtBy: 'ExpertLance Hardware Lab',
    year: '2025',
    highlight: 'Bridges circuits fundamentals with cloud software engineering.',
  },
  {
    id: 'devops-pipeline',
    title: 'ExpertLance DeployFlow',
    category: 'DevOps · CI/CD',
    description:
      'Automated deployment pipeline platform created by ExpertLance with build stages, test gates, rollback support, and release dashboards.',
    metrics: ['CI/CD stages', 'Auto rollback', 'Release metrics'],
    gradient: 'from-slate-600 to-zinc-700',
    stack: ['GitHub Actions', 'Docker', 'Kubernetes', 'Grafana'],
    builtBy: 'ExpertLance DevOps Team',
    year: '2024',
    highlight: 'Standardized release workflow for all internal products.',
  },
  {
    id: 'code-judge',
    title: 'ExpertLance CodeArena',
    category: 'Competitive Programming',
    description:
      'Online coding judge built by ExpertLance with multi-language execution, test-case validation, leaderboard, and timed contest mode.',
    metrics: ['Multi-language run', 'Leaderboard', 'Contest mode'],
    gradient: 'from-fuchsia-500 to-purple-600',
    stack: ['Go', 'Docker', 'React', 'Redis'],
    builtBy: 'ExpertLance Engineering Team',
    year: '2025',
    highlight: 'Powers weekly coding challenges and interview prep.',
  },
  {
    id: 'api-gateway',
    title: 'ExpertLance GatewayX',
    category: 'Backend · Microservices',
    description:
      'API gateway and service mesh layer developed by ExpertLance with rate limiting, auth middleware, and service health monitoring.',
    metrics: ['Rate limiting', 'JWT auth', 'Service health'],
    gradient: 'from-teal-500 to-emerald-600',
    stack: ['Node.js', 'Redis', 'Prometheus', 'Nginx'],
    builtBy: 'ExpertLance Backend Team',
    year: '2024',
    highlight: 'Unified entry point for all ExpertLance microservices.',
  },
  {
    id: 'mobile-learning',
    title: 'ExpertLance PocketLearn',
    category: 'Mobile · Learning App',
    description:
      'Cross-platform mobile learning app built by ExpertLance with offline lesson packs, quiz mode, and daily coding streak tracking.',
    metrics: ['Offline mode', 'Quiz engine', 'Streak tracking'],
    gradient: 'from-yellow-500 to-amber-600',
    stack: ['React Native', 'Firebase', 'TypeScript'],
    builtBy: 'ExpertLance Mobile Team',
    year: '2025',
    highlight: 'Extends classroom learning to mobile-first study habits.',
  },
  {
    id: 'data-pipeline',
    title: 'ExpertLance DataForge',
    category: 'Data Engineering',
    description:
      'ETL and analytics pipeline built by ExpertLance for ingesting learner activity, transforming events, and powering BI dashboards.',
    metrics: ['ETL jobs', 'Event streaming', 'BI dashboards'],
    gradient: 'from-blue-600 to-indigo-700',
    stack: ['Python', 'Airflow', 'Kafka', 'BigQuery'],
    builtBy: 'ExpertLance Data Team',
    year: '2024',
    highlight: 'Turns raw platform events into actionable learning insights.',
  },
];

export const featuredProjects = projects.slice(0, 4);
