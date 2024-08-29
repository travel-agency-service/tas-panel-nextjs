'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

type LoginSignUpData = {
  email: string;
  password: string;
  repassword: string;
};

export type SignUpErrorsType = 'UNUSABLE_EMAIL' | 'UNKNOWN';

const validateSignUpCode = (code: string | undefined): SignUpErrorsType => {
  if (code && code === 'user_already_exists') return 'UNUSABLE_EMAIL';

  return 'UNKNOWN';
};

export async function login(formData: LoginSignUpData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  //   const data = {
  //     email: formData.email,
  //     password: formData.password
  //   }

  const { data, error } = await supabase.auth.signInWithPassword(formData);

  if (error) {
    redirect('/');
  }

  revalidatePath('/dashboard', 'layout');
  redirect('/dashboard');
}

export async function signup(formData: LoginSignUpData): Promise<any> {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.email,
  //   password: formData.password
  // };

  const { error } = await supabase.auth.signUp(formData);

  if (error) {
    const signUpCode = validateSignUpCode(error.code);
    return redirect(`/signup?signup=0&code=${signUpCode}`);
  }

  revalidatePath('/signin?signup=1', 'layout');
  redirect('/signin?signup=1');
}
