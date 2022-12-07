import React, { useState} from 'react'
import Header from './Header'

import '../../styles/e-commerce.scss'
import Content from './Content'
import Categories from './Categories';

import dataList from '../../shop-data.json'

export default function ECommerceApp() {
  // eslint-disable-next-line
  const [orders, setOrders] = useState(dataList.data);
  const [cartOrders, setCartOrders] = useState([]);
  const [term, setTerm] = useState("");
  const [currentOrders, setCurrentOrders] = useState(orders);
  const [searchOrders, setSearchOrders] = useState([]);



  function AddToCart(item) {

    let isInArray = false
    
    cartOrders.forEach(element => {

      if(element.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){

    setCartOrders([...cartOrders, item])

    }
}
  

function DeleteItem(id){
  setCartOrders(cartOrders.filter(el => el.id !== id), [cartOrders])
}

function chooseCategory(categories){
  
  if(categories === 'all'){
    setCurrentOrders(orders);
    return
  }

  setCurrentOrders(orders.filter(el => el.categories === categories))
}



function onUpdateTerm(term) {
  setTerm(term);
  if (term !== ""){
    const newOrder = currentOrders.filter((order) => {
      return Object.values(order).join(" ").toLowerCase().includes(term.toLowerCase());
    });
    setSearchOrders(newOrder);
  } else {
    setSearchOrders(currentOrders);
  }
}

return (
  <>
      <div className='main-con'>
          <Header cartOrders={cartOrders} onDeleteItem={DeleteItem}/>
          <Categories onChooseCategory={chooseCategory} onUpdateTerm={onUpdateTerm}/>
          <div className='content'>
            <Content orders={term.length < 1 ? currentOrders : searchOrders} AddToCart={AddToCart} />
          </div>
          
      </div>
  </>
)
}
