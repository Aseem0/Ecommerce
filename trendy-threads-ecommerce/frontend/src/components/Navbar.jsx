import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const user = useSelector((state) => state.auth);
  return (
    <header>
      <Navbar bg="dark" variant="dark"></Navbar>;
      <Container>
        <Link to="/home">
          <Navbar.Brand>Trendy thrifts</Navbar.Brand>
        </Link>
      </Container>
    </header>
  );
};

export default NavbarComp;
