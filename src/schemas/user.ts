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

export const editUserSchema = z
  .object({
    username: z.string().optional(),

    password: z.string().optional(),
  })
  .refine(
    ({ password }) => {
      if (!password) return true;

      return (
        /^\S*$/.test(password) &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /\W/.test(password) &&
        password.length >= 8
      );
    },
    {
      message:
        "A senha deve conter:\n- No mínimo 8 caracteres\n- Ao menos 1 letra maiúscula\n- Ao menos 1 letra minúscula\n- Ao menos 1 número\n- Ao menos 1 caracter especial\n- Não pode haver espaços em branco",
    }
  );
