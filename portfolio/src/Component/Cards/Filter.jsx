import data from "../../data/data.js";
import styles from "../Styles/styles.module.scss";
import { animated } from "@react-spring/web";

export default function Filter({ textStyles, setProjects }) {
  const displayBrowsers = (_) => {
    setProjects([]);
    setTimeout((_) => {
      const browsers = data.filter((a) => a.type === "browser");
      setProjects(browsers);
    }, 1100);
  };
  const displayGames = (_) => {
    setProjects([]);
    setTimeout((_) => {
      const games = data.filter((a) => a.type === "game");
      setProjects(games);
    }, 1100);
  };
  const displayAll = (_) => {
    setProjects([]);
    setTimeout((_) => {
      setProjects(data);
    }, 1100);
  };
  return (
    <div className={styles.profolio_content_filter}>
      <animated.button style={textStyles} onClick={displayAll}>
        <span className={styles.filter_btns}>All</span>
      </animated.button>
      <animated.button style={textStyles} onClick={displayBrowsers}>
        <span className={styles.filter_btns}>Browsers</span>
      </animated.button>
      <animated.button style={textStyles} onClick={displayGames}>
        <span className={styles.filter_btns}>Games</span>
      </animated.button>
    </div>
  );
}
