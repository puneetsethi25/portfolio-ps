'use server';

import { suggestSkills, type SuggestSkillsInput } from '@/ai/flows/ai-skill-suggester';
import { z } from 'zod';

const skillSuggesterSchema = z.object({
  projectDescriptions: z.string().min(20, 'Please provide more details about your projects for a better suggestion.'),
});

export async function getSkillSuggestions(prevState: any, formData: FormData) {
  const validatedFields = skillSuggesterSchema.safeParse({
    projectDescriptions: formData.get('projectDescriptions'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.projectDescriptions?.[0] || 'Invalid input.',
      skills: [],
    };
  }

  const descriptionsArray = validatedFields.data.projectDescriptions
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
  
  if (descriptionsArray.length === 0) {
    return { message: 'Please provide at least one project description.', skills: [] };
  }

  const input: SuggestSkillsInput = {
    projectDescriptions: descriptionsArray,
  };

  try {
    const result = await suggestSkills(input);
    if (result.suggestedSkills.length === 0) {
        return { message: 'Could not generate skills based on the description. Try being more specific.', skills: [] };
    }
    return { message: 'Skills suggested successfully!', skills: result.suggestedSkills };
  } catch (error) {
    console.error('AI Skill Suggester Error:', error);
    return { message: 'An unexpected error occurred while suggesting skills. Please try again later.', skills: [] };
  }
}


const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Invalid email address.'),
    message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors in the form.',
            success: false,
        };
    }
    
    // In a real application, you would send an email or save to a database here.
    console.log('New contact message received:', validatedFields.data);

    return {
        message: 'Thank you for your message! I will get back to you soon.',
        success: true,
        errors: null,
    };
}
