import {Link, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Shopping from "./pages/Shopping";
import './App.css';
import cartimg from "./images/cart-outline.svg"
import data from "./ProductData";


function App() {
  const {products} = data
  const [cart,setCart] = React.useState(0)
  const finalCart = (product) => {
    additionToCart(product)
}

const [productClicked, setProductClicked] = React.useState([]);

const additionToCart = (product) => {
  setCart(cart +1)
  const chosenProduct = productClicked.find(item => item.id === product.id)
  if (chosenProduct){
    setProductClicked(productClicked.map((item) => 
    item.id === product.id ? {...chosenProduct, quantity: chosenProduct.quantity +1}:item
    )
    );
  } else {
    setProductClicked([...productClicked,{...product, quantity:  1}])
  }
}
const removeProduct = (product) => {
  if (cart>0){
  setCart(cart - 1)
  }
  const chosenProduct = productClicked.find((item) => item.id === product.id);
  if (chosenProduct.quantity === 1) {
    setProductClicked(productClicked.filter((item) => item.id !== product.id));
  } else if (chosenProduct.quantity !== 1) {
    setProductClicked(
      productClicked.map((item) =>
        item.id === product.id ? { ...chosenProduct, quantity: chosenProduct.quantity - 1 } : item
      )
    );
  } else if (chosenProduct.quantity <= 0){
    return 
  }
};

  return (
    <> 
    <nav className="headerContainer">
      <div className="title"> Fashion Store</div>
      <ul className="miniheader">
        <li><Link to ="/"> Home</Link></li>
        <li><Link to = "/products"> Products</Link></li>
        <li><Link to = "/contact"> Contact</Link></li>
        <Link to = "/shopping">
          <div className="wrap"> 
            <img className="cartimg" src = {cartimg} alt="shopping cart" /> 
           {cart>0 &&<div className="circle"> {cart}</div>} 
          </div> 
        </Link>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products 
      finalCart = {finalCart}
      products = {products}
      />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/shopping" element={<Shopping 
      productClicked ={productClicked}
      additionToCart ={additionToCart}
      removeProduct = {removeProduct}
      
      />} />
    </Routes>
  </>
  );
}

export default App;
