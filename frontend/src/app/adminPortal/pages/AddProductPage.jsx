import React from 'react'
import { Header } from '../components/Header'
import { MainAddProduct } from '../components/products/MainAddProduct'
import { Sidebar } from '../components/Sidebar'

export const AddProductPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainAddProduct />
    </div>
  )
}
