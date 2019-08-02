import React from 'react';
import { PROJECTS } from '../components/_data/Projects/Projects';
import { Projects } from '../components/Projects/Projects';
import { Button } from 'reactstrap';
import Link from 'next/link';
import '../pageStyles/projects.css';
import Fade from 'react-reveal/Fade';

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
            <Fade duration={1500}>
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

                    {proj.seeAlso && <div>
                        See also:
                    <ul className="projects-ul">
                            {proj.seeAlso.map(seeAlsoItem => {
                                return <li key={seeAlsoItem.key}>
                                    <Link href={`/projects/${seeAlsoItem.key}`}>
                                        <a>
                                            {seeAlsoItem.title}
                                        </a>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                    }

                    {proj.links && <div>
                        Links:
                    <ul className="projects-ul">
                            {proj.links.map(link => {
                                if (link.internal) {
                                    return <li key={link.title}>
                                        <Link href={link.link}>
                                            <a>
                                                {link.title}
                                            </a>
                                        </Link>
                                    </li>
                                }
                                return <li key={link.title}><a href={link.link}>{link.title}</a></li>
                            })}
                        </ul>
                    </div>}
                </div>
            </Fade>
        </>}
    </>
}

export default ProjectsPage;