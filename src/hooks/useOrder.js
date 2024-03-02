import { useState } from "react";
import { getOrders as getAllOrders, addOrder } from "../services/firebase";
import { validationCreateOrder } from "../schemas/OrderSchema";
import { formatValidationErrors } from "../components/utils";

export function useOrder () {
  const [orders, setOrder] = useState([]);

  const validateOrder = (data) => {
    console.log(data);
    const result = validationCreateOrder(data)
    if (result.success) return true
    else {
      const errors =JSON.parse(result.error.message)
      // todo: show error
      const errorsToShow = formatValidationErrors(errors)
      console.log(errorsToShow);
      return false
    }
  }

  const getOrders = async () => {
    setOrder(await getAllOrders());
  };

  const recordOrder = async (data) => {
    addOrder(data);
  };
  
  return {
    orders, 
    setOrder,

    getOrders,
    recordOrder,
    validateOrder
  }
}