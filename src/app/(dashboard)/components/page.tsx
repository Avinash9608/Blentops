"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MOCK_HEADER_LINKS, MOCK_FOOTER_LINKS } from "@/lib/constants";
import type { NavLink } from "@/lib/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";


const formSchema = z.object({
  footerText: z.string(),
  footerContact: z.string(),
});

export default function ComponentsPage() {
  const { toast } = useToast();
  const [headerLinks, setHeaderLinks] = useState<NavLink[]>(MOCK_HEADER_LINKS);
  const [footerLinks, setFooterLinks] = useState<NavLink[]>(MOCK_FOOTER_LINKS);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      footerText: "© 2024 Blentops. All rights reserved. Making the world a greener place, one product at a time.",
      footerContact: "123 Green Way, Eco City, 54321\ncontact@blentops.com",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Components Saved",
      description: "Your changes to the header and footer have been saved.",
    });
  };

  const { formState: { isSubmitting } } = form;

  const NavLinksTable = ({ links, setLinks, title }: { links: NavLink[], setLinks: (links: NavLink[]) => void, title: string }) => (
    <div className="space-y-2">
        <h4 className="font-medium">{title}</h4>
        <div className="rounded-md border">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Label</TableHead>
                    <TableHead>Path</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {links.map((link, index) => (
                    <TableRow key={index}>
                        <TableCell><Input defaultValue={link.label} /></TableCell>
                        <TableCell><Input defaultValue={link.path} /></TableCell>
                        <TableCell>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                <Trash2 className="h-4 w-4"/>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
        <Button variant="outline" size="sm">Add Link</Button>
    </div>
  );


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Header</CardTitle>
              <CardDescription>Manage your website's main navigation and logo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Logo</Label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                  </div>
                  <Button variant="outline">Change Logo</Button>
                </div>
              </div>
              <NavLinksTable links={headerLinks} setLinks={setHeaderLinks} title="Header Navigation Links" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Footer</CardTitle>
              <CardDescription>Update the text and links in your website's footer.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="footerText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Footer Text</FormLabel>
                    <FormControl><Textarea rows={3} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="footerContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Footer Contact Info</FormLabel>
                    <FormControl><Textarea rows={2} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <NavLinksTable links={footerLinks} setLinks={setFooterLinks} title="Footer Quick Links" />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save All Changes
          </Button>
        </div>
      </form>
    </Form>
  );
}
