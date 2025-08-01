import {
  firstFormPageSchema,
  secondFormPageSchema,
} from "@/schemas/member-schema";
import z from "zod";

export type Member = {
  id: string;
  uid: string | undefined;
  name: string;
  age: number;
  bio: string | null;
  interests: string[];
  location: string | null;
  lat?: number | null;
  lng?: number | null;
  status: Status | null;
  image?: string | null;
  status_updated_at?: string | null;
};

export type FirstStepData = z.infer<typeof firstFormPageSchema>;
export type SecondStepData = z.infer<typeof secondFormPageSchema>;

export type Status = "open" | "neutral" | "close";
