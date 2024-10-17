import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import * as skills from "../../data/skills.js";
import dataCSS from "../../data/dataCSS.js";
function Skills({ slideIndex, styles }) {
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      <div className={styles.skills_container}>
        <div className={styles.skills_sections}>
          <h2
            style={{
              background: dataCSS[dataCSS.length - 1],
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            FrontEnd
          </h2>
          <div className={styles.skills}>
            <ul>
              {skills.FrontEnd.map((f, i) => (
                <li
                  key={f}
                  style={{
                    background: dataCSS[i + 2],
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <VscDebugBreakpointLog className={styles.skills_icon} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.skills_sections}>
          <h2
            style={{
              background: dataCSS[dataCSS.length - 2],
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            BackEnd
          </h2>
          <div className={styles.skills}>
            <ul>
              {skills.BackEnd.map((f, i) => (
                <li
                  key={f}
                  style={{
                    background: dataCSS[i],
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <VscDebugBreakpointLog className={styles.skills_icon} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.skills_sections}>
          <h2
            style={{
              background: dataCSS[dataCSS.length - 3],
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Others
          </h2>
          <div className={styles.skills}>
            <ul>
              {skills.Other.map((f, i) => (
                <li
                  key={f}
                  style={{
                    background: dataCSS[i],
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <VscDebugBreakpointLog className={styles.skills_icon} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
