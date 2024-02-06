import { Router } from 'express';
export const inventarioRouter = Router();

import { ProductoController } from "../controllers/productos.js";

inventarioRouter.get("/", ProductoController.getAll);
inventarioRouter.get("/:id", ProductoController.getById);