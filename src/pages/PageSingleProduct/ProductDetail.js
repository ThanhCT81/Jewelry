import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { AiOutlineHome } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./ProductDetail.css";
import ReactImageMagnify from "react-image-magnify";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsHeart, BsCart3 } from "react-icons/bs";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
const ProductDetail = () => {
  const {
    curr,
    img,
    handle_hover,
    handle_addCart2,
    changeQty2,
    sum_bill,
    scrolltotop,
    handle_popup,
    addCart,
    setImg,
    handle_product,
    entertainment,
  } = useContext(AppContext);
  return (
    <div>
      <div className="SingleProduct">
        <Container fluid="lg">
          <div className="head-page">
            <Link className="head-icon" to="/">
              <AiOutlineHome />
            </Link>
            <p className="head-separate">|</p>
            <p className="head-name">{curr.name}</p>
          </div>
        </Container>
        <Container fluid="lg" className="grid-single">
          <div className="picture-chain">
            <div>
              <ReactImageMagnify
                className="picture-main"
                {...{
                  smallImage: {
                    alt: "Pizza",
                    isFluidWidth: true,
                    src: img,
                  },
                  largeImage: {
                    src: img,
                    width: 1200,
                    height: 900,
                  },
                  enlargedImageContainerDimensions: {
                    width: "100%",
                    height: "100%",
                  },
                }}
              />
            </div>
            <div className="img-chain">
              {curr.img.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    onMouseOver={() => handle_hover(image, index)}
                  />
                );
              })}
            </div>
          </div>

          <div className="SingleProduct-info">
            <h1 className="SingleProduct-heading">{curr.name}</h1>
            <div className="grid-info">
              <p>Brand:</p>
              <p>{curr.type}</p>
              <p>Product Code:</p>
              <p>{curr.name}</p>
              <p>Reward Points:</p>
              <p>600</p>
              <p>Availability:</p>
              <p>In Stock</p>
            </div>
            <p className="SingleProduct-pricing">
              {(curr.prices * curr.qty).toFixed(2)} $
            </p>
            <div className="SingleProduct-prices">
              <div className="quantity">
                <p className="Qty">Qty</p>
                <div className="input_group">
                  <button
                    className="btn-dec"
                    onClick={() => changeQty2(curr.id, -1)}
                  >
                    -
                  </button>
                  <input className="input-detail" value={curr.qty} />
                  <button
                    className="btn-incre"
                    onClick={() => changeQty2(curr.id, 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="SingleProduct-btn"
                  onClick={() => {
                    handle_addCart2(curr.id);
                    sum_bill();
                    swal({
                      title: "Successfully!",
                      text: "Your product has been added!",
                      icon: "success",
                      button: "Close!",
                    });
                  }}
                  alt=""
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div class="policy-block policy-block-2">
              <div class="inner">
                <div class="col ">
                  <div class="box">
                    <div class="text">
                      <p>Free Shipping</p>
                      <p>Ships Today</p>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="box">
                    <div class="text">
                      <p>Easy</p>
                      <p>Returns</p>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="box">
                    <div class="text">
                      <p>Lowest Price</p>
                      <p>Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div class="product-info-details-more">
        <div class="container">
          <div class="inner">
            <ul class="nav nav-tabs">
              <li class="active">
                <a
                  href="#tab-description"
                  data-toggle="tab"
                  aria-expanded="true"
                >
                  Description
                </a>
              </li>
              {/* <li class="">
                <a href="#tab-review" data-toggle="tab" aria-expanded="false">
                  Reviews (1)
                </a>
              </li> */}
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tab-description">
                <div>
                  <strong>Born to be worn.</strong>
                  <p>
                    Lorem ipsum dolor sit amet. Vel ducimus aspernatur qui
                    itaque sint sed nesciunt aspernatur aut enim quod. Nam
                    tempore nesciunt ab voluptas quibusdam est quisquam galisum
                    ab corporis ipsum et sint nisi. At quos sint eum rerum ipsum
                    qui facilis consequatur non laboriosam quasi. Ab velit
                    voluptas ab modi exercitationem aut commodi necessitatibus
                    sed sequi itaque ut iure expedita ex placeat numquam qui
                    itaque sint.
                  </p>
                  <p>
                    <strong>Random meets rhythm.</strong>
                  </p>
                  <p>
                    Et molestiae sunt ea velit dolores a vero voluptate et dolor
                    nihil et voluptate eveniet At repellendus doloribus. Qui
                    possimus consequatur est sunt nihil et fuga veniam non quia
                    sunt qui dolore omnis eos voluptas optio ut accusantium
                    fuga. Est tempore velit et animi praesentium rem quibusdam
                    numquam est inventore eligendi quo iusto optio ut
                    praesentium rerum? Ut nesciunt vitae ab veritatis modi sed
                    dolorem saepe ea rerum sequi eos quasi quasi aut nihil
                    deleniti est porro sint.
                  </p>
                  <strong>Everything is easy.</strong>
                  <p>
                    Aut galisum maxime aut esse maiores et possimus quis eos
                    molestiae commodi ut sunt maiores. Sit velit laborum et
                    similique ullam sed sapiente omnis non enim accusantium est
                    earum iure? Non esse provident eum consequatur provident sit
                    modi quidem non rerum omnis a culpa odit. Non minus dolorum
                    qui placeat itaque sit nihil laborum et laboriosam galisum
                    ab odio laudantium!
                  </p>
                </div>
              </div>
              <div class="tab-pane" id="tab-review">
                <form class="form-horizontal" id="form-review">
                  <div id="review">
                    <table class="table table-striped table-bordered">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Plaza Themes</strong>
                          </td>
                          <td class="text-right">06/05/2018</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <p>
                              "Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem. Ut enim
                              ad minima veniam, quis nostrum exercitationem
                              ullam corporis suscipit laboriosam, nisi ut
                              aliquid ex ea commodi consequatur? Quis autem vel
                              eum iure reprehenderit qui in ea voluptate velit
                              esse quam nihil molestiae consequatur, vel illum
                              qui dolorem eum fugiat quo voluptas nulla
                              pariatur?"
                            </p>
                            <div class="rating">
                              <span class="icon-ratings">
                                <i class="icon-rating icon-rating-x"></i>
                              </span>{" "}
                              <span class="icon-ratings">
                                <i class="icon-rating icon-rating-x"></i>
                              </span>{" "}
                              <span class="icon-ratings">
                                <i class="icon-rating icon-rating-x"></i>
                              </span>{" "}
                              <span class="icon-ratings">
                                <i class="icon-rating icon-rating-o"></i>
                              </span>{" "}
                              <span class="icon-ratings">
                                <i class="icon-rating icon-rating-o"></i>
                              </span>{" "}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="text-right"></div>
                  </div>
                  <div class="alert alert-danger alert-dismissible">
                    <i class="fa fa-exclamation-circle"></i> Warning: Review
                    Text must be between 25 and 1000 characters!
                  </div>
                  <h2>Write a review</h2>
                  <div class="form-group required">
                    <div class="col-sm-12">
                      <label class="control-label" for="input-name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value=""
                        id="input-name"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-group required">
                    <div class="col-sm-12">
                      <label class="control-label" for="input-review">
                        Your Review
                      </label>
                      <textarea
                        name="text"
                        rows="5"
                        id="input-review"
                        class="form-control"
                        spellcheck="false"
                      ></textarea>
                      <div class="help-block">
                        <span class="text-danger">Note:</span> HTML is not
                        translated!
                      </div>
                    </div>
                  </div>
                  <div class="form-group required">
                    <div class="col-sm-12">
                      <label class="control-label">Rating</label>
                      &nbsp;&nbsp;&nbsp; Bad&nbsp;
                      <input type="radio" name="rating" value="1" />
                      &nbsp;
                      <input type="radio" name="rating" value="2" />
                      &nbsp;
                      <input type="radio" name="rating" value="3" />
                      &nbsp;
                      <input type="radio" name="rating" value="4" />
                      &nbsp;
                      <input type="radio" name="rating" value="5" />
                      &nbsp;Good
                    </div>
                  </div>

                  <div class="buttons clearfix">
                    <div class="pull-right">
                      <button
                        type="button"
                        id="button-review"
                        data-loading-text="Loading..."
                        class="btn btn-primary"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative-product">
        <div class="block-title">
          <h3>Related Products</h3>
          <p>
            Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero
            est.
          </p>
        </div>
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
                      <Card.Title className="Card-name">{item.name}</Card.Title>
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
    </div>
  );
};

export default ProductDetail;
