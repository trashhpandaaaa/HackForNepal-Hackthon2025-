import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";
import { motion } from "@/components/ui/motion";

// Define types for our participant data
interface Participant {
  id: number;
  name: string;
  members: number;
  projectName: string;
  description: string;
  category: string;
  technologies: string[];
  logoLetter: string;
}

const Participants = () => {
  // Sample participant data
  const participantsData: Participant[] = [
    {
      id: 1,
      name: "Team Innovate Nepal",
      members: 4,
      projectName: "MedConnect",
      description: "A telemedicine platform connecting rural communities with healthcare professionals in urban centers.",
      category: "Healthcare",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      logoLetter: "I",
    },
    {
      id: 2,
      name: "Digital Sherpas",
      members: 3,
      projectName: "EduAccess",
      description: "Mobile platform providing educational resources for schools in remote mountainous regions.",
      category: "Education",
      technologies: ["React Native", "Firebase", "Offline-First"],
      logoLetter: "D",
    },
    {
      id: 3,
      name: "Himalayan Coders",
      members: 5,
      projectName: "AgroTech Nepal",
      description: "Using AI and IoT to help farmers optimize crop yields and connect with buyers.",
      category: "Agriculture",
      technologies: ["Python", "TensorFlow", "IoT", "React"],
      logoLetter: "H",
    },
    {
      id: 4,
      name: "Kathmandu Creators",
      members: 4,
      projectName: "Heritage AR",
      description: "Augmented reality experiences for preserving and sharing Nepali cultural heritage.",
      category: "Culture",
      technologies: ["Unity", "AR Kit", "3D Modeling", "React Native"],
      logoLetter: "K",
    },
    {
      id: 5,
      name: "Dev Everest",
      members: 3,
      projectName: "Disaster Alert",
      description: "Real-time disaster warning and response coordination system for earthquake-prone regions.",
      category: "Disaster Management",
      technologies: ["React", "Node.js", "WebSockets", "Maps API"],
      logoLetter: "D",
    },
    {
      id: 6,
      name: "Team Annapurna",
      members: 5,
      projectName: "EcoTourism Hub",
      description: "Platform connecting local guides with tourists for sustainable trekking experiences.",
      category: "Tourism",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "PWA"],
      logoLetter: "A",
    },
    {
      id: 7,
      name: "Pokhara Technologists",
      members: 4,
      projectName: "CleanWater",
      description: "Mobile app for tracking and reporting water quality in local communities.",
      category: "Environment",
      technologies: ["Flutter", "Firebase", "REST API", "ML Kit"],
      logoLetter: "P",
    },
    {
      id: 8,
      name: "Team Lumbini",
      members: 3,
      projectName: "Artisan Market",
      description: "E-commerce platform for Nepali artisans to sell crafts internationally.",
      category: "Commerce",
      technologies: ["Shopify", "React", "Node.js", "Payment Gateway"],
      logoLetter: "L",
    },
  ];

  // State for search query and category filter
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  // Get unique categories from participant data
  const categories = Array.from(
    new Set(participantsData.map((participant) => participant.category))
  );

  // Filter participants based on search and category
  const filteredParticipants = participantsData.filter((participant) => {
    const matchesSearch = 
      participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      participant.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      participant.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === "" || participant.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-grid-pattern min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 pb-16 px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Our Participants</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Meet the innovative teams building solutions for Nepal's challenges in the Hack for Nepal Arena. These passionate developers, designers, and entrepreneurs are creating technology for social impact.
          </p>
          
          {/* Search and filter */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex-1 max-w-sm mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by team or project..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <Button
                variant={categoryFilter === "" ? "default" : "outline"}
                onClick={() => setCategoryFilter("")}
                className="text-sm"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={categoryFilter === category ? "default" : "outline"}
                  onClick={() => setCategoryFilter(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {filteredParticipants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredParticipants.map((participant, index) => (
              <motion.div
                key={participant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-background border rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold">
                      {participant.logoLetter}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{participant.name}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{participant.members} members</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-primary mb-1">{participant.projectName}</h4>
                    <p className="text-muted-foreground">{participant.description}</p>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {participant.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {participant.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-muted rounded-full text-xs hover:bg-muted/80 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground">No participants match your search criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("");
              }}
            >
              Reset filters
            </Button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Participants;