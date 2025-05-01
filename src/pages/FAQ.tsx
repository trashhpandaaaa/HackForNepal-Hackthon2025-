import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "@/components/ui/motion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Information",
      items: [
        {
          question: "What is HackForNepal?",
          answer: "HackForNepal is Nepal's premier hackathon event that brings together developers, designers, and innovators to create technology solutions addressing real-world challenges in Nepal. It's a 48-hour event where participants work in teams to build functional prototypes that have the potential for real-world impact."
        },
        {
          question: "When and where will HackForNepal take place?",
          answer: "HackForNepal 2025 will take place on June 1-2, 2025 at the Nepal Innovation Hub in Kathmandu. The event runs for a full 48 hours, though participants are welcome to take breaks as needed."
        },
        {
          question: "Who can participate in HackForNepal?",
          answer: "HackForNepal welcomes developers, designers, entrepreneurs, and innovators of all skill levels. Whether you're a seasoned developer or just starting your tech journey, there's a place for you in our community."
        },
        {
          question: "How much does it cost to participate?",
          answer: "Thanks to our generous sponsors, participation in HackForNepal is completely free. We provide all the resources you need during the event, including meals, beverages, workspace, and swag."
        }
      ]
    },
    {
      title: "Registration & Teams",
      items: [
        {
          question: "How do I register for the hackathon?",
          answer: "Registration is open through our website. Click on the 'Register' button in the navigation menu and complete the registration form. You can register as an individual or as a team."
        },
        {
          question: "Do I need to have a team?",
          answer: "You can register as an individual or with a team of up to 4 members. If you register individually, we'll have team formation activities at the beginning of the event to help you find teammates with complementary skills."
        },
        {
          question: "What's the maximum team size?",
          answer: "Teams can have a maximum of 4 members. We believe this is the optimal size for collaboration while ensuring everyone has a meaningful role in the project."
        },
        {
          question: "Can I participate remotely?",
          answer: "While we strongly encourage in-person participation for the full experience, we do offer limited remote participation options. Please contact us directly at info@hackfornepal.com for more information about remote participation."
        }
      ]
    },
    {
      title: "Event Details",
      items: [
        {
          question: "What should I bring to the hackathon?",
          answer: "You should bring your laptop, charger, any specific hardware you plan to use, and your enthusiasm! We'll provide meals, snacks, working spaces, Wi-Fi, and plenty of caffeine to keep you going."
        },
        {
          question: "Will there be food provided?",
          answer: "Yes! We provide all meals (breakfast, lunch, and dinner) as well as snacks and beverages throughout the event. We accommodate most dietary restrictions - just let us know your needs during registration."
        },
        {
          question: "Can I sleep at the venue?",
          answer: "While the venue will be open 24 hours, we don't provide dedicated sleeping facilities. Many participants take short naps during the event. If you prefer proper rest, we recommend booking accommodations nearby."
        },
        {
          question: "Will there be mentors at the event?",
          answer: "Absolutely! We'll have industry experts and technical mentors available throughout the event to provide guidance, feedback, and support for your projects."
        }
      ]
    },
    {
      title: "Projects & Judging",
      items: [
        {
          question: "What kind of projects can we build?",
          answer: "You can build solutions within our challenge tracks: education, healthcare, sustainability, disaster resilience, and cultural preservation. Alternatively, you can create your own impact project that addresses a specific challenge in Nepal."
        },
        {
          question: "What technologies can we use?",
          answer: "You're free to use any programming languages, frameworks, or tools. We encourage you to work with technologies you're comfortable with or take the opportunity to learn something new during the hackathon."
        },
        {
          question: "How will projects be judged?",
          answer: "Projects will be evaluated based on innovation, technical complexity, completeness, user experience, and potential impact. Our panel of judges includes industry professionals, investors, and community leaders."
        },
        {
          question: "Will there be prizes?",
          answer: "Yes! We have exciting prizes for the winning teams, including cash awards, mentorship opportunities, and the chance to further develop your solution with support from our partner organizations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about HackForNepal. If you don't see your question here,
              feel free to reach out to us directly at info@hackfornepal.com.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="mb-10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                    >
                      <AccordionItem value={`item-${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left hover:text-primary transition-colors">{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-card p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                We're here to help! Contact our support team for any additional questions or clarifications.
              </p>
              <div className="flex justify-center gap-4">
                <a href="mailto:info@hackfornepal.com" className="text-nepal-blue hover:text-nepal-red transition-colors font-medium">
                  info@hackfornepal.com
                </a>
                <span className="text-muted-foreground">|</span>
                <a href="tel:+9771234567" className="text-nepal-blue hover:text-nepal-red transition-colors font-medium">
                  +977 1234567
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
