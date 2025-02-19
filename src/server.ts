import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { 
    validatorCompiler, 
    serializerCompiler, 
    ZodTypeProvider,
    jsonSchemaTransform, } from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'
import { env } from './env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
    origin: true // (colocar a url raiz quando em produção, para que somente o front-end possa fazer requisições à API)
})
app.register(fastifySwagger, {
    openapi:{
        info: {
            title: 'NLW Connect',
            version: '0.0.1'
        },
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs', // quando alguém acessar o endereço /docs, o  backend fornecerá a documentação do swagger
})

app.register(subscribeToEventRoute)

app.listen({ port: env.PORT }).then(() => {
    console.log("Servidor HTTP rodando!")
})
