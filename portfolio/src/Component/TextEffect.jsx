import { useSprings, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import CursorAnimation from "./CursorAnimation";

export default function TextEffect() {
  const text = `My name is Laurynas, motivated and fast learning personality. I am responsible, loyal, detail orientated, team player, with analytical skills and efficient problem-solving. I finished programming courses with {Javascript} and have basics and advanced FrontEnd programming knowledge and hopefully get opportunity to apply it to the growth of successfull company. During my freetime I build projects to explore the possibilities of {Javascript} and here I want to share my portfolio with you.`;

  const [index, setIndex] = useState(0);

  const letters = text.split("");

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      opacity: index > i ? 1 : 0,
      from: { opacity: 0 },
      config: { duration: 1 }, // Adjust the duration for typing speed
    }))
  );
  useEffect(() => {
    if (index < letters.length) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1); // Delay between each letter being "typed"
      return () => clearTimeout(timer);
    }
  }, [index, letters.length]);

  return (
    <>
      {springs.map((props, i) => (
        <>
          <animated.span key={"ka" + i} style={props}>
            {letters[i]}
          </animated.span>
          {i === index - 1 && index !== springs.length && <span>|</span>}
        </>
      ))}
      {index === springs.length && <CursorAnimation />}
    </>
  );
}
