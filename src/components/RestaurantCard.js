import constants from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    locality,
    cuisines,
    costForTwo,
    avgRatingString,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={constants.CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};
export default RestaurantCard;
