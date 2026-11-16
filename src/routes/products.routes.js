import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

// Rutas públicas
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);

// Rutas protegidas con JWT
router.post("/create", verifyToken, ProductController.createProduct);
router.delete("/:id", verifyToken, ProductController.deleteProduct);

export default router;