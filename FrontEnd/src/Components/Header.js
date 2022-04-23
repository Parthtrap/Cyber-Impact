import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
import headerLogo from "./../Media/logo.png";
import "./Header.css";

const Header = (props) => {
  const [dropdownListStyle, setDropdownListStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const auth = useContext(AuthContext);

  const dropdownHandler = () => {
    if (isOpen) {
      setDropdownListStyle({
        height: "0px",
        animation: "drop-up-animation 1s",
      });
      setIsOpen(false);
    } else {
      setDropdownListStyle({
        height: "119px",
        animation: "drop-down-animation 1s",
      });
      setIsOpen(true);
    }
  };

  const LogoutHandler = () => {
    auth.logout();
  };

  return (
    <div className="header-main-div">
      <div className="header-body">
        <div className="header-body-title">
          <img className="header-logo" src={headerLogo} alt="No Image" />
          <Link to="./FrontPage">Cyber Impact</Link>
        </div>

        <button className="header-dropdown-button" onClick={dropdownHandler}>
          ≡
        </button>

        {/* Buttons for Header */}
        <div className="header-buttons">
          {props.MarketProfileBtn ? (
            <>
              <div className="header-body-components">
                <Link to="/MarketProfile">
                  <div className="header-body-components-item">
                    Market Profile
                  </div>
                </Link>
              </div>{" "}
            </>
          ) : (
            ""
          )}

          <div className="header-body-components">
            <Link to="./" onClick={LogoutHandler}>
              <div className="header-body-components-item">Log Out</div>
            </Link>
          </div>
        </div>
      </div>
      <div style={dropdownListStyle} className="header-dropdown">
        <Link to="./" onClick={LogoutHandler}>
          <div className="header-dropdown-items">Log Out</div>
        </Link>

        {props.MarketProfileBtn ? (
          <>
            <Link to="./MarketProfile">
              <div className="header-dropdown-items">Market Profile</div>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
