const categoryName = [
  { name: 'T-shirt' },
  { name: 'T-shirt' },
  { name: 'T-shirt' },
  { name: 'T-shirt' },
  { name: 'T-shirt' },
  { name: 'T-shirt' },
  { name: 'T-shirt' },
  { name: 'T-shirt' },
];


const FiltersByCategory = () => {
  return (
    categoryName.map((category) => {
      console.log(category);
      return (
        <ul className='p-0'>

          <li>
            <input type='radio' />
            <lable className="fst-italic ms-2" style={{color:'#B0B0B0'}}>{category.name}</lable>
          </li>
        </ul>
      )
    })
  )
}
export default FiltersByCategory;