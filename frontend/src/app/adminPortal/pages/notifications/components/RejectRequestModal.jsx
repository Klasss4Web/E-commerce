import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateCategoryAction } from "../../../../../redux/actions/categoriesActions";
import { updateNotificationDetails } from "../../../../../redux/actions/notificationsActions";

export const RejectRequestModal = ({
  loading,
  error,
  category,
  setRefresh,
  notification,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [imageUrl, setimageUrl] = useState();
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const handleRejectRequest = () => {
    const payload = {
      ...notification,
      status: "Resolved",
      productStatus: "Rejected",
      message: {
        title,
        description,
        image: image || imageUrl,
      },
    };

    dispatch(updateNotificationDetails(payload, setRefresh));
  };

  return (
    <div>
      <button
        className="btn btn-danger"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdropModal1${notification?._id}x`}
      >
        Reject
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
        id={`staticBackdropModal1${notification?._id}x`}
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
                Reason for rejection
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style={{ width: "100%" }}>
              <label htmlFor="name">Title</label>

              <input
                placeholder="Enter Title"
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="image">Image</label>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  placeholder={
                    image?.name || "Enter Image Url or click the plus sign"
                  }
                  style={{
                    width: "80%",
                    height: "40px",
                    borderRadius: "5px",
                    border: "1px solid #d4d4d4",
                    marginTop: "10px",
                    marginBottom: "15px",
                    paddingLeft: "10px",
                    paddingRight: "20px",
                  }}
                  value={imageUrl}
                  onChange={(e) => setimageUrl(e.target.value)}
                />
                <div style={{ position: "relative" }}>
                  <i className="fa fa-plus"></i>
                  <img
                    width={"40px"}
                    height="40px"
                    style={{ borderRadius: "50%" }}
                    src={
                      file ||
                      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    alt=""
                  />
                  <input
                    type={"file"}
                    name="file"
                    cursor={"pointer"}
                    // value={image}
                    style={{
                      position: "absolute",
                      opacity: 0,
                      cursor: "pointer",
                      zIndex: "100",
                      background: "transparent",
                      right: "0%",
                      width: "80px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    onChange={(e) => {
                      setImage(e.target.files?.[0]);
                      setFile(URL.createObjectURL(e.target.files?.[0]));
                    }}
                  />
                </div>
              </div>

              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Add description"
                style={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "5px",
                  border: "1px solid #d4d4d4",
                  marginTop: "10px",
                  marginBottom: "15px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
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
                  // disabled={!name || !image}
                  onClick={handleRejectRequest}
                >
                  Send Response
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
