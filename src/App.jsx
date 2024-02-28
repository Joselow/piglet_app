import { useEffect, useState, useRef } from "react";

import "./App.css";
import { getOrders, addOrder } from "./services/firebase";

function App() {
  const getAsync = async () => {
    setOrder(await getOrders());
  };

  const form = useRef();
  const [orders, setOrder] = useState([]);
  const [showOrder, setShowOrders] = useState(false);

  const handleCreateOrder = async () => {
    const data = Object.fromEntries(new FormData(form.current));
    await addOrder(data);
    getAsync();
  };

  // useEffect(() => {
  //   getAsync();
  // }, []);
  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <h2>Registra el pedido</h2>
        </div>
        <div className="form-body">
          <form action="#" method="post" ref={form}>
            <div className="form-group">
              <label htmlFor="clientName">Nombre del Cliente: *</label>
              <input type="text" id="clientName" name="clientName" 
                placeholder="Ejem: Rosa Maria Gimenex"/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección de Entrega:</label>
              <input type="text" id="address" name="address" 
                placeholder="Ejem: Psj Las molinas #452"/>
            </div>
        
            <div className="double-form-group">
              <div className="form-group">
                <label htmlFor="numPiglet">Número de Lechones:</label>
                <input type="number" id="numPiglet" name="numPiglet"
                  placeholder="0"/>

              </div>

              <div className="form-group">
                <label htmlFor="totalPrice">Precio Total (S/):</label>
                <input type="number" id="totalPrice" name="totalPrice"
                  placeholder="0.00" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fechaYHora">Fecha y Hora de Entrega:</label>
              <input type="datetime-local" id="fechaYHora" name="fechaYHora"/>

              {/* <label htmlFor="deliveryDate">Fecha de Entrega:</label>
              <input type="date" id="deliveryDate" name="deliveryDate" /> */}
            </div>

            <div className="form-group">
              <label htmlFor="reference">Referencia: (Opcional)</label>
              <textarea id="reference" name="reference" rows="3"
                placeholder="Ejem: Al frente de una chochera"
              ></textarea>
            </div>
            <div className="form-group">
              <div>
                <label htmlFor="description">Detalles importantes: (opcional)</label>
                {/* <span> (opcional)</span> */}
              </div>
              <textarea id="description" name="description" rows="4"
                placeholder="Ejem: El pedido incluye 'papa y ají'"
              ></textarea>
            </div>
            {/* <button type="button" onClick={() => handleCreateOrder()}>
              Confirmar Orden
            </button> */}
            {/* <div className="container-link">
              <a className="link-login" href="/login">Iniciar Sesión</a>
            </div> */}
          </form>
        </div>
        <div>
          <div>
            <div className="container-order">
              {true &&
                orders.map((order, index) => (
                  <div key={index} className="order-card">
                    <div className="order-info">
                      <p>
                        <strong>Fecah de entrega:</strong>{" "}
                        {new Date(order.deliveryDate).toLocaleString()}
                      </p>
                      <p>
                        <strong>Dirección:</strong> {order.address}
                      </p>
                      <p>
                        <strong>Cliente:</strong> {order.clientName}
                      </p>                   
                      <p>
                        <strong>Description:</strong> {order.description}
                      </p>
                      <p>
                        <strong>Número de Lechones:</strong> {order.numPiglet}
                      </p>
                      <p>
                        <strong>Monto Total:</strong> ${order.totalPrice}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
