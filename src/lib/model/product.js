import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    prodImage: { type: String, required: true },
    prodName: { type: String, required: true },
    prodDescHead: { type: String, required: true },
    prodDesc: { type: String, required: true },
    prodCategory: { type: String, required: true },
    prodPrice: { type: String, required: true }
});

export const Product = mongoose.models.products || mongoose.model("products", productModel);