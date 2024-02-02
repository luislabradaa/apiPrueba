import z from 'zod'

const categoriaSchema = z.object({
    nomCat: z.string({
        invalid_type_error: 'Nombre de categoría debe ser del tipo cadena',
        required_error: 'Nombre de categoría es requerido'
    }),
    tipo: z.string({
        invalid_type_error: 'Tipo debe ser del tipo cadena',
        required_error: 'Tipo es requerido'
    }),
    distancia: z.string({
        invalid_type_error: 'Indica la distancia en metros',
        required_error: 'Distancia es requerido'
    })
})

export function validateCategoria (object){
    return categoriaSchema.safeParse(object)
}

export function validatePartialCategoria (object){
    return categoriaSchema.partial().safeParse(object)
}
