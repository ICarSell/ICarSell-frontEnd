import { z } from "zod";

export const addressCreateSchema = z.object({
  zipCode: z.string().max(10),
  state: z.string().max(50),
  city: z.string().max(50),
  street: z.string().max(50),
  number: z.string().max(10),
  complement: z.string().max(100),
});

export const userUpdateSchema = z
  .object({
    name: z.string().max(30).min(4),
    email: z.string().email().max(100),
    cpf: z.string().max(14),
    phone: z.string().max(13),
    dateOfBirth: z.string(),
    description: z.string(),
  })
  .partial();

export const addressUpdateSchema = z
  .object({
    zipCode: z.string().max(10),
    state: z.string().max(50),
    city: z.string().max(50),
    street: z.string().max(50),
    number: z.string().max(10),
    complement: z.string().max(100),
  })
  .partial();

export const userCreateSchema = z
  .object({
    name: z.string().max(30).min(4),
    email: z.string().email().max(100),
    password: z.string().min(8).max(120),
    passwordConfirm: z.string().min(8).max(120),
    cpf: z.string().max(14),
    phone: z.string().max(13),
    dateOfBirth: z.string(),
    description: z.string(),
    isSeller: z.boolean().default(false),
    address: addressCreateSchema,
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Senha precisam ser iguais",
    path: ["passwordConfirm"],
  });

export const userReturnSchema = z.object({
  id: z.string(),
  name: z.string().max(30).min(4),
  email: z.string().email().max(100),
  password: z.string().min(8).max(120),
  passwordConfirm: z.string().min(8).max(120),
  cpf: z.string().max(14),
  phone: z.string().max(13),
  dateOfBirth: z.string(),
  description: z.string(),
  isSeller: z.boolean().default(false),
  address: addressCreateSchema,
});

export const addressReturnSchema = addressCreateSchema.extend({
  id: z.string(),
});
