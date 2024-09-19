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
import NewCaseForm from '@/components/new-case-form';
import NewCaseModal from '@/components/new-case-modal';
import { DataTable } from './data-table';
import { Case, columns } from './columns';

async function getData(): Promise<Case[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      name: 'case#1',
      country: 'italy',
      visa: 'student'
    }
    // ...
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-5">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Select/Create Case
          </h2>
        </div>
        <small>
          {'Select an existing case from the table below or create a new one.'}
        </small>

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

        <NewCaseModal />
        <DataTable columns={columns} data={data} />
      </div>
    </PageContainer>
  );
}
