"use client";

import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function UsersPage() {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
            <Users className="h-6 w-6 text-primary"/>
        </div>
        <CardTitle>User Management</CardTitle>
        <CardDescription>This section is under construction. You will be able to manage registered users and their roles here soon.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Check back later for updates!</p>
      </CardContent>
    </Card>
  );
}
