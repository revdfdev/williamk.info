import React from 'react';
import QualtricsLogo from '../../_assets/Images/Experience/QualtricsLogo.png';
import IugaLogo from '../../_assets/Images/Experience/IugaLogo.png';
import iGEMLogo from '../../_assets/Images/Experience/WashingtonIGEMLogo.png';
import iSchoolLogo from '../../_assets/Images/Experience/iSchoolLogo.png';
import UWLogo from '../../_assets/Images/Experience/UWLogo.jpg';
import { SinglePosition } from './SinglePosition/SinglePosition';

type ExperienceLink = {
    link: string,
    title: string,
    internal?: boolean
}

export type Experience = {
    logo: string,
    company: string,
    location: string,
    title: string,
    startDate: string
    endDate?: string,
    description?: string[],
    links?: ExperienceLink[],
    key: string
}

const EXPERIENCES: Experience[] = [
    {
        logo: QualtricsLogo,
        company: "Qualtrics",
        location: "Seattle, Washington",
        title: "Software Engineering Intern",
        startDate: "June 2019",
        description: ["For my intern project, I am working with another intern to allow for custom fiscal time periods to be implemented in the Customer Experience dashboard. This feature has been requested by 15+ large brands. I planned and made the modifications and additions from start to production for 8+ different code repositories."],
        links: [
            {
                link: "https://www.qualtrics.com/",
                title: "Qualtrics Homepage"
            }
        ],
        key: "qualtricsinternship"
    },
    {
        logo: IugaLogo,
        company: "Informatics Undergraduate Association (IUGA)",
        location: "Seattle, Washington",
        title: "Director of Information Technology",
        startDate: "June 2019",
        description: [
            "The Informatics Undergraduate Association is a Registered Student Organization that functions as a student government for Informatics students. IUGA provides official channels for communication between the Informatics undergraduate student body and the faculty and administration of the Information School.",

            "As the Director of IT, I help with all things technology, plan events like IUGA Game Night, and also keep the website up to date.",

            "I also overhauled the IUGA website. It uses server side rendered React using NextJS, Express, and TypeScript, routed by NGINX in a Docker container."
        ],
        links: [
            {
                link: "https://iuga.info",
                title: "IUGA Homepage"
            }
        ],
        key: "iuga"
    },
    {
        logo: iGEMLogo,
        company: "Washington iGEM",
        location: "Seattle, Washington",
        title: "Lead Front End Engineer",
        startDate: "February 2017",
        description: [
            "I am in charge of development of the team website (WIP) and iGEM Team Wiki Site (required for competition judging). The team website will use NextJS to produce static files hosted on github pages. The Team Wikis use React and TypeScript under the hood. We have implemented a content management system into the Team Wiki so anyone on our team can edit the website."
        ],
        links: [
            {
                link: "http://uwigem.com",
                title: "Washington iGEM Website"
            },
            {
                link: "https://github.com/uwigem/wiki2019",
                title: "2019 Wiki Code"
            },
            {
                link: "https://2019.igem.org/Team:Washington",
                title: "2019 Wiki"
            }
        ],
        key: "igem"
    },
    {
        logo: iSchoolLogo,
        company: "University of Washington Information School",
        location: "Seattle, Washington",
        title: "Teaching Assistant/Tutor (INFO 340, INFO 441)",
        startDate: "September 2018",
        description: [
            "I was the Teaching Assistant for INFO 340, Client Side Development. This course covered the skills and techniques necessary for creating effective, dynamic, and responsive web applications that meet user needs. This course covered HTML, CSS, JavaScript, jQuery, React, Firebase, and React Router. During lab sections, I went in depth on higher order functions, destructuring and spread operations, jQuery vs React, async await vs .then, firebase security, and testing with Jest and Enzyme.",

            "For tutoring, I was a resource for students enrolled in technical informatics classes. I helped and tutored students on all technical content in required courses, such as INFO 201 Technical Foundations of Informatics, INFO 340 Client Side Development, and INFO 330 Databases and Data Modeling. I provided assistance with R, R Shiny, R Markdown, git, HTML, CSS, JavaScript, jQuery, React, Firebase, React Router, misc JavaScript libraries, and SQL.",

            "In addition, I have created a tutor hub and tutor queue. The tutor hub is a page hosted on my website with written tutorials on how to do various topics covered within the courses, as well as video tutorials for some of the topics. I collected data on the traffic on these pages to determine what topics people struggle with the most. The tutor queue is a queuing system for first come first serve questions by students when me or other tutor(s) are in the lab space. This will also collect usage data for hard topics.",

            "I am also the Teaching Assistant for INFO 441, Server Side Development. One version of this course covers the basics of Django, the Django Rest Framework, deploying on Microsoft Azure, and how it fits together in the context of web development. We also cover bonus topics such as Websockets using NodeJS and security tips. Me and the other TA are in charge of creating lab section slides, creating the weekly assignments, the automated graders for those assignments, and grading the assignments themselves.",

            "Another version of the course covers Golang, Docker, Microservice Architecture, Message Queues, Websockets, and implementing Authentication from scratch."
        ],
        key: "ischooltatutor"
    },
    {
        logo: iSchoolLogo,
        company: "Code and Cognition Lab - University of Washington Information School",
        location: "Seattle, Washington",
        title: "Research Intern",
        startDate: "June 2018",
        endDate: "June 2019",
        description: [
            "At the Code and Cognition Lab led by Dr. Andy Ko, I design and build research prototypes using ReactJS, plan studies, gather data, and prepare presentations.",

            "I helped code a web tutor that uses a Bayesian Knowledge Tracing algorithm to help users learn programming concepts. I established the framework for writing unit tests in the application, and helped remove code redundancy. I helped plan the pilot study.",

            "In addition, I am an author on a paper: Teaching Explicit Programming Strategies to Adolescents. It investigates the teaching of explicit strategies in the classroom to adolescent students. This paper was accepted to SIGCSE 2019. The primary investigators of the paper were Dr. Thomas LaToza from George Mason University and Dr. Andy Ko from University of Washington."
        ],
        links: [
            {
                link: "http://faculty.washington.edu/ajko/students",
                title: "Lab Website"
            },
            {
                link: "https://medium.com/bits-and-behavior",
                title: "Bits and Behavior - Lab Blog"
            },
            {
                link: "http://faculty.washington.edu/ajko/papers/Ko2019TeachingExplicitStrategies.pdf",
                title: "Teaching Explicit Programming Strategies to Adolescents"
            },
            {
                link: "https://codeitz.com/",
                title: "CodeItz: An Intelligent Tutoring System"
            }
        ],
        key: "cac"
    },
    {
        logo: UWLogo,
        company: "Biomedical Image Computing Group",
        location: "Seattle, Washington",
        title: "Undergraduate Research Assistant",
        startDate: "January 2018",
        endDate: "June 2018",
        description: [
            "At the Biomedical Image Computing Group at the University of Washington Department of Pediatrics and Bioengineering, I aid the development of new mathematical and computational algorithms to manipulate and analyze biomedical image data.",

            "This lab position provided me exposure to machine learning libraries such as TinyCNN, MXNet, and Tensorflow."
        ],
        links: [
            {
                link: "http://depts.washington.edu/bicg/home/",
                title: "BICG Website"
            }
        ],
        key: "bicg"
    }
]

export const Experience: React.FC = () => {
    return <>
        <h1 className="centered margin-bottom-15px">Experience</h1>
        {EXPERIENCES.map(experience => {
            return <SinglePosition experience={experience} key={experience.key} />
        })}
    </>
}