import questionQueue from '../../_assets/Images/Projects/questionQueue.png';
import iugaSite from '../../_assets/Images/Projects/iugaSite.png';

export type ProjectLink = {
    link: string,
    title: string,
    internal?: boolean,
}

export type ProjectKey = string;

export type Project = {
    image: string,
    links?: ProjectLink[],
    title: string,
    description?: string[],
    key: ProjectKey,
    tools?: string[],
    seeAlso?: { name: string, hash: ProjectKey }[],
    startDate: string,
    endDate?: string
}

export const PROJECTS: Project[] = [
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
    {
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
        key: "iugasite",
        tools: ["React", "Docker", "NGINX", "NextJS", "TypeScript", "Express"],
        startDate: "June 2019",
        endDate: "August 2019"
    },
    {
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
        key: "questionq",
        tools: ["AWS", "Golang", "Python", "Flask", "React", "Redis", "Docker", "MongoDB", "RabbitMQ", "Websockets"],
        seeAlso: [{
            name: "TutorQ",
            hash: "tutorq"
        }],
        startDate: "March 2019",
    },

]