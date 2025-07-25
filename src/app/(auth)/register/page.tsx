import { RegisterForm } from "@/components/auth/register-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
        <CardDescription>Enter your details below to register.</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
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
