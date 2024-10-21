import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Toggle() {
  const [isToggled, setisToggled] = useState(false);
  const fade = useSpring({
    opacity: isToggled ? 0 : 1,
  });

  return (
    <>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={(_) => setisToggled(!isToggled)}>Toggle</button>
    </>
  );
}
