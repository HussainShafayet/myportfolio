import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css'

const projects = [
   {
      id: 0,
      title: 'GoCart',
      description: `Built a modern and responsive e-commerce platform using React, featuring dynamic product listings, shop-
      ping cart functionality, and seamless user experience. Integrated with APIs for real-time data handling and optimized
        for performance and accessibility`,
      image: 'GoCart.png',
      link: 'https://drive.google.com/file/d/1jOW66tm644Ccgdb7saQOlccDAQQSlNLn/view',
    },
    {
      id: 1,
      title: 'Image Gallery',
      description: 'Simplify image management – upload, delete, and sort effortlessly for an organized gallery.',
      image: 'image_gallery.png',
      link: 'https://hussainshafayet.github.io/image-gallery',
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'A Todo List Application built with React.js featuring a Kanban-style interface with three distinct columns: New, Ongoing, and Done. The app allows users to manage tasks through different stages of completion with added functionalities like context menus, date pickers, and form pre-filling.',
      image: 'todo_app.png',
      link: 'https://hussainshafayet.github.io/todo-app/',
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
