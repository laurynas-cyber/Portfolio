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

export default function CardsWrapper({open, set}) {


  const springApi = useSpringRef();


  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.portfolio_content}>
      <animated.div
      
        className={styles.wrap_container}
       
      >
        {transition((style, item) => (
          <animated.div
            className={styles.warp_item}
            style={{ ...style, background: "red", height: "10px" }}
          />
        ))}
      </animated.div>
    </div>
  );
}
