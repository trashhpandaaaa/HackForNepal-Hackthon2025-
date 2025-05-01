
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
import { toast } from "sonner";
import { sendContactFormSubmission } from "@/utils/emailService";
import { Mail, Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, {
    message: "Message is too long (max 1000 characters).",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be handled by a backend API
      const emailResult = await sendContactFormSubmission(
        values.name,
        values.email,
        values.subject,
        values.message
      ).catch(error => {
        console.error("Email sending failed:", error);
        return { success: false };
      });
      
      if (emailResult?.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        form.reset();
        setCharCount(0);
      } else {
        toast.error("There was an issue sending your message. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  return (
    <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-sm border border-border/50">
      <div className="mb-6 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">Get In Touch</h2>
      <p className="text-center text-muted-foreground mb-8">
        Have questions about HackForNepal? We'd love to hear from you!
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Message subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Your message..." 
                    className="min-h-32"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleMessageChange(e);
                    }}
                  />
                </FormControl>
                <div className="flex justify-between items-center mt-1">
                  <FormMessage />
                  <span className={`text-xs ${charCount > 900 ? 'text-amber-500' : 'text-muted-foreground'}`}>
                    {charCount}/1000
                  </span>
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full group" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
