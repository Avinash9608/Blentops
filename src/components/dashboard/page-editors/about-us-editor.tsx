"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AiSuggestionSheet } from "./ai-suggestion-sheet";

const formSchema = z.object({
  missionStatement: z.string().min(1, "Mission statement is required."),
  teamDescription: z.string(),
  timelineEvents: z.string().describe("JSON array of timeline events"),
});

type FormValues = z.infer<typeof formSchema>;

export function AboutUsEditor() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      missionStatement: "Our mission is to make sustainable choices accessible to everyone, everywhere.",
      teamDescription: "We are a passionate team of innovators, designers, and environmentalists dedicated to making a positive impact.",
      timelineEvents: JSON.stringify([
        { year: "2020", event: "Blentos was founded with a big idea." },
        { year: "2022", event: "Launched our first line of eco-friendly products." },
        { year: "2024", event: "Reached 10,000 happy customers." },
      ], null, 2),
    },
  });

  const { formState, getValues } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "About Us Page Saved",
      description: "Your changes have been successfully saved.",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>About Us Page Content</CardTitle>
              <CardDescription>Manage the content for your company's story.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <AiSuggestionSheet
                pageType="About Us"
                getcontent={() => `Mission: ${getValues("missionStatement")}\nTeam: ${getValues("teamDescription")}`}
              />
              <Button type="submit" disabled={formState.isSubmitting}>
                {formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="missionStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mission Statement</FormLabel>
                  <FormControl><Textarea rows={3} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="teamDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Description</FormLabel>
                  <FormControl><Textarea rows={4} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timelineEvents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Timeline</FormLabel>
                  <FormDescription>Enter timeline events as a JSON array.</FormDescription>
                  <FormControl><Textarea rows={8} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
