import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../../../redux/constants/counterConstants";

export const CounterPractice = () => {
  const count = useSelector((state) => state.counter?.count);
  const dispatch = useDispatch();

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
    </div>
  );
};
