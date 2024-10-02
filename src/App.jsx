import "./App.scss";
import Animations from "./Component/Animations/Animations";

import { useSpring, animated } from "@react-spring/web";
import Test from "./Component/Animations/Test";
import Scroll from "./Component/Animations/Scroll";

function App() {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <>
      {/* <animated.div className="App" style={fade}>
        <Animations />
      </animated.div>
      <Test /> */}
      <Scroll />
    </>
  );
}

export default App;
