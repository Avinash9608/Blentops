
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, Link, Share2, Linkedin, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialSchema = z.object({
  linkedin: z.string().url("Must be a valid URL.").or(z.literal('')),
  twitter: z.string().url("Must be a valid URL.").or(z.literal('')),
  instagram: z.string().url("Must be a valid URL.").or(z.literal('')),
});


export default function SocialPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof socialSchema>>({
    resolver: zodResolver(socialSchema),
    defaultValues: {
      linkedin: "https://www.linkedin.com/company/blentops",
      twitter: "https://twitter.com/blentops",
      instagram: "https://instagram.com/blentops",
    },
  });

  const { formState } = form;

  const onSubmit = (data: z.infer<typeof socialSchema>) => {
    console.log(data);
    toast({
      title: "Social Links Saved",
      description: "Your changes have been successfully saved.",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card className="h-full bg-midnight-bloom text-white overflow-hidden">
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <Share2 className="h-6 w-6 text-white"/>
              </div>
              <h2 className="text-3xl font-headline">Connect Your Profiles</h2>
              <p className="mt-2 text-white/80">
                Link your social media accounts to keep your audience engaged and up-to-date across all platforms.
              </p>
            </div>
             <div className="mt-8 flex items-center gap-4">
                <Link className="h-5 w-5 text-white/50" />
                <span className="text-sm text-white/50">Update your public URLs</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card>
            <CardHeader>
                <CardTitle>Manage Social Media Links</CardTitle>
                <CardDescription>Update the social media URLs displayed on your website.</CardDescription>
            </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="linkedin" render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Linkedin className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input {...field} className="pl-10" placeholder="https://linkedin.com/company/your-company" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <FormField control={form.control} name="twitter" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter / X</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                         <Twitter className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input {...field} className="pl-10" placeholder="https://twitter.com/your-handle" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <FormField control={form.control} name="instagram" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Instagram className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input {...field} className="pl-10" placeholder="https://instagram.com/your-username"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <div className="flex justify-end">
                  <Button type="submit" disabled={formState.isSubmitting}>
                    {formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

