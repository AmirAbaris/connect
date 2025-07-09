import { supabaseBrowserClient } from "@/lib/supabase/browser";
import { Session } from "@supabase/supabase-js";

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
  password: string
): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
};

export const forgotPassword = async (email: string): Promise<void> => {
  const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  const { error } = await supabaseBrowserClient.auth.resetPasswordForEmail(
    email,
    {
      redirectTo: `${defaultUrl}/fa/auth/reset-password`,
    }
  );

  if (error) throw error;
};

export const resetPassword = async (newPassword: string): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.updateUser({
    password: newPassword,
  });

  if (error) throw error;
};

export const getSession = async (): Promise<Session | null> => {
  const { data, error } = await supabaseBrowserClient.auth.getSession();

  if (error) throw error;

  return data.session;
};
