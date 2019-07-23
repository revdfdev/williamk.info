import React, { useState } from 'react';
import { Experience } from '../Experience';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './SinglePosition.css';

type SinglePositionProps = {
    experience: Experience
}

export const SinglePosition: React.FC<SinglePositionProps> = ({ experience }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <div className="single-position">
        <Card>
            <CardBody>
                <Collapse isOpen={isOpen}>
                    {experience.description && experience.description.map(descriptionParagraph => {
                        return <p key={descriptionParagraph}>{descriptionParagraph}</p>
                    })}
                </Collapse>
                {!isOpen && <Button onClick={() => setIsOpen(true)}>Show more</Button>}
                {isOpen && <Button onClick={() => setIsOpen(false)}>Show less</Button>}
            </CardBody>
        </Card>
    </div>
}