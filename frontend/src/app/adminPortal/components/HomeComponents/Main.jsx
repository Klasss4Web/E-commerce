import React from 'react'
import { useSelector } from 'react-redux'
import { LatestOrders } from './LatestOrders'
import { ProductsStatistics } from './ProductsStatistics'
import { SalesStatistics } from './SalesStatistics'
import { TopTotal } from './TopTotal'

export const Main = () => {

  const orderList = useSelector(state => state.adminOrderList)
  const { loading, error, orders } = orderList
  const productList = useSelector(state=>state.adminProductList)
  const { products } = productList
  return (
    <div>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Dashboard</h2>
        </div>

        {/* Total Sales */}
        <TopTotal orders={orders} products={products} />

        <div className="d-flex justify-content-between">
          {/* STATS */}
          <div style={{ width: "49%" }}>
            <SalesStatistics />
          </div>
          <div style={{ width: "49%" }}>
            <ProductsStatistics />
          </div>
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrders orders={orders} products={products} loading={loading} />
        </div>
      </section>
    </div>
  );
}
