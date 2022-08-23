import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { adminMerchantListAction } from "../../../../../redux/actions/merchantactions";
import Toast from "../../../../userPortal/components/loadingError/Toast";
import { handleFilter } from "../../../../utils/filterSearch";
import Loading from "../../../components/loadingError/Loading";
import { AddNewMerchantModal } from "./AddNewMerchantModal";

import { MerchantTable } from "./MerchantTable";

export const MainMerchant = ({ orderId }) => {
  const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const dispatch = useDispatch();

  const merchantList = useSelector((state) => state.adminMerchantList);
  const { merchants, error, loading } = merchantList;

  const updateMerchantStatus = useSelector(
    (state) => state.updateMerchantStatus
  );
  const {
    error: updateStatusError,
    loading: updateStatusLoading,
    success: updateSuccess,
  } = updateMerchantStatus;

  const adminAddMerchant = useSelector((state) => state.adminAddMerchant);
  const {
    error: addMerchantError,
    loading: addMerchantLoading,
    success: addMerchantSuccess,
  } = adminAddMerchant;

  const adminDeleteMerchant = useSelector((state) => state.adminDeleteMerchant);

  const {
    error: delError,
    loading: delLoading,
    success: delSuccess,
  } = adminDeleteMerchant;

  const [value, setValue] = useState("");

  const [filteredData, setFilteredData] = useState([...merchants]);
  const [status, setStatus] = useState("");

  const filteredMerchantByStatus = merchants?.filter(
    (merchant) =>
      merchant?.status?.toLowerCase() === status?.toLocaleLowerCase()
  );

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Merchant status successfully updated", ToastObjects);
    } else if (addMerchantSuccess) {
      toast.success("Merchant successfully added", ToastObjects);
    } else if (delSuccess) {
      toast.success("Merchant successfully deleted", ToastObjects);
    } else {
      console.log("Waiting for action...");
    }

    dispatch(adminMerchantListAction());
  }, [dispatch, updateSuccess, addMerchantSuccess, delSuccess]);

  return loading ? (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Loading />
    </div>
  ) : (
    <section className="content-main">
      <Toast />
      <div className="content-header">
        <h2 className="content-title">Merchants</h2>
        <div>
          {/* <button className="btn btn-primary">
            Add New Merchant
          </button> */}
          <AddNewMerchantModal />
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type={"text"}
                placeholder="Search by name or email"
                className="form-control p-2"
                value={value}
                onChange={(e) =>
                  handleFilter(e, merchants, setFilteredData, setValue)
                }
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Status</option>
                <option value={"active"}>Active</option>
                <option value={"disabled"}>Disabled</option>
                <option value={"in-active"}>In-active</option>
                <option>Show all</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            <MerchantTable
              merchants={
                filteredMerchantByStatus?.length > 0
                  ? filteredMerchantByStatus
                  : filteredData?.length > 0
                  ? filteredData
                  : merchants
              }
              loading={loading}
              error={error}
              updateStatusLoading={updateStatusLoading}
              addMerchantError={addMerchantError}
              addMerchantLoading={addMerchantLoading}
              delLoading={delLoading}
              delError={delError}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
