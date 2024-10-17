import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
function SkillsSection({ styles, dataCSS, data, startIndex, name }) {
  return (
    <div className={styles.skills_sections}>
      <h2
        style={{
          background: dataCSS[dataCSS.length - 1 - startIndex],
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {name}
      </h2>
      <div className={styles.skills}>
        <ul>
          {data.map((f, i) => (
            <li
              key={f}
              style={{
                background: dataCSS[i + startIndex],
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
  );
}

export default SkillsSection;
