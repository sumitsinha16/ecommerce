import React from 'react'
import './css/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='' />
      <div className='shopcategory-indexshort'>
        <p><span>Showing 1-12 </span>of 36 Products</p>
        <div className='shopcategory-sort'>

        </div>
      </div>
      </div>
  )
}
export default ShopCategory