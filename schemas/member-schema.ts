import { z } from "zod";

export const memberSchema = z.object({
  id: z.string(),
  uid: z.string(),
  name: z.string().min(1, "نام الزامی است"),
  age: z.number().min(1, "سن الزامی است"),
  bio: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
  interests: z.array(z.string()).optional(),
  location: z.string().nullable().optional(),
});

export const firstFormPageSchema = memberSchema.pick({
  name: true,
  age: true,
});

export const secondFormPageSchema = memberSchema.pick({
  bio: true,
  interests: true,
  location: true,
});
