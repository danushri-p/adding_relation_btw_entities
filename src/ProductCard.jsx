import PropTypes from "prop-types";
import RatingWidget from "./RatingWidget";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} reviews)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
