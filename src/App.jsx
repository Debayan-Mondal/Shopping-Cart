import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

export default function App() {
  function getStoredCart() {
  const storedData = localStorage.getItem('cart');
  return storedData ? JSON.parse(storedData) : [];
}
  const [cart, setCart] = useState(getStoredCart);
  let sum = 0;
  if(cart.length != 0) {
    sum = cart.reduce((sum,element) => {
      return sum + element.qnty;
    },0)
  }
  
  console.log(cart);
  useEffect(() => {
    
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

  return (
    <div>
      <NavBar info={sum}/>
      <Outlet context={[cart,setCart]}/>
    </div>
  )
}