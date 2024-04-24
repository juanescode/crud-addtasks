import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'El username es requerido'
    }), 
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email no es valido'
    }),
    password: z.string({
        required_error: 'El password es requerido'
    }).min(6, {
        message: 'La contraseña debe ser de al menos 6 caracteres'
    }),
});


export const loginSchema = z.object({
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email no es valido'
    }),
    password: z.string({
        required_error: 'El password es requerido'
    }).min(6, {
        message: 'La contraseña debe ser de al menos 6 caracteres'
    }),
});