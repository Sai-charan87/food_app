import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import constants from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(constants.MENU_API + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Destructure properties from resInfo safely
  const { name, avgRatingString, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card
      ?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{avgRatingString}</p>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
