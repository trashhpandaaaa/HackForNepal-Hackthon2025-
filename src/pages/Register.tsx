import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";

const Register = () => {
  // Google Forms registration URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScecCm1AM_sLMJ3Q6d_A4eqT-aVrLxJpNRuSqoNYA98oXv5-Q/viewform"; // Replace with your actual Google Form URL

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold mb-4">Register for HackForNepal</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join Nepal's biggest hackathon and be part of an innovative community 
              dedicated to solving real-world challenges through technology.
            </p>
            
            <motion.div 
              className="max-w-md mx-auto p-8 bg-card rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
              <p className="text-muted-foreground mb-6">
                We've moved our registration to Google Forms for a smoother experience. 
                Click the button below to open the registration form.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild size="lg" className="w-full hover:scale-105 transition-transform">
                  <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                    Open Registration Form
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
