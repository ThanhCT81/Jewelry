import React, { useContext } from "react";
import "./ProductDetails.css";
import { AppContext } from "../../AppContext";
import { GrClose } from "react-icons/gr";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
const ProductDetails = () => {
  const { curr, isCurr, handle_popup } = useContext(AppContext);

  return (
    <div className={`${isCurr ? "ProductDetails isPop" : "ProductDetails"}`}>
      <div className="ProductsDetails-box">
        <div className="ProductDetails-img">
          <img alt="" src={curr && curr.img[0]} />
        </div>

        <div className="ProductsDetails-info">
          <p className="Details-heading">{curr && curr.name}</p>
          <Table className="Details-info">
            <tbody>
              <tr>
                <td>Brand:</td>
                <td>{curr && curr.type}</td>
              </tr>
              <tr>
                <td>Product Code:</td>
                <td>{curr && curr.name}</td>
              </tr>
              <tr>
                <td>Reward Points:</td>
                <td>600</td>
              </tr>
              <tr>
                <td>Availability:</td>
                <td>In Stock</td>
              </tr>
            </tbody>
          </Table>
          <div className="Details-prices">
            <p className="pricing">
              {curr &&
                curr.prices.toLocaleString("en-HOSSDDG", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                })}{" "}
            </p>
            <div className="quantity">
              <p className="Qty">Qty</p>
              <InputGroup className="mb-3">
                <Button variant="outline-secondary">-</Button>
                <Form.Control value={1} />
                <Button variant="outline-secondary">+</Button>
              </InputGroup>
            </div>
          </div>
          <div className="Details-button">
            <Button variant="outline-secondary">Add to Cart</Button>
          </div>
        </div>

        <GrClose
          className="ProductDetails-icon"
          onClick={() => handle_popup(undefined)}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
