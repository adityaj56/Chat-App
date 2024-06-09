import { fastify, type FastifyInstance} from 'fastify'
import { ApolloServer } from '@apollo/server'
import config from './config'
import { loginRouteOptions, graphqlRouteOptions } from './routes'

export const initApp = async (options = {logger: true}): Promise<FastifyInstance> => {
    const app = fastify(options)

    app.post(config.endpoint, async function handler(request, response) {
        return { hello: 'world'}
    })

    app.post('/login', async (request, response) => {

    })

    app.options(config.endpoint, (request, reply)=>{
        reply.header('access-control-allow-methods', 'POST, OPTIONS')
        reply.header('access-control-allow-headers', 'Content-type')
        reply.send()
    })
    return app
}