import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:3005'
]

export const corsMiddleware = ({acceptedOrigins = ACCEPTED_ORIGINS} = {}) => cors({
    origin: (origin, callback) => {

        if (acceptedOrigins.includes(origin)) {
            return callback(null, true)
        }

        if(!origin){
            return callback(null, true)
        } 
    }
})