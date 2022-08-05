import React from 'react'
import { Header } from '../components/Header';
import { MainProducts } from '../components/products/MainProducts';
import { Sidebar } from '../components/Sidebar';

export const ProductsPage = () => {
  return (
      <div>
        <Sidebar />
        <main className="main-wrap">
          <Header />
          <MainProducts />
        </main>
      </div>
  );
}
