import { userSchema } from "@/schemas/user-schema";
import { z } from "zod";

export type AuthUserType = z.infer<typeof userSchema>;
