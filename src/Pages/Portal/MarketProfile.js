import "./MarketProfile.css";

const MarketProfile = () => {
  return (
    <div className="market-profile-body">
      <div className="market-profile-bar">
        <button
          id="market-profile-new-profile-btn"
          className="market-profile-new-profile-btn"
        >
          Add New Profile
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
