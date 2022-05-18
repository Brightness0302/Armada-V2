import React, { Fragment } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const NavBar = ({}) => {
  return (
    <Navbar
      className="pl-5 nav-bar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="/">
        <Image src={logo} width="40px" height="40px" className="mr-2" />
        Dev Connector
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
};

export default NavBar;
