import React from 'react';
import { SkillItemItem } from './SkillItemItem/SkillItemItem';

const SKILLS: { [idx: string]: { [idx: string]: number } } = {
    LANGUAGES_AND_FRAMEWORKS: {
        "AngularJS": 4,
        "Bootstrap": 5,
        "CSS": 5,
        "C++": 1,
        "Django": 3,
        "Express": 5,
        "FlowType": 4,
        "Golang": 4,
        "HTML": 5,
        "JavaScript": 5,
        "Java": 3,
        "jQuery": 5,
        "LaTeX": 3,
        "MySQL": 4,
        "NextJS": 5,
        "NodeJS": 5,
        "Python": 5,
        "R": 4,
        "React": 5,
        "Redis": 4,
        "TypeScript": 5,
        "Vue": 3,
    },
    TOOLS: {
        "AWS": 3,
        "Azure": 3,
        "Docker": 4,
        "Enzyme": 5,
        "Git": 5,
        "Google Cloud Platform": 4,
        "Jest": 5,
        "JIRA": 4,
        "Mocha": 5,
        "MongoDB": 4,
        "NGINX": 3,
        "RabbitMQ": 3,
        "Sinon": 5
    },
    CONCEPTS: {
        "Accessible Design": 5,
        "Server Side Development": 5,
        "SOLID Design": 4,
        "Test Driven Development": 5,
        "Unit Testing": 5,
        "User Centered Design": 5,
        "Web Development": 5,
        "Websockets": 5
    }
}

const ORDER = [
    "LANGUAGES_AND_FRAMEWORKS",
    "TOOLS",
    "CONCEPTS"
];

const NAMES: { [idx: string]: string } = {
    "LANGUAGES_AND_FRAMEWORKS": "Languages and Frameworks",
    "TOOLS": "Tools",
    "CONCEPTS": "Concepts"
}

export const Skills: React.FC = () => {
    return <>
        <h1 className="centered margin-bottom-15">Skills</h1>
        <div className="row no-gutter">
            {ORDER.map(orderItem => {
                const skillItem = SKILLS[orderItem];
                const skillItemKeys = Object.keys(skillItem).sort();
                return <div key={orderItem} className="col-md-4">
                    <h2>{NAMES[orderItem]}</h2>
                    {skillItemKeys.map(skillItemItem => {
                        return <div key={skillItemItem}>
                            <SkillItemItem name={skillItemItem} skillLevel={skillItem[skillItemItem]} />
                        </div>
                    })}
                </div>
            })}
        </div>
    </>
}