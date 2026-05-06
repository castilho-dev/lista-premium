import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import AppLayout from '../components/member/AppLayout';

export default function MemberAreaLayout() {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
