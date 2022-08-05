import React from 'react'
import { Header } from '../components/Header';
import { MainOrder } from '../components/orders/MainOrder';
import { Sidebar } from '../components/Sidebar';

export const OrderPage = ({ match }) => {

  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainOrder />
      </main>
    </div>
  );
}
