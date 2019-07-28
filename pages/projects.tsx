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
        </>}
    </>
}

export default ProjectsPage;