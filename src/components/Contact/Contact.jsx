import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export default function Contact(props) {
  return (
    <footer id="contact" className={styles.container}>
      <h1>Contact</h1>

      <div className={styles.footerContent}>
        <div className={styles.text}>
          <p>
            I’m always open to new opportunities. If you’re interested in
            working together or just want to connect, feel free to reach out!
          </p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:nithyank04@gmail.com" target="blank">
              <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
            </a>
          </li>
          <li className={styles.link} target="blank">
            <a href="https://www.linkedin.com/in/nithya-kalyani-a50576167/">
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="inkedinIcon"
              />
            </a>
          </li>
          {/* <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
          <a href="https://">github.com/Nithya-kalyani</a>
        </li> */}
        </ul>
      </div>
    </footer>
  );
}
