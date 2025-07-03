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
  password: string
): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
};

// TODO: make url in env and use it here
export const forgotPassword = async (email: string): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.resetPasswordForEmail(
    email,
    {
      redirectTo: "http://localhost:3000/fa/auth/reset-password",
    }
  );

  if (error) throw error;
};

export const resetPassword = async (
  newPassword: string,
  token: string | undefined
): Promise<void> => {
  if (!token) throw new Error("No token provided");

  const { error: sessionError } = await supabaseBrowserClient.auth.setSession({
    access_token: token,
    refresh_token: "",
  });
  if (sessionError) throw sessionError;

  const { error: updateUserError } =
    await supabaseBrowserClient.auth.updateUser({
      password: newPassword,
    });

  if (updateUserError) throw updateUserError;
};
