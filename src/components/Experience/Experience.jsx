import React from "react";
import Skills from "../Skills/Skills";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export default function Experience(props) {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.skillExperienceContainer}>
        <Skills />
        <div className={styles.experienceContainer}>
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.content}>
            <ul className={styles.history}>
              {history?.length > 0 &&
                history.map((hisItem, index) => {
                  return (
                    <li key={index} className={styles.historyItem}>
                      {/* <img
                    src={getImageUrl(hisItem.imageSrc)}
                    alt={`${hisItem.organisation} logo`}
                  /> */}
                      <div className={styles.historyItemDetails}>
                        <p className={styles.roleText}>{hisItem.role}</p>
                        <p className={styles.roleOrg}>
                          {hisItem.organisation}
                          <span className={styles.roleDate}>|</span>
                          <span>
                            {`${hisItem.startDate} - ${hisItem.endDate}`}
                          </span>
                        </p>
                        {/* <p className={styles.roleDate}>{`${hisItem.startDate} - ${hisItem.endDate}`}</p> */}
                        <p className={styles.roleExperience}>{hisItem?.experiences}</p>
                      </div>

                      {/* <ul>
                    {hisItem.experiences.map((exp, index) => {
                      return <li key={index}>{exp}</li>;
                    })}
                  </ul> */}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
