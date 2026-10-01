// Projects shown on the site. Add `role` to describe your own contribution,
// and `demo` for a live link once one exists.
export const projects = [
  {
    title: 'Digital Logbook',
    subtitle: 'Customisable project logbook for students',
    context: 'COMS3011A Software Design Project · Team project',
    description:
      'A web app that replaces a paper logbook, helping students track their projects, the work they have done, the time spent and what is still to do. Each project defines its own entry format, so users choose the fields and value types an entry holds instead of being forced into one fixed structure.',
    highlights: [
      'Versioned, customisable entry formats with tags, checklists, links and computed fields',
      'Statistics with custom expressions like SUM({Hours}) / COUNT(), a personal dashboard, and calendar and board views',
      'Offline capture with sync, recurring entries, automation rules, push reminders and Google Calendar sync',
      'TypeScript monorepo with shared Zod schemas, JWT auth with 2FA, tested with Vitest and built in CI on every push',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Vitest'],
    repo: 'https://sdp.ms.wits.ac.za/no-boys-just-bugs/coms3011a-logbook-digital-logbook',
    demo: 'https://coms3011a-logbook.pages.dev',
  },
  {
    title: 'OrderUp',
    subtitle: 'Campus food ordering platform',
    context: 'COMS3009A Software Design · Team project',
    description:
      'A full-stack web platform that cuts food-court queues on campus. Students browse vendor menus, pay online and track their orders in real time (Received → Preparing → Ready), with push notifications when food is ready. Vendors manage menus and live orders from a dashboard with sales and peak-hour analytics, and admins approve or suspend vendors.',
    highlights: [
      'Modular Express + TypeScript REST API (auth, menu, cart, orders, payments, notifications, analytics)',
      'Google sign-in, Paystack payments and Web Push notifications',
      'PostgreSQL on Azure, tested with Jest and Supertest, CI with GitHub Actions',
    ],
    tech: ['React', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Azure', 'Paystack', 'Jest'],
    repo: 'https://github.com/Campus-Food-Ordering-Platform/OrderUp',
    demo: 'https://order-up-rho.vercel.app/',
  },
  {
    title: 'Bistro Rush: Culinary Mayhem',
    subtitle: '3D browser cooking game',
    context: 'COMS3006A Computer Graphics & Visualisation · Team project · In progress',
    description:
      'A 3D cooking game that runs in the browser. Players grab ingredients, cook them before they burn, assemble dishes and serve customers before they walk out, across three themed levels: a daylight burger truck, a lantern-lit noodle bar and a rainy neon diner.',
    highlights: [
      'Custom GLSL shaders for food browning, sloshing liquids, steam, particles and heat-haze post-processing',
      'Event-driven architecture so audio, effects and UI react to gameplay without coupling',
      'Data-driven levels, multiple camera modes, minimap and a low-graphics mode for lab machines',
    ],
    tech: ['JavaScript', 'three.js', 'GLSL', 'Vite'],
    repo: 'https://github.com/WendyAmahle/cgv-3D-game',
    demo: '',
  },
  {
    title: 'Carbon Footprint Tracker',
    subtitle: 'Android app',
    context: 'Mobile app',
    description:
      'An Android app that helps users estimate and monitor the CO₂ emissions of everyday life across transport, food, electricity, flights and waste. Users log activities and see their footprint update as they type, then review weekly trends compared with previous weeks.',
    highlights: [
      'Live CO₂ estimates with unit conversion and category-specific emission factors',
      'Activity history with add, edit and delete, plus colour-coded weekly trends',
      'Java Android client talking to a PHP REST API backed by PostgreSQL',
    ],
    tech: ['Java', 'Android', 'Retrofit', 'PHP', 'PostgreSQL'],
    repo: 'https://github.com/sbongakonke68/CarbonFootprintTracker',
    demo: '',
  },
  {
    title: 'Wearable Sensor Activity Classification',
    subtitle: 'Machine learning on time-series sensor data',
    context: 'COMS3007A Machine Learning · Group assignment',
    description:
      'A machine learning pipeline that classifies activity from wearable sensor recordings. Each sample is a 100-step window of multiple sensor signals, some with dropouts, and the model predicts its activity class for a Kaggle-style submission.',
    highlights: [
      'Exploratory analysis of signal behaviour, correlations and missing data',
      'Per-sample forward/back-fill imputation to handle sensor dropout',
      'Statistical, trend, energy and frequency-domain (FFT) features for every signal',
      'XGBoost classifier evaluated with grouped, stratified 5-fold cross-validation on macro-F1',
    ],
    tech: ['Python', 'pandas', 'NumPy', 'SciPy', 'scikit-learn', 'XGBoost'],
    repo: '',
    demo: '',
  },
  {
    title: 'Parallel Bitonic Sort',
    subtitle: 'Shared- and distributed-memory sorting in C',
    context: 'Parallel Computing · Individual assignment',
    description:
      'Three implementations of bitonic sort, one sequential, one parallelised with OpenMP threads and one distributed across processes with MPI, each validated for correctness and timed to compare performance and speedup.',
    highlights: [
      'OpenMP version with static scheduling and barrier synchronisation between stages',
      'MPI version using Scatter, pairwise Sendrecv exchanges and Gather',
      'Benchmark sweeps across input sizes and thread/process counts, with speedup analysis against a quicksort baseline',
    ],
    tech: ['C', 'OpenMP', 'MPI', 'Linux', 'Make'],
    repo: '',
    demo: '',
  },
]
