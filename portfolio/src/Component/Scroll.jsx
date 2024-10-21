import { useScroll, animated, useSpring } from "@react-spring/web";
import img from "../assets/profilio23.jpg";
import styles from "./Styles/styles.module.scss";
import { useRef, useState } from "react";
import { MdWavingHand } from "react-icons/md";
import cv from "../assets/CV.pdf";
import BounceHand from "./BounceHand.jsx";

import TextEffect from "./TextEffect.jsx";
import CardsWrapper from "./Cards/CardsWrapper.jsx";
import Skills from "./Cards/Skills.jsx";
import ContactMe from "./Cards/ContactMe.jsx";
import Links from "./Cards/Links.jsx";

const X_LINES = 40;

const PAGE_COUNT = 2;

// const INITIAL_WIDTH = 20;

const TRIANGLES = 11;

export default function Scroll() {
  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef(null);
  const barContainerRef = useRef(null);
  const [open, set] = useState(false);
  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  //----
  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.9) {
        textApi.start({ y: "0" });
        set(true);
      } else {
        set(false);
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
            <p style={{ whiteSpace: "pre-wrap" }}>
              <img src={img} alt="profilio"></img>
              <span className={styles.me}>About me</span>
              Hello!
              <MdWavingHand style={{ margin: "0px 5px" }} />
              <TextEffect />
              <BounceHand styles={styles} />
            </p>
            <a
              href={cv}
              download="LaurynasStanciauskasCV.pdf"
              className={styles.cv_container}
            >
              <button style={{ pointerEvents: open ? "none" : "all" }}>
                Download CV
              </button>
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
          <div className={styles.dot_item}>
            <div className={styles.portfolio_container}>
              <div className={styles.portfolio_filter}>
                <animated.button
                  style={textStyles}
                  onClick={(_) => setSlideIndex(0)}
                >
                  <span
                    className={styles.line}
                    style={{ left: slideIndex === 0 && 0 }}
                  ></span>{" "}
                  <span
                    className={styles.btn_text_transition}
                    style={{ color: slideIndex === 0 && "#263547" }}
                  >
                    Portfolio{" "}
                  </span>
                </animated.button>
                <animated.button
                  style={textStyles}
                  onClick={(_) => setSlideIndex(1)}
                >
                  <span
                    className={styles.line}
                    style={{ left: slideIndex === 1 && 0 }}
                  ></span>
                  <span
                    className={styles.btn_text_transition}
                    style={{ color: slideIndex === 1 && "#263547" }}
                  >
                    Skills
                  </span>
                </animated.button>
                <animated.button
                  style={textStyles}
                  onClick={(_) => setSlideIndex(2)}
                >
                  <span
                    className={styles.line}
                    style={{ left: slideIndex === 2 && 0 }}
                  ></span>
                  <span
                    className={styles.btn_text_transition}
                    style={{ color: slideIndex === 2 && "#263547" }}
                  >
                    Contact Me
                  </span>
                </animated.button>
                <animated.button
                  style={textStyles}
                  onClick={(_) => setSlideIndex(3)}
                >
                  <span
                    className={styles.line}
                    style={{ left: slideIndex === 3 && 0 }}
                  ></span>
                  <span
                    className={styles.btn_text_transition}
                    style={{ color: slideIndex === 3 && "#263547" }}
                  >
                    Links
                  </span>
                </animated.button>
              </div>
              <div className={styles.portfolio_slider_container}>
                <CardsWrapper
                  open={open}
                  textStyles={textStyles}
                  slideIndex={slideIndex}
                />
                <Skills slideIndex={slideIndex} styles={styles} />

                <ContactMe slideIndex={slideIndex} styles={styles} />
                <Links slideIndex={slideIndex} styles={styles} />
              </div>
            </div>
          </div>
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
