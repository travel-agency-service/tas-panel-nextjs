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

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-5">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Case Actions</h2>
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
              <BreadcrumbPage>Actions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-3 gap-4">
          <Card className="w-[270px]">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-center">
                  <h3>Generate Official Letters</h3>
                </div>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://cdn-icons-png.flaticon.com/512/3263/3263116.png"></img>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/services/upload-documents/passport">
                <Button>
                  Start
                  <EnterIcon style={{ marginLeft: 10 }}></EnterIcon>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-[270px]">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-center">
                  <h3>Perform automated signup</h3>
                </div>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://cdn-icons-png.flaticon.com/512/3263/3263116.png"></img>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/services/upload-documents/transcripts">
                <Button>
                  Start
                  <EnterIcon style={{ marginLeft: 10 }}></EnterIcon>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-[270px]">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-center">
                  <h3>Upload Affidavit</h3>
                </div>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://cdn-icons-png.flaticon.com/512/3263/3263116.png"></img>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/services/upload-documents/affidavit">
                <Button>
                  Start
                  <EnterIcon style={{ marginLeft: 10 }}></EnterIcon>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-[270px]">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-center">
                  <h3>Upload ID</h3>
                </div>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://cdn-icons-png.flaticon.com/512/3263/3263116.png"></img>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/services/upload-documents/ID">
                <Button>
                  Start
                  <EnterIcon style={{ marginLeft: 10 }}></EnterIcon>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
