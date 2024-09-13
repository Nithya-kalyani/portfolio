import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export default function About(props) {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <div className={styles.aboutImageContainer}>
          <img
            src={getImageUrl("about/aboutImage.svg")}
            alt="about-image"
            className={styles.aboutImage}
          />
        </div>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutHead}>
                <img src={getImageUrl("about/Frontend.png")} />
                <h3>Frontend Expertise:</h3>
              </div>
              <p>
                In the world of frontend development, I’m driven by a passion
                for crafting clean, efficient, and reusable code that fuels
                flawless user experiences. I thrive on pushing the limits of
                optimization, ensuring every interface is not just visually
                captivating but also incredibly fast. With an insatiable
                curiosity for the latest trends, I’m always exploring new
                technologies and delivering cutting-edge, innovative solutions.
                Let’s turn bold ideas into reality!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutHead}>
                <img src={getImageUrl("about/Backend.png")} />
                <h3>Backend Knowledge:</h3>
              </div>
              <p>
                On the backend, I’m dedicated to crafting rock-solid, reliable
                APIs that hit every requirement with precision. Whether building
                from the ground up or fine-tuning existing systems, I tackle
                each challenge with a thirst for continuous learning and
                adaptability. I’m always eager to dive into new technologies,
                expanding my expertise to deliver the most effective, efficient,
                and cutting-edge solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
