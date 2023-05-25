import { OrderModel } from "../models/order.model.js";

export const OrderService = {
	async makeOrder(order) {
		const orderResult = await OrderModel.create(order);
		return orderResult;
	}
};
