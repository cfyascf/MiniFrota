import { FastifyReply, FastifyRequest } from "fastify";
import { registerPassengerPayload, registerPassengerSchema } from "../schemas/passengerSchema";
import { passengerService } from "../services/passengerService";

export const passengerController = {
    registerPassenger: async (req: FastifyRequest, res: FastifyReply) => {
        try {
            console.log("entrou")
            const validateData: registerPassengerPayload = registerPassengerSchema.parse(req.body) 
            console.log("validou:" + JSON.stringify(validateData))
            const newPassenger = await passengerService.registerPassenger(validateData)
            console.log("criou:" + JSON.stringify(newPassenger))

            res.status(201).send({ success: 'Passenger registered successfully!', passenger: newPassenger })

        } catch(error) {
            if (error instanceof Error) {
                res.status(409).send({ error: 'Error registering passenger.', message: error.message });
            } else {
                res.status(500).send({ error: 'Unknown error occurred.', message: 'An unknown error occurred.' });
            }
        }
    }
}