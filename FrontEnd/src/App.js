import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/Authentication/LoginPage";
import HomePage from "./Pages/HomePage";
import FrontPage from "./Pages/Portal/FrontPage";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import Header from "./Components/Header";
import SignUpPage from "./Pages/Authentication/SignUpPage";
import MarketProfile from "./Pages/Portal/MarketProfile";
import ProfileForm from "./Pages/Portal/ProfileForm";
import { useContext } from "react";
import AuthContext from "./context/auth-context";

function App() {
	const auth = useContext(AuthContext);

	return auth.isLoggedIn ? (
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

				<Route exact path="/SignUp">
					<Navbar login={false} />
					<SignUpPage />
				</Route>

				<Route exact path="/ForgotPassword">
					<Navbar login={false} />
					<ForgotPassword />
				</Route>

				<Route exact path="/*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
	) : (
		<>
			<Switch>
				<Route exact path="/">
					<Header MarketProfileBtn={true} />
					<FrontPage />
				</Route>
				<Route exact path="/MarketProfile">
					<Header MarketProfileBtn={false} />
					<MarketProfile />
				</Route>
				<Route exact path="/ProfileForm">
					<Header MarketProfileBtn={true} />
					<ProfileForm />
				</Route>
				<Route exact path="/*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
	);
}

export default App;
