import "./ReviewCards.css";

const ReviewCards = (props) => {
  return (
    <div className="review-card-main-div">
      <div className="review-card-rating">
        <span>
          {" "}
          <span className="review-card-main-text">Rating: </span>{" "}
          <span style={{ userSelect: "text" }}>{}</span>
        </span>
      </div>
      <div className="review-card-reating">Rating:</div>
    </div>
  );
};

export default ReviewCards;
