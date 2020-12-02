import Homepage from "./Pages/Homepage";
import Work from "./Pages/Work";
import styled from "styled-components";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Import Global Styles
import GlobalStyle from "./components/GlobalStyle";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AppStyled>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/work">
            <Work />
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
