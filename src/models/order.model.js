import mongoose from "mongoose";

import { Goods } from "./goods.model.js";

const Order = new mongoose.Schema(
	{
		user: {
			name: { type: String, require: [true, "please provide the name"] },
			email: { type: String, require: [true, "please provide the email"] },
			phone: { type: String, require: [true, "please provide the phone"] },
			address: { type: String, require: [true, "please provide the address"] }
		},
		goods: [Goods],
		totalSum: { type: Number, require: [true, "please provide the totalSum"] }
	},
	{ timestamps: true }
);

export const OrderModel = mongoose.model("Order", Order);
