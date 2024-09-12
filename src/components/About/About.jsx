import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export default function About(props) {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="about-image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutHead}>
                <img src={getImageUrl("about/cursorIcon.png")} />
                <h3>Frontend Expertise:</h3>
              </div>
              <p>
                In the world of frontend development, I thrive on creating
                clean, efficient, and reusable code that powers seamless user
                experiences. My passion for optimization drives me to push the
                boundaries of what's possible, ensuring that every interface is
                not only visually stunning but also lightning-fast. Constantly
                engaged in R&D, I explore the latest trends and technologies,
                bringing fresh ideas and innovative solutions to the table.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutHead}>
                <img src={getImageUrl("about/serverIcon.png")} />
                <h3>Backend Proficiency:</h3>
              </div>
              <p>
                On the backend, I’m all about delivering robust and reliable
                APIs that meet every requirement with precision. Whether it’s
                building from scratch or enhancing existing systems, I approach
                each challenge with a mindset of continuous learning and
                adaptability. I’m quick to grasp new concepts and technologies,
                always ready to expand my skill set to ensure the most effective
                and efficient solutions are implemented.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
