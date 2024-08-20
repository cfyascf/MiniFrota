import { FastifyInstance } from "fastify";
import { passengerController } from "../controllers/passengerController";

export default async (app: FastifyInstance) => {
    app.post('/', passengerController.registerPassenger)
}

