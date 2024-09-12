import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects(props) {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects?.length > 0 &&
          projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
      </div>
    </section>
  );
}
