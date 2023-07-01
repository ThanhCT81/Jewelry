import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Email.css";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const {
    eproduct,
    bill,
    isemail,
    name,
    email,
    phone,
    setName,
    setEmail,
    setPhone,
    form,
    sendEmail,
    mess,
    setMess,
    scrolltotop,
  } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="PageEmail">
      <Container>
        <div class="animated bounceInLeft">
          <div class="head-page">
            <a class="head-icon" href="/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>
            </a>
            <p class="head-separate">|</p>
            <p class="head-name">Check Out</p>
          </div>
        </div>
      </Container>
      <Container
        fluid="lg"
        className={`${isemail ? "pagecart-email isemail" : "pagecart-email"}`}
      >
        <Form className="form_email" ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              required
              name="user_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="email-address"
              type="email"
              placeholder="Enter email"
              required
              name="user_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone "
              required
              name="user_phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Products order</Form.Label>
            <Form.Control
              type="text"
              value={eproduct.map((item) => ` ${item}`)}
              name="user_products"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="text"
              value={`${bill.toLocaleString("en-HOSSDDG", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              })} `}
              name="user_totals"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={mess}
              onChange={(e) => {
                setMess(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            onClick={() => {
              navigate("/cart");
              scrolltotop();
            }}
            className="email_btn"
          >
            Back to Cart
          </Button>
          <Button className="email_btn" type="submit">
            Buy Now
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Email;
