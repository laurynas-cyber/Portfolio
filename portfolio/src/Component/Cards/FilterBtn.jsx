import { animated } from "@react-spring/web";
import React from "react";
import styles from "../Styles/styles.module.scss";

function FilterBtn({ textStyles, setSlideIndex, num, slideIndex, name }) {
  return (
    <animated.button style={textStyles} onClick={(_) => setSlideIndex(num)}>
      <span
        className={styles.line}
        style={{ left: slideIndex === num && num }}
      ></span>{" "}
      <span
        className={styles.btn_text_transition}
        style={{ color: slideIndex === num && "#263547" }}
      >
        {name}
      </span>
    </animated.button>
  );
}

export default FilterBtn;
