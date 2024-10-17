import React from "react";
import { FaCheck } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";
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
              <li>
                <VscDebugBreakpointLog />
                Html
              </li>
              <li>
                <VscDebugBreakpointLog />
                CSS
              </li>
              <li>
                <VscDebugBreakpointLog />
                SASS
              </li>
              <li>
                <VscDebugBreakpointLog />
                Bootstrap
              </li>
              <li>
                <VscDebugBreakpointLog />
                Javascript
              </li>
              <li>
                <VscDebugBreakpointLog />
                ReactJS
              </li>
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
