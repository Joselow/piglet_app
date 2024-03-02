import { useRef } from "react";
import PropTypes from 'prop-types';
import { useOrder } from "../hooks/useOrder";
import { processData } from "./utils";

Form.propTypes = {
  createOrder: PropTypes.func.isRequired,
};

export function Form ({ createOrder }) {
  const { validateOrder } =useOrder()
  const form = useRef();

  const handleCreate = async () => {
    const formData = Object.fromEntries(new FormData(form.current));
    const processedData = processData(formData)
    const convertedData = convertDataTypes(processedData )
  
    const isValid = validateOrder(convertedData)
    if(isValid) {
      createOrder(formData)
    }
  };

  const convertDataTypes = (data) => {
    const convertedData = { ...data }
    const { numPiglets, totalPrice, deliveryDate } = convertedData
  
    if (numPiglets) {
      convertedData.numPiglets = Number(numPiglets)
    }
    if (totalPrice) {
      convertedData.totalPrice = Number(totalPrice)
    }
    if (deliveryDate) {
      convertedData.deliveryDate = new Date(deliveryDate)
    }
  
    return convertedData;
  };
  
  return (
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
              <label htmlFor="deliveryAdress">Dirección de Entrega:</label>
              <input type="text" id="deliveryAdress" name="deliveryAdress" 
                placeholder="Ejem: Psj Las molinas #452"/>
            </div>
        
            <div className="double-form-group">
              <div className="form-group">
                <label htmlFor="numPiglets">Número de Lechones:</label>
                <input type="number" id="numPiglets" name="numPiglets"
                  placeholder="0"/>

              </div>

              <div className="form-group">
                <label htmlFor="totalPrice">Precio Total (S/):</label>
                <input type="number" id="totalPrice" name="totalPrice"
                  placeholder="0.00" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deliveryDate">Fecha y Hora de Entrega:</label>
              <input type="datetime-local" id="deliveryDate" name="deliveryDate"/>             
            </div>

            <div className="form-group">
              <label htmlFor="addresRefence">Referencia: (Opcional)</label>
              <textarea id="addresRefence" name="addresRefence" rows="3"
                placeholder="Ejem: Al frente de una chochera"
              ></textarea>
            </div>
            <div className="form-group">
              <div>
                <label htmlFor="details">Detalles importantes: (opcional)</label>
                {/* <span> (opcional)</span> */}
              </div>
              <textarea id="details" name="details" rows="4"
                placeholder="Ejem: El pedido incluye 'papa y ají'"
              ></textarea>
            </div>
            <button type="button" onClick={() => handleCreate()}>
              Confirmar Orden
            </button>       
          </form>
        </div>     
    </div>
  )
}