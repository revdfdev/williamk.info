import React from 'react';
import { PROJECTS } from '../components/_data/Projects/Projects';
import { Projects } from '../components/Projects/Projects';


type ProjectsPageProps = {
    projectName: string
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projectName }) => {
    return <>
        {!PROJECTS[projectName] && <>
            <h2>Project not found.</h2>
            <Projects />
        </>}
    </>
}

export default ProjectsPage;