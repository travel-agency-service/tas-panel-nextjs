'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { Session, UserResponse } from '@supabase/supabase-js';

// import { signOut, useSession } from 'next-auth/react';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

interface usertype {
  user: UserResponse;
}

export function UserNav(userdata: usertype) {
  const [user_session, setUserSession] = useState<UserResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userdata.user) {
        setUserSession(userdata.user);
      }
    };

    fetchUser();
  });

  const signOut = () => {
    const supabase = createClient();
    supabase.auth.signOut().then(() => {
      window.location.reload();
    });
  };

  if (user_session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user_session.data?.user?.email ?? ''} />
              <AvatarFallback>
                {user_session.data?.user?.email?.[0]}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user_session.data?.user?.email}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user_session.data?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/dashboard/profile">
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
