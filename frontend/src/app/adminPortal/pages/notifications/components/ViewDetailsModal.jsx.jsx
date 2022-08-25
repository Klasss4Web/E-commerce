import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateCategoryAction } from "../../../../../redux/actions/categoriesActions";
import { updateNotificationDetails } from "../../../../../redux/actions/notificationsActions";
import { timeago } from "../../../../../utils/timeAgo";

export const ViewDetails = ({
  loading,
  error,
  category,
  setRefresh,
  notification,
  handleApprove,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [imageUrl, setimageUrl] = useState();
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-success"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdropModal1${notification?._id}`}
      >
        View Details
      </button>
      {/* <div
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdropModal1${category?._id}`}
        className="px-2"
        style={{
          border: "1px solid green",
          borderRadius: "5px",
          color: "green",
        }}
      >
        <i className="fas fa-pen"></i>
      </div> */}

      <div
        class="modal fade"
        id={`staticBackdropModal1${notification?._id}`}
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
                {notification?.title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style={{ width: "100%" }}>
              <h5 className="mb-1">Description</h5>
              <h6>{notification?.description}</h6>
              <hr />

              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="my-0" style={{ fontWeight: "bold" }}>
                    Product Name
                  </h6>
                  <h6>{notification?.product?.name}</h6>
                  <h6 className="my-1" style={{ fontWeight: "bold" }}>
                    Product Description
                  </h6>
                  <h6>{notification?.product?.description}</h6>
                  <h6 className="my-0" style={{ fontWeight: "bold" }}>
                    Product Price
                  </h6>
                  <h6>{notification?.product?.price}</h6>
                  <h6 className="my-1" style={{ fontWeight: "bold" }}>
                    Quantity
                  </h6>
                  <h6>{notification?.product?.countInStock}</h6>
                </div>
                <img src={notification?.product?.image} />
              </div>
            </div>

            {notification?.status === "Pending" ? (
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
                    // disabled={!name || !image}
                    onClick={() => handleApprove(notification)}
                  >
                    Approve
                  </button>
                )}
              </div>
            ) : (
              <div
              className="my-3 px-3 pb-4"
                
              >
                <button>Resolved</button>
                <p>{timeago(notification?.updatedAt)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
