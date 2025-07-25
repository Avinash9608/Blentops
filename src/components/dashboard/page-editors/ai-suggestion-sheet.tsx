"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sparkles, Loader2, Frown } from "lucide-react";
import { analyzePageContent, AnalyzePageContentInput } from "@/ai/flows/analyze-page-content";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface AiSuggestionSheetProps {
  pageType: AnalyzePageContentInput['pageType'];
  getcontent: () => string;
}

export function AiSuggestionSheet({ pageType, getcontent }: AiSuggestionSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const content = getcontent();
      if (!content.trim()) {
        toast({
          variant: "destructive",
          title: "Content is empty",
          description: "Please enter some content before analyzing.",
        });
        return;
      }
      const result = await analyzePageContent({ pageType, content });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error("AI analysis failed:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not get suggestions from AI. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Content Tool
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>AI-Powered Content Suggestions</SheetTitle>
          <SheetDescription>
            Get suggestions to improve your page content for SEO, readability, and quality.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <Button onClick={handleAnalyze} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Page Content"
            )}
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-14rem)]">
          <div className="prose prose-sm dark:prose-invert max-w-none rounded-md border bg-muted/50 p-4">
            {isLoading && (
              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Generating suggestions...</p>
              </div>
            )}
            {!isLoading && !suggestions && (
              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                 <Sparkles className="h-8 w-8" />
                <p>Click "Analyze" to get started.</p>
              </div>
            )}
            {!isLoading && suggestions && (
              <div dangerouslySetInnerHTML={{ __html: suggestions.replace(/\n/g, '<br />') }} />
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
