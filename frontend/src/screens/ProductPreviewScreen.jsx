// import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Header from "../components/Header";
import { Rating } from "../components/homeComponents/Rating";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";
import { addItemToCart } from "../redux/actions/cartActions";
import { productDetails, productReviewAction } from "../redux/actions/productActions";
import { PRODUCT_REVIEW_RESET } from "../redux/constants/productConstants";
import moment from "moment";

const ProductPreviewScreen = ({ history, match }) => {

  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = match.params.id;
  const dispatch = useDispatch();

  const singleProductDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = singleProductDetails;

  

  const productReviews = useSelector((state) => state.productReviews);
  
  const {
    error: createReviewError,
    loading: createReviewLoading,
    success: createReviewSuccess,
  } = productReviews;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  

  useEffect(() => {
    if (createReviewSuccess) {
      alert("Review successfully submited");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_RESET });
    }
    dispatch(productDetails(productId));
  }, [productId, dispatch, createReviewSuccess]);

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

  const handleReviewHandler = (e) => {
    e.preventDefault()
    dispatch(productReviewAction(productId, {rating, comment}));
  }

  return (
    <div>
      {/* <Header /> */}
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
                {product?.reviews?.length === 0 && (
                  <Message variant={"alert-info mt-3"}>No Reviews</Message>
                )}
                {product?.reviews?.map((review) => (
                  <div
                    key={review?._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review?.name}</strong>
                    <Rating value={review?.rating} />
                    <span>{moment(review?.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      <p>{review?.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>WRITE A CUSTOMER REVIEW</h6>
                <div className="my-4">
                  {createReviewLoading && <Loading />}
                  {createReviewError && (
                    <Message variant={"alert-danger"}>
                      {createReviewError}
                    </Message>
                  )}
                </div>

                {userInfo ? (
                  <form onSubmit={handleReviewHandler}>
                    <div className="my-4">
                      <strong>Rating</strong>
                      <select
                        value={rating}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                        onChange={(e) => setRating(parseInt(e.target.value))}
                      >
                        <option value="">Select Rating</option>
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
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        row="3"
                        className="col-12 bg-light p-3 mt border-o rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        className="col-12 bg-black border-0 p-3 rounded text-center"
                        disabled={createReviewLoading}
                        // onLoad={createReviewLoading}
                      >
                        {createReviewLoading ? (
                          <>
                            <i class="fa fa-spinner fa-spin"></i>"Loading"
                          </>
                        ) : (
                          "SUBMIT"
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant="alert-warning">
                      Please{" "}
                      <Link to={"/login"}>
                        " <strong>Login</strong> "
                      </Link>
                      to write a review{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPreviewScreen;
