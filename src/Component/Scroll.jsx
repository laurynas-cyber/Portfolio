import { useScroll, animated, useSpring } from "@react-spring/web";
import img from "../assets/profilio23.jpg";
import styles from "./styles.module.scss";
import { useRef } from "react";
import { MdWavingHand } from "react-icons/md";
const X_LINES = 40;

const PAGE_COUNT = 2;

// const INITIAL_WIDTH = 20;

const TRIANGLES = 11;

export default function Scroll() {
  const containerRef = useRef(null);
  const barContainerRef = useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.9) {
        textApi.start({ y: "0" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
    default: {
      immediate: true,
    },
  });
  console.log(Array.from({ length: 20 }));
  return (
    <div ref={containerRef} className={styles.body}>
      <div className={styles.animated__layers}>
        <div className={styles.about_container}>
          <div className={styles.about}>
            <div className={styles.about_content}>
              <h1>About me </h1>
              <p>
                <img src={img} alt="profilio"></img>
                Hello!
                <span>
                  <MdWavingHand />
                </span>
                My name is Laurynas, motivated and fast learning person. I am
                responsible, loyal, detail orientated, team player, have
                analytical skills and efficient problem-solving. I finished
                Javascript programming courses and have basics and advanced
                Front-end programming knowledge and hopefully get opportunity
                apply it to the growth of your company.
              </p>
            </div>
          </div>
        </div>
        <animated.div
          ref={barContainerRef}
          className={styles.ScrollBar_container}
        >
          <div className={styles.pipe}>
            {Array.from({ length: TRIANGLES }).map((_, i) => (
              <div
                key={i}
                className={styles.triangle}
                style={{ top: `${i * 10}%` }}
              ></div>
            ))}
            {Array.from({ length: TRIANGLES }).map((_, i) => (
              <div
                key={i}
                className={styles.triangle_reverse}
                style={{ top: `${-5 + i * 10}%` }}
              ></div>
            ))}
            <animated.div
              className={styles.liquid}
              style={{ height: scrollYProgress.to((val) => `${val * 100}%`) }}
            ></animated.div>
          </div>
        </animated.div>

        <animated.div className={styles.bar__container__inverted}>
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className={styles.bar}
              style={{
                width: scrollYProgress.to((scrollP) => {
                  if (i % 3 === 0) {
                    return scrollP * 40;
                  } else return 20;
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div
          className={styles.dot}
          style={{
            transform: scrollYProgress.to(
              (val) => `translate(-50%, -${val * 50}%)`
            ),
            clipPath: scrollYProgress.to(
              (val) =>
                `inset(${(1 - val) * 100}% ${100 - val * 100}% ${
                  (1 - val) * 100
                }% ${105 - val * 100}%`
            ),
          }}
        >
          <h1 className={styles.title}>
            <span>
              <animated.span style={textStyles}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={textStyles}>You found me!</animated.span>
            </span>
          </h1>
        </animated.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className={styles.full__page} key={index}>
          {" "}
        </div>
      ))}
    </div>
  );
}
