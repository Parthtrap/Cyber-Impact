import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <Navbar login={true} /> */}
          <HomePage />
        </Route>

        <Route exact path="/HomePage">
          {/* <Navbar login={true} /> */}
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
