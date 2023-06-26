import { z } from "zod";

export const commentsSchema = z.object({
  comments: z.string(),
});

export type commentsData = z.infer<typeof commentsSchema>;
