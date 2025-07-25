"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialSchema = z.object({
  linkedin: z.string().url("Must be a valid URL.").or(z.literal('')),
  twitter: z.string().url("Must be a valid URL.").or(z.literal('')),
  instagram: z.string().url("Must be a valid URL.").or(z.literal('')),
});

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.8.1-3.3-1c-1.6 1.2-3.3 1.2-3.3 1.2s-.7-1.2-1.7-2.6c-1.3-1.8-3.3-3.2-3.3-3.2s-2.1-.1-2.1 2.1c0 3.3 3.3 6.7 3.3 6.7s-3.3.1-4.9-1.7c-1.6-1.8-3.3-5-3.3-5s1.2.1 2.5 1c.5-2.5-2.1-4.2-2.1-4.2s3.3 1.2 5.8 4.2c.5-1.2 2.1-2.1 2.1-2.1s1.2 0 1.2 1.2z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);


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
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Social Media Links</CardTitle>
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
                      <LinkedInIcon />
                    </div>
                    <Input {...field} className="pl-10" />
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
                      <TwitterIcon />
                    </div>
                    <Input {...field} className="pl-10" />
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
                      <InstagramIcon />
                    </div>
                    <Input {...field} className="pl-10" />
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
  );
}
