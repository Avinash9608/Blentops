"use client";

import { useState, useEffect } from 'react';
import { RegisterForm } from "@/components/auth/register-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AlertTriangle } from 'lucide-react';

export default function RegisterPage() {
  const [hasRegisteredUser, setHasRegisteredUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userExists = localStorage.getItem('hasRegisteredUser') === 'true';
    setHasRegisteredUser(userExists);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          {hasRegisteredUser ? "Registration Closed" : "Create Admin Account"}
        </CardTitle>
        <CardDescription>
          {hasRegisteredUser 
            ? "An admin account has already been registered."
            : "Enter your details below to create the single admin account."
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        {hasRegisteredUser ? (
          <div className="flex flex-col items-center justify-center text-center p-4 bg-muted/50 rounded-lg">
            <AlertTriangle className="h-8 w-8 text-amber-500 mb-2" />
            <p className="text-sm text-muted-foreground">
              To protect the system, only one admin account is allowed.
            </p>
          </div>
        ) : (
          <RegisterForm />
        )}
      </CardContent>
       <CardFooter className="flex flex-col items-center justify-center text-sm">
        <p className="text-muted-foreground">Already have an account?</p>
        <Link href="/login" className={cn(buttonVariants({ variant: "link" }), "p-0 h-auto")}>
            Sign in
        </Link>
      </CardFooter>
    </Card>
  );
}
