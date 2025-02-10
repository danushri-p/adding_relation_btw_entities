import { useState } from "react";
import PropTypes from "prop-types";

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: (hoveredRating || rating) >= star ? "gold" : "gray"
            }}
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={rating === 0}>
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;
