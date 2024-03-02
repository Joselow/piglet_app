import { useEffect, useState } from "react";

import { Form } from "./components/Form";
import { OrderList } from "./components/OrderList";
import "./App.css";
import { useOrder } from "./hooks/useOrder";

export default function App() {
  const { orders, getOrders, recordOrder } =useOrder()
  const [showOrder, setShowOrders] = useState(true);

  const createOrder = async (order) => {
    console.log('crealo papu');
    await recordOrder(order)
    // getOrders()
  };

  // useEffect(() => {
  //   getOrders();
  // }, [getOrders]);
  return (
    <>      
      <div className="container-link">
        <a className="link-login" href="/login">Iniciar Sesión</a>
      </div>
      <Form createOrder={createOrder}/>      
      { showOrder && <OrderList orders={orders}/>    }
    </>
  );
}


