import "./MarketProfile.css";

const MarketProfile = () => {
  return (
    <div className="market-profile-body">
      <form className="market-profile-bar" action="./ProfileForm">
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
      </form>

      <div className="market-profile-main-display"></div>
    </div>
  );
};

export default MarketProfile;
