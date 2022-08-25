import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { adminCategoriesListAction } from '../../../../redux/actions/categoriesActions';
import { ADMIN_ADD_CATEGORIES_RESET } from '../../../../redux/constants/categoriesConstants';
import Toast from '../../../userPortal/components/loadingError/Toast';
import Message from '../../components/loadingError/Error';
import Loading from '../../components/loadingError/Loading';
import { ToastObjects } from '../../components/loadingError/toastObject';
import { AddNewCategoryModal } from './components/AddNewCategoryModal';
import { Category } from './components/Category';
// import { Header } from '../components/Header';
// import SideBar from '../components/sidebar/index';

export const CategoriesPage = () => {

  const dispatch = useDispatch()

  const adminGetCategories = useSelector((state) => state?.adminGetCategories);
  const adminAddCategory = useSelector((state) => state?.adminAddCategory);
  const [refresh, setRefresh] = useState(false)

  const { error, loading, categories } = adminGetCategories;
   const { error: errorCreatingCat, loading: loadingCat, categories: createdCat } = adminAddCategory;

  useEffect(() => {
    if (createdCat) {
      toast.success("Category successfully added", ToastObjects);
      dispatch({ type: ADMIN_ADD_CATEGORIES_RESET });
    }
    dispatch(adminCategoriesListAction());
  }, [createdCat, dispatch, refresh]);

  console.log("categories", categories);

  return (
    <div style={{ padding: "50px" }}>
      <Toast />
      <main className="main-wrap">
        <div className="content-header">
          <h2 className="content-title">Categories: {categories?.length}</h2>
          <div>
            {/* <button className="btn btn-primary">
            Add New Merchant
          </button> */}
            <AddNewCategoryModal
              loading={loadingCat}
              error={errorCreatingCat}
            />
          </div>
        </div>
        <div>
          {(loading || loadingCat) && <Loading />}
          {error ||
            (errorCreatingCat && (
              <Message variant={"alert-danger"}>
                {error || errorCreatingCat}
              </Message>
            ))}
        </div>
        <div className="categories">
          {categories?.map((data, i) => (
            <Category category={data} key={i} setRefresh={setRefresh} />
          ))}
        </div>
      </main>
    </div>
  );
}
