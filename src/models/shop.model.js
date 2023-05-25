import mongoose from "mongoose";

const Shop = new mongoose.Schema({
	name: { type: String, require: [true, "please provide the name"] }
});

export const ShopModel = mongoose.model("Shop", Shop);
