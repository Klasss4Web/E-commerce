import React from 'react'
// import { Header } from '../components/Header';
import { OrderDetailsMain } from '../components/orders/OrderDetailsMain';
// import SideBar from "../components/sidebar/index";

export const OrderDetailsPage = ({ match }) => {

  const orderId = match.params.id;

  return (
    <div>
      {/* <SideBar />
      <Header /> */}
      <main className="main-wrap">
        <OrderDetailsMain orderId={orderId} />
      </main>
    </div>
  );
}
