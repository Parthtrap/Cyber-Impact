import { useState } from "react";
import navbarLogo from "./../Media/logo.png";
import "./Navbar.css";

const Navbar = (props) => {
  const [dropdownListStyle, setDropdownListStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    if (isOpen) {
      setDropdownListStyle({
        height: "0px",
        animation: "drop-up-animation 1s",
      });
      setIsOpen(false);
    } else {
      setDropdownListStyle({
        height: "60px",
        animation: "drop-down-animation 1s",
      });
      setIsOpen(true);
    }
  };

  return (
    <div className="navbar-main-div">
      <div className="navbar-body">
        <div className="navbar-body-title">
          <img className="navbar-logo" src={navbarLogo} alt="No Image" />
          <a href="./">Cyber Impact</a>
        </div>

        {props.login ? (
          <>
            <button
              className="navbar-dropdown-button"
              onClick={dropdownHandler}
            >
              ≡
            </button>
            <div className="navbar-body-components">
              <a href="./Login">
                <div className="navbar-body-components-item">Log In</div>
              </a>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {props.login ? (
        <>
          <div style={dropdownListStyle} className="navbar-dropdown">
            <a href="./Login">
              <div className="navbar-dropdown-items">Log In</div>
            </a>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
