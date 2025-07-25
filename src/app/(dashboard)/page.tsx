import { redirect } from 'next/navigation';

export default function DashboardRedirectPage() {
  // Redirect to the main dashboard view.
  // This helps keep the root dashboard URL clean.
  redirect('/dashboard/overview');
}
