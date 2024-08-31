import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
} from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname === '/dashboard',
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Workflows',
      menus: [
        {
          href: '',
          label: 'Italy',
          active: pathname.includes('/posts'),
          icon: SquarePen,
          submenus: [
            {
              href: '/dashboard/students',
              label: 'Document Translation',
              active: pathname === '/dashboard/students'
            }
          ]
        }
      ]
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/users',
          label: 'Users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: []
        },
        {
          href: '/account',
          label: 'Account',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
