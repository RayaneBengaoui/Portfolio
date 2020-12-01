import Homepage from "./Pages/Homepage";
import Work from "./Pages/Work";

//Router
import { Switch, Route } from "react-router-dom";

//Import Global Styles
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
