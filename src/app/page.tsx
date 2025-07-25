import { redirect } from 'next/navigation';

export default function RootPage() {
  // The root page should redirect to the dashboard, which will handle auth.
  redirect('/overview');
}
