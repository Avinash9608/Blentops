"use client";

import { Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
            <SettingsIcon className="h-6 w-6 text-primary"/>
        </div>
        <CardTitle>Settings</CardTitle>
        <CardDescription>This section is under construction. Global website settings and configurations will be managed from this page.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Check back later for updates!</p>
      </CardContent>
    </Card>
  );
}
