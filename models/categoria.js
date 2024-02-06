import { readJSON } from "../utils.js"

const categorias = readJSON('./categorias.json')
//! NOT USING ONLY FOR JSON FILE
class CategoriaModel {
    static async getAll ({tipo}){
        if (tipo){

            return categorias.filter(
                categoria => categoria.tipo.toLowerCase() === tipo.toLowerCase()
            )
            // const filteredCategorias = categorias.filter(
            //     categoria => categoria.tipo.toLowerCase().includes(tipo.toLowerCase())
            // )
            //return res.json(filteredCategorias)
        }
        return categorias
    }

    static async getById ({id}){
        const categoria = categorias.find(categoria => categoria.id_cat == id)
        return categoria
    }

    static async create ({input}){
        const newCategoria = {
            id:  5,
            ...input
        }

        categorias.push(newCategoria)

        return newCategoria
    }

    static async delete ({id}){
        const categoriaIndex = categorias.findIndex(categoria => categoria.id_cat == id)
        if(categoriaIndex == -1) return false

        categorias.splice(categoriaIndex, 1)
        return true
    }
    static async update ({id, input}){
        const categoriaIndex = categorias.findIndex(categoria => categoria.id_cat == id)
        if(categoriaIndex == -1) return false

        movies[categoriaIndex] = {
           ...categorias[categoriaIndex],
           ...input
        }
        return categorias[categoriaIndex]
    }
}