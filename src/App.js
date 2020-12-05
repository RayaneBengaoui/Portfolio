import Homepage from "./Pages/Homepage";
import Work from "./Pages/Work";
import About from "./Pages/About";
import styled from "styled-components";

// React
import { useState, useEffect } from "react";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Import Global Styles
import GlobalStyle from "./components/GlobalStyle";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [navStatus, setNavStatus] = useState(false);

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function handleMouseMove(e) {
      const valueX = e.screenX;
      const valueY = e.screenY;
      setOffsetX((valueX / 1000) * 4);
      setOffsetY((valueY / 1000) * 4);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [offsetY, offsetX]);

  return (
    <AppStyled>
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Homepage
              navStatus={navStatus}
              setNavStatus={setNavStatus}
              offsetX={offsetX}
              offsetY={offsetY}
            />
          </Route>
          <Route path="/work">
            <Work
              navStatus={navStatus}
              setNavStatus={setNavStatus}
              offsetX={offsetX}
              offsetY={offsetY}
            />
          </Route>
          <Route path="/about">
            <About
              navStatus={navStatus}
              setNavStatus={setNavStatus}
              offsetX={offsetX}
              offsetY={offsetY}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  overflow: hidden;
`;

export default App;
