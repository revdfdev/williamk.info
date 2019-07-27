import React from 'react';
import { PROJECTS, PROJECT_LIST } from '../../_data/Projects/Projects';
import { SingleProject } from './SingleProject/SingleProject';

export const Projects: React.FC = () => {
    return <>
        <h1 className="centered margin-bottom-15">Projects</h1>
        <div className="row no-gutters">
            {PROJECT_LIST.map(project => {
                return <SingleProject project={PROJECTS[project]} key={project} projectKey={project} />
            })}
        </div>
    </>
}