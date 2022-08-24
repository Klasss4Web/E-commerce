import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adminListProducts } from '../../../redux/actions/productActions';
// import { Header } from '../components/Header';
import { MainProducts } from '../components/products/MainProducts';
// import SideBar from "../components/sidebar/index";
// import { Sidebar } from '../components/Sidebar';

export const ProductsPage = () => {

  const dispatch = useDispatch()
   const productList = useSelector((state) => state.merchantProductList);
   const { products, error, loading } = productList;

  
  return (
    <div>
      {/* <Header />
      <SideBar /> */}
      <main className="main-wrap">
        <MainProducts products={products} error={error} loading={loading} />
      </main>
    </div>
  );
}