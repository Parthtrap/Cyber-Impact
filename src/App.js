import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/Authentication/LoginPage";
import HomePage from "./Pages/HomePage";

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
			</Switch>
		</>
	);
}

export default App;
