import { useScroll, animated, useSpring, useSprings } from "@react-spring/web";
import img from "../assets/profilio23.jpg";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { MdWavingHand } from "react-icons/md";
import cv from "../assets/CV.pdf";
import BounceHand from "./BounceHand";
import { FaHandPointer } from "react-icons/fa";
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

  const text = `My name is Laurynas, motivated and fast learning personality. I am responsible, loyal, detail orientated, team player, with analytical skills and efficient problem-solving. I finished programming courses with Javascript and have basics and advanced Front-End programming knowledge and hopefully get opportunity to apply it to the growth of your company. During my freetime I build projects to explore the possibilities of Javascript. Here I want to share my portfolio with you.`;

  const [index, setIndex] = useState(0);

  const letters = text.split("");
  const cursorAnimation = useSpring({
    loop: { reverse: true },
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });

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
        setIndex(index + 1);
      }, 1); // Delay between each letter being "typed"
      return () => clearTimeout(timer);
    }
  }, [index, letters.length]);

  //----
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

  return (
    <div ref={containerRef} className={styles.body}>
      <div className={styles.animated__layers}>
        <div className={styles.about_container}>
          <div className={styles.about}>
            <p>
              <img src={img} alt="profilio"></img>
              <span className={styles.me}>About me </span>
              Hello!
              <MdWavingHand style={{ margin: "0px 5px" }} />
              {springs.map((props, i) => (
                <>
                  <animated.span key={i} style={props}>
                    {letters[i]}
                  </animated.span>
                  {i === index - 1 && (
                    <animated.span style={cursorAnimation}>|</animated.span>
                  )}
                </>
              ))}
              <BounceHand styles={styles} />
            </p>
            <a
              href={cv}
              download="LaurynasStanciauskasCV.pdf"
              className={styles.cv_container}
            >
              <button>Download CV</button>
            </a>
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
              (val) => `translate(-${52 - 2 * val}%, -${-20 + 70 * val}%)`
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
