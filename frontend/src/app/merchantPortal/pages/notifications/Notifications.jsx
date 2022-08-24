import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminListNotifications } from "../../../../redux/actions/notificationsActions";
import { NotificationCard } from "./components/NotificationCard";

export const Notifications = () => {
 

  return (
    <div style={{ padding: "50px" }}>
      <main className="main-wrap">
        <h2>Notifications</h2>
        <NotificationCard notifications={[]} />
      </main>
    </div>
  );
};
