import { OrderController } from "../controllers/order.controller.js";
import { catchError } from "../utils/catchError.util.js";

import { orderValidation } from "../validations/order.validation.js";
import { validationErrors } from "../middleware/validationErrors.middleware.js";

export const orderRoute = (router) => {
	router.post("/order", orderValidation, validationErrors, catchError(OrderController.makeOrder));
};
