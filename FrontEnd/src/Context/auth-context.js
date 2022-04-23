import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  userName: null,
  //   user: null,
  //   markets: [],
  //   settingMarkets : (data) =>{};
  login: (user) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log(localStorage.getItem("user"));
    console.log(user);
    setUserId(user.id);
    setUserName(user.username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserId(null);
    setUserName(null);
  };

  console.log(userId);
  if (!isLoggedIn) {
    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    console.log("not logged in",userData);
    if (userData) {
      login({
        id: userData.id,
        username: userData.username,
      });
    }
  }

  const context = {
    isLoggedIn: isLoggedIn,
    userId: userId,
    userName: userName,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
