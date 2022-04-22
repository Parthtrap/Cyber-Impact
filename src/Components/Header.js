import { useState } from "react";
import "./Header.css";

const Header = (props) => {
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
				height: "119px",
				animation: "drop-down-animation 1s",
			});
			setIsOpen(true);
		}
	};

	return (
		<div className="header-main-div">
			<div className="header-body">
				<div className="header-body-title">
					<a href="./">Cyber Impact</a>
				</div>

				<button className="header-dropdown-button" onClick={dropdownHandler}>
					≡
				</button>
				<div className="header-body-components">
					<a href="./UserLogin">
						<div className="header-body-components-item">Log Out</div>
					</a>
				</div>
			</div>
			<div style={dropdownListStyle} className="header-dropdown">
				<a href="./UserLogin">
					<div className="header-dropdown-items">Log Out</div>
				</a>
			</div>
		</div>
	);
};

export default Header;
