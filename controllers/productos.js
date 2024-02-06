import { ProductoModel } from '../models/mysql.js'

export class ProductoController {
    static async getAll(req, res) {
        const { tipo } = req.query;
        const productos = await ProductoModel.getAll({ tipo });
        res.json(productos);
    }

    static async getById(req, res) {
        const {id} = req.params
        const producto = await ProductoModel.getById({id})
        if (producto) return res.json(producto)
        res.status(404).json({ message: 'Producto not found'})
    }
}