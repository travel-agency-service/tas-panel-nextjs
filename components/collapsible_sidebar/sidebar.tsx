import Link from 'next/link';
import { PlaneTakeoff } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Button } from '@/components/ui/button';
import { Menu } from '@/components/collapsible_sidebar/menu';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '@/components/collapsible_sidebar/sidebar-toggle';

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0',
        sidebar?.isOpen === false ? 'w-[90px]' : 'w-72'
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative flex h-full flex-col overflow-y-auto px-3 py-4  ">
        <Button
          className={cn(
            'mb-1 transition-transform duration-300 ease-in-out',
            sidebar?.isOpen === false ? 'translate-x-1' : 'translate-x-0'
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <PlaneTakeoff className="mr-2 h-9 w-9 rounded-lg border-secondary from-primary via-primary/70 to-primary text-black" />
            <h1
              className={cn(
                'whitespace-nowrap text-lg font-bold text-black transition-[transform,opacity,display] duration-300 ease-in-out',
                sidebar?.isOpen === false
                  ? 'hidden -translate-x-96 opacity-0'
                  : 'translate-x-0 opacity-100'
              )}
            >
              TAS
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
