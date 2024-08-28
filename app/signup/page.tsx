import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthFormSignUp from '@/components/forms/user-auth-form-signup';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ChevronsDown,
  Github,
  Menu,
  PlaneTakeoff,
  Tally1,
  LogIn
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPageSignUp({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <PlaneTakeoff className="mr-2 h-9 w-9 rounded-lg border-secondary from-primary via-primary/70 to-primary" />
          TAS
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Revolutionizing Visa Applications Through TAS AI.
            </p>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {searchParams.signup
                ? 'Sign Up unsuccessful.'
                : 'Create an account'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {searchParams.signup
                ? 'Please Try again'
                : 'Enter your email below to create your account'}
            </p>
          </div>
          <UserAuthFormSignUp />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Have an account?{' '}
            <Link
              href="/signin"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign In Now
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
