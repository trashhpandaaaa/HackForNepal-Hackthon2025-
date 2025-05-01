<<<<<<< HEAD

=======
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
<<<<<<< HEAD
=======
import { motion } from "@/components/ui/motion";
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)

export default function FAQSection() {
  const faqItems = [
    {
      question: "Who can participate in HackForNepal?",
      answer: "HackForNepal welcomes developers, designers, entrepreneurs, and innovators of all skill levels. Whether you're a seasoned developer or just starting your tech journey, there's a place for you in our community."
    },
    {
      question: "Do I need to have a team?",
      answer: "You can register as an individual or with a team of up to 4 members. If you register individually, we'll have team formation activities at the beginning of the event to help you find teammates with complementary skills."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "You should bring your laptop, charger, any specific hardware you plan to use, and your enthusiasm! We'll provide meals, snacks, working spaces, Wi-Fi, and plenty of caffeine to keep you going."
    },
    {
      question: "Are there any costs to participate?",
      answer: "No, participation in HackForNepal is completely free thanks to our generous sponsors. We provide all the resources you need during the event, including meals, beverages, workspace, and swag."
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! We have exciting prizes for the winning teams, including cash awards, mentorship opportunities, and the chance to further develop your solution with support from our partner organizations."
    },
    {
      question: "What kind of projects can we build?",
      answer: "You can build solutions within our challenge tracks: education, healthcare, sustainability, disaster resilience, and cultural preservation. Alternatively, you can create your own impact project that addresses a specific challenge in Nepal."
    },
    {
      question: "Will there be mentors at the event?",
      answer: "Absolutely! We'll have industry experts and technical mentors available throughout the event to provide guidance, feedback, and support for your projects."
    }
  ];

  return (
    <div className="py-24 bg-muted">
      <div className="container px-4 mx-auto">
<<<<<<< HEAD
        <div className="max-w-3xl mx-auto text-center mb-16">
=======
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions about HackForNepal? We've got answers. 
            If you don't find what you're looking for, feel free to contact us.
          </p>
<<<<<<< HEAD
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
=======
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
      </div>
    </div>
  );
}
