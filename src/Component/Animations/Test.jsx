import React from "react";
import { useSpring, animated } from "@react-spring/web";
import ExternalComponent from "./ExternalComponent";

function Test() {
  //1var
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  //2var/
  const AnimatedDialog = animated(ExternalComponent);

  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <>
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
      <AnimatedDialog style={styles} />
    </>
  );
}

export default Test;
