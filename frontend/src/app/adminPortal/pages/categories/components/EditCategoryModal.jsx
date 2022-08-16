import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { adminCreateCategoriesAction } from "../../../../../redux/actions/categoriesActions";

export const EditCategoryModal = ({ loading, error }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch()

  const handleCreate = () => {

    const payload = {
      name,
      description,
      image
    }
    dispatch(adminCreateCategoriesAction(payload));
  }

  return (
    <div>
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropModal"
      >
        
        Add New Category
      </button> */}
      <div
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropModal1"
        className="px-2"
        style={{border: "1px solid green", borderRadius: "5px", color: "green"}}
      >
        <i className="fas fa-pen"></i>
      </div>

      <div
        class="modal fade"
        id="staticBackdropModal1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel1"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel1">
                Edit Category
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style={{ width: "100%" }}>
              <label htmlFor="name">Name</label>

              <input
                placeholder="Enter full name"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="image">Image</label>

              <input
                placeholder="Select Image"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />

              <label htmlFor="description">Description</label>
              <input
                placeholder="Add description"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              {loading ? (
                <>
                  <button>
                    {" "}
                    <i class="fa fa-spinner fa-spin"></i>Loading
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  class="btn btn-primary mb-4"
                  data-bs-dismiss="modal"
                  disabled={!name || !image}
                  onClick={handleCreate}
                >
                  Edit Category
                </button>
              )}
              {/* <button
                type="button"
                class="btn btn-primary mb-4"
                data-bs-dismiss="modal"
                disabled={!name || !image}
                onClick={handleCreate}
              >
                Add Category
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
