import z from "zod";

export const profileSchema = z.object({
    name: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
    age: z.number().min(18, "سن باید حداقل ۱۸ باشد").max(99, "سن معتبر نیست"),
    bio: z.string().max(200, "بیو نباید بیشتر از ۲۰۰ کاراکتر باشد").optional(),
    interests: z.array(z.string()).optional(),
    image: z.string().url().nullable().optional(),
  });