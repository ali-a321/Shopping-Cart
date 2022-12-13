import React from "react";
import '../App.css';
import Card from "./Card";
import data from "../ProductData";

export default function Products(props){
  const { finalCart, additionToCart } = props;

const productElements = data.products.map(product => {
  return <Card  key ={product.id} 
  product ={product}
  finalCart = {finalCart}
  additionToCart= {additionToCart}
  />
})
    return (
        <div className="productContainer">  
          <div className="product-grid">
            {productElements}
          </div>
        </div>
    )
}