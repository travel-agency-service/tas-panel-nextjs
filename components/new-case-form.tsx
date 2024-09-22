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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  case_name: z.string().min(2, {
    message: 'case_name must be at least 2 characters.'
  }),
  case_country: z.string().min(2, {
    message: 'country must be at least 2 characters.'
  }),
  case_visa_type: z.string().min(2, {
    message: 'visa type must be at least 2 characters.'
  })
});

export default function NewCaseForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      case_name: 'john smith'
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    axios
      .post('https://api.hobs.ai/services/cases/new-case', {
        name: values.case_name,
        country: values.case_country,
        visa_type: values.case_visa_type
      })
      .then(function (response) {
        toast({
          title: 'Successfully create new case.'
        });
        // console.log(response)
      });
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
          name="case_country"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country from the list" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Italy">Italy</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="United States">United States</SelectItem>
                  </SelectContent>
                </Select>
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
          name="case_visa_type"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Visa Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a visa_type from the list" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Tourist">Tourist</SelectItem>
                    <SelectItem value="Work">Work</SelectItem>
                  </SelectContent>
                </Select>
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
