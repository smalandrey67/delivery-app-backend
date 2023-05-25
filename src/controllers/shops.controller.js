import { ShopsService } from "../services/shops.service.js";
import { ApiError } from "../config/apiError.config.js";

import { statuses } from "../constants/httpStatuses.constants.js";
import { messages } from "../constants/errorMessages.constants.js";

export const shopsController = {
	async getAllShops(req, res) {
		const shops = await ShopsService.getAllShops();

		if (!shops) {
			throw ApiError.ServerError(messages.SUBSCRIPTION_NOT_FOUND);
		}

		return res.status(statuses.OK).json(shops);
	},

	async getGoodsByShop(req, res) {
		const shopName = req.params.name;

		const goods = await ShopsService.getGoodsByShop(shopName);

		if (!goods) {
			throw ApiError.ServerError(messages.SUBSCRIPTION_NOT_FOUND);
		}

		return res.status(statuses.OK).json(goods);
	}
};
