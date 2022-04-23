import "./ProfileCards.css";

const ProfileCards = (props) => {
  console.log(props.data.BusinessName);
  return <div className="profile-card-main-div">{props.data.BusinessName}</div>;
};
export default ProfileCards;

/*data = {
		BusinessName: "Parthtrap Tailors",
		PhoneNumber: "94738563824",
		Address: "Agra, UP",
		Rating: 4.5,
		OpeningTime: "3PM",
		ClosingTime: "9PM",
		Profession: "tailor",
	};*/
