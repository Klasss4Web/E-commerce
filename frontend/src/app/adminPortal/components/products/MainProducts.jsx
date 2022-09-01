import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminCategoriesListAction } from "../../../../redux/actions/categoriesActions";
import { adminListProducts } from "../../../../redux/actions/productActions";
import { handleFilter } from "../../../utils/filterSearch";
import Message from "../loadingError/Error";
import Loading from "../loadingError/Loading";
import { Product } from "./Product";

export const MainProducts = ({ products, loading, error }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  const [value, setValue] = useState("");

  const [filteredData, setFilteredData] = useState(products);

  const adminDeleteProduct = useSelector((state) => state.adminDeleteProduct);
  const { error: deleteError, success } = adminDeleteProduct;

  const adminGetCategories = useSelector((state) => state.adminGetCategories);
  const { categories } = adminGetCategories;


  // const handleFilter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== "") {
  //     const results = products?.filter((product) => {
  //       return product.name.toLowerCase().includes(keyword.toLowerCase());
  //       // Use the toLowerCase() method to make it case-insensitive
  //     });
  //     setFilteredData(results);
  //   } else {
  //     setFilteredData(products);
  //   }
  //   setValue(keyword);
  // };

  console.log("filteredData", filteredData);

  useEffect(() => {
    dispatch(adminListProducts());
    dispatch(adminCategoriesListAction());
  }, [dispatch, success]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/add-products" className="btn btn-primary">
            Add New Product
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
                value={value}
                onChange={(e)=>handleFilter(e, products, setFilteredData, setValue)}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>All Categories</option>
                {categories?.map((category) => (
                  <option value={category?.name} key={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest</option>
                <option>Discounts</option>
                <option>Popular demand</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-bod">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Products */}

              {products?.filter((prod) => prod?.category === category).length >
              0
                ? products
                    ?.filter((prod) => prod?.category === category)
                    ?.map((product) => (
                      <Product product={product} key={product?._id} />
                    ))
                : filteredData?.length > 0
                ? filteredData?.map((product) => (
                    <Product product={product} key={product?._id} />
                  ))
                : products?.map((product) => (
                    <Product product={product} key={product?._id} />
                  ))}
            </div>
          )}

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
