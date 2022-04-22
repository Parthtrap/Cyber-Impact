import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/Authentication/LoginPage";
import HomePage from "./Pages/HomePage";
<<<<<<< HEAD
import FrontPage from "./Pages/Portal/FrontPage";
=======
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
>>>>>>> 9f401f2f84a2cc0a32240a443415366d8fb39fe2

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar login={true} />
          <HomePage />
        </Route>

<<<<<<< HEAD
        <Route exact path="/Login">
          <Navbar login={false} />
          <LoginPage />
        </Route>

        <Route exact path="/FrontPage">
          <FrontPage />
        </Route>
      </Switch>
    </>
  );
=======
				<Route exact path="/Login">
					<Navbar login={false} />
					<LoginPage />
				</Route>

				<Route exact path="/ForgotPassword">
					<Navbar login={false} />
					<ForgotPassword />
				</Route>
			</Switch>
		</>
	);
>>>>>>> 9f401f2f84a2cc0a32240a443415366d8fb39fe2
}

export default App;
