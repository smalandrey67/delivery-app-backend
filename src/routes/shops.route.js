import { shopsController } from "../controllers/shops.controller.js";

export const shopsRoute = (router) => {
	router.get("/shops", shopsController.getAllShops);
	router.get("/shops/:name", shopsController.getGoodsByShop);
};
