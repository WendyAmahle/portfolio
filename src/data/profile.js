// Personal details. Anything marked TODO still needs filling in.
export const profile = {
  name: 'Wendy Amahle',
  role: 'Computer Science Student',
  university: 'University of the Witwatersrand', // TODO: confirm
  graduation: '2026', // TODO: confirm graduation year
  tagline:
    'I build full-stack web apps, mobile apps and real-time 3D graphics, and I enjoy turning everyday problems into working software.',
  about: [
    // TODO: rewrite in your own voice
    'I am a Computer Science student at Wits, looking for a graduate programme where I can keep growing as a software engineer.',
    'Through team projects I have worked across the stack: REST APIs and databases, React front-ends, an Android app, and a 3D browser game with custom shaders. I like clean, well-structured code and working closely with a team using Git, code reviews and CI.',
  ],
  email: 'amahlewendy02@gmail.com',
  github: 'https://github.com/WendyAmahle',
  linkedin: '', // TODO: add LinkedIn URL
  cv: '', // TODO: put cv.pdf in /public and set this to 'cv.pdf'
}

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'SQL', 'GLSL'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'three.js'] },
  { group: 'Backend & Data', items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'] },
  { group: 'Mobile', items: ['Android', 'Retrofit'] },
  { group: 'Tools & Practice', items: ['Git & GitHub', 'GitHub Actions', 'Jest', 'Azure', 'Agile / Scrum'] },
]
