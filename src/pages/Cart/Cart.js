import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./Cart.css";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
export default function Cart() {
  const { cart, ChangeQty, Delete, bill, email_handle, scrolltotop } =
    useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <div class="breadcrumbs" data-selected="true" data-label-id="0">
        <div class="container-fluid">
          <ul class="breadcrumb">
            <li>
              <Link to="/">
                <i class="fa fa-home"> </i>
              </Link>
            </li>
            <li>
              <Link to="/cart"> Shopping Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-responsive">
        {" "}
        <table class="table-cart table-bordered">
          <thead>
            <tr>
              <td class="text-center">Image</td>
              <td class="text-left">Product Name</td>
              <td class="text-left">Quantity</td>
              <td class="text-right">Unit Price</td>
              <td class="text-right">Total</td>
            </tr>
          </thead>
          {cart.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td class="text-center">
                  <img
                    className="img-thumbnail"
                    src={item.img[0]}
                    style={{ width: "100px" }}
                  />
                </td>
                <td class="text-left">
                  <a>{item.name}</a>
                </td>
                <td class="text-left">
                  <button
                    className="btn-qty"
                    onClick={() => ChangeQty(item.id, -1)}
                  >
                    -
                  </button>
                  <input type="text" className="input-qty" value={item.qty} />
                  <button
                    className="btn-qty"
                    onClick={() => ChangeQty(item.id, 1)}
                  >
                    +
                  </button>
                  <button className="btn-qty">
                    <MdDeleteOutline onClick={() => Delete(item.id)} />
                  </button>
                </td>
                <td class="text-right">${item.prices}</td>
                <td class="text-right">
                  {(item.prices * item.qty).toLocaleString("en-HOSSDDG", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <Container>
        <div className="bill">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td class="text-right">
                  <strong>Sub-Total:</strong>
                </td>
                <td class="text-right">
                  {bill.toLocaleString("en-HOSSDDG", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <strong>VAT (20%):</strong>
                </td>
                <td class="text-right">
                  {(bill * 0.2).toLocaleString("en-HOSSDDG", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <strong>Total:</strong>
                </td>
                <td class="text-right">
                  {(Number(bill) + Number(bill * 0.2)).toLocaleString(
                    "en-HOSSDDG",
                    {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                    }
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-clearfix">
          <button
            onClick={() => {
              navigate("/");
              scrolltotop();
            }}
            className="btn-default"
          >
            COUNTINUE SHOPPING
          </button>
          <button
            onClick={() => {
              email_handle();
              navigate("/checkout");
              scrolltotop();
            }}
            className="btn"
          >
            CHECK OUT
          </button>
        </div>
      </Container>
    </div>
  );
}
