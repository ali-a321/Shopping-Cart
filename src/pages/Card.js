import React from "react";
import '../App.css';

export default function Card(props){
    const {product,finalCart } = props;
   
    return (
        <div className="itemContainer">
            <img className="productImage" src={product.src} alt={product.title}/>
            <div className="productTitle"> {product.title}</div>
            <div> ${product.price} </div>
            <button className="addProduct" onClick={() => finalCart(product)}>Add to Cart</button>
         </div>
    )
}