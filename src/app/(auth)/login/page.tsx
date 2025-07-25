"use client";

import { useState, useEffect } from 'react';
import { LoginForm } from "@/components/auth/login-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [hasRegisteredUser, setHasRegisteredUser] = useState(true);

  useEffect(() => {
    // Check if a user has registered.
    const userExists = localStorage.getItem('hasRegisteredUser') === 'true';
    setHasRegisteredUser(userExists);
  }, []);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Blentops Admin Console</CardTitle>
        <CardDescription>
          {hasRegisteredUser 
            ? "Welcome back! Please sign in to continue."
            : "No admin user found. Please register."
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center text-sm">
        {!hasRegisteredUser && (
          <>
            <p className="text-muted-foreground">No account yet?</p>
            <Link href="/register" className={cn(buttonVariants({ variant: "link" }), "p-0 h-auto")}>
                Register the admin account
            </Link>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
