import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateMerchantStatusAction } from "../../../../../redux/actions/merchantactions";

export const EditMerchantModal = ({ data, updateStatusLoading, merchantArray }) => {

  console.log("data....", data)

  const [status, setStatus] = useState("")
  const [recentIndex, setRecentIndex] = useState(undefined)
  const dispatch = useDispatch()

  const handleUpdate = () => {
    const payload = {
      status
    }
    dispatch(updateMerchantStatusAction(data?._id, payload));
   
  }

  const handeleClick = (id) => {
setRecentIndex(id)
  }

  console.log("currenIndex", recentIndex)

  return (
    <div>
      <AiOutlineEdit
        color="#2A9D8F"
        cursor="pointer"
        type="button"
        // data-id={data?._id}
        // class="btn btn-primary"
        data-bs-toggle="modal"
        // data-bs-target="#staticBackdrop"
        data-bs-target="#staticBackdrop"
        onClick={() => handeleClick(data?._id)}
      />
      {recentIndex !== undefined && (
        <>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby={data?.email}
            aria-hidden="true"
          >
            <div className="modal-dialog  modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={data?.email}>
                    Update Merchant: {merchantArray[recentIndex]?.name} Status
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body" style={{ width: "100%" }}>
                  <label for="status">Status</label>
                  <select
                    placeholder="Select status"
                    style={{
                      width: "100%",
                      height: "40px",
                      borderRadius: "5px",
                      border: "1px solid #d4d4d4",
                      marginTop: "10px",
                      paddingLeft: "10px",
                      paddingRight: "20px",
                    }}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value={null}>Select Status</option>
                    <option value="Active">Active</option>
                    <option value="In-active">In-active</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary mb-4"
                    data-bs-dismiss="modal"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
