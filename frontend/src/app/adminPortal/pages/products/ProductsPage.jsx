import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adminListProducts } from '../../../../redux/actions/productActions';
import { MainProducts } from './components/MainProducts';


export const ProductsPage = () => {

  const dispatch = useDispatch()
   const productList = useSelector((state) => state.adminProductList);
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
