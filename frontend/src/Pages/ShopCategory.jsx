import React from "react";
import "./css/ShopCategory.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexshort">
        <p>
          <span>Showing 1-12 </span>of 36 Products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {console.log("printing props")}
        {console.log(props.category)}
        {/* <Item
          key="1"
          id="3"
          name="Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse"
          image={all_product[1].image}
          new_price="60.0"
          old_price="100.6"
        /> */}
        {props.category &&
          all_product.map((item, i) => {
            console.log(item);
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price="33"
                  old_price="22"
                />
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};
export default ShopCategory;
