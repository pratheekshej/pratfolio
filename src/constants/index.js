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
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    qburst,
    thinkpalm,
    thinkingcode,
    omicon,
    messagebox,
    smartship,
    catos,
    riskcounts,
    prompts,
    nextjs,
    angular,
    // awss3,
    sass,
    aware
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front End Engineer",
        icon: web,
    },
    {
        title: "React.js/Next.js Developer",
        icon: reactjs,
    },
    {
        title: "Angular Developer",
        icon: angular,
    },
    {
        title: "JavaScript/TypeScript Developer",
        icon: typescript,
    },
    {
        title: "HTML/CSS/SCSS Coder",
        icon: css,
    }
];

const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    /* {
        name: "Next JS",
        icon: nextjs,
    }, */
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "SASS",
        icon: sass,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
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
        name: "Node JS",
        icon: nodejs,
    },
    /* {
        name: "MongoDB",
        icon: mongodb,
    }, */
    /* {
        name: "Three JS",
        icon: threejs,
    }, */
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
    /* {
        name: "Angular",
        icon: angular,
    }, */
];

const experiences = [
    {
        title: "Lead Engineer (Front End)",
        company_name: "QBurst",
        icon: qburst,
        iconBg: "#FFF",
        date: "February 5, 2020 - September 29, 2023",
        points: [
            "Spearheaded platform-oriented frontend development, prioritizing user experience, performance optimization, and strict adherence to design guidelines and principles.",
            "Orchestrated seamless collaboration with cross-functional teams, including UX/UI designers (utilizing tools such as Invision and Figma) and backend developers, ensuring integrated and cohesive user experiences for high-quality web solutions.",
            "Implemented responsive web design principles using React.js and Angular, delivering feature-rich and performant applications, and played a key role in building front-end apps via Node.js. Led code reviews, established coding standards, and maintained a streamlined and efficient codebase within Agile development methodologies.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "ThinkPalm Technologies Pvt Ltd",
        icon: thinkpalm,
        iconBg: "#FFF",
        date: "March 18, 2018 - January 31, 2020",
        points: [
            "Pioneered the development of sophisticated web applications with a focus on user-centric design, ensuring optimal frontend performance.",
            "Collaborated closely with design teams to transform UI/UX designs into functional and visually appealing web interfaces, ensuring responsiveness and optimization across diverse devices and browsers.",
            "Implemented Azure AD Authentication/Authorization APIs and services for seamless login functionality, championing best coding practices and enhancing development workflows. Additionally, provided comprehensive training for senior project team members on Angular 5+ framework and Typescript core functionalities.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Thinking Code Technologies Pvt Ltd",
        icon: thinkingcode,
        iconBg: "#FFF",
        date: "Sep 1, 2015 - March 16, 2018",
        points: [
            "Guided the development of frontend components for web applications, ensuring alignment with project design specifications.",
            "Employed version control systems such as Git and SVN to fortify code integrity, orchestrating collaborative development processes with precision.",
            "Coordinated the integration of third-party APIs, optimizing application functionality, and collaborated with cross-functional teams to achieve project objectives.",
        ],
    }
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
        name: "OMICON",
        description: "Led the development in React.js for OMICON, a groundbreaking Data-Science initiative. As the Lead Engineer, I spearheaded the creation of a collaborative platform for the in-depth study of biological systems utilizing omics data. This application facilitates seamless search, retrieval, sharing, and repackaging of digital assets related to biological systems. It enables researchers to collaborate efficiently with tailored read or write access to specific folders and files within a project.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "blue-text-gradient",
            },
            {
                name: "websockets",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "django",
                color: "pink-text-gradient",
            },
            {
                name: "awss3",
                color: "green-text-gradient",
            },
            {
                name: "awslambda",
                color: "green-text-gradient",
            },
            {
                name: "elasticsearch",
                color: "green-text-gradient",
            },
        ],
        image: omicon,
        // source_code_link: "https://github.com/",
    },
    {
        name: "AWARE Safety Solutions",
        description: `Actively involved in the development of AWARE
        which is a cloud based web app developed in Angular 12 for
        web. The app runs with access to real-time data, two-way
        communication, and response capabilities. Road-side safety
        for organizations will be fully equipped to assist employees
        based on detailed and accurate information about their
        location, activity, and condition via sentry devices.`,
        tags: [
            {
                name: "angular",
                color: "pink-text-gradient",
            },
            {
                name: "socket.io",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "django",
                color: "pink-text-gradient",
            },
            {
                name: "awss3",
                color: "green-text-gradient",
            },
        ],
        image: aware,
        // source_code_link: "https://github.com/",
    },
    {
        name: "MessageBox",
        description: "Positioned as both Lead and Senior Senior Frontend Engineer in React.js, I played a pivotal role in innovating and enhancing features for MessageBox. This web application, operational across diverse domains, revolutionizes the management of large hotels through a chat-based interface powered by Socket.IO. Every interaction, from normal communication to requests and job updates, is presented in an easily comprehensible chat format.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux-rematch",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "socketio",
                color: "pink-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "figma",
                color: "pink-text-gradient",
            },
        ],
        image: messagebox,
        // source_code_link: "https://github.com/",
    },
    {
        name: "CATOS - MOLCTACA",
        description: "Directed as a Software Engineer to CATOS (Cargo Allocation and Tanker Optimization) System, an ambitious project designed and developed in Angular for front-end to revolutionize cargo allocation and tanker optimization in the shipping sector. The system aims to create independent solutions for cargo allocation and tanker optimization during voyages through various ports. Noteworthy challenges included intricate calculations related to loading and discharging chemicals at different ports.",
        tags: [
            {
                name: "angular",
                color: "pink-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "microsoft_azure",
                color: "blue-text-gradient",
            },
            {
                name: "nginx",
                color: "pink-text-gradient",
            },
        ],
        image: catos,
        // source_code_link: "https://github.com/",
    },
    {
        name: "SMARTShip",
        description: "Functioned as a Software Engineer for SMARTShip, an IIOT SW platform capable of serving a multitude of ships. The platform facilitates connectivity to all on-board equipment, offering remote monitoring, diagnostics, and control. It provides descriptive, predictive, and prescriptive maintenance, enhancing operational efficiency for both ship and shore staff. The SMARTShip platform serves as a centralized console for ship operators, enabling local and remote monitoring and control of ship equipment.",
        tags: [
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "socketio",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "rabbitmq",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
        ],
        image: smartship,
        // source_code_link: "https://github.com/",
    },
    {
        name: "RiskCounts",
        description: "Played a pivotal role as a Software Engineer in shaping the RiskCounts Enterprise Risk Management Software Platform, harnessing the dynamic synergy of Angular and Java (RESTEasy). This cutting-edge web application doesn't just provide solutions; it pioneers technology solutions and consulting services, specializing in Enterprise and Operational Risk Management. Tailored for a spectrum of industry verticals—banks, asset-managers, insurers, hedge-funds, and fintech/start-ups—the platform stands as a versatile powerhouse for holistic risk management, redefining industry standards.",
        tags: [
            {
                name: "angular",
                color: "pink-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
        ],
        image: riskcounts,
        // source_code_link: "https://github.com/",
    },
    {
        name: "Prompts App",
        description: "This blog post application empowers users to create, edit, and manage their blog content seamlessly. Leveraging Next.js for a performant user interface and MongoDB for flexible data storage, the application offers Single Sign-On via Google authentication, streamlining user creation. Backend APIs handle CRUD operations on blog posts, ensuring a comprehensive content management experience.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: prompts,
        source_code_link: "https://github.com/pratheekshej/next-app",
    },
];

export { services, technologies, experiences, testimonials, projects };