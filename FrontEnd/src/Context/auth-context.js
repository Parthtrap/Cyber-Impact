import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  user : null,
  login: (user) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUserId(user._id);
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserId(null);
    setUser(null);
  };

  console.log(userId);
  if (!isLoggedIn) {
    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    if (userData) {
      login(userData);
    }
  }

  const context = {
    isLoggedIn: isLoggedIn,
    userId: userId,
    user: user,
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
