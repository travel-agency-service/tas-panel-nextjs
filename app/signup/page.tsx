import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthFormSignUp from '@/components/forms/user-auth-form-signup';
import { PlaneTakeoff } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPageSignUp({
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
          <div className="flex flex-col space-y-2">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              {' '}
              Create an account{' '}
            </h1>
            <p className="text-center text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthFormSignUp />

          {!searchParams?.code || searchParams.code == '1' ? (
            ''
          ) : (
            <>
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Sign Up was Unsuccessful !</AlertDescription>
              </Alert>
            </>
          )}

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
