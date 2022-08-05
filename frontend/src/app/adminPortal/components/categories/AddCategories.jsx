import React from 'react'

export const AddCategories = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            className="form-control py-3"
            id="product_name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_images" className="form-label">
            Images
          </label>
          <input
            type="file"
            placeholder="Enter Product Name"
            className="form-control py-3"
            id="product_images"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_desc" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            placeholder="Enter Product Description"
            className="form-control py-3"
            id="product_desc"
            rows={"4"}
          ></textarea>
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary py-3'>Create Category</button>
        </div>
      </form>
    </div>
  );
}
