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
  meta,
  starbucks,
  tesla,
  inha,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  SahandEstate,
  CrwnClothing,
  InvoiceApp,
  ishop,
  professor,
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
    title: 'Full-stack Developer',
    company_name: 'Epik Company',
    icon: shopify,
    iconBg: '#383E56',
    date: 'September 2023 - Present',
    points: [
      'I have worked as a Freelancer to develop web applications using JavaScript, React and Nodejs and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Research Assistant',
    company_name: 'Inha University',
    icon: inha,
    iconBg: '#E6DEDD',
    date: 'February 2023 - June 2023',
    points: [
      'Assisted research in the field of Artificial Intelligence and Marketing.',
      'Presented research findings and contributed to writing research papers, showcasing effective communication skills and the ability to disseminate research outcomes to the scientific community.',
      'Conducting experiments, surveys, interviews, or observational studies, and ensuring that data is collected accurately and ethically.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'I have known Azamat for two years and can attest to his strengths and quality of character. He distinguished himself by working exceptionally hard in my course: Artificial intelligence.',
    name: 'Vijay Kakani',
    designation: 'Assistant Professor',
    company: 'Inha University',
    image: professor,
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
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
