import React from "react";
import "./deliveryitem.css";

function DeliveryItem({ item }) {
  return (
    <div>
    <div className="delivery-item-cover">
      <img src={item.cover} className="cur-po delivery-item-image" alt={item.title} />
    </div>
    <div className="delivery-item-title">{item.title}</div>
    </div>
  );
}

export default DeliveryItem;
