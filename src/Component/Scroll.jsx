import { useScroll, animated, useSpring } from "@react-spring/web";
import img from "../assets/profilio23.jpg";
import styles from "./styles.module.scss";
import { useRef } from "react";

const X_LINES = 40;

const PAGE_COUNT = 2;

const INITIAL_WIDTH = 20;

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
            <p>
              <img src={img}></img>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate eaque sunt eos labore eum. Vel sint, et, quam
              dignissimos nemo recusandae cumque, nam pariatur officia maiores
              reiciendis magni. Ab sed odit illum sit ipsam omnis minima maiores
              dignissimos, eius vitae. Odio provident aliquid accusamus dolor
              vero porro quos, voluptates mollitia labore fugit numquam iste,
              voluptas, culpa alias maiores. Perspiciatis accusantium quo animi
              tempore similique sapiente explicabo iusto provident
              reprehenderit. Ex reprehenderit veritatis doloribus voluptatum
              delectus eos totam quaerat eaque ea? Quasi ex eaque quas minus,
              ipsa ullam consequatur reprehenderit similique, explicabo velit
              sequi dicta ut corrupti vel pariatur beatae doloribus?
            </p>
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
          // style={{
          //   clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
          // }}
          style={{
            transform: scrollYProgress.to(
              (val) => `translate(-50%, -${val * 40 + 10}%)`
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
