import { supabaseBrowserClient } from "@/lib/supabase/browser";
import { Session } from "@supabase/supabase-js";
import { useLocale } from "next-intl";

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

// export const forgotPassword = async (email: string): Promise<void> => {
//   const locale = useLocale();
//   // TODO: fix later
//   const defaultUrl = "https://connect-black.vercel.app";
//   const { error } = await supabaseBrowserClient.auth.resetPasswordForEmail(
//     email,
//     {
//       redirectTo: `${defaultUrl}/${locale}/auth/reset-password`,
//     }
//   );

//   if (error) throw error;
// };

// export const resetPassword = async (newPassword: string): Promise<void> => {
//   const { error } = await supabaseBrowserClient.auth.updateUser({
//     password: newPassword,
//   });

//   if (error) throw error;
// };

export const getSession = async (): Promise<Session | null> => {
  const { data, error } = await supabaseBrowserClient.auth.getSession();

  if (error) throw error;

  return data.session;
};

export const deleteUser = async (uid: string): Promise<void> => {
  const { error } = await supabaseBrowserClient.auth.admin.deleteUser(uid);

  if (error) throw error;
};
