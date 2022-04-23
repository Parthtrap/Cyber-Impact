import { Link } from "react-router-dom";
import "./ProfileCards.css";

const ProfileCards = (props) => {
  const marketLink = `/ProfileView/${props.data.BusinessID}`;
  return (
    <Link to={marketLink} style={{ color: "black" }}>
      <div className="profile-card-main-div">
        <div className="profile-card-title">{props.data.BusinessName}</div>

        <div className="profile-card-personal-info">
          <span>
            {" "}
            <span className="profile-card-main-text">Phone Number: </span>{" "}
            <span style={{ userSelect: "text" }}>{props.data.PhoneNumber}</span>
          </span>
        </div>
        <div className="profile-card-address-info">
          <span>
            <span className="profile-card-main-text">Address: </span>{" "}
            <span style={{ userSelect: "text" }}>{props.data.Address}</span>
          </span>
        </div>

        <div className="profile-card-profession-and-rating">
          <span>
            <span className="profile-card-main-text">Profession: </span>{" "}
            <span style={{ userSelect: "text" }}>{props.data.Profession}</span>
          </span>
          <span>
            <span className="profile-card-main-text">Rating: </span>{" "}
            <span style={{ userSelect: "text" }}>{props.data.Rating}</span>
          </span>
        </div>

        <div className="profile-card-timing">
          <span style={{ userSelect: "text" }}>
            {" "}
            Open from{" "}
            <span className="profile-card-main-text">
              {props.data.OpeningTime}
            </span>{" "}
            to{" "}
            <span className="profile-card-main-text">
              {props.data.ClosingTime}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ProfileCards;

/*data = {
		BusinessName: "Parthtrap Tailors",
		PhoneNumber: "94738563824",
		Address: "Agra, UP",
		Rating: 4.5,
		OpeningTime: "3PM",
		ClosingTime: "9PM",
		Profession: "Tailor",
	};*/
