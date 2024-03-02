import { z } from "zod";

const OrderScheme = z.object({
  clientName: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  }).min(1),
  deliveryAdress: z.string().min(1),
  numPiglets: z.number(),
  totalPrice: z.number(),
  deliveryDate: z.date(),
  addresRefence: z.string().optional(),
  details: z.string().optional()
})


export const validationCreateOrder = (object) => {
  return OrderScheme.safeParse(object)
} 