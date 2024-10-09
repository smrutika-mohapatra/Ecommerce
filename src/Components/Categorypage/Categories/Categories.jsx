import React from 'react'
import './Categories.css'
import CategoriesProducts from './CategoriesProducts/CategoriesProducts'
import CategoriesFilters from './CategoriesFilters/CategoriesFilters'

const Categories = () => {
  return (
    <div id='categories' className='container mt-5'>
      <h2>Filters</h2>
      <div className='row mt-5'>
        <div className='col-lg-3'>
          <CategoriesFilters />
        </div>
        <div className='col-lg-9'>
          <CategoriesProducts />
        </div>
      </div>
    </div>
  )
}

export default Categories
