import React from 'react'
import './CategoriesFilters.css'
import FiltersByCategory from './Categorydata'
import FiltersByComboprice from './Combopricedata'

const CategoriesFilters = () => {
  return (
    <div id='categoriesFilters'>
      <div>
        <h4>Filters By Category</h4>
        <FiltersByCategory />
      </div>
      <div className='mt-4'>
        <h4>Select Combo Price</h4>
        <FiltersByComboprice />
      </div>
      <div>
        <h4>Size</h4>
        <ul className='p-0'>
          <li>
            <input type='radio' />
            <lable>S</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>M</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>L</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>XL</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>XXL</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>XXXL</lable>
          </li>
        </ul>
      </div>
      <div>
        <h4>Colours</h4>
        <ul className='p-0'>
          <li>
            <input type='radio' />
            <lable>S</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>M</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>L</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>XL</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>XXL</lable>
          </li>
          <li>
            <input type='radio' />
            <lable>XXXL</lable>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default CategoriesFilters
