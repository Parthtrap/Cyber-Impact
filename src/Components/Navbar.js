import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-main-div">
      <div className="navbar-body">
        <div className="navbar-body-title">
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
              <a href="./UserLogin">
                <div className="navbar-body-components-item">Log In</div>
              </a>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div style={dropdownListStyle} className="navbar-dropdown">
        <a href="./UserLogin">
          <div className="navbar-dropdown-items">Log In</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
