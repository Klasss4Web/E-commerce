import React from 'react'
import { Header } from '../components/Header'
import { MainEditProduct } from '../components/products/MainEditProduct'
import { Sidebar } from '../components/Sidebar'

export const ProductEditPage = ({ match }) => {

  const productId = match.params?.id
  
  return (
    <div>
      <Sidebar />
      <main className='main-wrap'>
        <Header />
        <MainEditProduct productId={productId} />
      </main>
    </div>
  );
}
