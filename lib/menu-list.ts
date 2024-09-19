import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Archive
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
      groupLabel: 'Services',
      menus: [
        {
          href: '',
          label: 'Cases',
          active: pathname.includes('new-case'),
          icon: SquarePen,
          submenus: [
            {
              href: '/services/new-case',
              label: 'New Case',
              active: pathname === '/services/cases/new-case'
            },
            {
              href: '/services/upload-documents',
              label: 'Upload Documents',
              active: pathname === '/services/cases/upload-documents'
            },
            {
              href: '/services/edit-case',
              label: 'Edit Case',
              active: pathname === '/services/cases/edit-case'
            }
          ]
        },
        {
          href: '/services/case-archive',
          label: 'Archive',
          active: pathname.includes('/services/case-archive'),
          icon: Archive,
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/dashboard/user',
          label: 'Users',
          active: pathname.includes('/user'),
          icon: Users,
          submenus: []
        },
        {
          href: '/dashboard/profile',
          label: 'Account',
          active: pathname.includes('/profile'),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
