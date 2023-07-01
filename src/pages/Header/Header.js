import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import TC from "./TC.png";
import React from "react";
import "./Header.css";
import { RiShoppingBag2Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { RiHeartLine, RiAccountCircleLine } from "react-icons/ri";
import Search from "./Search";
export default function Header() {
  const { cart } = useContext(AppContext);
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container fluid className="Navbar-head">
          <Navbar.Brand>
            <Link to="/">
              <img src={TC} style={{ width: "100px" }} />
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="">Introduce</Nav.Link>
              <NavDropdown title="Colections" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/Bracelets">Bracelets</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Link to="/Necklaces">Necklaces</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Link to="/Earings">Earings</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Link to="/Rings">Rings</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Abouts</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="search-cart">
            <form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                className="form-control"
              />
              <button variant="outline-success" className="btn-search">
                <HiMagnifyingGlass className="search-icon" />
              </button>
            </form>
            <div className="col-cart">
              <RiAccountCircleLine />
              <RiHeartLine className="wish-icon" />
              <div className="cart-link">
                <Link to="/cart" className="cart">
                  <RiShoppingBag2Line />
                </Link>
                <p className="cart-length">{cart.length}</p>
              </div>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>
        </Container>
      </Navbar>
      <Search></Search>
    </header>
  );
}
