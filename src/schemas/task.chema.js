import {z} from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "El titulo es requerido",
    }),
    description: z.string({
        required_error: "La descripción debe ser una cadena de texto"
    }),
    date: z.string().datetime().optional(),
});