import { animated, useSpring } from "@react-spring/web";
import { FaHandPointer } from "react-icons/fa";

function BounceHand({styles}) {
  const bounce = useSpring({
    from: { transform: "translateY(-5px) rotate(180deg)" }, // Start position
    to: { transform: "translateY(-10px) rotate(180deg)" }, // Bounce up
    config: { tension: 2000, friction: 200 }, // Control speed and bounciness
    loop: { reverse: true }, // Loop the animation, reverse direction
    
  });
  return (
    <span className={styles.scroll_text}>
      Scroll down
      <animated.span style={bounce}>
        <FaHandPointer />
      </animated.span>
      to check my portfolio
    </span>
  );
}

export default BounceHand;
