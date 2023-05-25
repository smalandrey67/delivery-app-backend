import mongoose from "mongoose";

export const Goods = new mongoose.Schema({
	image: { type: String, require: [true, "please provide the image"] },
	name: { type: String, require: [true, "please provide the name"] }
});

export const GoodsModel = mongoose.model("Goods", Goods);
