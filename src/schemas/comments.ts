import { z } from "zod";

export const commentsSchema = z.object({
  comments: z.string().nonempty("Não é permitido comentários vazios"),
});

export type commentsData = z.infer<typeof commentsSchema>;
