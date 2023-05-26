import { ShopModel } from "../models/shop.model.js";
import { GoodsModel } from "../models/goods.model.js";

export const ShopsService = {
	async getAllShops() {
		const shops = await ShopModel.find();
		return shops;
	},
	async getGoodsByShop(shopName) {
		const goodsByShop = await GoodsModel.find({ shop: shopName });
		return goodsByShop;
	}
};
