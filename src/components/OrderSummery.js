import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>order confirmed</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default OrderSummery;
