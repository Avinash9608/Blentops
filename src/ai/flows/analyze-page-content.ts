'use server';

/**
 * @fileOverview AI content analysis flow for suggesting improvements to website page copy.
 *
 * - analyzePageContent - Analyzes page content and suggests improvements.
 * - AnalyzePageContentInput - The input type for the analyzePageContent function.
 * - AnalyzePageContentOutput - The return type for the analyzePageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePageContentInputSchema = z.object({
  pageType: z.enum([
    'Home',
    'About Us',
    'Products',
    'Investors & Media',
    'Blog',
    'Collaborate',
    'Contact',
    'Careers',
  ]).describe('The type of page to analyze.'),
  content: z.string().describe('The content of the page to analyze.'),
});
export type AnalyzePageContentInput = z.infer<typeof AnalyzePageContentInputSchema>;

const AnalyzePageContentOutputSchema = z.object({
  suggestions: z.string().describe('AI-powered suggestions for improving the page content.'),
});
export type AnalyzePageContentOutput = z.infer<typeof AnalyzePageContentOutputSchema>;

export async function analyzePageContent(input: AnalyzePageContentInput): Promise<AnalyzePageContentOutput> {
  return analyzePageContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzePageContentPrompt',
  input: {schema: AnalyzePageContentInputSchema},
  output: {schema: AnalyzePageContentOutputSchema},
  prompt: `You are an AI assistant specialized in providing content improvement suggestions for websites.

  Based on the type of page and its current content, suggest specific and actionable improvements to enhance its quality and effectiveness.

  Page Type: {{{pageType}}}
  Content: {{{content}}}

  Provide your suggestions in a clear and concise manner.
  The suggestions should be related to SEO optimization, readability and content quality.
  `, 
});

const analyzePageContentFlow = ai.defineFlow(
  {
    name: 'analyzePageContentFlow',
    inputSchema: AnalyzePageContentInputSchema,
    outputSchema: AnalyzePageContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
