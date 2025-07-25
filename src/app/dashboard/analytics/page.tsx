"use client";

import { BarChart2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
            <BarChart2 className="h-6 w-6 text-primary"/>
        </div>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>This section is under construction. Detailed analytics and reporting will be available here soon.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Check back later for updates!</p>
      </CardContent>
    </Card>
  );
}
