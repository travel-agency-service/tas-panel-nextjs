'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signup } from '@/app/actions';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import PasswordStrengthBar from 'react-password-strength-bar';

export default function UserAuthFormSignUp() {
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const formSchema = z
    .object({
      email: z.string().email({ message: 'Enter a valid email address' }),
      password: z.string(),
      repassword: z.string(),
      passwordStrength: z.number()
    })
    .refine(() => passwordStrength >= 2, {
      message: 'Use Stronger Password',
      path: ['password']
    })

    .refine((data) => data.password === data.repassword, {
      message: 'Passwords do not match',
      path: ['repassword']
    });

  type UserFormValue = z.infer<typeof formSchema>;

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passwordStrength: passwordStrength
    }
  });

  const onSubmit = async (data: UserFormValue) => {
    signup({
      email: data.email,
      password: data.password,
      repassword: data.repassword
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <PasswordStrengthBar
                  onChangeScore={(score) => setPasswordStrength(score)}
                  password={form.control._formValues['password']}
                  minLength={8}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passowrd Confirmation</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Type your password here again ..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="ml-auto w-full" type="submit">
            Sign Up
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        {/* <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div> */}
      </div>
      {/* <GithubSignInButton /> */}
    </>
  );
}
