import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  inha,
  moitech,
  shopify,
  threejs,
  ishop,
  professor,
  yuldashev,
  umidjon,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'MERN Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer',
    company_name: 'Epik Company',
    icon: shopify,
    iconBg: '#383E56',
    date: 'May 2023 - May, 2024',
    url: 'https://epik.uz',
    points: [
      'I have worked as a Freelancer to develop web applications using JavaScript, React and Nodejs and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Moitech Company',
    icon: moitech,
    iconBg: '#E6DEDD',
    date: 'June 2024 - November 2024',
    url: 'https://www.moitech.kr',
    points: [
      'Developed and optimized responsive web applications using React, Material UI, TailwindCSS, and Redux. Ensured visually engaging and user-friendly experiences tailored to modern web standards.',
      'Implemented robust, real-time communication features utilizing MQTT over WebSockets to support seamless data updates and interactivity.',
      'Developed, and maintained backend services with Java, Spring Boot, and Hibernate, focusing on efficient and secure data processing using MariaDB and MySQL.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Highly skilled developer. He is a great fit to be a part of your organization and can surprise you with how quickly he acclimates to the new team.',
    email: 'yuldashev021201@gmail.com',
    name: 'Mukhammad Yusuf',
    designation: 'Engineer',
    company: 'CAD-IT Korea co. Ltd',
    image: yuldashev,
  },
  {
    testimonial:
      'I know Azamat for two years and can attest to his strengths and quality of character. He showed himself working hard in my course: Artificial intelligence.',
    email: 'vjkakani@inha.ac.kr',
    name: 'Vijay Kakani',
    designation: 'Professor',
    company: 'Inha University',
    image: professor,
  },
  {
    testimonial:
      "His creativity and technical skills are top-notch. We're thrilled with the results and will definitely work with him again. Highly recommended!",
    email: 'uziyatdinov@gmail.com',
    name: 'Umidjon Ziyatdinov',
    designation: 'Engineer',
    company: "Worker's High co.Ltd",
    image: umidjon,
  },
];

const projects = [
  {
    name: 'Ishop Market',
    description:
      'A platform for buying and selling products online, including seller admin dashboard to handle your e-commerce business.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ishop,
    source_code_link: 'https://github.com/azamatpro/ishop',
    web_code_link: 'https://ishop-market.vercel.app',
  },
];

export { services, technologies, experiences, testimonials, projects };
