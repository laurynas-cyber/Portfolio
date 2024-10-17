import React from "react";
import * as skills from "../../data/skills.js";
import dataCSS from "../../data/dataCSS.js";
import SkillsSection from "./SkillsSection.jsx";
function Skills({ slideIndex, styles }) {
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      <div className={styles.skills_container}>
        <SkillsSection
          data={skills.FrontEnd}
          styles={styles}
          dataCSS={dataCSS}
          startIndex={0}
          name={"FrontEnd"}
        />
        <SkillsSection
          data={skills.BackEnd}
          styles={styles}
          dataCSS={dataCSS}
          startIndex={5}
          name={"BackEnd"}
        />
        <SkillsSection
          data={skills.Other}
          styles={styles}
          dataCSS={dataCSS}
          startIndex={2}
          name={"Other"}
        />
      </div>
    </div>
  );
}

export default Skills;
