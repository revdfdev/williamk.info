
import React from 'react';
import './ResumeItem.css';
import bullet from '../../_assets/Images/Resume/bullet.png';

export type ResumeItemProps = {
    heading: string,
    dates: string,
    points: string[]
}

export const ResumeItem: React.FC<ResumeItemProps> = ({ heading, dates, points }) => {
    return <div className="resume-item-container">
        <div className="row margin-none">
            <div className="col-xs-auto resume-padding-sides-none resume-item-heading">{heading}</div>
            <div className="col justify-content-end resume-item-dates resume-padding-sides-none">{dates}</div>
        </div>
        <ul className="resume-item-content">
            {points.map(point => <li key={point}>
                <img alt={""} src={bullet} className="resume-item-bullet" />{point}
            </li>)}
        </ul>
    </div>
}