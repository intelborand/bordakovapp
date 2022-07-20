import React from 'react'


import '../../styles/e-commerce-item.scss'


export default function Content(props) {


  return (
    <div className='items'>{props.orders.map(item => (
      <div  className='item' key={item.id}>
        <img src={"../../img/" + item.img} alt={item.name}/>
        <div className='desc-item'>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.volume}ml</p>
          <span>{item.price}$</span>
          <div className='add-to-cart' onClick={() => props.AddToCart(item)}>+</div>
        </div>
        
      </div>
  ))}</div>
  )
}

