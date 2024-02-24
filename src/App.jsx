import { useEffect, useState, useRef } from 'react'

import './App.css'
import { getOrders, addOrder } from './services/firebase' 


function App() {

  const getAsync = async() => {
    setOrder(await getOrders())
  }    

  const form = useRef()
  const [ orders, setOrder] = useState([])
  const [ showOrder, setShowOrders] = useState(false)
    
  const handleCreateOrder = async() => {
    const data =   Object.fromEntries(new FormData(form.current))
    await addOrder(data)
    getAsync()
  }

  useEffect(()=> {
     
    getAsync()

    }, [])
  return (
    <>
      <div className="form-container">
  <div className="form-header">
    <h2>Formulario Moderno</h2>
  </div>
  <div className="form-body">
  <form action="#" method="post" ref={form}>   
      <div className="form-group">
        <label htmlFor="clientName">Nombre del Cliente:</label>
        <input type="text" id="clientName" name="clientName" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Dirección de Entrega:</label>
        <input type="text" id="address" name="address" />
      </div>

    

      <div className="form-group">
        <label htmlFor="numPiglet">Número de Lechones:</label>
        <input type="number" id="numPiglet" name="numPiglet" />
      </div>

      <div className="form-group">
        <label htmlFor="totalPrice">Precio Total:</label>
        <input type="number" id="totalPrice" name="totalPrice" />
      </div>

 

      <div className="form-group">
        <label htmlFor="deliveryDate">Fecha de Entrega:</label>
        <input type="date" id="deliveryDate" name="deliveryDate" />
      </div>

      <div className="form-group">
        <label htmlFor="description">Otras cosas importantes:</label>
        <textarea id="description" name="description" rows="4"></textarea>
      </div>
      <button type='button' onClick={() => handleCreateOrder()}>
          Confirmar Orden
      </button>
    </form>
  </div>
  <div>
  <div>
  <div className='container-order'>


      {  showOrder && orders.map((order, index) => (
        <div key={index} className='order-card'>
          <div className='order-info'>
            <p><strong>Delivery Date:</strong> {new Date(order.deliveryDate).toLocaleString()}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Client Name:</strong> {order.clientName}</p>
            <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <p><strong>Description:</strong> {order.description}</p>
            <p><strong>Number of Piglets:</strong> {order.numPiglet}</p>
            <p><strong>Total Price:</strong> ${order.totalPrice}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
