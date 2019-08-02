import React from 'react';
import './ResumeSection.css';

type ResumeSectionProps = {
    title: string,
    iconSource: string
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ title, iconSource, children }) => {
    return <>
        <div>
            <div className="row align-items-center margin-none resume-section-total-heading">
                <div>
                    <img src={iconSource} alt={title} className="resume-section-icon" />
                </div>
                <div className="resume-section-heading">
                    {title.toUpperCase()}
                </div>
            </div>
            <div className="resume-section-content">
                {children}
            </div>
        </div>
    </>
}