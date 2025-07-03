import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("ایمیل نامعتبر است"),
  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});

export const forgetPasswordUserSchema = z.object({
  email: z.string().email("ایمیل نامعتبر است"),
});

export const resetPasswordUserSchema = z.object({
  newPassword: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});
