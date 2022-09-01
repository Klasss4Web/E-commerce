import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { merchantListNotifications } from "../../../../redux/actions/notificationsActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import { NotificationCard } from "./components/NotificationCard";

export const Notifications = () => {
 
   const dispatch = useDispatch();

   const merchantNotifications = useSelector(
     (state) => state?.merchantNotifications
   );
   const { error, loading, notifications } = merchantNotifications;

   const adminUpdateNotification = useSelector(
     (state) => state?.adminUpdateNotification
   );

  //  const {
  //    error: errorUpdating,
  //    loading: loadingUpdates,
  //    success,
  //  } = adminUpdateNotification;
  //  const [refresh, setRefresh] = useState(false);

   useEffect(() => {
     dispatch(merchantListNotifications());
   }, [dispatch]);

   return (
     <div className="notifications">
       <main className="main-wrap">
         <h2>Notifications</h2>
         {error && <Message variant="alert-danger">{error}</Message>}
         {loading && <Loading />}
         <NotificationCard
           notifications={notifications?.data}
          //  setRefresh={setRefresh}
          //  error={errorUpdating}
          //  loading={loadingUpdates}
         />
       </main>
     </div>
   );

  // return (
  //   <div style={{ padding: "50px" }}>
  //     <main className="main-wrap">
  //       <h2>Notifications</h2>
  //       <NotificationCard notifications={[]} />
  //     </main>
  //   </div>
  // );
};
