import { supabaseBrowserClient } from "@/lib/supabase/browser";

export const signUp = async (
  email: string,
  password: string
): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
};

export const signOut = async (): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.signOut();

  if (error) throw error;
};

export const signIn = async (
  email: string,
  password: string,
  rememberMe: boolean = false
): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
};
