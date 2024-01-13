import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css'

const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://images.freeimages.com/images/large-previews/82a/frog-on-chain-link-fence-1560508.jpg',
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://images.freeimages.com/images/large-previews/82a/frog-on-chain-link-fence-1560508.jpg',
      link: 'https://example.com/project2',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://images.freeimages.com/images/large-previews/82a/frog-on-chain-link-fence-1560508.jpg',
        link: 'https://example.com/project2',
      },
    // Add more project data as needed
  ];
export default function Projects() {
  return (
    <>
       <div id="projects" className={styles['projects-section']}>
        <h2 className="text-center">My Projects</h2>
        <div className={styles['projects-grid']}>
            {projects.map((project) => (
            <div key={project.id}>
                <ProjectCard project={project} />
            </div>
            ))}
        </div>
        </div>
    </>
  )
}
