import {validateCategoria, validatePartialCategoria} from '../schemas/categorias.js'
import { CategoriaModel } from "../models/mysql.js";

export class CategoriaController {
    static async getAll (req,res){
        const {tipo} = req.query
        const categorias = await CategoriaModel.getAll({tipo})

        res.json(categorias)
    }

    static async getById(req,res){
        const  {id} = req.params
        const categoria = await CategoriaModel.getById({id})
        if(categoria) return res.json(categoria)
        res.status(404).json({ message: 'Categoría not found'})
    }

    static async create(req,res){
        const result = validateCategoria(req.body)
    
        if(result.error){
            return res.status(400).json({ error:JSON.parse( result.error.message) })
        }
    
        const newCategoria = await CategoriaModel.create({input:result.data})
    
        res.status(201).json(newCategoria)
    }

    static async delete(req, res){
        const {id} = req.params
        const result = await CategoriaModel.delete({ id })
    
        if(result == false){
            return res.status(404).json({ message: 'Categoría not found'})
        }
    
        return res.json({ message: 'Categoría deleted' })
    }

    static async update(req,res){
        const result = validatePartialCategoria(req.body)
    
        if(!result.success){
            return res.status(400).json({ error: JSON.parse(result.error.message)})
        }
    
        const {id} = req.params
        
        const updateCategoria = await CategoriaModel.update({id, input:result.data})
    
        return res.json(updateCategoria)
    }
}