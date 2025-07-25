"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AiSuggestionSheet } from "./ai-suggestion-sheet";

const formSchema = z.object({
  heroTitle: z.string().min(1, "Title is required."),
  heroSubtitle: z.string(),
  heroCta: z.string(),
  feature1Title: z.string(),
  feature1Desc: z.string(),
  feature2Title: z.string(),
  feature2Desc: z.string(),
  testimonial1Text: z.string(),
  testimonial1Author: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function HomeEditor() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      heroTitle: "Sustainable Living, Simplified.",
      heroSubtitle: "Discover eco-friendly products that are good for you and the planet.",
      heroCta: "Shop Now",
      feature1Title: "Eco-Conscious Materials",
      feature1Desc: "All our products are made from recycled or sustainable materials.",
      feature2Title: "Carbon Neutral Shipping",
      feature2Desc: "We offset all carbon emissions from our shipping process.",
      testimonial1Text: "Blentops has changed the way I think about consumption. Amazing products and mission!",
      testimonial1Author: "Alex Johnson",
    },
  });

  const { formState, getValues } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Home Page Saved",
      description: "Your changes have been successfully saved.",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="hero" className="w-full">
          <div className="flex items-center justify-between gap-4">
            <TabsList>
              <TabsTrigger value="hero">Hero Section</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <AiSuggestionSheet
                pageType="Home"
                getcontent={() => 
                  `Title: ${getValues("heroTitle")}\nSubtitle: ${getValues("heroSubtitle")}\nFeatures: ${getValues("feature1Title")} - ${getValues("feature1Desc")}`
                }
              />
              <Button type="submit" disabled={formState.isSubmitting}>
                {formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
            </div>
          </div>
          
          <TabsContent value="hero" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Manage the main content at the top of your home page.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="heroTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="heroSubtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl><Textarea {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="heroCta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Call to Action Button Text</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
             <Card>
              <CardHeader>
                <CardTitle>Features Section</CardTitle>
                <CardDescription>Highlight key features of your brand or products.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 rounded-lg border p-4">
                    <h3 className="font-medium">Feature 1</h3>
                    <FormField control={form.control} name="feature1Title" render={({ field }) => (
                      <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                    <FormField control={form.control} name="feature1Desc" render={({ field }) => (
                      <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                  </div>
                   <div className="space-y-4 rounded-lg border p-4">
                    <h3 className="font-medium">Feature 2</h3>
                    <FormField control={form.control} name="feature2Title" render={({ field }) => (
                      <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                    <FormField control={form.control} name="feature2Desc" render={({ field }) => (
                      <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials" className="mt-6">
             <Card>
              <CardHeader>
                <CardTitle>Testimonials</CardTitle>
                <CardDescription>Showcase what your customers are saying.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <FormField
                  control={form.control}
                  name="testimonial1Text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Testimonial Text</FormLabel>
                      <FormControl><Textarea {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="testimonial1Author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
}
