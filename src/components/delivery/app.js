import React from "react";
import "./delivery.css";
import Filters from "../../pgComp/filters/Filters";
import DeliveryCollection from "./deliverycollections/index";
import TopBrands from "./topbrands/index";
import ExploreSection from "../../pgComp/exploresection/index";
import { restaurants } from "../../data/restaurants";

const restaurantList = restaurants;
const deliveryFilters = [
  {
    id: 1,
    title: "Filters",
    icon: <i className="fa-solid fa-sliders absolute-center"></i>,
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Safe & Hygenic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fa-solid fa-up-down"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
function Delivery() {
  return (
    <div className="max-width">
      <Filters filterList={deliveryFilters} /> 
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery restaurant in Bangalore"
      />
    </div>
  );
}

export default Delivery;
