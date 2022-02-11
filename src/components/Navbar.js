import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
import "./Navbar.css";
const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "white",
    };
  };

  const auth = useAuth();
  return (
    <nav>
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="products">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyle} to="login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
