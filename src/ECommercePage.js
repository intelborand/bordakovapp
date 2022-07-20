import React, {useEffect} from 'react'
import ECommerceApp from './components/ECommerceApp/ECommerceApp'

export default function ECommercePage() {

  useEffect(() => {
    document.title = 'e-Commerce App';
  })

  return (
    <ECommerceApp />
  )
}
