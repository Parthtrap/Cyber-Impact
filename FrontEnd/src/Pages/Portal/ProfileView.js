import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProfileView.css";

const ProfileView = () => {
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
            ImageURL: market.imageURL
          };
          setData(marketData);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMarket();
  }, []);

  console.log(data);

  //   const data = {
  //     BusinessID: market._id,
  //     BusinessName: market.title,
  //     PhoneNumber: market.phonenum,
  //     OwnerID: market.ownerId,
  //     Address: market.address,
  //     latitude: market.location.lat,
  //     longitude: market.location.lng,
  //     Rating: market.rating,
  //     Reviews: market.reviews.map((review) => {
  //       return {
  //         RaterID: review.raterID,
  //         Rating: review.rating,
  //         Review: review.review,
  //       };
  //     }),
  //     OpeningTime: "3PM",
  //     ClosingTime: "9PM",
  //     Profession: "tailor",
  //     ImageURL: "dgferf.in/fgrcwfwf/wfcwfw",
  //   };

  return (
    <div className="profile-view-body">
      <div className="profile-view-main-display-place-thingy">
        <div className="profile-view-body-title">{data.BusinessName}</div>

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
