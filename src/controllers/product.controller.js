import { ProductService } from "../services/product.service.js";

export const ProductController = {
  async getProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      res.json({ success: true, data: products });
    } catch (error) {
      next(error);
    }
  },

  async getProduct(req, res, next) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.json({ success: true, data: product });
    } catch (error) {
      next(error);
    }
  },

  async createProduct(req, res, next) {
    try {
      const newProduct = await ProductService.createProduct(req.body);
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      next(error);
    }
  },

  async deleteProduct(req, res, next) {
    try {
      const result = await ProductService.deleteProduct(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }
};