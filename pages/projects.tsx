import React from 'react';
import { PROJECTS } from '../components/_data/Projects/Projects';
import { Projects } from '../components/Projects/Projects';
import { Button } from 'reactstrap';
import Link from 'next/link';
import '../pageStyles/projects.css';

type ProjectsPageProps = {
    projectName: string
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projectName }) => {
    const proj = PROJECTS[projectName];
    return <>
        {!proj && <>
            <Projects />
            <div className="spacer"></div>
        </>}
        {proj && <>
            <Link href="/">
                <a>
                    <Button className="whitetext projects-buttons">
                        Home
                    </Button>
                </a>
            </Link>
            <Link href="/projects">
                <a>
                    <Button className="whitetext projects-buttons">
                        All projects
                    </Button>
                </a>
            </Link>

            <h1>{proj.title}</h1>
            <h2>{proj.blurb}</h2>
            <h3>{proj.startDate}{proj.endDate ? ` - ${proj.endDate}` : ""}</h3>
            <div className="projects-image">
                <img src={proj.image} alt={proj.title} />
            </div>
            <div>
                {proj.description && proj.description.map(paragraph => {
                    return <p key={paragraph}>{paragraph}</p>
                })}
                {proj.tools && <p>
                    Tools used: {proj.tools.join(", ")}
                </p>}

                {proj.seeAlso && <>
                    See also:&nbsp;
                {proj.seeAlso.map(seeAlsoItem => {
                        return <Link key={seeAlsoItem.key} href={`/projects/${seeAlsoItem.key}`}>
                            <a>
                                {seeAlsoItem.title}
                            </a>
                        </Link>
                    })}</>}
            </div>
        </>}
    </>
}

export default ProjectsPage;