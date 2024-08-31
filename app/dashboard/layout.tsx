import Header from '@/components/layout/header';
// import Sidebar from '@/components/layout/sidebar';
import AdminPanelLayout from '@/components/collapsible_sidebar/admin-panel-layout';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      <Header />

      {children}
    </AdminPanelLayout>
  );
}
