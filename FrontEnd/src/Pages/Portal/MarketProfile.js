import { Link } from "react-router-dom";
import "./MarketProfile.css";

const MarketProfile = () => {
	return (
		<div className="market-profile-body">
			<Link className="market-profile-bar" to="./ProfileForm">
				<button id="market-profile-new-profile-btn" className="market-profile-new-profile-btn">
					Add New Profile
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</Link>

      <div className="market-profile-main-display"></div>
    </div>
  );
};

export default MarketProfile;
