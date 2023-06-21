import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
  password: z.string().nonempty("Senha é obrigatória"),
});
export const recoverPassSchema = z.object({
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
});

export type LoginData = z.infer<typeof loginSchema>;
