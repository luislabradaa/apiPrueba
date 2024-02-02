//*import connection from './config/database.js';
import express from 'express'

import { categoriasRouter } from './routes/categoria.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.disable('x-powered-by')
app.use(express.json())

app.use(corsMiddleware()) //Soluciona error de cors automatico 


app.use('/categorias', categoriasRouter)


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`Funcionando en http://localhost:${PORT}`)
})
