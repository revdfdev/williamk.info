import React from 'react';
import { PROJECTS, PROJECT_LIST } from '../_data/Projects/Projects';
import { SingleProject } from './SingleProject/SingleProject';

export const Projects: React.FC = () => {
    return <>
        <h1 className="centered margin-bottom-15">Projects</h1>
        <h3 className="centered margin-bottom-15">Click on one to learn more!</h3>
        <div className="row no-gutters">
            {PROJECT_LIST.map(project => {
                return <SingleProject project={PROJECTS[project]} key={project} projectKey={project} />
            })}
        </div>
    </>
}