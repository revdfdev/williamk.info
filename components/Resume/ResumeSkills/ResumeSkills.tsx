import React from 'react';
import './ResumeSkills.css';

type ResumeSkillsProps = {
    skillHeading: string,
    skills: string
}

export const ResumeSkills: React.FC<ResumeSkillsProps> = ({ skillHeading, skills }) => {
    return <div className="resume-skills-container">
        <span className="resume-skills-heading">{skillHeading}:</span> <span className="resume-skills-skills">{skills}</span>
    </div>
}