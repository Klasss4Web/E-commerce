import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  updateProductDetails,
  getProductDetails,
} from "../../../../redux/actions/productActions";
import { ADMIN_UPDATE_PRODUCT_DETAILS_RESET } from "../../../../redux/constants/productConstants";
import Toast from "../../../userPortal/components/loadingError/Toast";
import Message from "../loadingError/Error";
import Loading from "../loadingError/Loading";

export const MainEditProduct = ({ productId }) => {

    const ToastObjects = {
      pauseOnFocusLoss: false,
      draggable: false,
      pauseOnHover: false,
      autoClose: 2000,
    };

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState("")

  const dispatch = useDispatch();

  const editedProduct = useSelector((state) => state.adminEditProduct);
  
  const { loading, error, product } = editedProduct;

  const updateProduct = useSelector((state) => state.updateProduct);
  
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = updateProduct;


  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: ADMIN_UPDATE_PRODUCT_DETAILS_RESET });
      toast.success("Product successfully updated", ToastObjects);
    } else {
      if (!product?.name || product?._id !== productId) {
        // toast.success("Product successfully updated", ToastObjects);
        dispatch(getProductDetails(productId));
        // dispatch({ type: ADMIN_ADD_PRODUCT_RESET });
      } else {
        setName(product?.name);
        setDescription(product?.description);
        setImage(product?.image);
        setPrice(product?.price);
        setCountInStock(product?.countInStock);
      }
    }
  }, [product, dispatch, productId, updateSuccess]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(
      updateProductDetails({name, price, description, image, countInStock, _id: product?._id})
    );
  };

  return (
    <div>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleUpdateProduct}>
          <div className="content-header">
            <Link to="/products" className="btn btn-primary">
              Go to products
            </Link>
            <h2 className="content-title">Update Product</h2>
            <div style={{ visibility: "hidden" }}>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xs-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {updateError && (
                    <Message variant={"alert-danger"}>{updateError}</Message>
                  )}
                  {updateLoading && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant={"alert-danger"}>{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_count" className="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Product Title"
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Price
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Product price"
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_count" className="form-label">
                          Quantity Remaining
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Available Product"
                          className="form-control"
                          id="product_count"
                          required
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="product_description"
                          className="form-label"
                        >
                          Product description
                        </label>
                        <textarea
                          type="text"
                          placeholder="Enter Product Description"
                          className="form-control"
                          id="product_description"
                          rows={"7"}
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_image" className="form-label">
                          Product Images
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Product image"
                          className="form-control"
                          id="product_image"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                        <input type="file" className="form-control my-3" />
                        {updateLoading ? (
                          <>
                            <button>
                              {" "}
                              <i class="fa fa-spinner fa-spin"></i>Loading
                            </button>
                          </>
                        ) : (
                          <button>Add to store</button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xs col-lg-4 rounded">
              <img
                src={image}
                width="100%"
                height={"300px"}
                style={{ borderRadius: "10px" }}
              />
              <p>{name}</p>
              <hr />
              <p>{description}</p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
