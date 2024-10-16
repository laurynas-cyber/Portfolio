import {
  useTransition,
  useChain,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "../../data/data.js";
import styles from "../styles.module.scss";

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
          <animated.a
            className={styles.warp_item}
            href={item.link}
            style={{ ...style }}
            target="_blank"
          >
            <img src={item.css} alt={item.name} />
          </animated.a>
        ))}
        
      </animated.div>
    </div>
  );
}
