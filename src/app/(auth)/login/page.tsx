
"use client";

import { LoginForm } from "@/components/auth/login-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="group perspective-[1000px]">
      <Card 
        className="w-full max-w-sm transition-transform duration-500 ease-in-out group-hover:rotate-y-3 group-hover:shadow-2xl bg-cover bg-center border-white/20"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674902194256-95a8aa131a21?w=600&auto=format&fit=crop')" }}
      >
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 border border-primary/20">
                <svg
                  className="h-8 w-8 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <CardHeader className="text-center p-0 text-white">
                <CardTitle className="text-2xl font-bold">Blentops Admin</CardTitle>
                <CardDescription className="text-white/80">
                  Welcome back! Please sign in to continue.
                </CardDescription>
              </CardHeader>
            </div>
            <CardContent className="pt-6 pb-0 px-0">
              <LoginForm />
            </CardContent>
        </div>
      </Card>
    </div>
  );
}
