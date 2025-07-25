
"use client";

import { useRouter } from 'next/navigation';
import { LoginForm } from "@/components/auth/login-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Blentops Admin Console</CardTitle>
        <CardDescription>
          Welcome! Please sign in or register to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center text-sm">
        <p className="text-muted-foreground">Don't have an account?</p>
        <Link href="/register" className={cn(buttonVariants({ variant: "link" }), "p-0 h-auto")}>
            Register here
        </Link>
      </CardFooter>
    </Card>
  );
}
