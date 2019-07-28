import React, { useState } from 'react';
import { Project } from '../../_data/Projects/Projects';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import Link from 'next/link';
import './SingleProject.css';
import Fade from 'react-reveal/Fade';

type SingleProjectProps = {
    project: Project,
    projectKey: string
}

export const SingleProject: React.FC<SingleProjectProps> = ({ project, projectKey }) => {
    const [hover, setHover] = useState<boolean>(false);

    return <div className="single-project col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <Fade duration={600}>
            <Card style={{
                backgroundImage: `url("${project.image}")`
            }}
                className="project-card"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <Link href={`/projects/${projectKey}`}>
                    <a>
                        <div className={`project-hover ${hover ? "project-hover-show" : "project-hover-hide"}`}>
                            <CardTitle className="project-title">{project.title}</CardTitle>
                            <CardSubtitle>{project.blurb}</CardSubtitle>
                            {project.tools && <CardSubtitle className="project-tools">Tools: {project.tools.join(", ")}</CardSubtitle>}
                        </div>
                    </a>
                </Link>
            </Card>
        </Fade>
    </div>
}