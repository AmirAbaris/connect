import { Member } from "@/types/member";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function offsetMembers(members: Member[], offset = 0.0001) {
  // Group by lat/lng
  const grouped: Record<string, Member[]> = {};
  members.forEach((m) => {
    const key = `${m.lat || 0},${m.lng || 0}`;
    grouped[key] = grouped[key] || [];
    grouped[key].push(m);
  });
  // Fan out each group
  const result: (Member & { lat: number; lng: number })[] = [];
  Object.values(grouped).forEach((group) => {
    if (group.length === 1) {
      result.push({
        ...group[0],
        lat: group[0].lat || 0,
        lng: group[0].lng || 0,
      });
    } else {
      group.forEach((m, i) => {
        const angle = (2 * Math.PI * i) / group.length;
        result.push({
          ...m,
          lat: (m.lat || 0) + Math.cos(angle) * offset,
          lng: (m.lng || 0) + Math.sin(angle) * offset,
        });
      });
    }
  });
  return result;
}
