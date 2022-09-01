import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { merchantGetReviewsActions } from "../../../../redux/actions/productActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
// import { MainRatings } from "./components/MainRatings";
import { RatingCard } from "./components/RatingCard";
import { ImFileEmpty } from "react-icons/im"

export const RatingsPage = () => {
  const dispatch = useDispatch();

  const merchantReviews = useSelector((state) => state.merchantReviews);
  const { loading, error, reviews } = merchantReviews;

  console.log("merchantReviews", merchantReviews);

  useEffect(() => {
    dispatch(merchantGetReviewsActions());
  }, [dispatch]);
  return (
    <div style={{ padding: "50px" }}>
      <main className="main-wrap">
        <div className="content-header">
          <h2 className="content-title">Reviews</h2>
        </div>
        {error && <Message variant={"alert-danger"}>{error}</Message>}
        {loading && <Loading />}
        {/* <MainRatings /> */}
        {reviews?.data?.length > 0 ? (
          reviews?.data?.map((review) => (
            <RatingCard reviews={review} key={review?._id} />
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <ImFileEmpty size="30%" />
            <h4 className="mt-3">No Rating Available At This Time</h4>
          </div>
        )}
      </main>
    </div>
  );
};
