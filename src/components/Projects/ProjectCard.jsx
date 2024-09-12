import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  const { project } = props;
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImageUrl(project.imageSrc)}
        alt={`Image of${project.title}`}
      />
      <div className={styles.projectContainer}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.skills}>
          {project.skills.map((skill, index) => {
            return (
              <li className={styles.skill} key={index}>
                {skill}
              </li>
            );
          })}
        </ul>
        {/* <div className={styles.links}>
        <a className={styles.link} href={project.demo}>
          Demo
        </a>
        <a className={styles.link} href={project.source}>
          Source
        </a>
      </div> */}
      </div>
    </div>
  );
}
