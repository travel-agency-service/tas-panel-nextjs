'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

type LoginSignUpData = {
  email: string;
  password: string;
  repassword: string;
};

type LoginSigninData = {
  email: string;
  password: string;
};

export async function login(formData: LoginSigninData) {
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

export async function signup(formData: LoginSignUpData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.email,
  //   password: formData.password
  // };

  const { error } = await supabase.auth.signUp(formData);

  if (error) {
    redirect('/signup?signup=0');
  }

  revalidatePath('/signin?signup=1', 'layout');
  redirect('/signin?signup=1');
}
