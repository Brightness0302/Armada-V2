import React, { Fragment } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Head = ({}) => {
  return (
    <div className="top-navbar">
      <div className="navbar-left">
        <label className="navbar-title">Armada</label>
      </div>
      <div className="navbar-right">
        <img
          className="navbar-right-img"
          src="client.png"
          width="55"
          height="55"
        />
        <label className="navbar-right-text">
          Welcome,
          <br /> Oscar
        </label>
      </div>
    </div>
  );
};

export default Head;
