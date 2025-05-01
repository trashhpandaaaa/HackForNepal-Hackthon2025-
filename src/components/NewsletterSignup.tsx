
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { sendNewsletterWelcome } from '@/utils/emailService';
import { Mail, ArrowRight, CheckCheck } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be handled by a backend API
      const emailResult = await sendNewsletterWelcome(values.email)
        .catch(error => {
          console.error('Newsletter signup failed:', error);
          return { success: false };
        });
      
      if (emailResult?.success) {
        toast.success('Thanks for subscribing to our newsletter!');
        form.reset();
        setIsSuccess(true);
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error('There was an issue subscribing you. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-gradient-to-br from-nepal-blue/10 to-nepal-red/10 p-8 rounded-lg border border-primary/10">
      <div className="flex justify-center mb-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">Stay Updated</h3>
      <p className="text-center text-muted-foreground mb-6">
        Subscribe to our newsletter for the latest updates on HackForNepal.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Enter your email address" 
                      type="email"
                      className="pr-12"
                      {...field}
                    />
                    <Button 
                      type="submit" 
                      size="sm" 
                      className="absolute right-1 top-1 bottom-1"
                      disabled={isSubmitting || isSuccess}
                    >
                      {isSubmitting ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      ) : isSuccess ? (
                        <CheckCheck className="h-4 w-4" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        We respect your privacy and will never share your information.
      </p>
    </div>
  );
}
