import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css'

const projects = [
    {
      id: 1,
      title: 'Image Gallery',
      description: 'Simplify image management – upload, delete, and sort effortlessly for an organized gallery.',
      image: 'image_gallery.png',
      link: 'https://hussainshafayet.github.io/image-gallery',
    },
    {
      id: 2,
      title: 'Image Gallery',
      description: 'Simplify image management – upload, delete, and sort effortlessly for an organized gallery.',
      image: 'image_gallery.png',
      link: 'https://hussainshafayet.github.io/image-gallery',
    },
    {
      id: 3,
      title: 'Image Gallery',
      description: 'Simplify image management – upload, delete, and sort effortlessly for an organized gallery.',
      image: 'image_gallery.png',
      link: 'https://hussainshafayet.github.io/image-gallery',
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
