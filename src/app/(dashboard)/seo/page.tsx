"use client";

import { Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SeoPage() {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
            <Globe className="h-6 w-6 text-primary"/>
        </div>
        <CardTitle>SEO Management</CardTitle>
        <CardDescription>This section is under construction. Tools for managing SEO settings, meta tags, and sitemaps will be available here soon.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Check back later for updates!</p>
      </CardContent>
    </Card>
  );
}
