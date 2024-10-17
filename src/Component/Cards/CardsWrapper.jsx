import {
  useTransition,
  useChain,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "../../data/data.js";
import styles from "../styles.module.scss";
import { FaGithub } from "react-icons/fa";
import TechnoList from "./TechnoList.jsx";
import { useState } from "react";
import Filter from "./Filter.jsx";

export default function CardsWrapper({ open, textStyles }) {
  const [projects, setProjects] = useState(data);
  const transApi = useSpringRef();
  const transition = useTransition(open ? projects : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([transApi], [0, open ? 0.1 : 0.6]);

  return (
    <div className={styles.portfolio_content}>
      <Filter setProjects={setProjects} textStyles={textStyles} />
      <animated.div className={styles.wrap_container}>
        {transition((style, item) => (
          <animated.div className={styles.warp_item} style={{ ...style }}>
            <a
              href={item.link}
              target="_blank"
              className={styles.warp_item_link}
            >
              <img src={item.css} alt={item.name} />
              <div className={styles.warp_item_technologies}>
                <div className={styles.warp_item_technologies_wrapper}>
                  <a href={item.gitlink} target="_blank">
                    <FaGithub />
                  </a>
                  <TechnoList styles={styles} arrData={item.techno} />
                </div>
              </div>
            </a>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}
