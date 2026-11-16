import { ProductModel } from "../models/product.model.js";

export const ProductService = {
  async getAllProducts() {
    try {
      return await ProductModel.findAll();
    } catch (error) {
      const err = new Error("Error al consultar la base de datos remota.");
      err.status = 500;
      throw err;
    }
  },

  async getProductById(id) {
    const product = await ProductModel.findById(id);
    if (!product) {
      const err = new Error("Producto no encontrado.");
      err.status = 404;
      throw err;
    }
    return product;
  },

  async createProduct(data) {
    if (!data.name || typeof data.price !== "number") {
      const err = new Error("Datos de producto inválidos. Se requiere 'name' y 'price' numérico.");
      err.status = 400;
      throw err;
    }
    return await ProductModel.create(data);
  },

  async deleteProduct(id) {
    const deleted = await ProductModel.remove(id);
    if (!deleted) {
      const err = new Error("El producto que intentas eliminar no existe.");
      err.status = 404;
      throw err;
    }
    return { message: "Producto eliminado correctamente." };
  }
};