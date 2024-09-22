'use client';

import { Separator } from '@/components/ui/separator';
import { useState, useEffect } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Label } from '@/components/ui/label';

export default function CurrentCase() {
  const [Case, setCase] = useState(localStorage.getItem('selected_case')!);

  useEffect(() => {
    window.addEventListener('storage', (e) =>
      setCase(localStorage.getItem('selected_case')!)
    );
    return () => {
      window.removeEventListener('storage', (e) =>
        setCase(localStorage.getItem('selected_case')!)
      );
    };
  }, [Case]);

  return (
    <div className="flex-col-3 justify-right flex ">
      {/* <div className="space-y-1 border-4">
        <h4 className="text-sm font-medium leading-none">Current Selected Case</h4>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>{Case}</div>
      </div> */}

      <Card className="right-* h-[100px] w-[300px] ">
        <CardHeader>
          <CardTitle className="text-center">Current Case</CardTitle>
          <Separator />
          <CardDescription className="text-center">{Case}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
