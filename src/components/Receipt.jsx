import "./Receipt.css";
import { useState } from "react";
import Records from "./Records";
function Receipt(props) {
  return (
    <div className="Food-container">
      <h3 className="Food-name">Name: {props.person}</h3>
      <h3 className="Food-name">Main: {props.order.main}</h3>
      <h3 className="Food-name">Protein: {props.order.protein}</h3>
      <h3 className="Food-name">Rice: {props.order.rice}</h3>
      <h3 className="Food-name">Sauce: {props.order.sauce}</h3>
      <h3 className="Food-name">Drink: {props.order.drink}</h3>
      <h3 className="Food-name">Cost: {props.order.cost}</h3>
    </div>
  );
}

export default Receipt;
