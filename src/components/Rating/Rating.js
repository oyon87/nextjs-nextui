import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@nextui-org/react";

function Rating({ rating }) {
  const handleRating = (rating) => {
    let stars = [];
    for (let i = 5; i > 0; i--) {
      if (rating >= 1) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
      } else if (rating > 0 && rating < 1) {
        stars.push(<FontAwesomeIcon icon={faStarHalfStroke} key={i} />);
      } else if (rating <= 0) {
        stars.push(<FontAwesomeIcon className="text-gray-200" icon={faStar} key={i} />);
      }

      rating -= 1;
    }

    return stars;
  };

  return (
    <div className="flex items-center gap-5 my-4">
      <div>
        <span className="text-xs">Rating:</span>
        <p className="text-2xl">{rating}</p>
      </div>
      <Divider className="h-10" orientation="vertical" />
      <div className="text-yellow-300 text-lg">{handleRating(rating)}</div>
    </div>
  );
}

export default Rating;
