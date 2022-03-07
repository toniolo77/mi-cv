const cv_data = {
  content_spanish: {
    main_content: [
      {
        title: "Experiencia laboral",
        id_main: 1,
        icon: ["fa", "briefcase"],
        responsibilities_text: "Responsabilidades",
        content: [
          {
            time: "06/2019 – Actual",
            subtitle: "Iquall Network",
            description:
              "Diseñador y administrador de infraestructuras de servidores y sistemas en entornos linux utilizando diferentes tecnologías como Docker-Kubernetes, TICK stack para monitoreo, Python, bash para scripting y Ansible para automatización.",
            responsibilities: [],
          },
          {
            time: "01/2019 - 06/2019",
            subtitle: "Accenture SRL",
            description:
              "Diseñador y administrador de infraestructuras de servidores utilizando como principal tecnología AWS (EC2,S3, ElastiCache, etc.)",
            responsibilities: [],
          },
          {
            time: "2015 - 2019",
            subtitle: "Cooperativa Obrera",
            description:
              "Desarrollador Full Stack trabajando en distintos proyectos web utilizando Angular2, PHP y MYSQL bajo entornos Linux.",
            responsibilities: [],
          },
        ],
      },
      {
        title: "Estudios",
        id_main: 2,
        icon: ["fa", "graduation-cap"],
        content: [
          {
            time: "2010 - 2017",
            subtitle: "Ingeniería en Sistemas",
            description: "Universidad Nacional del Sur – Promedio (8.23)",
          },
          {
            time: "2006 - 2009",
            subtitle: "Bachiller en Economía y Gestión de las Organizaciones",
            description:
              'Escuela Superior de Comercio "Prof. PrudencioCornejo”',
          },
        ],
      },
      /*{
            title: "Cursos",
            id_main:3,
            icon: ['fa', 'medal'],
            content: [
                {
                    time: "2019",
                    subtitle: "CCENT – Cisco (Carga horaria: 120hs)",
                    description: "Centro de e-Learning – Universidad Tecnológica Nacional de Buenos Aires"
                },
                {
                    time: "2015",
                    subtitle: "Seguridad Informática (Carga horaria: 20hs)",
                    description: 'Universidad Nacional del Sur'
                }

            ]
        }*/
    ],
    perfil: {
      title: "Perfil",
      icon: ["fa", "user"],
      content: [
        { icon: ["fa", "phone-alt"], description: "(291) 155262144" },
        { icon: ["fa", "envelope"], description: "franco.toniolo91@gmail.com" },
        { icon: ["fab", "linkedin-in"], description: "/in/franco-toniolo" },
      ],
    },
    datos_extra: [
      {
        title: "Herramientas",
        icon: ["fa", "tools"],
        content: [
          { description: "Docker-Kubernetes" },
          { description: "Amazon Web Services (AWS)" },
          { description: "Ansible" },
          { description: "Git" },
          { description: "MySQL" },
          { description: "React" },
          { description: "Angular" },
          { description: "PHP" },
        ],
      },
      {
        title: "Idiomas",
        icon: ["fa", "globe-americas"],
        content: [
          { description: "ESPAÑOL: nativo" },
          { description: "INGLES: intermedio" },
        ],
      },
    ],
  },
  content_english: {
    main_content: [
      {
        title: "Work Experience",
        id_main: 1,
        icon: ["fa", "briefcase"],
        responsibilities_text: "Responsibilities",
        content: [
          {
            time: "10/2020 – Now",
            subtitle: "MediaMonks",
            description:
              "Fullstack developer in charge of developing new components that add functionality to the application. Analyzing and diagramming with the team the duration for each development using agile methodologies. Among the technologies used are React, Node, GraphQL, Jest.",
            responsibilities: [
              "Development of new reusable components in React following the design received from UX",
              "Create unit tests for each component in React using Jest",
              "Add new services to the API RESTfull (Express and GraphQL)",
              "Improve component performance",
              "Training  team members",
            ],
          },
          {
            time: "2019 – 2021",
            subtitle: "Freelance",
            description:
              "Development of web applications from scratch with other coworkers using agile methodologies. The main job is  analyzing the viability, estimating times, designing the application and implementing it using agile methodologies.",
            responsibilities: [
              "Requirements analysis with the client",
              "Choice of framework for development",
              "Project Infrastructure design",
              "UX design",
              "Database design (MySQL)",
              "Development of new reusable components in React",
              "Create the API RESTfull (Express)",
              "Maintenance",
            ],
          },
          {
            time: "06/2019 – 10/2020",
            subtitle: "Iquall Network",
            description:
              "Infrastructure designer and administrator servers and systems in Linux environments. My main role was to design and implement the application infrastructure in Kubernetes and automate their deployments using Ansible.",
            responsibilities: [
              "Infrastructure design in Kubernetes environment",
              "Monitoring with TICK stack",
              "Deployment  automation with Ansible",
              "Requirements analysis with the client",
              "Maintenance",
            ],
          },
          {
            time: "01/2019 - 06/2019",
            subtitle: "Accenture SRL",
            description:
              "Server infrastructure designer and manager using AWS technology as the main technology (EC2, S3, ElastiCache, etc.). The main role was to migrate the existing application to AWS creating the necessary services.",
            responsibilities: [
              "Design the future infrastructure for the application",
              "Migrate the main application which was  hosted in their own servers into AWS",
              "Maintenance",
            ],
          },
          {
            time: "2015 - 2019",
            subtitle: "Cooperativa Obrera",
            description:
              "FullStack developer working on different web projects using Angular 2, PHP and MySQL under Linux environments. The main project was to create an Ecommerce from scratch, where I had, together with the team, the task of analyzing the viability, estimating times, designing the application and implementing it using agile methodologies.",
            responsibilities: [
              "UX Design",
              "Database Design (MySQL)",
              "Development of new reusable components in Angular",
              "Create the API RESTfull (PHP)",
              "Requirements analysis with the client",
              "Maintenance",
            ],
          },
        ],
      },
      {
        title: "Education",
        id_main: 2,
        icon: ["fa", "graduation-cap"],
        content: [
          {
            time: "2010 - 2017",
            subtitle: "Computer Engineering",
            description: "Universidad Nacional del Sur – Promedio (8.23)",
          },
          {
            time: "2006 - 2009",
            subtitle:
              "Bachelor in Economics and Management of the Organizations",
            description:
              'Escuela Superior de Comercio "Prof. PrudencioCornejo”',
          },
        ],
      },
      {
        title: "Courses",
        id_main: 3,
        icon: ["fa", "medal"],
        content: [
          {
            time: "2019",
            subtitle: "CCENT – Cisco (Duration: 120hs)",
            description:
              "Centro de e-Learning – Universidad Tecnológica Nacional de Buenos Aires",
          },
          {
            time: "2015",
            subtitle: "Informatic Security (Duration: 20hs)",
            description: "Universidad Nacional del Sur",
          },
        ],
      },
    ],
    perfil: {
      title: "Profile",
      icon: ["fa", "user"],
      content: [
        { icon: ["fa", "phone-alt"], description: "(291) 155262144" },
        { icon: ["fa", "envelope"], description: "franco.toniolo91@gmail.com" },
        { icon: ["fab", "linkedin-in"], description: "/in/franco-toniolo" },
      ],
    },
    datos_extra: [
      {
        title: "Computer Tools",
        icon: ["fa", "tools"],
        content: [
          { description: "Javascript (React, Node, Angular2+)" },
          { description: "PHP" },
          { description: "MySQL, MongoDB" },
          { description: "Git" },
          { description: "Jest" },
          { description: "GraphQL" },
          { description: "Docker-Kubernetes" },
          { description: "Amazon Web Services (AWS)" },
          { description: "Ansible" },
        ],
      },
      {
        title: "Languages",
        icon: ["fa", "globe-americas"],
        content: [
          { description: "SPANISH: native" },
          { description: "English: advance" },
        ],
      },
    ],
  },
};

export default cv_data;
