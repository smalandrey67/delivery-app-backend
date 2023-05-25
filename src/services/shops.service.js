import { ShopModel } from "../models/shop.model.js";
import { GoodsModel } from "../models/goods.model.js";

export const shopsService = {
	async getAllShops() {
		const shops = await ShopModel.find();
		return shops;
	},
	async getGoodsByShop(shopName) {
		const goodsByShop = await GoodsModel.find({ name: shopName });
		return goodsByShop;
	}
};