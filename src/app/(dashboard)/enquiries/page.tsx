
"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MOCK_ENQUIRIES } from "@/lib/constants";
import type { Enquiry } from "@/lib/types";
import { Mail, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const replySchema = z.object({
  replyMessage: z.string().min(10, "Reply must be at least 10 characters long."),
});

type ReplyFormValues = z.infer<typeof replySchema>;

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(MOCK_ENQUIRIES);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReplyFormValues>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      replyMessage: "",
    },
  });

  const { formState, handleSubmit, reset } = form;

  const handleReplyClick = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsDialogOpen(true);
    reset();
  };

  const onSubmit = (data: ReplyFormValues) => {
    console.log("Replying to:", selectedEnquiry?.email);
    console.log("Message:", data.replyMessage);

    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            if (selectedEnquiry) {
                setEnquiries(
                  enquiries.map((e) =>
                    e.id === selectedEnquiry.id ? { ...e, status: "Replied" } : e
                  )
                );
                toast({
                    title: "Reply Sent",
                    description: `Your message has been sent to ${selectedEnquiry.email}.`,
                });
                setIsDialogOpen(false);
                resolve(null);
            }
        }, 1000)
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-arielle-smile text-white overflow-hidden">
        <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <Mail className="h-6 w-6 text-white"/>
              </div>
              <h2 className="text-3xl font-headline">Manage Enquiries</h2>
              <p className="mt-2 text-white/80 max-w-2xl">
                View and respond to messages from your website visitors.
              </p>
            </div>
        </div>
      </Card>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead className="hidden md:table-cell">Message</TableHead>
                <TableHead className="hidden sm:table-cell">Received</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enquiries.map((enquiry) => (
                <TableRow key={enquiry.id}>
                  <TableCell>
                    <div className="font-medium">{enquiry.name}</div>
                    <div className="text-sm text-muted-foreground">{enquiry.email}</div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-sm">
                    <p className="truncate">{enquiry.message}</p>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {formatDistanceToNow(new Date(enquiry.receivedAt), { addSuffix: true })}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant={enquiry.status === "New" ? "destructive" : "secondary"}>
                      {enquiry.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => handleReplyClick(enquiry)}>
                      Reply
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Reply to {selectedEnquiry?.name}</DialogTitle>
                <DialogDescription>
                  Your response will be sent to {selectedEnquiry?.email}.
                </DialogDescription>
              </DialogHeader>
              <div className="py-6 space-y-4">
                <div className="space-y-2">
                    <h4 className="font-medium">Original Message:</h4>
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                        {selectedEnquiry?.message}
                    </p>
                </div>
                <FormField
                  control={form.control}
                  name="replyMessage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Reply</FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder="Compose your response..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit" disabled={formState.isSubmitting}>
                  {formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  <Send className="mr-2 h-4 w-4" />
                  Send Reply
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
