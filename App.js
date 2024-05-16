import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResrtaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="rers-log"
        src=" https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f3712f78feb56ca2f11ba6dcacd54521"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.locality}</h4>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRatingString}</h4>
    </div>
  );
};
const resObj = {
  info: {
    id: "11091",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Attapur",
    areaName: "Attapur",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4,
    parentId: "721",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 50,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-17 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {/* <div className="res-item"></div> */}
        <ResrtaurantCard resData={resObj} />
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
