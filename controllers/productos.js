import { validateProducto, validatePartialProducto} from '../schemas/productos.js'
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

    static async create(req, res) {
        const result = validateProducto(req.body)

        if (!result.success) {
            return res.status(400).json({ error:JSON.parse( result.error.message) })
        }

        const newProducto = await ProductoModel.create({input:result.data})
        res.status(201).json(newProducto)
    }

    static async delete(req, res) {
        const {id} = req.params
        const result = await ProductoModel.delete({ id })

        if (result == false) {
            return res.status(404).json({ message: 'Producto not found'})
        }

        return res.json({ message: 'Producto deleted' })
    }

    static async update(req, res) {
        const result = validatePartialProducto(req.body)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message)})
        }

        const {id} = req.params
        const updateProducto = await ProductoModel.update({id, input:result.data})

        return res.json(updateProducto)
    }
}