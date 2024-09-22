import Header from '@/components/layout/header';
import CurrentCase from '@/components/layout/current-case';
// import Sidebar from '@/components/layout/sidebar';
import AdminPanelLayout from '@/components/collapsible_sidebar/admin-panel-layout';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TAS - AI-Assisted travel',
  description: 'TAS - AI-Assisted travel'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      <Header />
      <CurrentCase />
      {children}
    </AdminPanelLayout>
  );
}
