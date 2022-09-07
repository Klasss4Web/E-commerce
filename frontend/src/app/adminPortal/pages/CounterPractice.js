import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../../../redux/constants/counterConstants";

export const CounterPractice = () => {
  const count = useSelector((state) => state.counter?.count);
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);

  //handler to capture the images on change of the input field
  const handleChange = (e) => {
    // Check if image is already in the list(array), to prevent adding duplicates
    const imageExists = images.find(image => image.name === e.target.files[0].name)
    if (imageExists) return;
    // Add image if its not in the list already
    setImages([...images, e.target.files[0]]);
  };

  // handler to remove unwanted images
  const handleRemove = (index) => {
    const filteredData = images.filter((img, i) => index !== i);
    setImages(filteredData);
  };

  console.log("imageList", images);

  const increment = () => {
    dispatch({ type: INCREMENT_COUNTER });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNTER });
  };

  console.log("counter", count);
  return (
    <div>
      <button onClick={increment}>+</button>
      <span
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        data-testid="count"
      >
        {count}
      </span>
      <button data-testid="minus" onClick={decrement}>
        -
      </button>
      <h4
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {count}
      </h4>
      <input
        type="file"
        name="file"
        // Adding images state to the value props would crash the app
        // value={images}
        onChange={handleChange}
        style={{ background: "green" }}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {images?.map((img, index) => (
          <div key={index} style={{ display: "flex" }}>
            <p style={{ color: "", marginRight: "5px" }}>{img?.name}</p>
            {/* Remove Icon */}
            <span
              style={{
                color: "red",
                marginRight: "10px",
                cursor: "pointer",
                marginTop: "-10px",
              }}
              onClick={() => handleRemove(index)}
            >
              x
            </span>
          </div>
        ))}
      </div>
      {/* <img sr /> */}
    </div>
  );
};
