import React from 'react'
import { FaTrash } from 'react-icons/fa';

export default function Cart(props) {
  return (
    <div className='shop-cart'>

      {props.cartOrders.map(el => (
        <div key={el.id}  className="shop-cart-item">
            <img src={"../../img/" + el.img} alt={el.name}/>
            <div className='item-name'>{el.name}</div>
            <div>{el.price}$</div>
            {/* <div>+</div>
            <div>-</div> */}
            <FaTrash className='delete-item' onClick={() => props.onDeleteItem(el.id)}/>
        </div>
      ))}
        
    </div>
  )
}
