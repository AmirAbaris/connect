import {
  forgetPasswordUserSchema,
  resetPasswordUserSchema,
  authUserSchema,
} from "@/schemas/user-schema";
import { z } from "zod";

export type AuthUserType = z.infer<typeof authUserSchema>;
export type AuthForgotPasswordType = z.infer<typeof forgetPasswordUserSchema>;
export type AuthResetPasswordType = z.infer<typeof resetPasswordUserSchema>;
