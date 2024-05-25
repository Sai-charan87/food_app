import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
//import { join } from "telegraf/format";
const Body = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    console.log("useeffect called");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(res);
    setList(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (List.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = List.filter((res) => res.info.avgRating > 4.5);

            setList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {List.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
