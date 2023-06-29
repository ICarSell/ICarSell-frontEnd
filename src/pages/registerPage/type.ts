import { z } from "zod";
import {
  userCreateSchema,
  userReturnSchema,
} from "../../schemas/registerSchemas";

export type tUserReq = z.infer<typeof userCreateSchema>;
export type tUserReturn = z.infer<typeof userReturnSchema>;
export type tUserReturnWithoutPass = Omit<
  tUserReturn,
  "password" | "passwordConfirm"
>;
