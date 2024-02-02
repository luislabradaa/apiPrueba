import { Router } from "express";
export const categoriasRouter = Router();

import { CategoriaController } from "../controllers/categorias.js";

categoriasRouter.get('/', CategoriaController.getAll)
categoriasRouter.get('/:id', CategoriaController.getById)
categoriasRouter.post('/', CategoriaController.create)
categoriasRouter.delete('/:id', CategoriaController.delete)
categoriasRouter.patch('/:id', CategoriaController.update)