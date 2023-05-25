import { shopsController } from "../controllers/shops.controller.js";
import { catchError } from "../utils/catchError.util.js";

export const shopsRoute = (router) => {
	router.get("/shops", catchError(shopsController.getAllShops));
	router.get("/shops/:name", catchError(shopsController.getGoodsByShop));
};
