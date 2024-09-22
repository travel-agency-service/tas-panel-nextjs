'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { UUIDToLocalStorage } from './data-table';
import { MousePointerClick } from 'lucide-react';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Case = {
  id: string;
  uuid: string;
  name: string;
  country: string;
  visa_type: string;
  datetime_added: string;
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
    accessorKey: 'visa_type',
    header: 'Visa Type'
  },
  {
    accessorKey: 'datetime_added',
    header: 'Datetime Added'
  },
  {
    accessorKey: 'uuid',
    header: 'Select Case',
    cell: ({ row }) => {
      return (
        <>
          <div>
            <Button
              value={
                row.original.id +
                ' - ' +
                row.original.name +
                ' - ' +
                row.original.country +
                ' - ' +
                row.original.visa_type +
                '|' +
                row.original.uuid
              }
              className="bg-inherit hover:bg-zinc-200"
              onClick={UUIDToLocalStorage}
            >
              <MousePointerClick />
            </Button>
          </div>
        </>
      );
    }
  }
];
