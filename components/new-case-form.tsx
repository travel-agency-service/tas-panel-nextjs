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

const formSchema = z.object({
  case_name: z.string().min(2, {
    message: 'case_name must be at least 2 characters.'
  }),
  country: z.string().min(2, {
    message: 'country must be at least 2 characters.'
  }),
  visa: z.string().min(2, {
    message: 'visa must be at least 2 characters.'
  })
});

export default function NewCaseForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      case_name: 'john smith',
      country: 'italy',
      visa: 'student'
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="case_name"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Case no #1" {...field} />
                </FormControl>
                <FormDescription>A unique name for the case</FormDescription>
                <FormMessage />
              </FormItem>
            </>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <>
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
            </>
          )}
        />

        <FormField
          control={form.control}
          name="visa"
          render={({ field }) => (
            <>
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
  );
}
