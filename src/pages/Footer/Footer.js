import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import TC from "./TC.png";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import pay from "./payment.png";
export default function Footer() {
  const navigate = useNavigate();
  const style = { color: "white" };
  return (
    <footer id="footer">
      <div className="footer-links">
        <Container>
          <div className="inner">
            {" "}
            <Row>
              <Col xs={12} sm={12} md={3}>
                <img src={TC} style={{ width: "100px" }} />
                <p></p>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <h4>Contact Us</h4>
                <ul className="identity">
                  <li className="address">
                    <AiOutlineHome className="icon" />
                    4710-4890 Breckinridge USA
                  </li>
                  <li className="email">
                    <GoMail className="icon" />
                    thanhct8199@gmail.com
                  </li>
                  <li className="phone">
                    <BsTelephone className="icon" />
                    (012) 800 456 789-987
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <h4>Information</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Delivery Information</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Site Map</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <h4>Follow US</h4>
                <div class="social_icon">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div class="payment">
            <img src={pay} alt="payment" />
          </div>
        </Container>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="inner">
            <p class="text-powered">
              Copyright <Link to="/">TC-Jewelry</Link>. Store 1 © 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
