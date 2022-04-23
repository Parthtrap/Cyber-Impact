import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./MarketProfile.css";
import AuthContext from "../../context/auth-context";
import ProfileCards from "../../Components/ProfileCards";

const MarketProfile = () => {
  const [markets, setMarkets] = useState([]);
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  console.log(userId);
  console.log(markets.length);

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/market/user/${userId}`
        );

        const responseData = await response.json();

        if (response.status === 201) {
          console.log(responseData);
          setMarkets(responseData.UserMarkets);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMarket();
  }, []);

  return (
    <div className="market-profile-body">
      <Link className="market-profile-bar" to="./ProfileForm">
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
      </Link>

      <div className="market-profile-main-display">
        {markets.length ? markets.map((market) => {
          const data = {
            BusinessID: market._id,
            BusinessName: market.title,
            PhoneNumber: market.phonenum,
            OwnerID: market.ownerId,
            Address: market.address,
            latitude: market.location.lat,
            longitude: market.location.lng,
            Rating: market.rating,
            Reviews: market.reviews.map((review) => {
              return {
                RaterID: review.raterID,
                Rating: review.rating,
                Review: review.review,
              };
            }),
            OpeningTime: market.openingTime,
            ClosingTime: market.closingTime,
            Profession: market.profession,
            ImageURL: market.imageURL,
          };

          return <ProfileCards data={data} />;
        }) : null}
      </div>
    </div>
  );
};

export default MarketProfile;
