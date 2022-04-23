import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import "./ProfileView.css";

const ProfileView = () => {
  const [isFavourite, setFavourite] = useState(false);
  const auth = useContext(AuthContext);
  console.log("fav", isFavourite);

  const favoriteToggle = async () => {
    try {
      const sendData = JSON.stringify({
        userId: auth.userId,
        marketId: data.BusinessID,
      });

      const response = await fetch("http://localhost:5000/api/user/togglefav", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: sendData,
      });

      const responseData = await response.json();
      if (response.status === 201) {
        setFavourite(!isFavourite);
        auth.login(responseData.user);
        console.log(responseData);
      } else {
        console.log(responseData.error);
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };
  const [data, setData] = useState({
    BusinessID: "randomID",
    BusinessName: "PlaceHolder",
    PhoneNumber: "94738563824",
    OwnerID: "3jh52n5iu4fsgev",
    Address: "Agra, UP",
    latitude: 35.4345453,
    longitude: 34.5675856,
    Rating: 4.5,
    Reviews: [
      {
        RaterID: "hu34brku3hrbku4",
        Rating: 5,
        Review: "Dope AF",
      },
      {
        RaterID: "ergiueyivu3tnv",
        Rating: 4,
        Review: "Meh",
      },
    ],
    OpeningTime: "3PM",
    ClosingTime: "9PM",
    Profession: "Tailor",
    ImageURL: "dgferf.in/fgrcwfwf/wfcwfw",
  });
  const marketId = useParams().mid;
  console.log(marketId);

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/market/${marketId}`
        );

        const responseData = await response.json();

        if (response.status === 201) {
          console.log(responseData);
          const market = responseData.market;
          const marketData = {
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
          const isFav = auth.user.favourites.find((data) => {
            console.log(data, market._id, data === market._id);
            return data === market._id;
          });
          if (isFav) {
            setFavourite(true);
          }
          setData(marketData);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMarket();
  }, [marketId]);

  console.log(data);
  return (
    <div className="profile-view-body">
      <div className="profile-view-main-display-place-thingy">
        <div className="profile-view-body-title">
          {data.BusinessName}{" "}
          {isFavourite ? (
            <div className="star" onClick={favoriteToggle}></div>
          ) : (
            <div className="star-hidden" onClick={favoriteToggle}></div>
          )}{" "}
        </div>

        <div className="profile-view-info">
          <div className="profile-view-text-section">
            <div className="profile-view-texts">
              Profession: {data.Profession}
            </div>
            <br />
            <div className="profile-view-texts">
              Phone Number: {data.PhoneNumber}
            </div>
            <br />
            <div className="profile-view-texts">Address: {data.Address}</div>
            <br />
            <div className="profile-view-texts">Rating: {data.Rating}</div>
            <br />
            <div className="profile-view-texts">
              Opening Time: {data.OpeningTime}
            </div>
            <br />
            <div className="profile-view-texts">
              Closing Time: {data.ClosingTime}
            </div>
            <br />
            <div className="profile-view-rater"></div>
          </div>

          <div className="profile-view-review-section">
            <div className="profile-view-review-scrolling"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
