import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';

import { createClient } from '@/utils/supabase/server';

export default async function Header() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className="flex items-center gap-2">
          <UserNav user={user} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
