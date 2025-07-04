import {
  firstFormPageSchema,
  secondFormPageSchema,
} from "@/schemas/member-schema";
import z from "zod";

export type Member = {
  id: string;
  uid: string;
  name: string;
  age: number;
  bio: string | null;
  image: string | null;
  interests: string[];
  location: string | null;
};

export type FirstStepData = z.infer<typeof firstFormPageSchema>;
export type SecondStepData = z.infer<typeof secondFormPageSchema>;
