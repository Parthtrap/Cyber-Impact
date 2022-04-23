import { createContext, useState } from "react";

const AuthContext = createContext({
	isLoggedIn: false,
	userId: null,
	userName: null,
	login: (user) => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState(null);
	const [userId, setUserId] = useState(null);

	const login = (user) => {
		setUserId(user.id);
		setUserName(user.username);
		setIsLoggedIn(true);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setUserId(null);
		setUserName(null);
		console.log("Logged Out");
	};

	const context = {
		isLoggedIn: isLoggedIn,
		userId: userId,
		userName: userName,
		login: login,
		logout: logout,
	};

	return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
