import { z } from 'zod'

const envSchema = z.object({ // As variáveis de ambiente serão um objeto
    PORT: z.coerce.number().default(3333), //coerce converte o valoor para o tipo número e caso não haja nenhum, será 3333 
    POSTGRES_URL: z.string().url(),
    REDIS_URL: z.string().url(),

})

export const env = envSchema.parse(process.env) // Verificar o significado com mais detalhes posteriormente 