var express = require('express');
var router = express.Router();

const listItems = [
  {
    'id': "1",
    'title': "DevOps",
    'description': "DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration,and technology automation.",
    'reference': "1. What is DevOps? | Atlassian, Atlassian, 2023. [Online]. Available: https://www.atlassian.com/devops. [Accessed: 23- Jul- 2023].",
  },
  {
    'id': "2",
    'title': "Scrum",
    'description': "Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.",
    'reference': "1. What is Scrum? | Scrum.org, 2023. [Online]. Available: https://www.scrum.org/resources/what-is-scrum. [Accessed: 23- Jul- 2023]",
  },
  {
    'id': "3",
    'title': "Agile Methodologys",
    'description': "Agile methodologies are approaches to product development that are aligned with the values and principles described in the Agile Manifesto for software development. Agile methodologies aim to deliver the right product, with incremental and frequent delivery of small chunks of functionality, through   small   cross-functional   self-organizing   teams, enabling frequent customer feedback and course correction as needed.",
    'reference': "1. What Is Agile Methodology? - Overview Of Agile Software Development And Agile Models, Digite, 2023. [Online]. Available: https://www.digite.com/agile/agile-methodology/. [Accessed: 23- Jul- 2023]",
  },
  {
    'id': "4",
    'title': "Microservices",
    'description': "Microservices, or microservices architecture, is an approach to application development in which a large application is built from modular components or services. Each module supports a specific task or business goal and uses a simple, well-defined interface, such as an application programming interface (API), to communicate with other sets of services.",
    'reference': "1.What are Microservices?, SearchAppArchitecture, 2023. [Online]. Available: https://www.techtarget.com/searchapparchitecture/definition/microservices.[Accessed: 23- Jul- 2023]",
  },
  {
    'id': "5",
    'title': "Docker",
    'description': "Docker is an open source platform that enables developers to build, deploy, run, update and manage containers—standardized, executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.",
    'reference': "1. Education, What is Docker?, Ibm.com, 2023. [Online]. Available: https://www.ibm.com/cloud/learn/docker. [Accessed: 23- Jul- 2023]",
  },
  {
    'id': "6",
    'title': "Kubernetes",
    'description': "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.",
    'reference': "1.What is Kubernetes?, Kubernetes, 2023. [Online]. Available: https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/. [Accessed: 23- Jul- 2023]",
  },
  {
    'id': "7",
    'title': "Waterfall Development Model",
    'description': "The Waterfall Model was the first Process Model to be introduced. It is also referred to as a linear-sequential life cycle model. It is very simple to understand and use. In a waterfall model, each phase must be completed before the next phase can begin and there is no overlapping in the phases.",
    'reference': "1.SDLC - Waterfall Model, Tutorialspoint.com, 2023. [Online]. Available: https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm. [Accessed:23- Jul- 2023] ",
  },
    {
      'id': "8",
      'title': "Technical Debts",
      'description': "Technical debt (also known as design debt or code debt) is a concept in software development that reflects the implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer.",
      'reference': "1. \"Technical Debt & Scrum: Who Is Responsible?\", Scrum.org, 2023. [Online]. Available: https://www.scrum.org/resources/blog/technical-debt-scrum-who-responsible. [Accessed: 23- Jul- 2023]"
    },
    {
      'id': "9",
      'title': "Product Ecosystems",
      'description': "The product ecosystem is based on the concept of a biological ecosystem. In the natural world, an ecosystem is a community of organisms—plants and animals—living within a shared environment that connects all the components of the community via nutrient cycles and energy flows.",
      'reference': "1. J Kim, \"Key terms defined: Products, tools, platforms, and ecosystems | Appcues Blog\", Appcues.com, 2023. [Online]. Available: https://www.appcues.com/blog/software-product-tool-platform-ecosystem. [Accessed: 23- Jul- 2023]"
    },
    {
      'id': "10",
      'title': "Command Line Interface (CLI)",
      'description': "Command line interface (CLI) is a text-based interface that is used to operate software and operating systems while allowing the user to respond to visual prompts by typing single commands into the interface and receiving a reply in the same way.",
      'reference': "1. \"What is a Command Line Interface (CLI)? - Definition from Techopedia\", Techopedia.com, 2023. [Online]. Available: https://www.techopedia.com/definition/3337/command-line-interface-cli. [Accessed: 23- Jul- 2023]"
    },   
       {
          'id': "11",
          'title': "Cluster",
          'description': "A cluster is a group of machines that work together to run workloads and provide high availability.",
          'reference': "1. Docker Documentation. 2023. Glossary. [online] Available at: https://docs.docker.com/glossary/"
        },
        {
          'id': "12",
          'title': "Docker Container",
          'description': "A container is a runtime instance of a docker image. A Docker container consists of a Docker image, an execution environment, and a standard set of instructions.",
          'reference': "1. Docker Documentation. 2023. Glossary. [online] Available at: https://docs.docker.com/glossary/"
        },
        {
          'id': "13",
          'title': "Docker Hub",
          'description': "The Docker Hub is a centralized resource for working with Docker and its components. It provides services such as hosting Docker images, user authentication, automated image builds, integration with version control platforms, and security vulnerability scanning.",
          'reference': "1. Docker Documentation. 2023. Glossary. [online] Available at: https://docs.docker.com/glossary/"
        },
        {
          'id': "14",
          'title': "Dockerfile",
          'description': "A Dockerfile is a text document that contains instructions to build a Docker image. It specifies the commands and configuration needed to create a reproducible image.",
          'reference': "1. Docker Documentation. 2023. Glossary. [online] Available at: https://docs.docker.com/glossary/"
        },
        {
          'id': "15",
          'title': "Registry",
          'description': "A Registry is a hosted service containing repositories of Docker images. It responds to the Registry API and can be accessed through tools like Docker Hub or the `docker search` command.",
          'reference': "1. Docker Documentation. 2023. Glossary. [online] Available at: https://docs.docker.com/glossary/"
        },
        {
          'id': "16",
          'title': "Estimation",
          'description': "In software development, an 'estimate' is the evaluation of the effort necessary to carry out a given development task, often expressed in terms of duration.",
          'reference': "1. Agile Alliance |. 2023. Agile Glossary and Terminology | Agile Alliance. [online] Available at: https://www.agilealliance.org/agile101/agile-glossary/"
        },
        {
          'id': "17",
          'title': "Integration",
          'description': "Integration (or 'integrating') refers to any efforts required for a project team to deliver a product suitable for release as a functional whole.",
          'reference': "1. Agile Alliance |. 2023. Agile Glossary and Terminology | Agile Alliance. [online] Available at: https://www.agilealliance.org/agile101/agile-glossary/"
        },
        {
          'id': "18",
          'title': "Iterative Development",
          'description': "Agile projects are iterative, allowing for 'repeating' software development activities and 'revisiting' work products to improve them.",
          'reference': "1. Agile Alliance |. 2023. Agile Glossary and Terminology | Agile Alliance. [online] Available at: https://www.agilealliance.org/agile101/agile-glossary/"
        },
        {
          'id': "19",
          'title': "Product Owner",
          'description': "The product owner is a role in Scrum responsible for ensuring the team delivers the desired outcome of the project.",
          'reference': "1. Agile Alliance |. 2023. Agile Glossary and Terminology | Agile Alliance. [online] Available at: https://www.agilealliance.org/agile101/agile-glossary/"
        },
        {
          'id': "20",
          'title': "Retrospective",
          'description': "A retrospective is a meeting where a team reflects on recent events, identifies opportunities for improvement, and adapts its processes.",
          'reference': "1. Agile Alliance |. 2023. Agile Glossary and Terminology | Agile Alliance. [online] Available at: https://www.agilealliance.org/agile101/agile-glossary/"
        },
        {
          'id': "21",
          'title': "Acceptance testing",
          'description': "Acceptance testing is formal testing conducted to determine whether a system satisfies acceptance criteria and can be accepted by the user or customer.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "22",
          'title': "Agile testing",
          'description': "Agile testing is informal testing where testers actively control the design of tests as they are performed, adapting and improving tests based on gained insights.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "23",
          'title': "Ad hoc testing",
          'description': "Ad hoc testing refers to unplanned and informal testing where testers explore the software in a random and unstructured manner.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "24",
          'title': "Alpha testing",
          'description': "Alpha testing is simulated or actual operational testing of a component or system by potential users or customers at a developer's site, often for internal acceptance testing.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "25",
          'title': "Audit trail",
          'description': "An audit trail is a record of events that shows the input and output of a process, useful for defect analysis and process audits.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "26",
          'title': "Beta testing",
          'description': "Beta testing involves operational testing by potential and existing users at an external site, aiming to determine if a component or system meets user needs.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "27",
          'title': "Decision table",
          'description': "A decision table is a tabular representation of inputs, outputs, and rules, used for designing test cases and ensuring comprehensive test coverage.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "28",
          'title': "Exploratory testing",
          'description': "Exploratory testing is a dynamic testing approach where testers actively control test design and use insights from testing to enhance future test cases.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "29",
          'title': "Fault tolerance",
          'description': "Fault tolerance is the ability of a software product to maintain a specified level of performance despite defects or deviations from its intended interface.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
          'id': "30",
          'title': "Functional integration",
          'description': "Functional integration is an approach that combines components or systems to achieve basic functionality early in the development process.",
          'reference': "1. 2023. [online] Available at: https://www.softwaretestinghelp.com/software-testing-terms-complete-glossary"
        },
        {
        'id': "31",
        'title': "Artifact",
        'description': "Any description of a process used to create a piece of software that can be referred to, including diagrams, user requirements, and UML models.",
        'reference': "1. Medium. 2022. 48 DevOps Terms You Should Know (A DevOps Glossary). [online] Available at: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752."
    },
    {
        'id': "32",
        'title': "Branching",
        'description': "The duplication of an object under review in source control so that the same code can be modified by more than one developer in parallel.",
        'reference': "1. Medium. 2022. 48 DevOps Terms You Should Know (A DevOps Glossary). [online] Available at: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752."
    },
    {
        'id': "33",
        'title': "Continuous Delivery",
        'description': "A software engineering approach in which continuous integration, automated testing, and automated deployment capabilities allow software to be developed and deployed rapidly, reliably, and repeatedly with minimal human intervention.",
        'reference': "1. Medium. 2022. 48 DevOps Terms You Should Know (A DevOps Glossary). [online] Available at: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752."
    },
    {
        'id': "34",
        'title': "Capacity Test",
        'description': "Capacity tests measure how many users or transactions an application can handle, providing a performance benchmark for that application.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "35",
        'title': "DevSecOps",
        'description': "DevSecOps involves incorporating security into all stages of the software development workflow instead of saving it for the last stage.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "36",
        'title': "Hybrid Cloud",
        'description': "A hybrid cloud spans at least one private and one public cloud, giving businesses the ability to seamlessly scale up their on-prem infrastructure to the public cloud to handle any overflow.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "37",
        'title': "Monolithic Architecture",
        'description': "A traditional software design architecture that is single-tiered, with tightly coupled components. This means that each component and its associated components must be present for code to be executed or compiled.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "38",
        'title': "NoOps",
        'description': "NoOps (no operations) is the idea that automation can eliminate the need for a dedicated operations team.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "39",
        'title': "Open Source",
        'description': "Software that makes its original source code freely available for people to use, share, and modify.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "40",
        'title': "Software-as-a-Service (SaaS)",
        'description': "SaaS hosts applications and makes them available to users over the internet.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "41",
        'title': "Staging Environment",
        'description': "A nearly exact replica of a production environment used to test codes, builds, and updates to make sure everything works properly before deployment.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "42",
        'title': "User Acceptance Testing (UAT)",
        'description': "A type of software testing that verifies that a given application works for the user. During this process, actual users test the software to make sure it behaves as expected in real-world scenarios.",
        'reference': "1. Plutora. 2022. DevOps DevOps Terminology: A Glossary - Plutora. [online] Available at: https://www.plutora.com/devops-at-scale/terminology-glossary."
    },
    {
        'id': "43",
        'title': "Application Release Automation (ARA)",
        'description': "The deployment of software releases to several different environments and their configurations, but with minimal human involvement.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    },
    {
        'id': "44",
        'title': "Behavior-Driven Development (BDD)",
        'description': "An Agile software development methodology that encourages collaboration and teamwork between software developers, Quality Assurance, and business participants in any given software project.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    },
    {
        'id': "45",
        'title': "Configuration Drift",
        'description': "When uncommitted hotfixes and manual changes are applied to software and hardware configurations, the latter becomes inconsistent with the master version. This is often a common reason for technical debt.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    },
    {
        'id': "46",
        'title': "Containerization",
        'description': "An operating system (OS) level method of virtualization employed for the deployment and running of distributed applications without having to launch an entire virtual machine for every use.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    },
    {
        'id': "47",
        'title': "Dark Launch",
        'description': "A development strategy in which a new version of the code, one that implements new features, is released to your team or a subset of the organization’s users but is either not visibly activated or is only partially so. This process is like a Canary Release.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    },
    {
        'id': "48",
        'title': "Deployment",
        'description': "The bringing together of all the processes necessary to make hardware or a software program available for use, which includes all installations, configuring, testing, and moving that program to its home environment.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    },
    {
        'id': "49",
        'title': "Fail Fast",
        'description': "A design strategy characterized by a rapid turnaround, where an attempt fails, is reported on time, feedback is quickly returned, the changes are made, and a new attempt is made.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    },
    {
        'id': "50",
        'title': "Lead Time",
        'description': "In the world of manufacturing, this is the time involved in moving a work in progress (WIP) to a finished state. In the world of DevOps, the context changes to moving code changes to production.",
        'reference': "1. 2022. [online] Available at: https://www.simplilearn.com/top-devops-terms-you-should-know-article."
    }

 ];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Software Deployment and Operation', subheading: "Example", list: listItems });
});

module.exports = router;
