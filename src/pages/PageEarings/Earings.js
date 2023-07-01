import React, { useContext } from "react";
import "./Bracelets.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import { MdOutlineStarRate } from "react-icons/md";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { RiShoppingBag2Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsGrid1X2, BsListUl } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
const Earings = () => {
  const {
    earings,
    handle_popup,
    handle_sort,
    isLayout,
    handle_addCart,
    handle_product,
    setImg,
    scrolltotop,
    setIsLayout,
    setCheck,
  } = useContext(AppContext);
  // console.log("page-tradi", dataTradi);
  return (
    <div>
      <Container fluid="lg">
        <div className="selection-bar">
          <div className="filter-bar">
            <FiFilter />
            <Form.Select
              aria-label="Sorted By:"
              onChange={(e) => {
                e.preventDefault();
                setCheck(e.target.value);
              }}
            >
              <option>Sorted By:</option>
              <option value="5">Default</option>
              <option value="1">A-Z</option>
              <option value="2">Z-A</option>
              <option value="3">Prices ⬆</option>
              <option value="4">Prices ⬇</option>
            </Form.Select>
          </div>
          {/* <div className="button-bar">
            <Link to="/order/tradi">Traditional Pizza</Link>
            <Link to="/order/sea">Seafood Pizaa</Link>
            <Link to="/order/mixed">Mixed Pizza</Link>
          </div> */}
          <div className="layout-bar">
            <BsGrid1X2 onClick={() => setIsLayout(false)} />
            <BsListUl onClick={() => setIsLayout(true)} />
          </div>
        </div>
      </Container>{" "}
      <Container
        fluid="lg"
        className={`page-tradi ${isLayout ? "active" : ""} `}
      >
        {earings &&
          handle_sort(earings).map((item, index) => {
            return (
              <Card key={index} className="tradi-card">
                <div className="tradi-img">
                  <Card.Img variant="top" src={item.img[0]} />
                  <div className="tradi-icon-box">
                    <RiShoppingBag2Line
                      className="tradi-buy-icon"
                      onClick={() => {
                        handle_addCart(item.id);
                        swal({
                          title: "Successfully!",
                          text: "Your product has been added!",
                          icon: "success",
                          button: "Close!",
                        });
                      }}
                    />
                    <HiMagnifyingGlass
                      className="tradi-buy-icon"
                      onClick={() => handle_popup(item.id)}
                    />
                  </div>
                </div>
                <Link
                  onClick={() => {
                    handle_product(item.id);
                    setImg(item.img[0]);
                    scrolltotop();
                  }}
                  className="tradi-link"
                  to="/product"
                >
                  <Card.Body className="tradi-body">
                    <div>
                      <MdOutlineStarRate class="tradi-start-icon" />
                      <MdOutlineStarRate class="tradi-start-icon" />
                      <MdOutlineStarRate class="tradi-start-icon" />
                      <MdOutlineStarRate class="tradi-start-icon" />
                      <MdOutlineStarRate class="tradi-start-icon" />
                    </div>
                    <Card.Title className="tradi-title">{item.name}</Card.Title>
                    <Card.Text className="tradi-description">
                      {item.description}
                    </Card.Text>
                    <Card.Text className="tradi-text">
                      {item.prices} $
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            );
          })}
      </Container>
    </div>
  );
};

export default Earings;
