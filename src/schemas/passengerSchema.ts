import { z } from 'zod'

export const registerPassengerSchema = z.object({
    fullname: z.string().min(5, "Fullname needs to be longer than 5 characters."),
    birth_date: z.preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date) {
            return new Date(arg);
        }
    }, z.date()),
    parent_name: z.string().min(5, "Parent's fullname needs to be longer than 5 characters."),
    email: z.string().email(),
    phone_number: z.string().max(11, "Phone number longer than 11 digits.").min(8, "Phone number has less than 8 digits."),
    cellphone_number: z.string().max(11, "Phone number longer than 11 digits.").min(8, "Phone number has less than 8 digits."),
})

export type registerPassengerPayload = z.infer<typeof registerPassengerSchema>