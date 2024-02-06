import { Router } from 'express';
export const inventarioRouter = Router();

import { ProductoController } from "../controllers/productos.js";

inventarioRouter.get('/', ProductoController.getAll);
inventarioRouter.get('/:id', ProductoController.getById);
inventarioRouter.post('/', ProductoController.create);
inventarioRouter.patch('/:id', ProductoController.update);
inventarioRouter.delete('/:id', ProductoController.delete);