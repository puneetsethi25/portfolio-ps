"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getSkillSuggestions } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Loader2, Sparkles } from "lucide-react";
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  skills: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Suggesting...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Suggest Skills
        </>
      )}
    </Button>
  );
}

const SkillSuggester = () => {
  const [state, formAction] = useFormState(getSkillSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.skills.length === 0) {
      toast({
        variant: "destructive",
        title: "Suggestion Failed",
        description: state.message,
      })
    }
  }, [state, toast]);

  return (
    <section id="ai-suggester" className="py-20 md:py-24">
      <div className="container max-w-3xl mx-auto">
        <Card>
          <form action={formAction}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
                <Lightbulb className="h-8 w-8 text-primary" />
                AI Skill <span className="text-primary">Suggester</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Paste your project descriptions below and let AI suggest relevant skills to highlight on your profile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                name="projectDescriptions"
                placeholder="e.g., 'Built a full-stack e-commerce platform using Next.js and integrated Stripe for payments...' (add multiple projects separated by new lines)"
                rows={8}
                required
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <SubmitButton />
              {state?.skills && state.skills.length > 0 && (
                <div className="mt-8 w-full text-center">
                  <h3 className="font-bold text-lg mb-4">Suggested Skills:</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {state.skills.map((skill: string) => (
                      <Badge key={skill} variant="default" className="text-md py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default SkillSuggester;
