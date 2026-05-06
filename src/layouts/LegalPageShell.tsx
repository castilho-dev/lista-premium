import { ReactNode } from 'react';
import AppLayout from '../components/member/AppLayout';
import { isAuthenticated } from '../auth';

export default function LegalPageShell({ children }: { children: ReactNode }) {
  if (isAuthenticated()) {
    return <AppLayout>{children}</AppLayout>;
  }
  return (
    <div className="min-h-screen bg-[#FAF7F2] px-5 md:px-8 py-10 md:py-12">
      {children}
    </div>
  );
}
