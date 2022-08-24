import React from "react";
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
