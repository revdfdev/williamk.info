import React from 'react';
import { Progress } from 'reactstrap';
import './SkillItemItem.css';

type SkillItemItemProps = {
    name: string,
    skillLevel: number
}

export const SkillItemItem: React.FC<SkillItemItemProps> = ({
    name, skillLevel
}) => {
    return <div className="skill-item-item row no-gutter align-items-center">
        <div className="col skill-item-item-text">
            {name}
        </div>
        <div className="col">
            <Progress value={skillLevel} max={5} className="skill-item-item-progress">{skillLevel}/5</Progress>
        </div>
    </div>
}