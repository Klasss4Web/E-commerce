import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { adminCreateCategoriesAction } from "../../../../../redux/actions/categoriesActions";
import { adminCreateUser } from "../../../../../redux/actions/userActions";

export const AddNewUserModal = ({ error, setRefresh }) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState();
  const [imageUrl, setimageUrl] = useState("");
  const dispatch = useDispatch();

  const handleCreate = () => {
    setLoading(true);
    const payload = {
      name,
      email,
      image: image || imageUrl,
      password: "12345",
      userType: role,
    };
    dispatch(adminCreateUser(payload, setRefresh, setLoading));
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropModal"
      >
        Add New User
      </button>

      <div
        class="modal fade"
        id="staticBackdropModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Add New User
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
                placeholder="Enter category name"
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

              <label htmlFor="email">Email</label>

              <input
                placeholder="Enter new user's name"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="name">Role</label>

              <select
                placeholder="Enter user's role"
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
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="custome">Regular User</option>
                <option value="merchant">Merchant</option>
                <option value="admin">Admin</option>
              </select>

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
                  disabled={!name || !email}
                  onClick={handleCreate}
                >
                  Add New User
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
