import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/Authentication/LoginPage";
import HomePage from "./Pages/HomePage";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Navbar login={true} />
					<HomePage />
				</Route>

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
}

export default App;
