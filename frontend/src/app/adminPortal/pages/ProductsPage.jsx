import React from 'react'
// import { Header } from '../components/Header';
import { MainProducts } from '../components/products/MainProducts';
// import SideBar from "../components/sidebar/index";
// import { Sidebar } from '../components/Sidebar';

export const ProductsPage = () => {
  return (
    <div>
      {/* <Header />
      <SideBar /> */}
      <main className="main-wrap">
        <MainProducts />
      </main>
    </div>
  );
}
