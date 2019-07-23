import React from 'react';
import QualtricsLogo from '../../_assets/Images/Experience/QualtricsLogo.png';
import IugaLogo from '../../_assets/Images/Experience/IugaLogo.png';

type ExperienceLink = {
    link: string,
    title: string
}

type Experience = {
    logo: string,
    company: string,
    location: string,
    title: string,
    startDate: string
    endDate?: string,
    description?: string[],
    links?: ExperienceLink[]
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
        ]
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
        ]
    }
]

export const Experience: React.FC = () => {
    return <>

    </>
}