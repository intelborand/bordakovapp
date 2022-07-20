import React, {useState} from 'react'
import { BsCart4 } from "react-icons/bs";
import Cart from './Cart';




export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false);

  const showOrders = (props) => {
    let total = 0;
    props.cartOrders.forEach(el => total += Number.parseFloat(el.price))
    return(
      // new Intl.NumberFormat().format(total) - округление чисел до максимально целого числа! 
      <>
            <Cart cartOrders={props.cartOrders} onDeleteItem={props.onDeleteItem}/>
            <p className='total'>Total: {new Intl.NumberFormat().format(total)}$</p>  
      </>

    )
  }
  
  
  const showNothing = () => {
    return(
      <div className='empty'>
        <h2>Cart is empty</h2>
      </div>
    ) 
  }

  return (
    <>
        <header>
        <div className='head-log'>
            <h3>SHOP</h3>
        </div>
        <BsCart4 className={`cart ${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>
        <nav className='nav-manu'>
            <li>Contact</li>
            <li>Galery</li>
        </nav>

        {cartOpen && ( 
          <div className='shop-cart'>
             {props.cartOrders.length > 0 ? 
                showOrders(props) : showNothing()}
          </div>
         
        )}





    </header>
    <div className='content-main'></div>
    </>

  )
}
