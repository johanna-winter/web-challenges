import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  currency: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
