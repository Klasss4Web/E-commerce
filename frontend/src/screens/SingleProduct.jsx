// import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Rating } from "../components/homeComponents/Rating";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";
import { addItemToCart } from "../redux/actions/cartActions";
import { productDetails } from "../redux/actions/productActions";

const SingleProduct = ({ history, match }) => {
  const [quantity, setQuantity] = useState(1);
  const productId = match.params.id;
  const dispatch = useDispatch();
  const singleProductDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = singleProductDetails;

  useEffect(() => {
    dispatch(productDetails(productId));
  }, [productId, dispatch]);

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(productId, quantity));
    history.push(`/cart/${productId}?qty=${quantity}`);
  };

  // const [product, setProduct] = useState({})

  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const {data} = await axios.get(`/api/products/${match.params.id}`);
  //     setProduct(data)
  //   }
  //   fetchData()
  // },[match])

  return (
    <div>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={product?.image} alt={product?.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product?.name}</div>
                  </div>
                  <p>{product?.description}</p>

                  <div className="product-count col-lg-7">
                    <div className="flex-box d-flex justify-content-between align-items-between">
                      <h6>Price</h6>
                      <span>${product?.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {product?.countInStock > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>Unavailable</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                      <Rating
                        value={product?.rating}
                        text={`${product?.numReviews} reviews`}
                      />
                    </div>
                    {product?.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          >
                            {[...Array(product?.countInStock).keys()].map(
                              (x) => {
                                return (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                        <button className="round-black-btn" onClick={addToCart}>
                          Add To Cart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">REVIEWS</h6>
                <Message variant={"alert-info mt-3"}>No Reviews</Message>
                <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                  <strong>Admin Doe</strong>
                  <Rating />
                  <span>Jan 12 2022</span>
                  <div className="alert alert-info mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt, suscipit laudantium asperiores reiciendis dolorum amet
                    nostrum, aliquam, nobis perspiciatis corporis adipisci non
                    praesentium architecto quo. Non, repellat? Ex, nobis
                    deserunt!
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h6>WRITE A CUSTOMER REVIEW</h6>
                <div className="my-4"></div>

                <form>
                  <div className="my-4">
                    <strong>Rating</strong>
                    <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                      <option value="">Select...</option>
                      <option value="1">Poor</option>
                      <option value="2">Fair</option>
                      <option value="3">Good</option>
                      <option value="4">Very Good</option>
                      <option value="5">Excellent</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <strong>Comment</strong>
                    <textarea
                      row="3"
                      className="col-12 bg-light p-3 mt border-o rounded"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <button className="col-12 bg-black border-0 p-3 rounded text-center">
                      SUBMIT
                    </button>
                  </div>
                </form>
                <div className="my-3">
                  <Message variant="alert-warning">
                    Please{" "}
                    <Link to={"/login"}>
                      " <strong>Login</strong> "
                    </Link>
                    to write a review{" "}
                  </Message>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
