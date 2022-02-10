import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <input type="search" placeholder="search" />
      <div style={{ backgroundColor: "rgb(97, 96, 96)", padding: "1rem" }}>
        <Link to="featured">Featured</Link>
        <Link to="new">new</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
