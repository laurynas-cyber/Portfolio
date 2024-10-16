import {
  useTransition,
  useChain,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "../../data/data.js";
import dataCSS from "../../data/dataCSS.js";
import rand from "../../data/rand.js";
import styles from "../styles.module.scss";
import { FaGithub } from "react-icons/fa";

export default function CardsWrapper({ open, textStyles }) {
  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
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
      <div className={styles.profolio_content_filter}>
        <animated.button style={textStyles}>All</animated.button>
        <animated.button style={textStyles}>Browsers</animated.button>
        <animated.button style={textStyles}>Games</animated.button>
      </div>
      <animated.div className={styles.wrap_container}>
        {transition((style, item) => (
          <animated.div className={styles.warp_item} style={{ ...style }}>
            <a
              href={item.link}
              target="_blank"
              className={styles.warp_item_link}
            >
              <img src={item.css} alt={item.name} />
              <div
                className={styles.warp_item_technologies}
                // style={{ bottom: isHover ? "0px" : "100px" }}
              >
                <div className={styles.warp_item_technologies_wrapper}>
                  <a href={item.gitlink} target="_blank">
                    <FaGithub />
                  </a>
                  <div className={styles.warp_item_technologies_list}>
                    {item.techno.map((t, i) => (
                      <div
                        style={{
                          background: dataCSS[rand(0, dataCSS.length - 1)],
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}
