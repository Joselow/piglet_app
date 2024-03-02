import PropTypes from 'prop-types';

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export function OrderList ({ orders }) {
  return (
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
)
}