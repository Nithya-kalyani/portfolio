import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const project1 = [
  "Developing a comprehensive workflow management tool designed to boost team productivity through streamlined processes.",
  "Contributing to both frontend and backend development while conducting thorough R&D to meet project requirements.",
  "Building clean, reusable, and optimized components to enhance functionality and ensure a seamless, efficient user experience.",
  "Leveraging advanced techniques and technologies to craft a robust, high-performance solution that remains adaptable for future needs.",
  "Delivering projects on time and effectively managing the team to ensure smooth collaboration and success.",
];

const project2 = [
  "Provided expertise on the Employee feedback tool during a critical phase.",
  "Managed the team through complex use cases, ensuring the project stayed on track.",
  "Delivered the project on time, demonstrating adaptability and problem-solving under tight deadlines.",
  "Ensured successful execution and timely delivery, emphasizing leadership and collaboration to meet project goals efficiently.",
];

const project3 = [
  "Contributed extensively to frontend development for the Health Care app, my first professional project.",
  "Built a user-friendly interface for a healthcare platform.",
  "Focused on performance optimization and responsiveness to ensure a seamless user experience.",
];

export default function ProjectCard(props) {
  const { project } = props;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  let projectContent =
    project.id === 1 ? project1 : project.id === 2 ? project2 : project3;

  return (
    <div className={styles.container}>
      <div
        onClick={togglePopup}
        className={`${styles.projectContainer} ${
          project.id === 1
            ? styles.project1
            : project.id === 2
            ? styles.project2
            : styles.project3
        }`}
      >
        <img
          className={styles.image}
          src={getImageUrl(project.imageSrc)}
          alt={`Image of ${project.title}`}
        />
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.skillsContainer}>
          <ul className={styles.skills}>
            {project.skills.map((skill, index) => {
              return (
                <li className={styles.skill} key={index}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <p className={styles.more} onClick={togglePopup}>
          View more{" "}
          <img
            src={getImageUrl("projects/down.svg")}
            alt={`More info about ${project.title}`}
          />
        </p>
      </div>

      {/* Conditionally render popup */}
      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={togglePopup}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.closeButton} onClick={togglePopup}>
              &times;
            </span>
            <img
              className={styles.image}
              src={getImageUrl(project.imageSrc)}
              alt={`Image of ${project.title}`}
            />
            <h3 className={styles.title}>{project.title}</h3>
            <ul className={styles.bulletPoints}>
              {projectContent.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className={styles.skillsContainer}>
              <ul className={styles.skills}>
                {project.skills.map((skill, index) => {
                  return (
                    <li className={styles.skill} key={index}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
