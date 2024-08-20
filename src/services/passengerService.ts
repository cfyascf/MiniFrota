import { PrismaClient } from '@prisma/client';
import { registerPassengerPayload } from '../schemas/passengerSchema';

export const prisma = new PrismaClient();

export const passengerService = {
    registerPassenger: async (data: registerPassengerPayload) => {
        var passenger = prisma.passenger.findFirst({
            where: {
                fullname: data.fullname
            }
        })

        if(passenger != null) {
            throw new Error("User already exists.")
        }

        return await prisma.passenger.create({data})
    }
}
