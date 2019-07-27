import React, { useState } from 'react';
import { Experience } from '../Experience';
import { Collapse, Button, CardBody, Card, CardTitle, CardSubtitle } from 'reactstrap';
import './SinglePosition.css';

type SinglePositionProps = {
    experience: Experience
}

export const SinglePosition: React.FC<SinglePositionProps> = ({ experience }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <div className="single-position">
        <Card>
            <div className="single-position-img-and-title">
                <div className="single-position-img">
                    <CardTitle>
                        <img src={experience.logo} alt={experience.company + " logo"} />
                    </CardTitle>
                </div>
                <div>
                    <CardBody className="single-position-body">
                        <CardTitle className="single-position-title">{experience.title}</CardTitle>
                        <CardSubtitle className="single-position-subtitle">{experience.company}</CardSubtitle>
                        <CardSubtitle className="single-position-subtitle-date">{experience.startDate} - {experience.endDate ? experience.endDate : "Present"}</CardSubtitle>
                        <div className="single-position-text">
                            <Collapse isOpen={isOpen}>
                                {experience.description && experience.description.map(descriptionParagraph => {
                                    return <p key={descriptionParagraph}>{descriptionParagraph}</p>
                                })}
                                <div>
                                    {experience.links && experience.links.map(link => {
                                        return <Button key={link.title} className="btn-tertiary"><a href={link.link}>{link.title}</a></Button>
                                    })}
                                </div>
                            </Collapse>
                            <Button className="single-position-button" onClick={() => {
                                setIsOpen(!isOpen);
                            }}>
                                {!isOpen ? "Show more" : "Show less"}
                            </Button>
                        </div>
                    </CardBody>
                </div>
            </div>
        </Card>
    </div>
}