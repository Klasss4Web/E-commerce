import React from 'react'
import { Header } from '../components/Header';
import { OrderDetailsMain } from '../components/orders/OrderDetailsMain';
import { Sidebar } from '../components/Sidebar';

export const OrderDetailsPage = ({ match }) => {

  const orderId = match.params.id;

  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailsMain orderId={orderId} />
      </main>
    </div>
  );
}
