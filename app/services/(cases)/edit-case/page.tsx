import { CalendarDateRangePicker } from '@/components/date-range-picker';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
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

export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-5">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">New Case</h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
          </div>
        </div>
        <small>{'Proceed by following the workflow.'}</small>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Italy</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Document Translation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="w-[270px]">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <h3>Upload your passport scans</h3>
              </div>
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <img src="https://cdn-icons-png.flaticon.com/512/3263/3263116.png"></img>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="students/translate">
              <Button>
                Start
                <EnterIcon style={{ marginLeft: 10 }}></EnterIcon>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </PageContainer>
  );
}
