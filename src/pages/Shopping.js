import React from "react";
import '../App.css';

export default function Shopping(props){
const {productClicked, additionToCart, removeProduct} = props

const finalPayment =  productClicked.reduce((a, c) => a + c.quantity * c.price, 0);
    return (
        <div className="shopping-container">
          <div className="checkOutTitle">Your shopping cart </div>
          <div>
        {productClicked.length === 0 && <div>Cart is empty</div>}
        {productClicked.map((item) => (
          <div key={item.id} className="list">
            <div className="checkoutbox"> 
              <div> <img src= {item.src} alt="product" className="checkoutImage"/> </div>
              <div className="checkoutWrap"> {item.title} 
              <div className="btnContainer">
                <button onClick={() => removeProduct(item)} className="signBtn">-</button>
                  {item.quantity}
                <button onClick={() => additionToCart(item)} className="signBtn"> +</button>
              </div>
              <div> {item.quantity} x ${item.price}</div>
              </div>
            </div>
          </div>
        ))}
        {finalPayment>0 ? 
        <div className="finalAmount">Total: $ {finalPayment} 
        <button className="checkoutBtn">Checkout</button></div>
        : ""}         
        </div>
        </div>
    )
}