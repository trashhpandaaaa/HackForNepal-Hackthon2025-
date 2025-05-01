<<<<<<< HEAD

=======
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
<<<<<<< HEAD
=======
import { sendRegistrationConfirmation } from "@/utils/emailService";
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  institution: z.string().min(2, {
    message: "Institution name must be at least 2 characters.",
  }),
  skillLevel: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Please select your skill level.",
  }),
  experience: z.string().min(10, {
    message: "Please share a bit about your experience.",
  }).max(500, {
    message: "Your response is too long (max 500 characters).",
  }),
  teamStatus: z.enum(["individual", "team"], {
    required_error: "Please select if you're registering as an individual or with a team.",
  }),
});

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      skillLevel: "intermediate",
      experience: "",
      teamStatus: "individual",
    },
  });

<<<<<<< HEAD
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success("Registration successful! Check your email for confirmation.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
=======
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      console.log(values);
      
      // Attempt to send a confirmation email
      // Note: This won't work in the browser directly due to CORS and security
      // In production, you would call a backend API that sends the email
      const emailResult = await sendRegistrationConfirmation(
        values.email,
        values.fullName
      ).catch(error => {
        console.error("Email sending failed:", error);
        return { success: false };
      });
      
      if (emailResult?.success) {
        toast.success("Registration successful! Check your email for confirmation.");
      } else {
        // Still show success even if email fails, but log the error
        toast.success("Registration successful! However, there was an issue sending the confirmation email.");
      }
      
      form.reset();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("There was an error processing your registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
  }

  return (
    <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institution / Organization</FormLabel>
                <FormControl>
                  <Input placeholder="Your school, university, or workplace" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="skillLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technical Skill Level</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-6"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="beginner" />
                      </FormControl>
                      <FormLabel className="font-normal">Beginner</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="intermediate" />
                      </FormControl>
                      <FormLabel className="font-normal">Intermediate</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="advanced" />
                      </FormControl>
                      <FormLabel className="font-normal">Advanced</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="teamStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you registering as an individual or with a team?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-6"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="individual" />
                      </FormControl>
                      <FormLabel className="font-normal">Individual</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="team" />
                      </FormControl>
                      <FormLabel className="font-normal">With a team</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about your experience and interests</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Share your technical skills, interests, and what you hope to learn from this hackathon..." 
                    className="min-h-32"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register for HackForNepal"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
