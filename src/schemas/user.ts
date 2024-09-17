import * as z from "zod";

export const createUserSchema = z.object({
  username: z.string().min(1, "campo obrigatório"),

  password: z
    .string()
    .min(1, "campo obrigatório")
    .regex(/^\S*$/, "não pode haver espaços em branco")
    .regex(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .regex(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .regex(/(\d)/, "deve conter ao menos 1 número")
    .regex(/(\W)/, "deve conter ao menos 1 caracter especial")
    .min(8, "no mínimo 8 caracteres"),
});
