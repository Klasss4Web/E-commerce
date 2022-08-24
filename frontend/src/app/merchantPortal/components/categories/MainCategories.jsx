import React from 'react'
import { AddCategories } from './AddCategories'
import { CategoriesTable } from './CategoriesTable'

export const MainCategories = () => {
  return (
    <section className='content-main'>
      <div className='content-header'>
        <h2 className='content-title'>Categories</h2>
      </div>

      <div className='card shadow-sm'>
        <div className='card-body'>
          <div className='row'>
            {/* Add New Category */}
            <AddCategories />

            {/* Categories Table */}
            <CategoriesTable />
          </div>
        </div>
      </div>
    </section>
  )
}
