import React from "react";
import { EditCategoryModal } from "./EditCategoryModal";

export const Category = ({ category }) => {
  return (
    <div
      class="card"
      style={{
        width: "300px",
        maxHeight: "200px",
        marginBottom: "40px",
        borderRadius: "10px",
      }}
    >
      <img
        class="card-img-top"
        src={category?.image}
        alt="Card image cap"
        height={"150px"}
        style={{ borderRadius: "10px" }}
      />
      <div
        class="card-body"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p class="card-text">{category?.name}</p>
        <div
          className=""
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <EditCategoryModal />
          </div>

          <div
            // onClick={() => handleDeleteProduct(product?._id)}
            className="px-2"
            style={{
              border: "1px solid red",
              borderRadius: "5px",
              color: "red",
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
