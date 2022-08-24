import React, { useState } from "react";
import { useSelector } from "react-redux";
import { handleFilter } from "../../../utils/filterSearch";
import Message from "../loadingError/Error";
import Loading from "../loadingError/Loading";
import { Orders } from "./Orders";

export const MainOrder = ({ orderId }) => {

  // const dispatch = useDispatch();
  const adminOrderList = useSelector((state) => state.adminOrderList);
  const { loading, error, orders } = adminOrderList;

  const [value, setValue] = useState("");

  const [filteredData, setFilteredData] = useState([...orders]);
  const [status, setStatus] = useState();

  const filteredMerchantByStatus = orders?.filter(
    (order) => (order?.isDelivered).toString() === status
  );

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Orders</h2>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type={"text"}
                placeholder="Search..."
                className="form-control p-2"
                value={value}
                onChange={(e) =>
                  handleFilter(e, orders, setFilteredData, setValue)
                }
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Status</option>
                {/* <option value={""}>Paid</option>
                <option>Not Paid</option> */}
                <option value={"true"}>Delivered</option>
                <option value={"false"}>Not Delivered</option>
                <option>Show all</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders
                orders={
                  filteredMerchantByStatus?.length > 0
                    ? filteredMerchantByStatus
                    : filteredData?.length > 0
                    ? filteredData
                    : orders
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
