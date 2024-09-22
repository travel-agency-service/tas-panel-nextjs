//@ts-nocheck
'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import NewCaseForm from '@/components/new-case-form';
import axios from 'axios';

export default function NewCaseModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create New Case</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New case</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NewCaseForm />
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
