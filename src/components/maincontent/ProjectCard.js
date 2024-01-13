import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './ProjectCard.module.css'

export default function ProjectCard({project}) {
  return (
    <>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles['project-link']}>
          <Card className={`${styles['project-card']}`}>
            <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </a>
    </>
  )
}
