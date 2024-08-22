import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "campo obrigatório"),

  password: z.string().min(1, "campo obrigatório"),
});
