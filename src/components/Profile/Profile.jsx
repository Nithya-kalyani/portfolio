import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Profile.module.css";
import { RESUME_URL } from "../../../config";

export default function Profile(props) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Nithya</h1>
        <p className={styles.description}>
          I’m a passionate Frontend-Focused Full-Stack Developer who loves
          transforming ideas into stunning, high-performance React applications.
          From seamless backend solutions to captivating user experiences, I
          thrive on solving complex problems and creating impactful digital
          solutions. Let’s build something extraordinary together!
        </p>
        <div className={styles.flexCenter}>
          <a
            target="blank"
            className={styles.contactBtn}
            href="mailto:nithyank04@gmail.com"
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
            Have a word?
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            <img src={getImageUrl("contact/Resume.svg")} alt="emailIcon" />
            Resume
          </a>

          {/* <a
            className={styles.contactBtn}
            style={{ marginLeft: "24px" }}
            target="blank"
            href="https://www.linkedin.com/in/nithya-kalyani-a50576167/"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="inkedinIcon"
            />
            My Profile
          </a> */}
        </div>
      </div>
      <img
        className={styles.profileImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="profileImg"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
