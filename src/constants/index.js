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
  jobify,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aspnet,
  mysql,
  angular,
  dashboard,
  nft,
  bookhaven,
  twitter,
  bitcoin,
  godad,
  twofoureight,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Dev",
    icon: web,
  },
  {
    title: "UI",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "FullStack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "aspnet",
    icon: aspnet,
  },
  {
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jobify",
    description:
      "A fullstack web application that aims to simulate managing job applications with fully functional CRUD operations",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: jobify,
    source_code_git: "https://github.com/danielirwin99/jobify-mern",
    source_code_link: "https://jobify-mern-p8q4.onrender.com/landing",
  },
  // {
  //   name: "CryptoVault",
  //   description:
  //     "CryptoVault features the top 50 cryptocurrencies and ensures that the displayed up-to-date data is well-structured and constantly refreshed in real time using REST API's. ",

  //   tags: [
  //     {
  //       name: "react",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "rest-api",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: bitcoin,
  //   source_code_git: "https://github.com/danielirwin99/crypto-database",
  //   source_code_link: "https://crypto-database.vercel.app/",
  // },
  {
    name: "2048",
    description:
      "A small mini game project that was created to reproduce the popular '2048' application.",
    subDescription:
      "Built using only vanilla js, html and css this simple but addicting game will keep you chasing that glorious 2048 victory.",
    tags: [
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: twofoureight,
    source_code_git: "https://github.com/danielirwin99/2048",
    source_code_link: "https://2048-lake.vercel.app/",
  },
  {
    name: "Twitter 2.0",
    description:
      " A social media app that simulates the dark mode user interface of the popular website Twitter.",
    subDescription:
      "Built with with latest technology including Next.js with a fully responsive design",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_git: "https://github.com/danielirwin99/twitter-clone",
    source_code_link:
      "https://twitter-clone-aqftg39x5-danielirwin99.vercel.app/",
  },
  {
    name: "SaleTrackr",
    description:
      " A convenient e-commerce app that simulates an online store dashboard with graphical models to display daily revenue",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "react-graphs",
        color: "orange-text-gradient",
      },
    ],
    image: dashboard,
    source_code_git: "https://github.com/danielirwin99/dashboard-project",
    source_code_link: "https://dashboard-project-wine.vercel.app/",
  },
  {
    name: "Ultraverse",
    description:
      "A user friendly NFT marketplace that incorporates processed API requests with Axios represented it through skeleton loading states, pagination and dynamic routing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html5",
        color: "pink-text-gradient",
      },
      {
        name: "git-control",
        color: "orange-text-gradient",
      },
    ],
    image: nft,
    source_code_git: "https://github.com/danielirwin99/daniel-internship",
    source_code_link: "https://daniel-internship.vercel.app/",
  },
  {
    name: "BookHaven",
    description:
      " Built with React framework, BookHaven is a web application that allows users to browse and purchase books from a virtual library.",
    subDescription:
      "The app utilizes the React JavaScript library to create a smooth and interactive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html5",
        color: "pink-text-gradient",
      },
      {
        name: "git-control",
        color: "orange-text-gradient",
      },
    ],
    image: bookhaven,
    source_code_git: "https://github.com/danielirwin99/React-Libarary-Project",
    source_code_link: "https://react-libarary-project.vercel.app/",
  },
  {
    name: "GoDad",
    description:
      "Designed to replicate the popular website domain service 'GoDaddy' with a fully responsive design. ",
    subDescription:
      "This project focused on aesthetics of the landing page incorporating BEM best practices with material-ui styling touches added.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: godad,
    source_code_git: "https://github.com/danielirwin99/go-dad",
    source_code_link: "https://go-dad.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
