import React from 'react'
// import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      {/* <div className='col-12 alert aler-info text-center mt-3'>
        No Orders
        <Link
          className='btn btn-success mx-2 px-3 py-2' to="/"
          style={{ fontSize: "12px" }}
        >
          START SHOPPING
        </Link>
      </div> */}

      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <td>STATUS</td>
              <td>DATE</td>
              <td>TOTAL</td>
            </tr>
          </thead>
          <tbody>
            <tr className='alert-success'>
              <td>
                <a href="/" className='link'>
                  1
                </a>
              </td>
              <td>Paid</td>
              <td>Dec 12 2021</td>
              <td>$1000</td>
            </tr>
            {/* Cancelled */}
            <tr className='alert-danger'>
              <td>
                <a href="/" className='link'>
                  2
                </a>
              </td>
              <td>Not Paid</td>
              <td>Dec 12 2021</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
