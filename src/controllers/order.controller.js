import { OrderService } from "../services/order.service.js";
import { ApiError } from "../config/apiError.config.js";

import { statuses } from "../constants/httpStatuses.constants.js";
import { messages } from "../constants/errorMessages.constants.js";

export const OrderController = {
	async makeOrder(req, res) {
		const order = req.body;

		const orderResult = await OrderService.makeOrder(order);

		if (!orderResult) {
			throw ApiError.ServerError(messages.SUBSCRIPTION_NOT_FOUND);
		}

		return res.status(statuses.OK).json({ message: "cool" });
	}
};
