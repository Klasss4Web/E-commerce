import React from "react";
import Slider from "react-slick";
import { Rating } from "../../../../userPortal/components/homeComponents/Rating";
import moment from "moment";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const RatingCard = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ width: "99%", marginBottom: "20px" }}>
      <Slider {...settings}>
        <div className="slide">
          <div style={{ width: "30%" }}>
            <img
              width={"100%"}
              src={reviews?.image}
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div style={{ width: "68%" }}>
            <Rating text={""} value={reviews?.rating} />
            <h6>Total Reviews: {reviews?.numReviews}</h6>
            <h5>Product: {reviews?.name}</h5>
            <h6>Description: {reviews?.description}</h6>
            <h6>Merchant: {reviews?.merchant}</h6>
            <h6>Price: {reviews?.price}</h6>

            <h6>
              Date Added: {moment(reviews?.createdAt).format("MMM Do YYYY")}
            </h6>
            <h6>Amount Left: {reviews?.countInStock}</h6>
          </div>
        </div>
        {reviews?.reviews?.map((individualReview) => (
          <div className="slide" key={individualReview?._id}>
            <div style={{ width: "30%" }}>
              <img
                width={"100%"}
                src={reviews?.image}
                alt=""
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div style={{ width: "68%" }}>
              <h5>{individualReview?.name}</h5>
              <Rating
                text={individualReview?.comment}
                value={individualReview?.rating}
              />
              <h6>
                {moment(individualReview?.createdAt).format("MMM Do YYYY")}
              </h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
