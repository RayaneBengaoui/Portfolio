import Homepage from "./Pages/Homepage";
import Work from "./Pages/Work";
import styled from "styled-components";

// React
import { useState } from "react";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Import Global Styles
import GlobalStyle from "./components/GlobalStyle";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [navStatus, setNavStatus] = useState(false);
  return (
    <AppStyled>
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Homepage navStatus={navStatus} setNavStatus={setNavStatus} />
          </Route>
          <Route path="/work">
            <Work navStatus={navStatus} setNavStatus={setNavStatus} />
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
