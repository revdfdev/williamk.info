import React, { useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { ResumePageComponent } from './ResumePage/ResumePage';
import { Button } from 'reactstrap';
import './Resume.css';
import { ResumeHeader } from './ResumeHeader/ResumeHeader';
import { ResumeSection } from './ResumeSection/ResumeSection';
import educationIcon from '../_assets/Images/Resume/graduationCapIcon.png';
import experienceIcon from '../_assets/Images/Resume/briefcaseIcon.png';
import codeIcon from '../_assets/Images/Resume/codeIcon.png';
import skillsIcon from '../_assets/Images/Resume/wrenchIcon.png';
import { ResumeItemProps } from './ResumeItem/ResumeItem';
import { ResumeItems } from './ResumeItems/ResumeItems';
import { ResumeSkills } from './ResumeSkills/ResumeSkills';

// uncomment for conversion ///////////////////////////////
// import { CanvasConverter } from './CanvasConverter/CanvasConverter';
// import { THEME_COLOR } from './ResumeConstants';

///////////////////////////?///////////////////////////////

const EDUCATION: ResumeItemProps[] = [
    {
        heading: "University of Washington - Seattle, Washington",
        dates: "Sept 2016 - Jun 2020",
        points: [
            "GPA: 3.71/4.0 (Dean's List)",
            "Bachelor of Science in Informatics doing a custom Software Development track",
            "Key coursework: Client-Side Development, Server-Side Development, Software Architecture, Data Structures & Algorithms"
        ]
    }
];

const EXPERIENCE: ResumeItemProps[] = [
    {
        heading: "Qualtrics, Software Engineering Intern",
        dates: "Jun 2019 - Sept 2019",
        points: [
            "Worked on a shifted time periods filter feature requested by 15+ large brands",
            "Collaborated closely with another intern and other teams to define strict requirements and project scope",
            "Planned, documented, and made modifications and additions from start to production for 12+ different code repositories"
        ]
    },
    {
        heading: "University of Washington iSchool, Teaching Assistant and Tutor",
        dates: "Sep 2018 - Present",
        points: [
            "Teach students foundation skills in client side and server side development",
            "Hold office hours and lab sections for about 40 students to answer class related questions",
            "Created a tutor hub with tutorials on various topics, as well as a tutoring queue to collect data on common problems",
            "Technologies: CSS, Django, Docker, Golang, HTML, JavaScript, jQuery, React, SQL, Websockets"
        ]
    },
    {
        heading: "Washington iGEM, Lead Software Engineer",
        dates: "Feb 2017 - Present",
        points: [
            "Lead a diverse team of six to design and build the team's website, required for a competition",
            "Document and maintain the code base through the use of unit tests and continuous integration",
            "Wrote automated deployment scripts for other teams to utilize and make deploying a site easier"
        ]
    },
    {
        heading: "Code and Cognition Lab, Research Intern",
        dates: "Jun 2018 - Jun 2019",
        points: [
            "Applied Agile development practices for assisting with research projects",
            "Built a coding tutor that uses Bayesian Knowledge Tracing to allow for a tailored user experience",
            "Collected, analyzed, and wrote about data for a paper on teaching programming strategies accepted to SIGCSE 2019"
        ]
    }
];

const PROJECTS: ResumeItemProps[] = [
    {
        heading: "QuestionQueue & TutorQueue",
        dates: "Dec 2018, Mar 2019",
        points: [
            "Created a queuing app focused towards tutoring individuals and collecting usage data to determine topics were difficult",
            "Allowed me to gain practice with implementing a tool for the real world using technologies I had never used before",
            "AWS, Docker, Flask, Golang, MongoDB, Python, RabbitMQ, React, Redis, Websockets"
        ]
    },
    {
        heading: "CodeItz, Code and Cognition Lab",
        dates: "Jun 2018 - Jun 2019",
        points: [
            "CodeItz is a web tutor that uses a Bayesian Knowledge Tracing algorithm to help users learn programming concepts",
            "Established the framework for writing unit tests in the application and helped remove code redundancy to reduce bugs",
            "Enzyme, Express, Firebase, Flow, JavaScript, Jest, Lodash, React, Sass"
        ]
    },
    {
        heading: "FRC 2090 Scouting App 2018 & 2019",
        dates: "Mar 2018, Mar 2019",
        points: [
            "Created a web application that allows the Hawaii Robotics community to visualize performance at the state championships",
            "Application had data live input by a high school team to see who to pick as an alliance going into eliminations",
            "Data was released to the local Hawaii Robotics community afterwards",
        ]
    }
];

const SKILLS = {
    LANGUAGES: "CSS, C++, Golang, HTML, JavaScript (ES6+), Java, LaTeX, MATLAB, MongoDB, Python, Redis, SQL, R, TypeScript",
    TOOLS_AND_FRAMEWORKS: "Angular, AWS, Azure, Django, Docker, Enzyme, Flask, git, Jest, JIRA, jQuery, NextJS, React, Vue",
    CONCEPTS: "Accessible Design, Agile, Microservices, Research, SOLID Design, Team management, Test driven development"
}

export const Resume: React.FC = () => {
    const pdf = useRef<PDFExport>(null);

    // uncomment for conversion ///////////////////////////
    // const devCanvas = useRef<HTMLCanvasElement>(null);
    // const [canvasConverter] = useState<CanvasConverter>(new CanvasConverter());
    // const [canvasLoaded, setCanvasLoaded] = useState<boolean>(false);

    // useEffect(() => {
    //     canvasConverter.registerDevCanvas(devCanvas.current);
    //     setCanvasLoaded(true);
    // }, [devCanvas]);

    ////////////////////////////////////////////////////////

    return <>
        {/** uncomment for conversion */}
        {/* <canvas ref={devCanvas} className="resume-dev-canvas"></canvas>
        {canvasLoaded &&
            <>
                <img src={canvasConverter.convertFontAwesomeIconToImage(faWrench, "2x", {
                    width: 500,
                    height: 500,
                    color: THEME_COLOR
                })} />
            </>
        } */}
        {/** ************************* */}
        <>

            <Button onClick={() => {
                if (pdf.current) {
                    pdf.current.save()
                }
            }} className="margin-bottom-15px">Download</Button>
            <PDFExport paperSize={'Letter'}
                fileName="WilliamKwokResume.pdf"
                title="William Kwok"
                subject="William Kwok"
                ref={pdf}
            >
                <ResumePageComponent>
                    <ResumeHeader />
                    <ResumeSection iconSource={educationIcon} title="education">
                        <ResumeItems resumeItems={EDUCATION} />
                    </ResumeSection>
                    <ResumeSection iconSource={experienceIcon} title="experience">
                        <ResumeItems resumeItems={EXPERIENCE} />
                    </ResumeSection>
                    <ResumeSection iconSource={codeIcon} title="recent projects">
                        <ResumeItems resumeItems={PROJECTS} />
                    </ResumeSection>
                    <ResumeSection iconSource={skillsIcon} title="skills">
                        <div className="resume-all-skills">
                            <ResumeSkills skillHeading="Languages" skills={SKILLS.LANGUAGES} />
                            <ResumeSkills skillHeading="Tools and Frameworks" skills={SKILLS.TOOLS_AND_FRAMEWORKS} />
                            <ResumeSkills skillHeading="Concepts" skills={SKILLS.CONCEPTS} />
                        </div>
                    </ResumeSection>
                </ResumePageComponent>
            </PDFExport>
        </>
    </>
}
