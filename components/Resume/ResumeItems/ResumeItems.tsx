import React from 'react';
import { ResumeItemProps, ResumeItem } from '../ResumeItem/ResumeItem';

type ResumeItemsProps = {
    resumeItems: ResumeItemProps[]
}

export const ResumeItems: React.FC<ResumeItemsProps> = ({ resumeItems }) => {
    return <>
        {resumeItems.map(resumeItem => <ResumeItem key={resumeItem.heading} {...resumeItem} />)}
    </>
}