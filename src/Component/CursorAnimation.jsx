import { animated, useSpring } from "@react-spring/web";

export default function CursorAnimation() {
  const cursorAnimation = useSpring({
    loop: { reverse: true },
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return <animated.span style={cursorAnimation}>|</animated.span>;
}
