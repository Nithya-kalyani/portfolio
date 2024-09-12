import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Profile.module.css";

export default function Profile(props) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Nithya Kalyani</h1>
        <p className={styles.description}>
          Crafting seamless web experiences with React, I’m a frontend-focused
          full-stack developer with three years of expertise. From stunning UIs
          to occasional backend magic with Node.js and Go, I bring your ideas to
          life.
        </p>
        <div className={styles.flexCenter}>
          <a
            target="blank"
            className={styles.contactBtn}
            href="mailto:nithyank04@gmail.com"
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
            Contact Me
          </a>
          <a
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
          </a>
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
