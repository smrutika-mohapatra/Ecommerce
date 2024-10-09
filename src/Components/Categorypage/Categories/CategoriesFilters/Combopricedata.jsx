import React from "react";
import './Combopricedata.css'

const comboprice = [
  { price: '699',lable:'Plesant' },
  { price: '999',lable:'Gratifying' },
  { price: '1299',lable:'Delightful' },
  { price: '1599',lable:'Fantastic' },
  { price: '1999',lable:'Amazing' },
  { price: '2599',lable:'Marvellous' },
  { price: '2999',lable:'Spectacular' },
  { price: '3599',lable:'Phenomenal' },
  { price: '3999',lable:'Extraordinary' },
];


const FiltersByComboprice = () => {
  return (
    comboprice.map((combo) => {
      return (
        <ul className='p-0 comboprice'>
          <li>
            <input type='radio' />
            <lable className="ms-2">Rs.{combo.price}</lable>
            <span className='fst-italic ms-2' style={{color:'#545454',textShadow:'5px 5px 5px #DCDCDC'}}>{combo.lable}</span>
          </li>
        </ul>
      )
    })
  )
}
export default FiltersByComboprice;