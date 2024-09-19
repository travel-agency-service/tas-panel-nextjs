'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Case = {
  id: string;
  name: string;
  country: string;
  visa: string;
};

export const columns: ColumnDef<Case>[] = [
  {
    accessorKey: 'id',
    header: 'id'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'country',
    header: 'Country'
  },
  {
    accessorKey: 'visa',
    header: 'Visa Type'
  }
];
