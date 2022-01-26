import { Navbar } from "react-bootstrap";
import React from "react";

const Footer = () => {
  return (
    <Navbar bg="light" style={{ paddingLeft: 20 }}>
      <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
