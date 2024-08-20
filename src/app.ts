import Fastify from 'fastify'
import passengerRoutes from './routes/passengerRoutes'

const app = Fastify()

app.register(passengerRoutes, { prefix: '/passenger' })

const start = async () => {
    try {
        await app.listen({ port: 3000 })
        console.log("Server running on http://localhost:3000")
    } catch(error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()
//use error handler really cool :)