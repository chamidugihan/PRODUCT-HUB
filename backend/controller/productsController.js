import mongoose from "mongoose";

import Product from "../models/product.model.js";

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error getting products:", error.message);
    res.status(500).json({ success: false, message: "Error getting products" });
  }
}
export async function createProduct(req, res) {
  try {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error creating product:", error.message);
    res.status(500).json({ success: false, message: "Error creating product" });
  }
}
export async function updateProduct(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Invalid product id",
      });
    }
 
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
 
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });

  } catch (error) {
    console.log("Error updating product:", error.message);
    res.status(500).json({
      success: false,
      message: "Error updating product",
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    console.log("Error deleting product:", error.message);
    res.status(500).json({ success: false, message: "Error deleting product" });
  }
}
