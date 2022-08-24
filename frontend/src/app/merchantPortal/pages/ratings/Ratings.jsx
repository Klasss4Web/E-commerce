import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { adminGetReviewsActions } from "../../../../redux/actions/productActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
// import { MainRatings } from "./components/MainRatings";
import { RatingCard } from "./components/RatingCard";

export const RatingsPage = () => {

  const dispatch = useDispatch();

  const adminGetReviews = useSelector((state) => state.adminGetReviews);
  const { loading, error, reviews } = adminGetReviews

  console.log("adminGetReviews", adminGetReviews);

  useEffect(() => {
    dispatch(adminGetReviewsActions());
  },[dispatch]);
  return (
    <div style={{ padding: "50px" }}>
      <main className="main-wrap">
        <div className="content-header">
          <h2 className="content-title">Reviews</h2>
        </div>
        {error && <Message variant={"alert-danger"}>{error}</Message>}
        {loading && <Loading />}
        {/* <MainRatings /> */}
        {reviews?.data?.map((review) => (
          <RatingCard reviews={review} key={review?._id} />
        ))}
      </main>
    </div>
  );
};
