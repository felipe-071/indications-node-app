import { z } from "zod"
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) =>{
    app.post('/subscriptions', {
        schema: {
            summary: 'Subscribes someone to the event',
            tags: ['subscription'],
            // description: "Teste123",
            body: z.object({
                name: z.string(),
                email: z.string().email(),
    
            }),
            // serialização
            response: {
                201: z.object({
                    name: z.string(),
                    email: z.string(),
                })
            },
        },
    }, async (request, reply) => {
        const { name, email } = request.body
    
        // criação da inscrição no banco de dados
    
        return reply.status(201).send({
            name,
            email,
        })
    })
}