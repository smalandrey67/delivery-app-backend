import { shopsService } from "../services/shops.service.js";

export const shopsController = {
	async getAllShops(req, res) {
		const shops = await shopsService.getAllShops();
		res.status(200).json(shops);
	},

	async getGoodsByShop(req, res) {
		const shopName = req.params.name;

		const goods = await shopsService.getGoodsByShop(shopName);

		res.status(200).json(goods);
	}
};
