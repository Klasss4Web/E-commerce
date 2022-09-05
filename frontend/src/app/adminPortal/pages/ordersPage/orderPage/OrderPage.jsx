import React from 'react'
// import { Header } from '../components/Header';
import { MainOrder } from '../components/MainOrder';
// import SideBar from "../components/sidebar/index";

export const OrderPage = ({ match }) => {

  return (
    <div>
      {/* <Header />
      <SideBar /> */}
      <main className="main-wrap">
        <MainOrder />
      </main>
    </div>
  );
}
