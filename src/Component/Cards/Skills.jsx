import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import * as skills from "../../data/skills.js";

function Skills({ slideIndex, styles }) {
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      <div className={styles.skills_container}>
        <div className={styles.skills_sections}>
          <h2>FrontEnd </h2>
          <div className={styles.skills}>
            <ul>
              {skills.FrontEnd.map((f) => (
                <li key={f}>
                  <VscDebugBreakpointLog />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.skills_sections}>BackEnd</div>
        <div className={styles.skills_sections}>Others</div>
      </div>
    </div>
  );
}

export default Skills;
