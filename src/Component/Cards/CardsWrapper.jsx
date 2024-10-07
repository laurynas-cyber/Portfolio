import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "./data";
import styles from "../styles.module.scss";

export default function CardsWrapper({ open }) {
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
      <animated.div className={styles.wrap_container}>
        {transition((style, item) => (
          <animated.div
            className={styles.warp_item}
            style={{ ...style, background: item.css }}
          />
        ))}
      </animated.div>
    </div>
  );
}
