import React, { useContext } from "react";
import "./Search.css";
import { AppContext } from "../../AppContext";
import Form from "react-bootstrap/Form";
import { InputGroup, Button, Container, Card } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Search = () => {
  const {
    search,
    handle_search,
    list,
    find,
    setFind,
    handle_product,
    setImg,
    scrolltotop,
  } = useContext(AppContext);

  return (
    <div
      onClick={(e) => {
        console.log(e);
        if (e.target.className === "search active") {
          handle_search();
        }
      }}
      className={`search ${search ? "active" : ""}`}
    >
      <Container fluid="lg">
        <InputGroup className="search-group">
          <Form.Control
            value={find}
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={(e) => {
              setFind(e.target.value.toLowerCase());
            }}
          />
          <AiOutlineClose onClick={handle_search} className="close-button" />
        </InputGroup>
      </Container>
      <Container fluid="lg" className="grid-search">
        {list.AllProducts.filter((item) => {
          return find.toLowerCase().trim() === ""
            ? ""
            : item.name.toLowerCase().includes(find);
        }).map((item) => {
          return (
            <Link
              onClick={() => {
                handle_product(item.id);
                setImg(item.img[0]);
                scrolltotop();
                handle_search();
              }}
              className="tradi-link"
              to="/product"
            >
              <Card>
                <div>
                  <Card.Img variant="top" src={item.img[0]} />
                </div>

                <Card.Body>
                  <Card.Title className="search-name">{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default Search;
