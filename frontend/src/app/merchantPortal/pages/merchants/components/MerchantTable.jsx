import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai"
import moment from "moment"
import { BsTrash } from 'react-icons/bs'
import { EditMerchantModal } from './EditMerchantModal'
import Loading from '../../../components/loadingError/Loading'
import Message from '../../../components/loadingError/Error'
import { useDispatch } from 'react-redux'
import { adminDeleteMerchant } from '../../../../../redux/actions/merchantactions'

export const MerchantTable = ({ merchants, loading, error, updateStatusLoading, addMerchantLoading, addMerchantError, delLoading, delError }) => {

  const dispatch = useDispatch();

  const handleDeleteProduct = (merchantId) => {
    if (window.confirm("Are you sure??")) {
      dispatch(adminDeleteMerchant(merchantId));
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">MerchantId</th>
          <th scope="col">Date Joined</th>
          <th scope="col">Status</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {(loading || addMerchantLoading || delLoading) && <Loading />}
        {(error || addMerchantError || delError) && (
          <Message variant={"alert-danger"}>
            {error || addMerchantError || delError}
          </Message>
        )}
        {merchants?.map((merchant, i, arr) => (
          <tr key={merchant?._id}>
            <td>
              <b>{merchant?.name}</b>
            </td>
            <td>{merchant?.email}</td>
            <td>{merchant?._id}</td>

            <td>{moment(merchant?.createdAt).format("MMM Do YY")}</td>
            <td>{merchant?.status}</td>
            <td className="d-flex justify-content-between align-items-center">
              <AiOutlineEye cursor="pointer" />
              <BsTrash
                color="red"
                cursor="pointer"
                onClick={() => handleDeleteProduct(merchant?._id)}
              />
              <EditMerchantModal
                merchantArray={merchants}
                data={merchant}
                index={i}
                updateStatusLoading={updateStatusLoading}
              />
              {/* <Link to={`/order/${merchant?._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 