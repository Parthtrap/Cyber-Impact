import "./MarketProfile.css";

const MarketProfile = () => {
  return (
    <div className="market-profile-body">
      <div className="market-profile-bar">
        <button
          id="market-profile-new-profile-btn"
          className="market-profile-new-profile-btn"
        >
          <a href="./ProfileForm">Add New Profile</a>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="market-profile-main-display"></div>
    </div>
  );
};

export default MarketProfile;
