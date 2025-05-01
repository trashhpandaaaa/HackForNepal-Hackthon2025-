
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Medal, Briefcase, Users } from "lucide-react";
import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-grid-pattern">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-2 mb-6 bg-muted/50 rounded-full">
              <span className="w-16 h-16 bg-nepal-red/10 flex items-center justify-center rounded-full">
                <Users className="text-nepal-red w-8 h-8" />
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-nepal-red to-nepal-blue bg-clip-text text-transparent">
              About HackForNepal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn more about Nepal's biggest hackathon and how we're working to drive innovation and positive change.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-nepal-red/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-nepal-blue/5 rounded-full blur-3xl"></div>
              <Card className="h-full backdrop-blur-sm bg-card/90 border-nepal-red/20 hover:border-nepal-red/30 transition-colors">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mr-3">
                      <Users className="text-nepal-red w-6 h-6" />
                    </span>
                    Our Story
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg">
                      HackForNepal was founded in 2023 with a simple mission: to harness the power of technology to address 
                      the unique challenges facing Nepal. Our founder, a tech enthusiast and social entrepreneur, 
                      recognized the immense untapped talent within Nepal's developer community.
                    </p>
                    <p className="text-muted-foreground text-lg">
                      What started as a small gathering of like-minded individuals has grown into Nepal's premier hackathon, 
                      bringing together hundreds of participants from across the country and beyond.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-nepal-blue/5 rounded-full blur-3xl"></div>
              <Card className="h-full backdrop-blur-sm bg-card/90 border-nepal-blue/20 hover:border-nepal-blue/30 transition-colors">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="w-12 h-12 bg-nepal-blue/10 flex items-center justify-center rounded-full mr-3">
                      <Briefcase className="text-nepal-blue w-6 h-6" />
                    </span>
                    Our Mission
                  </h2>
                  <p className="mb-6 text-muted-foreground text-lg">
                    We believe in the transformative power of technology to address social, environmental, and economic 
                    challenges. HackForNepal aims to:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Foster innovation and entrepreneurship in Nepal's tech ecosystem",
                      "Create practical solutions to real-world problems facing Nepalese communities",
                      "Build a supportive community of developers, designers, and changemakers",
                      "Connect talented individuals with opportunities for growth and impact"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <span className="h-8 w-8 rounded-full bg-nepal-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-nepal-blue/20 transition-colors">
                          <span className="h-2 w-2 rounded-full bg-nepal-blue"></span>
                        </span>
                        <span className="text-muted-foreground text-lg group-hover:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div 
            className="mb-20 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent to-nepal-red/30"></div>
              <h2 className="text-3xl font-bold mx-6 whitespace-nowrap flex items-center">
                <span className="w-10 h-10 bg-nepal-red/10 flex items-center justify-center rounded-full mr-3">
                  <Medal className="text-nepal-red w-5 h-5" />
                </span>
                2025 Focus Areas
              </h2>
              <div className="h-px w-full max-w-xs bg-gradient-to-l from-transparent to-nepal-blue/30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainable Development",
                  description: "Creating technology solutions that support Nepal's sustainable development goals, from clean energy to sustainable agriculture and responsible consumption.",
                  color: "nepal-red",
                  number: 1,
                  delay: 0.1
                },
                {
                  title: "Digital Inclusion",
                  description: "Developing tools and platforms that expand digital access and literacy across Nepal's diverse communities, ensuring no one is left behind in the digital age.",
                  color: "nepal-blue",
                  number: 2,
                  delay: 0.2
                },
                {
                  title: "Cultural Preservation",
                  description: "Using technology to document, preserve, and promote Nepal's rich cultural heritage, from languages and traditions to historical sites and artistic expressions.",
                  color: "nepal-red",
                  number: 3,
                  delay: 0.3
                }
              ].map((area, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + area.delay }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-md transition-all border-t-4 border-nepal-red relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-nepal-red/5 pointer-events-none"></div>
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className={`w-16 h-16 bg-${area.color}/10 flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                        <span className={`text-${area.color} text-2xl font-bold`}>{area.number}</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                      <p className="text-muted-foreground text-lg flex-grow">
                        {area.description}
                      </p>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="outline" size="sm" asChild className="rounded-full">
                          <Link to="/register">Join This Track</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
              {[
                { name: "Arun Poudel", role: "Founder & Director", initials: "AP" },
                { name: "Sita Maharjan", role: "Program Coordinator", initials: "SM" },
                { name: "Raj Gurung", role: "Technical Lead", initials: "RG" }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                >
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-nepal-blue/20 to-nepal-red/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="text-nepal-blue text-3xl font-bold">{member.initials}</span>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-nepal-red/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-nepal-red text-lg">+</span>
                    </div>
                  </div>
                  <div className="text-center relative z-10">
                    <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-nepal-blue/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <Button size="lg" asChild className="rounded-full px-8">
                <Link to="/register">Join Our Community</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
