import React, { useContext, useState } from "react";
import { SlPlane, SlSupport } from "react-icons/sl";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Necklaces from "./Necklaces.jpg";
import Rings from "./Rings.jpg";
import Bracelets from "./Bracelets.jpg";
import Earings from "./Earings.jpg";
import Beauti from "./beautiful.jpg";
import Ear from "./earing.jpg";
import NewArrivals from "./newarrivals.jpg";
import NewDesign from "./newdesign.jpg";
import slide1 from "./slider1-corano1-1920x670.png";
import slide2 from "./slider2-corano1-1920x670.png";
import slide3 from "./slider3-corano1-1920x670.png";
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from "../../AppContext";
import test_1 from "./testimonial1-100x100.png";
import test_2 from "./testimonial2-100x100.png";
import test_3 from "./testimonial3-100x100.png";
import { FaStar } from "react-icons/fa";
import { BsHeart, BsCart3 } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import blog1 from "./blog1.jpg";
import blog2 from "./blog2.jpg";
import blog3 from "./blog3.jpg";
import blog4 from "./blog4.jpg";
import blog5 from "./blog5.jpg";
import br1 from "./br1.png";
import br2 from "./br2.png";
import br3 from "./br3.png";
import br4 from "./br4.png";
import br5 from "./br5.png";
import swal from "sweetalert";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay, Pagination]);
// if you want to use array

export default function Home() {
  const {
    entertainment,
    handle_show1,
    handle_show2,
    handle_show3,
    handle_show4,
    product1,
    product2,
    product3,
    product4,
    sleepingorlying,
    storage,
    table,
    handle_test1,
    handle_test2,
    handle_test3,
    test1,
    test2,
    test3,
    handle_popup,
    addCart,
    handle_product,
    setImg,
    scrolltotop,
  } = useContext(AppContext);
  return (
    <main>
      <div>
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          className="mySwiper"
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="box_slide">
              <div class="slider-content slider-1">
                <div class="container">
                  <div class="inner">
                    <div class="content">
                      <div class="slide-title">
                        <h3>Family Jewelery</h3>
                      </div>
                      <div class="sub-title">
                        <h3>Collection</h3>
                      </div>
                      <div class="slide-description">
                        <p>Designer Jewellry Necklaces-Bracelets-Earings</p>
                      </div>
                      <div class="slide-readmore">
                        <Link to="/" title="Read more">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={slide1} style={{ width: "100%" }} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box_slide">
              <div class="slider-content slider-2">
                <div class="container">
                  <div class="inner">
                    <div class="content">
                      <div class="slide-title">
                        <h3>Diamonds Jewelry</h3>
                      </div>
                      <div class="sub-title">
                        <h3>Collection</h3>
                      </div>
                      <div class="slide-description">
                        <p>
                          Shukra Yogam &amp; Silver Power Silver Saving Schemes.
                        </p>
                      </div>
                      <div class="slide-readmore">
                        <Link to="/" title="Read more">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={slide2} style={{ width: "100%" }} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box_slide">
              <div class="slider-content slider-3">
                <div class="container">
                  <div class="inner">
                    <div class="content">
                      <div class="slide-title">
                        <h3>Grace Designer</h3>
                      </div>
                      <div class="sub-title">
                        <h3>Jewellery</h3>
                      </div>
                      <div class="slide-description">
                        <p>Rings, Occasion Pieces, Pandora &amp; More.</p>
                      </div>
                      <div class="slide-readmore">
                        <Link to="/" title="Read more">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={slide3} style={{ width: "100%" }} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="service">
        <Container>
          {/* <Row className="service">
            <Col className="box_service" xs={12} sm={12} md={3}>
              <SlPlane size={30} className="icon" />
              <div className="content-service">
                <h4>Free Shipping</h4>
                <p>Free shipping on all US order or order above $200</p>
              </div>
            </Col>
            <Col className="box_service" xs={12} sm={12} md={3}>
              <SlSupport size={30} className="icon" />
              <div className="content-service">
                <h4>Support 24/7</h4>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </Col>
            <Col className="box_service" xs={12} sm={12} md={3}>
              <HiOutlineReceiptRefund size={30} className="icon" />
              <div className="content-service">
                <h4>30 Days Return</h4>
                <p>Simply return it within 30 days for an exchange</p>
              </div>
            </Col>
            <Col className="box_service" xs={12} sm={12} md={3}>
              <MdPayment size={30} className="icon" />
              <div className="content-service">
                <h4>100 % Payment Secure</h4>
                <p>We ensure secure payment with PEV</p>
              </div>
            </Col>
          </Row> */}
          <div className="policy-block">
            <div className="inner">
              <div className="col ">
                <div className="box">
                  <SlPlane className="box-icon" />
                  <div className="text">
                    <h4>Free Shipping</h4>
                    <p>Free shipping on all US order or order above $200</p>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="box">
                  <SlSupport className="box-icon" />
                  <div class="text">
                    <h4>Support 24/7</h4>
                    <p>Contact us 24 hours a day, 7 days a week</p>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="box">
                  <HiOutlineReceiptRefund className="box-icon" />
                  <div className="text">
                    <h4>30 Days Return</h4>
                    <p>Simply return it within 30 days for an exchange</p>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="box">
                  <MdPayment className="box-icon" />
                  <div className="text">
                    <h4>100% Payment Secure</h4>
                    <p>We ensure secure payment with PEV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-block static-top-store1">
            <div className="inner">
              <div className="col">
                <div className="image">
                  <Link to="/Rings">
                    <img src={Beauti} style={{ width: "100%" }} alt="img1" />
                  </Link>
                  <div className="text text-right">
                    <h5 className="text1">Beautiful</h5>
                    <h3 className="text2">
                      Wedding <span>Rings</span>
                    </h3>
                    <Link to="/Rings">Shop Now</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="image">
                  <Link to="/Earings">
                    <img src={Ear} style={{ width: "100%" }} alt="img2" />
                  </Link>
                  <div className="text  text-center">
                    <h5 className="text1">earring</h5>
                    <h3 className="text2">
                      Tangerine Floral <span>Earring</span>
                    </h3>
                    <Link to="/Earings">Shop Now</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="image">
                  <Link to="/Necklaces">
                    <img
                      src={NewArrivals}
                      style={{ width: "100%" }}
                      alt="img3"
                    />
                  </Link>
                  <div className="text text-center">
                    <h5 className="text1">New Arrivals</h5>
                    <h3 className="text2">
                      Pearl <span>Necklaces</span>
                    </h3>
                    <Link to="/Necklaces">Shop Now</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="image">
                  <Link to="/Bracelets">
                    <img src={NewDesign} style={{ width: "100%" }} alt="img4" />
                  </Link>
                  <div className="text text-right">
                    <h5 className="text1">new design</h5>
                    <h3 className="text2">
                      Diamond <span>Jewelry</span>
                    </h3>
                    <Link to="/Bracelets">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs-product">
            <div className="block-title">
              <h3>Our Products</h3>
              <p>Add our products to weekly lineup</p>
              <div className="tabs-style">
                <ul className="tab">
                  <li
                    onClick={handle_show1}
                    className={`${product1 ? "active" : ""}`}
                  >
                    Entertainment
                  </li>
                  <li
                    onClick={handle_show2}
                    className={`${product2 ? "active" : ""}`}
                  >
                    Sleeping or Lying
                  </li>
                  <li
                    onClick={handle_show3}
                    className={`${product3 ? "active" : ""}`}
                  >
                    Storage
                  </li>
                  <li
                    onClick={handle_show4}
                    className={`${product4 ? "active" : ""}`}
                  >
                    Table
                  </li>
                </ul>
              </div>
            </div>
            <div className={`Product_1 ${product1 ? "active" : ""} `}>
              <div className="swiper-viewport">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  spaceBetween={20}
                  className="mySwiper_Product"
                  breakpoints={{
                    1199: {
                      slidesPerView: 4,
                      slidesPerColumn: 2,
                    },
                    991: {
                      slidesPerView: 3,
                      slidesPerColumn: 2,
                    },
                    767: {
                      slidesPerView: 3,
                      slidesPerColumn: 2,
                    },
                    479: {
                      slidesPerView: 2,
                      slidesPerColumn: 2,
                    },
                    0: {
                      slidesPerView: 2,
                      slidesPerColumn: 2,
                    },
                  }}
                >
                  {entertainment.map((item, i) => (
                    <SwiperSlide>
                      <Card className="Card-product">
                        <div className="image">
                          <Link
                            to="/product"
                            onClick={() => {
                              handle_product(item.id);
                              setImg(item.img);
                              scrolltotop();
                            }}
                          >
                            <Card.Img
                              variant="top"
                              src={item.img[0]}
                              style={{ width: "100%" }}
                              className="Card-img"
                            />
                          </Link>

                          <div className="button-group">
                            <button className="button-wishlist">
                              <BsHeart className="icon" />
                            </button>
                            <button className="button-quickview">
                              <HiMagnifyingGlass
                                className="icon"
                                onClick={() => handle_popup(item.id)}
                              />
                            </button>
                          </div>
                          <div className="box-cart">
                            <button
                              className="button-cart"
                              onClick={() => {
                                swal({
                                  title: "Product has been added to your cart!",
                                  text: "Press X to Close!",
                                  icon: "success",
                                  button: "X",
                                });
                                addCart(item.id);
                              }}
                            >
                              <BsCart3 className="icon icon-cart" />
                              <span>Add To Cart</span>
                            </button>
                          </div>
                        </div>

                        <Card.Body className="Card-body">
                          <Link
                            to="/product"
                            onClick={() => {
                              handle_product(item.id);
                              setImg(item.img[0]);
                              scrolltotop();
                            }}
                          >
                            <Card.Title className="Card-name">
                              {item.name}
                            </Card.Title>
                          </Link>
                          <Card.Text className="Card-prices">
                            {item.prices.toLocaleString("en-HOSSDDG", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                            })}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className={`Product_2 ${product2 ? "active" : ""} `}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={20}
                className="mySwiper_Product"
                breakpoints={{
                  1199: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                  },
                  991: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                  },
                  767: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                  },
                  479: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                  },
                  0: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                  },
                }}
              >
                {storage.map((item, i) => (
                  <SwiperSlide>
                    <Card className="Card-product">
                      <div className="image">
                        <Link
                          to="/product"
                          onClick={() => {
                            handle_product(item.id);
                            setImg(item.img[0]);
                            scrolltotop();
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={item.img[0]}
                            style={{ width: "100%" }}
                            className="Card-img"
                          />
                        </Link>

                        <div className="button-group">
                          <button className="button-wishlist">
                            <BsHeart className="icon" />
                          </button>
                          <button className="button-quickview">
                            <HiMagnifyingGlass
                              className="icon"
                              onClick={() => handle_popup(item.id)}
                            />
                          </button>
                        </div>
                        <div className="box-cart">
                          <button
                            className="button-cart"
                            onClick={() => {
                              swal({
                                title: "Product has been added to your cart!",
                                text: "Press X to Close!",
                                icon: "success",
                                button: "X",
                              });
                              addCart(item.id);
                            }}
                          >
                            <BsCart3 className="icon icon-cart" />
                            <span>Add To Cart</span>
                          </button>
                        </div>
                      </div>

                      <Card.Body className="Card-body">
                        <Link
                          to="/product"
                          onClick={() => {
                            handle_product(item.id);
                            setImg(item.img[0]);
                            scrolltotop();
                          }}
                        >
                          <Card.Title className="Card-name">
                            {item.name}
                          </Card.Title>
                        </Link>
                        <Card.Text className="Card-prices">
                          {item.prices.toLocaleString("en-HOSSDDG", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={`Product_3 ${product3 ? "active" : ""} `}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={20}
                className="mySwiper_Product"
                breakpoints={{
                  1199: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                  },
                  991: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                  },
                  767: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                  },
                  479: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                  },
                  0: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                  },
                }}
              >
                {sleepingorlying.map((item, i) => (
                  <SwiperSlide>
                    <Card className="Card-product">
                      <div className="image">
                        <Link
                          to="/product"
                          onClick={() => {
                            handle_product(item.id);
                            setImg(item.img[0]);
                            scrolltotop();
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={item.img[0]}
                            style={{ width: "100%" }}
                            className="Card-img"
                          />
                        </Link>

                        <div className="button-group">
                          <button className="button-wishlist">
                            <BsHeart className="icon" />
                          </button>
                          <button className="button-quickview">
                            <HiMagnifyingGlass
                              className="icon"
                              onClick={() => handle_popup(item.id)}
                            />
                          </button>
                        </div>
                        <div className="box-cart">
                          <button
                            className="button-cart"
                            onClick={() => {
                              swal({
                                title: "Product has been added to your cart!",
                                text: "Press X to Close!",
                                icon: "success",
                                button: "X",
                              });
                              addCart(item.id);
                            }}
                          >
                            <BsCart3 className="icon icon-cart" />
                            <span>Add To Cart</span>
                          </button>
                        </div>
                      </div>

                      <Card.Body className="Card-body">
                        <Link
                          to="/product"
                          onClick={() => {
                            handle_product(item.id);
                            setImg(item.img[0]);
                            scrolltotop();
                          }}
                        >
                          <Card.Title className="Card-name">
                            {item.name}
                          </Card.Title>
                        </Link>
                        <Card.Text className="Card-prices">
                          {item.prices.toLocaleString("en-HOSSDDG", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={`Product_4 ${product4 ? "active" : ""} `}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={20}
                className="mySwiper_Product"
                breakpoints={{
                  1199: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                  },
                  991: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                  },
                  767: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                  },
                  479: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                  },
                  0: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                  },
                }}
              >
                {table.map((item, i) => (
                  <SwiperSlide>
                    <Card className="Card-product">
                      <div className="image">
                        <Link
                          to="/product"
                          onClick={() => {
                            handle_product(item.id);
                            setImg(item.img[0]);
                            scrolltotop();
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={item.img[0]}
                            style={{ width: "100%" }}
                            className="Card-img"
                          />
                        </Link>

                        <div className="button-group">
                          <button className="button-wishlist">
                            <BsHeart className="icon" />
                          </button>
                          <button className="button-quickview">
                            <HiMagnifyingGlass
                              className="icon"
                              onClick={() => handle_popup(item.id)}
                            />
                          </button>
                        </div>
                        <div className="box-cart">
                          <button
                            className="button-cart"
                            onClick={() => {
                              swal({
                                title: "Product has been added to your cart!",
                                text: "Press X to Close!",
                                icon: "success",
                                button: "X",
                              });
                              addCart(item.id);
                            }}
                          >
                            <BsCart3 className="icon icon-cart" />
                            <span>Add To Cart</span>
                          </button>
                        </div>
                      </div>

                      <Card.Body className="Card-body">
                        <Link
                          to="/product"
                          onClick={() => {
                            handle_product(item.id);
                            setImg(item.img[0]);
                            scrolltotop();
                          }}
                        >
                          <Card.Title className="Card-name">
                            {item.name}
                          </Card.Title>
                        </Link>
                        <Card.Text className="Card-prices">
                          {item.prices.toLocaleString("en-HOSSDDG", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container fluid>
          {/* <Row>
            <Col xs={12} sm={12} md={3}>
              <div className="catolog">
                <div className="content_catolog">
                  <h3>BRACELETS</h3>
                </div>
                <img src={Bracelets} style={{ width: "100%" }} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <div className="catolog">
                <div className="content_catolog">
                  <h3>EARINGS</h3>
                </div>
                <img src={Earings} style={{ width: "100%" }} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <div className="catolog">
                <div className="content_catolog">
                  <h3>NECKLACES</h3>
                </div>
                <img src={Necklaces} style={{ width: "100%" }} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <div className="catolog">
                <div className="content_catolog">
                  <h3>RINGS</h3>
                </div>
                <img src={Rings} style={{ width: "100%" }} />
              </div>
            </Col>
          </Row> */}
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              479: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 4,
              },
            }}
            className="special-categories-module"
          >
            <SwiperSlide>
              <div class="category-content">
                <Link to="/Bracelets">
                  <img
                    src={Bracelets}
                    alt="Earrings"
                    style={{ width: "100%" }}
                  />
                </Link>
                <h4 class="name">
                  <Link to="/Bracelets">BRACELETS</Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="category-content">
                <Link to="/Earings">
                  <img src={Earings} alt="Earrings" style={{ width: "100%" }} />
                </Link>
                <h4 class="name">
                  <Link to="/Earings">EARINGS</Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="category-content">
                <Link to="/Necklaces">
                  <img
                    src={Necklaces}
                    alt="Earrings"
                    style={{ width: "100%" }}
                  />
                </Link>
                <h4 class="name">
                  <Link to="/Necklaces">NECKLACES</Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="category-content">
                <Link to="/Rings">
                  <img src={Rings} alt="Earrings" style={{ width: "100%" }} />
                </Link>
                <h4 class="name">
                  <Link to="/Rings">RINGS</Link>
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
      <div className="testimonial">
        <div className="testimonial-title">
          <h3>Testimonial</h3>
          <p>What they say</p>
        </div>
        <div className="testimonial-img">
          <img
            className={`test1 ${test1 ? "active" : ""}`}
            onClick={handle_test1}
            src={test_1}
            style={{ width: "65px" }}
          />
          <img
            className={`test2 ${test2 ? "active" : ""}`}
            onClick={handle_test2}
            src={test_2}
            style={{ width: "65px" }}
          />
          <img
            className={`test3 ${test3 ? "active" : ""}`}
            onClick={handle_test3}
            src={test_3}
            style={{ width: "65px" }}
          />
        </div>
        <div className={`testimonial-content1 ${test1 ? "active" : ""} `}>
          <div className="content">
            <p>
              Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis
              tortor. Nunc scelerisque, nisi a blandit varius, nunc purus
              venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis
              natoque p..
            </p>
          </div>
          <div className="icon-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="testimonial-name">Lindsy Neloms</div>
        </div>
        <div className={`testimonial-content2 ${test2 ? "active" : ""} `}>
          <div className="content">
            <p>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel
              velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              molestie augue magna. Pellentesque felis lorem, pulvinar sed eros
              n..
            </p>
          </div>
          <div className="icon-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="testimonial-name">Rebecka Filson</div>
        </div>
        <div className={`testimonial-content3 ${test3 ? "active" : ""} `}>
          <div className="content">
            <p>
              Sed vel urna at dui iaculis gravida. Maecenas pretium, velit vitae
              placerat faucibus, velit quam facilisis elit, sit amet lacinia est
              est id ligula. Duis feugiat quam non justo faucibus, in gravida
              di..
            </p>
          </div>
          <div className="icon-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="testimonial-name">Amber Laha</div>
        </div>
      </div>
      <div>
        <Container>
          <div className="blog-module">
            <div class="block-title">
              <h3>Latest Blogs</h3>
              <p>There are latest blog posts</p>
            </div>
            <div className="Swiper-blogs">
              <Swiper
                slidesPerView={3}
                navigation={true}
                spaceBetween={10}
                modules={[Navigation]}
                className="mySwiper-blogs"
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                  1199: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <Card className="Card-blogs" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={blog1}
                      style={{ width: "100%" }}
                    />
                    <Card.Body>
                      <Card.Title>29/06/2023 | Diamond</Card.Title>
                      <Card.Text className="Card-title">
                        <a href="/">
                          Celebrity Daughter Opens Up About Having Her Eye Color
                          Changed
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Card-blogs" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={blog2}
                      style={{ width: "100%" }}
                    />
                    <Card.Body>
                      <Card.Title>29/06/2023 | Diamond </Card.Title>
                      <Card.Text className="Card-title">
                        <a href="/">
                          Children Left Home Alone For 4 Days In TV Experiment
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Card-blogs" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={blog3}
                      style={{ width: "100%" }}
                    />
                    <Card.Body>
                      <Card.Title>29/06/2023 | Diamond</Card.Title>
                      <Card.Text className="Card-title">
                        <a href="/">
                          Lesbian Sex Stories Of Hollywood’s Biggest Celebrities
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Card-blogs" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={blog4}
                      style={{ width: "100%" }}
                    />
                    <Card.Body>
                      <Card.Title>29/06/2023 | Diamond</Card.Title>
                      <Card.Text className="Card-title">
                        <a href="/">
                          Lotto Winner Offering Up Money To Any Man That Will
                          Date Her
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="Card-blogs" style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={blog5}
                      style={{ width: "100%" }}
                    />
                    <Card.Body>
                      <Card.Title>29/06/2023 | Diamond</Card.Title>
                      <Card.Text className="Card-title">
                        <a href="/">
                          People are Willing to Lie When It Comes to Money,
                          According to Research
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
      <div className="brand-logo">
        <Container>
          <Row>
            <Swiper
              slidesPerView={4}
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper-brand"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                479: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 4,
                },
                991: {
                  slidesPerView: 4,
                },
              }}
            >
              <Col sm={4} md={3}>
                <SwiperSlide>
                  <img src={br1} className="logo" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={br5} className="logo" />
                </SwiperSlide>
              </Col>
              <Col sm={4} md={3}>
                <SwiperSlide>
                  <img src={br2} className="logo" />
                </SwiperSlide>
              </Col>
              <Col sm={4} md={3}>
                <SwiperSlide>
                  <img src={br3} className="logo" />
                </SwiperSlide>
              </Col>
              <Col sm={4} md={3}>
                <SwiperSlide>
                  <img src={br4} className="logo" />
                </SwiperSlide>
              </Col>
            </Swiper>
          </Row>
        </Container>
      </div>
    </main>
  );
}
