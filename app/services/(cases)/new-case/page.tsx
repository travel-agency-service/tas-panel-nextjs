'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { EnterIcon, SlashIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-5">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">New Case</h2>
        </div>
        <small>{'Proceed by filling the form.'}</small>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink>Cases</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>New Case</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Case no #1" {...field} />
                    </FormControl>
                    <FormDescription>
                      A unique name for the case
                    </FormDescription>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormLabel>Case Type: Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Italy" {...field} />
                    </FormControl>
                    <FormDescription>
                      Choose the destination country.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormLabel>Case Type: Visa</FormLabel>
                    <FormControl>
                      <Input placeholder="Student Visa" {...field} />
                    </FormControl>
                    <FormDescription>Choose the visa type.</FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <Button type="submit">Create Case</Button>
          </form>
        </Form>
      </div>
    </PageContainer>
  );
}
