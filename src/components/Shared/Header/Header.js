import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="header"
      >
        <Container>
          <Navbar.Brand href="#home" className="logo">
            YOUR TRAVEL
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end text-white">
            <Nav.Link as={Link} className="text-white" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/manageOrders">
              Manage All Orders
            </Nav.Link>
            {user.email && (
              <Nav.Link as={Link} className="text-white" to="/addService">
                Add Package
              </Nav.Link>
            )}
            {user?.email && (
              <Nav.Link as={Link} className="text-white" to="/myOrders">
                My Orders
              </Nav.Link>
            )}
            {user?.email ? (
              <Button onClick={logOut} className="text-white btn btn-danger">
                Logout
              </Button>
            ) : (
              <Nav.Link
                as={Link}
                className="text-white btn btn-danger"
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
