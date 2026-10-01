// Projects shown on the site. Add `role` to describe your own contribution,
// and `demo` for a live link once one exists.
export const projects = [
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
    demo: '',
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
]
