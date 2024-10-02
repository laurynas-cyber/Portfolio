import { useScroll, animated } from "@react-spring/web";
import React from "react";

export default function Scroll() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <animated.div className="Scroller" style={{ opacity: scrollYProgress }}>
      Hello World
    </animated.div>
  );
}
