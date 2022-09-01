import React from "react";
import { useDispatch } from "react-redux";
import { updateNotificationDetails } from "../../../../../redux/actions/notificationsActions";
import { timeago } from "../../../../../utils/timeAgo";
import Toast from "../../../components/loadingError/Toast";
// import { ViewDetails } from "./ViewDetailsModal.jsx";

export const NotificationCard = ({ notifications, setRefresh, loading }) => {
  const dispatch = useDispatch();

  const handleApprove = (notification) => {
    const payload = {
      status: "Resolved",
      productStatus: "Approved",
      _id: notification?._id,
    };

    console.log("payyy", payload);

    dispatch(updateNotificationDetails(payload, setRefresh));
  };

  return (
    <div>
      <Toast />
      {notifications?.map((notification) => (
        <div
          key={notification?._id}
          className="card"
          style={{
            width: "100%",
            borderRadius: "10px",
            marginTop: "15px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{notification?.title}</h5>
              {/* <ViewDetails
                notification={notification}
                handleApprove={handleApprove}
              /> */}
            </div>
            <p className="card-text">{notification?.description}</p>
          
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "green",
                  width: "150px",
                  height: "40px",
                  color: "#fff",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <p className="">Resolved</p>
              </div>
       
            <p>{timeago(notification?.createdAt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
