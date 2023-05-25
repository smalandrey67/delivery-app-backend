import { body } from "express-validator";

export const orderValidation = [
	body("user.name").trim().not().isEmpty().withMessage("Name is required"),
	body("user.email").trim().isEmail().withMessage("Not valid Email"),
	body("user.phone").trim().not().isEmpty().withMessage("Phone is required"),
	body("user.address").trim().not().isEmpty().withMessage("Address is required"),
	body("goods").not().isEmpty().withMessage("Goods is required")
];
