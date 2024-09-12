import React from "react";
import skills from "../../data/skills.json";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

export default function Skills(props) {
  return (
    <div className={styles.skillContainer}>
      {/* <section className={styles.container} id="skills"> */}
      <h2 className={styles.title}>Languages I speak!</h2>
      <div className={styles.skills}>
        {skills?.length > 0 &&
          skills.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <img
                  width={32}
                  height={32}
                  style={{ marginRight: "16px" }}
                  src={getImageUrl(skill.imageSrc)}
                  alt={`${skill.title} logo`}
                />
                {skill.title}
              </div>
            );
          })}
      </div>
      {/* </section> */}
    </div>
  );
}
