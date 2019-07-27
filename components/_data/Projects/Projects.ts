import questionQueue from '../../_assets/Images/Projects/questionQueue.png';
import iugaSite from '../../_assets/Images/Projects/iugaSite.png';
import igemSite from '../../_assets/Images/Projects/igemsite.png';
import tutorq from '../../_assets/Images/Projects/tutorq.png';
import findC from '../../_assets/Images/Projects/findc.png';
import codeitz from '../../_assets/Images/Projects/codeitz.jpg';
import programmingstrategies from '../../_assets/Images/Projects/programmingstrategies.png';
import reactresumepdf from '../../_assets/Images/Projects/reactresumepdf.png';
import scout2018 from '../../_assets/Images/Projects/scout2018.png';
import dfsim from '../../_assets/Images/Projects/dfSim.png';
import safeCycleJS from '../../_assets/Images/Projects/safecycleJS.png';
import safeCycleR from '../../_assets/Images/Projects/safecycleR.png';
import walker from '../../_assets/Images/Projects/walker.png';
import planet from '../../_assets/Images/Projects/planet.png';
import teammanager from '../../_assets/Imagess/Projects/teammanager.png';
import violacein from '../../_assets/Images/Projects/igem2017.jpg';
import pr from '../../_assets/Images/Projects/pr.png';

export type ProjectLink = {
    link: string,
    title: string,
    internal?: boolean,
}

export type ProjectKey = string;

export type Project = {
    image?: string,
    links?: ProjectLink[],
    title: string,
    description?: string[],
    tools?: string[],
    seeAlso?: { title: string, key: ProjectKey }[],
    startDate: string,
    endDate?: string,
    blurb: string
}

export const PROJECT_LIST: ProjectKey[] = [
    'igemsite',
    'iugasite',
    'questionq',
    'tutorq',
    'findc',
    'codeitz',
    'programmingstrategies',
    'reactresumepdf',
    '2018scouting',
    'planetplanner',
    'teammanager',
    'safecyclejs',
    'differentialflow',
    'safecycler',
    'vivalaviolacein',
    'fearfilter',
    'physerapy',
    'walkercapstone'
]

export const PROJECTS: { [idx: string]: Project } = {
    // {
    //     image: ,
    //     links: [
    //         {
    //             link: "",
    //             title: ""
    //         }
    //     ],
    //     title: "",
    //     description: [
    //         ``
    //     ],
    //     key: "",
    //     tools: [],
    //     seeAlso: [],
    //     startDate: "",
    //     endDate: ""
    // }
    'igemsite': {
        image: igemSite,
        links: [
            {
                link: "http://2018.igem.org/Team:Washington",
                title: "2018 Washington Page",
            },
            {
                link: "https://2019.igem.org/Team:Washington",
                title: "2019 Washington Page"
            },
            {
                link: "https://github.com/uwigem/wiki2018",
                title: "2018 Washington iGEM Wiki Code"
            },
            {
                link: "https://github.com/uwigem/wiki2019",
                title: "2019 Washington iGEM Wiki Code"
            }
        ],
        title: "Washington iGEM Team Wiki",
        description: [
            `One of the requirements of the iGEM competition is to create a website about the project each year. I have started on the team as a hardware person that barely knew HTML and CSS, and slowly learned the ropes. Once I learned about front end frameworks, I wanted to use those on my webpages, and I built a process that allows my team to do so.`,
            `I took on the role of lead web developer and lead a team of six skilled developers to rebuild the code to be scaled to future generations along with exploring new technologies. I modeled the management of the team after my experience interning at Qualtrics. I worked on documenting all existing processes and code architecture.`
        ],
        blurb: "A website for Washington iGEM",
        tools: ["Agile", "Enzyme", "Jest", "NextJS", "Puppeteer", "React", "SOLID Principles", "TypeScript"],
        startDate: "August 2017",
        endDate: "October 2019"
    },
    'iugasite': {
        image: iugaSite,
        links: [
            {
                link: "https://iuga.info/",
                title: "IUGA Website"
            }
        ],
        title: "IUGA Website Remake",
        description: [
            `As the Director of IT in IUGA, the Informatics Undegraduate Association, I saw issues in the current website stack that made it unmaintainable. I decided to rewrite it from scratch and simplify the deployment process as much as possible for future Directors of IT. In order to achieve this, I ensured the code followed SOLID principles and had a one step deployment process.`,
            `I learned how to set up TypeScript + NextJS and all the minute details to get it to work. I also learned how to set up the dockerfiles for all this to deploy in one command. I use the same process for my personal website.`
        ],
        blurb: "A website remake for IUGA",
        tools: ["Docker", "Express", "NextJS", "NGINX", "React", "TypeScript"],
        startDate: "June 2019",
        endDate: "August 2019"
    },
    'questionq': {
        image: questionQueue,
        links: [
            {
                link: "https://kwokwilliam.github.io/questionqueue",
                title: "Project"
            },
            {
                link: "https://github.com/kwokwilliam/questionqueue",
                title: "Github"
            }
        ],
        title: "Question Queue",
        description: [
            `Along with Rico Wang and Andrea Jorge, I rewrote the back end system for TutorQ (see previous projects). Throughout the course of this project, we gained experience designing and implementing a service deployed on an AWS EC2 Instance and certified it with LetsEncrypt. This service was comprised of many dockerized components. We had a gateway layer that handled authentication and websocket connections to the user that sent the queue to the user after consuming messages from the RabbitMQ instance.`,
            `We presented the application with a live demo at the end of the course.`,
            `We plan to work on this beyond the course to create a functional application.`
        ],
        blurb: "A more full stack tutor queuing application",
        tools: ["AWS", "Docker", "Flask", "Golang", "MongoDB", "Python", "RabbitMQ", "React", "Redis", "Websockets"],
        seeAlso: [{
            title: "TutorQ",
            key: "tutorq"
        }],
        startDate: "March 2019",
    },
    'tutorq': {
        image: tutorq,
        links: [
            {
                title: "Github - Cloud Functions",
                link: "https://github.com/kwokwilliam/personalsite-firebasefunctions"
            },
            {
                title: "Github - Front End",
                link: "https://github.com/kwokwilliam/personalwebsite/tree/master/src/components/Pages/TutorQ"
            },
            {
                title: "Blog post",
                link: "/blog/makingtutorq",
                internal: true
            }
        ],
        title: "TutorQ",
        description: [
            `I made a Queueing App focused towards tutoring individuals and collecting usage data to determine what topics were a common pain point. I would be able to see these topics and rush to make a written explanation that others can immediately find without having to enter the queue. I have a position in my school's Informatics department as an Undergraduate Tutor the upcoming quarter after the creation of this app. This tool would help me keep track of who has questions, and who to answer first. Even if I don't end up using it extensively, it is a good proof of concept.`,
            `I ensured mobile friendliness, low latency functionality, FERPA compliancy, security and anonymity, concurrency, scalability, and queueing functionality.`,
            `This project was my first introduction to React's upcoming hooks feature as well as Firebase Serverless Functions. See the blog post below for more details.`
        ],
        blurb: "A tutor queuing application",
        tools: ["Firebase", "React"],
        seeAlso: [{
            title: "QuestionQueue",
            key: "questionq"
        }],
        startDate: "December 2018"
    },
    'findc': {
        title: "FindC",
        image: findC,
        description: [
            `FindC is a tool that allows users to locate free or cheap contraceptives, because existing solutions were not accessible. This project was created in 14 hours at the Dubhacks hackathon. I worked on all aspects of the project from the initial concept design to wireframe designs to front end and backend development and presentation.`,
            `I worked alongside Ryan Yang. We spent a while going through all the features that we wanted while also taking into consideration any ethical concerns about the app, and how we would attempt to solve those. The app ended up being a crowd sourced application sort of like Waze, where users could say what areas have free or cheap contraceptives.`,
            `The application uses Google Cloud Platform Geocoding API.`],
        links: [
            {
                title: "Project",
                link: "https://devpost.com/software/findc-free-contraception-finder"
            },
            {
                title: "Github",
                link: "https://github.com/DH2018-FindC/FindC"
            }
        ],
        blurb: "An accessible contraceptive finder",
        tools: ["Firebase", "Google Cloud Platform", "JavaScript", "React", "React Router"],
        startDate: "October 2018",
    },
    'codeitz': {
        title: "CodeItz",
        image: codeitz,
        description: [
            `CodeItz is a web tutor that uses a Bayesian Knowledge Tracing algorithm to help users learn programming concepts. I established the framework for writing unit tests in the application, and helped remove code redundancy. I am also helping to plan the pilot study.`,
            `I worked on a team alongside Harshitha Akkaraju and Jane Quichocho, led by Benjamin Xie. We had daily standups, multiple design meetings, and sprints to make progress with the application over the course of a summer. This project gave me valuable experience with working in a team and designing a full scale web application.`,
            `The app is currently a work in progress, and is susceptible to crashes.`],
        links: [
            {
                title: "CodeItz",
                link: "https://codeitz.com"
            }
        ],
        blurb: "A personalized learning assistant",
        tools: ["AWS", "Enzyme", "Express", "Firebase", "Flask", "Flow", "JavaScript", "Jest", "Python", "React", "React Router", "Sass"],
        startDate: "June 2018",
        endDate: "June 2019"
    },
    'programmingstrategies': {
        title: "Teaching Explicit Programming Strategies to Adolescents",
        image: programmingstrategies,
        description: [
            `Teaching Explicit Programming Strategies to Adolescents investigates the teaching of explicit strategies in the classroom to adolescent students. This paper was accepted to SIGCSE 2019. The primary investigators of the paper were Dr. Thomas LaToza from George Mason University and Dr. Andy Ko from University of Washington.`,
            `I primarly helped collect data during class sessions, analyze that data using R, and report on the data. Throughoutthis project, I learned a great deal about the research process and about many methods of qualitative and quantitative data analysis used in research.`
        ],
        links: [
            {
                title: "Paper",
                link: "http://faculty.washington.edu/ajko/papers/Ko2019TeachingExplicitStrategies.pdf"
            }
        ],
        blurb: "A research paper accepted to SIGCSE 2019",
        tools: ["Excel", "JavaScript", "LaTeX", "R"],
        startDate: "June 2018",
        endDate: "August 2018",
    },
    'reactresumepdf': {
        title: "React Resume PDF",
        image: reactresumepdf,
        description: [
            `I set out to solve the problem of creating a resume in React. There were some self-set specifications that were difficult to meet, but I figured out a way to do it. I also wrote about it in a medium article, to teach others how to do it!`,],
        links: [
            {
                title: "Project",
                link: "https://medium.com/@wkwok16/lets-make-a-resume-in-react-2c9c5540f51a"
            },
            {
                title: "Github",
                link: "https://github.com/kwokwilliam/react-resume-pdf"
            }
        ],
        blurb: "Creating a resume with React",
        tools: ["React"],
        startDate: "August 2018",
    },
    '2018scouting': {
        title: "FRC Scouting App",
        image: scout2018,
        description: [
            `During spring break, I headed back home to Hawaii. The FIRST Robotics Competition Hawaii Regional was going on during my stay. I wanted to put the skills I learned in the classroom to use, and incorporate some data analysis to better the community I used to be a part of.`,
            `A day before the competition, I slapped together a scouting app that would be internal to my old team. They collected data that would later be input to the app. This app allowed them to use live updating data during their alliance selection to pick the best, most compatible team.`,
            `After the competition, the data was released to the Hawaii Robotics community so teams could better understand their performance going into the world championship. The application was programmed using NodeJS, JavaScript, and the React Framework.`
        ],
        links: [
            {
                title: "Project",
                link: "https://students.washington.edu/wkwok16/frc2090scouting2018public/#/"
            },
            {
                title: "Github",
                link: "https://github.com/kwokwilliam/frc2090scouting2018public"
            }
        ],
        blurb: "A robotics competition scouting app",
        tools: ["Firebase", "Lodash", "JavaScript", "NodeJS", "React", "React Router"],
        startDate: "March 2018",
    },
    'planetplanner': {
        title: "Planet Trip Planner",
        image: planet,
        description: [
            `Planet is a trip planner application that shares information about what the user has planned already and what their current estimated cost is versus their max budget (segmented by category). Users are able to interactively create their itinerary, similar to Google Calendar. See the github page for an in depth detail.`,
            `This project was built for INFO 343 as a final group project partnered with Laura Freeman, Farrah Lee, and Sangchul Hwang.`
        ],
        links: [
            {
                title: "Project",
                link: "https://students.washington.edu/wkwok16/info343-final-project/#/"
            },
            {
                title: "Github",
                link: "https://github.com/ferily7/info343-final-project"
            }
        ],
        blurb: "An simple trip planner",
        tools: ['Firebase', "JavaScript", "React Router", "MaterialUI"],
        seeAlso: [],
        startDate: "February 2018 - March 2018",
    },
    'teammanager': {
        title: "Team Manager",
        image: teammanager,
        description: [
            `I created a basic team manager application for my INFO 343 class that allows admins of an established organization to create a page, invite users and admins to the page, make announcements, and make events to attend. It uses Firebase as a secure authentication and database service, React, and React Router.`
        ],
        links: [
            {
                title: "Project",
                link: "https://students.washington.edu/wkwok16/p4-kwokwilliam/#/"
            },
            {
                title: "Github",
                link: "https://github.com/kwokwilliam/INFO343-Project4"
            }
        ],
        blurb: "A team managing application",
        tools: ['Firebase', 'JavaScript', 'ReactJS', "NodeJS", 'React Router', "Bootstrap"],
        seeAlso: [],
        startDate: "February 2018",
    },
    'safecyclejs': {
        title: "Seattle SafeCycleJS",
        image: safeCycleJS,
        description: [
            `This project is an iteration of a past project, Seattle SafeCycle, remade completely using the React JavaScript framework. This iteration now allows real time querying from a dataset provided by the Seattle Department of Transportation, asynchronous processing of data, and displays to the user more data about each bike rack.`,
            `This project was my first ever React project, and gave me a lot of experience with state management.`
        ],
        links: [
            {
                title: "Project",
                link: "https://students.washington.edu/wkwok16/p3-mockingod1841/"
            },
            {
                title: "Github",
                link: "https://github.com/kwokwilliam/INFO343-Project3"
            }
        ],
        blurb: "An accessible secure bike parking finder.",
        tools: ["JavaScript", "NodeJS", "OpenDataPortal", "ReactJS"],
        seeAlso: [{
            title: "Seattle SafeCycle",
            key: "safecycleR"
        }],
        startDate: "February 2018"
    },
    'differentialflow': {
        title: "Differential Flow Simulator",
        image: dfsim,
        description: [
            `This simulator allows users to model fluid flow through different containers. It is built using JavaScript Canvas elements.`,
            `This project taught me how to use HTML5 Canvas and taught me some state management.`
        ],
        links: [
            {
                title: "Project",
                link: "https://students.washington.edu/wkwok16/p2-mockingod1841/"
            },
            {
                title: "Github",
                link: "https://github.com/kwokwilliam/INFO343-Project2"
            }
        ],
        blurb: "A differential flow simulator",
        tools: ["HTML5 Canvas", "JavaScript"],
        startDate: "January 2018 - February 2018",
    },
    'safecycler': {
        title: "Seattle SafeCycle",
        image: safeCycleR,
        description: [
            `Seattle SafeCycle is a web app programmed using R and R Shiny that uses data from the Seattle Open Data Portal to visualize all the bike racks and bike thefts in the Seattle area, in order to determine which bike racks are the safest to park at. I focused on programming all the functionality and algorithms, as well as writing the post report and presenting it.`,
            `This project taught me about using external APIs to get data from and post processing that data.`
        ],
        links: [
            {
                title: "Project",
                link: "https://wkwok16.shinyapps.io/bb4-finalproj/"
            },
            {
                title: "Github",
                link: "https://github.com/info201b-au17/bb4-finalproj"
            }
        ],
        blurb: "An secure bike parking finder",
        tools: ["R", "RShiny"],
        seeAlso: [{
            title: "Seattle SafeCycleJS",
            key: "safecycleJS"
        }],
        startDate: "November 2017",
        endDate: "December 2017"
    },
    'vivalaviolacein': {
        title: "Viva la Violacein",
        image: violacein,
        description: [
            `For the hardware and software side of the Washington iGEM Project, we prototyped an affordable, modular bioreactor dubbed the "Chromastat" that utilizes a closed-loop feedback control system to control and optimize the production of a desired product. It allows the reduction of time and effort needed to maintain cultures through automated, real-time metabolite analysis.`,
            `I designed a modular 3D printable, open source syringe pump that was cost effective compared to industrial solutions. It was accurate to the ±0.01 mL for any given dispense action using a standard 3 mL syringe.`,
            `Along with that, I designed and programmed the 2017 Team Washington website from the ground up.`],
        links: [
            {
                title: "Project",
                link: "http://2017.igem.org/Team:Washington"
            },
            {
                title: "Github",
                link: "https://github.com/uwigem/uwigem2017"
            }
        ],
        blurb: "An affordable, modular bioreactor",
        tools: ["Java", "HTML", "CSS", "JavaScript", "Fusion 360", "Bootstrap"],
        startDate: "January 2017",
        endDate: "November 2017"
    },
    'fearfilter': {
        title: "Fear Filter",
        description: [
            `Fear Filter is a Google Chrome extension that checks all images displayed on a website and filters it for a user's specified phobia. It utilizes Microsoft Azure Computer Vision API v1.0 using tags to determine if it must be filtered or not. I worked on the JavaScript functionality for ensuring the correct images get blocked out.`
        ],
        links: [
            {
                title: "Github",
                link: "https://github.com/Ryabn/DubhacksProject"
            }
        ],
        blurb: "A smart image blocking service",
        tools: ["Azure Vision", "JavaScript", "jQuery"],
        startDate: "October 2017",
    },
    'physerapy': {
        title: "Physerapy",
        image: pr,
        description: [
            `Physerapy is a prototype physical therapy app that replaces the need for going into a therapist just to get a sheet of paper with exercises on it. My group introduced proof of concept integration with encrypted medical records using APIs such as eCare. We also played with the idea of integration with external devices such as Xbox Kinect or Smartwatches.`,
            `This project was an introduction to user centered design. I consider it a very simple idea project, but still taught me soft skills that I use to this day.`
        ],
        links: [
            {
                title: "Project",
                link: "https://projects.invisionapp.com/share/UPBXZ9MC7"
            }
        ],
        blurb: "A proof of concept physical therapy app",
        tools: ["InVision"],
        startDate: "April 2017 - May 2017",
    },
    'walkercapstone': {
        title: "High School Capstone",
        image: walker,
        description: [
            `During my senior year of high school for a community service CAPSTONE class, the project I decided on was to manufacture a walker. The walker was designed in OnShape, machined from raw aluminum, and welded together. Assistive Technology Resource Center of Hawaii received the walker when it was completed.`,
            `I learned about planning a hardware project and executing it by a certain deadline.`
        ],
        blurb: 'A hardware project',
        links: [
            {
                title: "Project",
                link: "https://www.youtube.com/watch?v=DI9dS9Vm-T8"
            }
        ],
        tools: ["Machine Shop", "OnShape"],
        startDate: "October 2015",
        endDate: "December 2015"
    },
}