import { z } from "zod";

export const addressCreateSchema = z.object({
  zipCode: z
    .string()
    .min(10, "O CEP deve ter no mínimo 10 caracteres")
    .max(10, "O CEP deve ter no máximo 10 caracteres"),
  state: z.string().max(50, "O estado deve ter no máximo 50 caracteres"),
  city: z.string().max(50, "A cidade deve ter no máximo 50 caracteres"),
  street: z.string().max(50, "A rua deve ter no máximo 50 caracteres"),
  number: z.string().max(10, "O número deve ter no máximo 10 caracteres"),
  complement: z
    .string()
    .max(100, "O complemento deve ter no máximo 100 caracteres"),
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
    zipCode: z
      .string()
      .min(10, "O CEP deve ter no mínimo 10 caracteres")
      .max(10, "O CEP deve ter no máximo 10 caracteres"),
    state: z.string().max(50, "O estado deve ter no máximo 50 caracteres"),
    city: z.string().max(50, "A cidade deve ter no máximo 50 caracteres"),
    street: z.string().max(50, "A rua deve ter no máximo 50 caracteres"),
    number: z.string().max(10, "O número deve ter no máximo 10 caracteres"),
    complement: z
      .string()
      .max(100, "O complemento deve ter no máximo 100 caracteres"),
  })
  .partial();

export const changePasswordSchema = z
  .object({
    password: z.string().min(8).max(120),
    passwordConfirm: z.string().min(8).max(120),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Senha precisam ser iguais",
    path: ["passwordConfirm"],
  });

export const userCreateSchema = z
  .object({
    name: z
      .string()
      .max(30)
      .min(4, "O nome deve ter no mínimo 4 caracteres")
      .max(30, "O nome deve ter no máximo 30 caracteres"),
    email: z
      .string()
      .email("Email inválido")
      .max(100, "O email deve ter no máximo 100 caracteres"),
    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .max(120, "A senha deve ter no máximo 120 caracteres"),
    passwordConfirm: z
      .string()
      .min(8, "A confirmação da senha deve ter no mínimo 8 caracteres")
      .max(120, "A confirmação da senha deve ter no máximo 120 caracteres"),
    cpf: z
      .string()
      .min(11, "O CPF deve ter no mínimo 14 caracteres")
      .max(14, "O CPF deve ter no máximo 14 caracteres"),
    phone: z
      .string()
      .min(9, "O número de telefone deve ter no mínimo 9 caracteres")
      .max(13, "O número de telefone deve ter no máximo 13 caracteres"),
    dateOfBirth: z.string(),
    description: z.string(),
    isSeller: z.boolean().default(false),
    address: addressCreateSchema,
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas precisam ser iguais",
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
