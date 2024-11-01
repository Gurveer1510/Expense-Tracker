import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required "
    }),
    password: z.string().min(2, {
        message: "Password is required"
    }),
})

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Password must have at least 6 characters"
    })
})

export const BudgetCardSchema = z.object({
    id: z.string(),
    name: z.string({
        message: "Budget name is required"
    }),
    amount: z.number({
        message: "Amount can't be empty."
    })
})