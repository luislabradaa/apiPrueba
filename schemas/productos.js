import z from 'zod'

const productoSchema = z.object({
    noparte: z.string({
        invalid_type_error: 'Nombre de parte debe ser del tipo cadena',
        required_error: 'Nombre de parte es requerido'
    }),
    descripcion: z.string({
        invalid_type_error: 'Descripción debe ser del tipo cadena',
        required_error: 'Descripción es requerido'
    }),
    cantidad: z.number({
        invalid_type_error: 'Cantidad debe ser del tipo número',
        required_error: 'Cantidad es requerido'
    }),
    marca: z.string({
        invalid_type_error: 'Marca debe ser del tipo cadena',
        required_error: 'Marca es requerido'
    }),
    observacion: z.string({
        invalid_type_error: 'Observación debe ser del tipo cadena',
        required_error: 'Observación es requerido'
    }),
    id_cat: z.number({
        invalid_type_error: 'ID de categoría debe ser del tipo númerico',
        required_error: 'ID de categoría es requerido'
    }).int({
        message: 'Debe ser un número entero',
    }).gte(1,{
        message: 'Debe ser un número entero mayor o igual a 1',
    })
})

export function validateProducto (object){
    return productoSchema.safeParse(object)
}

export function validatePartialProducto (object){
    return productoSchema.partial().safeParse(object)
}