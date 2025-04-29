
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const Schedule = () => {
  const scheduleData = {
    day1: [
      { time: "08:00 AM", event: "Check in", description: "Check-in and enjoy breakfast while networking with fellow participants" },
      { time: "08:30 AM", event: "Opening Ceremony", description: "Welcome address, rules explanation, and theme announcement" },
      { time: "9:30 AM", event: "Coding", description: "Coding" },
      { time: "11:00 AM", event: "Lunch", description: "Start building your innovative solutions" },
      { time: "12:00 PM", event: "Mentoring round", description: "Refuel with a delicious lunch" },
      { time: "03:00 PM", event: "Snacks", description: "Learn about effective design principles for your project" },
      { time: "06:00 PM", event: "Fun Session", description: "One-on-one sessions with industry experts" },
      { time: "08:00 PM", event: "Dinner", description: "Enjoy dinner with fellow participants" },
      { time: "10:00 PM", event: "Good Night", description: "Sleep Well Boys" },

    ],
    day2: [
      { time: "08:00 AM", event: "Breakfast", description: "Start your day with a hearty breakfast" },
      { time: "09:00 AM", event: "Workshop: Pitch Perfect", description: "Learn how to effectively present your project" },
      { time: "10:30 AM", event: "Progress Check-in", description: "Share your progress with mentors" },
      { time: "12:00 PM", event: "Lunch", description: "Midday refuel" },
      { time: "01:00 PM", event: "Final Sprint", description: "Last few hours of development" },
      { time: "04:00 PM", event: "Hacking Ends", description: "Submit your projects" },
      { time: "04:30 PM", event: "Presentations Begin", description: "Teams showcase their projects to judges" },
      { time: "06:30 PM", event: "Judges' Deliberation", description: "Judges evaluate all projects" },
      { time: "07:00 PM", event: "Awards Ceremony", description: "Winners announced and prizes distributed" },
      { time: "08:00 PM", event: "Closing Dinner", description: "Celebrate your achievements with a closing dinner" }
    ],
    day3: [
      { time: "08:00 AM", event: "Breakfast", description: "Start your day with a hearty breakfast" },
      { time: "09:00 AM", event: "Workshop: Pitch Perfect", description: "Learn how to effectively present your project" }, 
    ]
  };

  const venueDetails = {
    name: "Nepal College of Information Technology",
    address: "Balkumari, Lalitpur",
    facilities: ["High-speed WiFi", "24/7 power backup", "Dedicated workspaces", "Tech support"]
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">Event Schedule</h1>
            <p className="text-lg text-muted-foreground">
              Mark your calendar for Nepal's biggest hackathon - a 48-hour journey of innovation, 
              collaboration, and impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-6 bg-card rounded-lg shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-nepal-blue" />
                <h2 className="text-2xl font-bold">Key Dates</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-muted rounded-md">
                  <h3 className="font-semibold mb-1">Registration Deadline</h3>
                  <p className="text-nepal-red font-medium">May 15, 2025</p>
                  <p className="text-sm text-muted-foreground mt-1">Last day to register your team</p>
                </div>
                <div className="p-4 bg-muted rounded-md">
                  <h3 className="font-semibold mb-1">Hackathon Dates</h3>
                  <p className="text-nepal-red font-medium">June 1-2, 2025</p>
                  <p className="text-sm text-muted-foreground mt-1">48-hour hackathon event</p>
                </div>
                <div className="p-4 bg-muted rounded-md">
                  <h3 className="font-semibold mb-1">Post-Event Showcase</h3>
                  <p className="text-nepal-red font-medium">June 15, 2025</p>
                  <p className="text-sm text-muted-foreground mt-1">Public showcase of winning projects</p>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="day1">Day 1 (June 1)</TabsTrigger>
                <TabsTrigger value="day2">Day 2 (June 2)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="day1" className="pt-4">
                <div className="space-y-8">
                  {scheduleData.day1.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="w-28 shrink-0 text-right">
                        <span className="text-nepal-red font-semibold">{item.time}</span>
                      </div>
                      <div className="flex-1 border-l-2 border-muted pl-6 pb-8 relative">
                        <div className="absolute w-3 h-3 bg-nepal-blue rounded-full -left-[7px] top-1"></div>
                        <h3 className="text-lg font-medium mb-1">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="day2" className="pt-4">
                <div className="space-y-8">
                  {scheduleData.day2.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="w-28 shrink-0 text-right">
                        <span className="text-nepal-red font-semibold">{item.time}</span>
                      </div>
                      <div className="flex-1 border-l-2 border-muted pl-6 pb-8 relative">
                        <div className="absolute w-3 h-3 bg-nepal-blue rounded-full -left-[7px] top-1"></div>
                        <h3 className="text-lg font-medium mb-1">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Venue Information</h2>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{venueDetails.name}</h3>
              <p className="mb-4 text-muted-foreground">{venueDetails.address}</p>
              
              <h4 className="font-medium mb-2">Facilities Available:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {venueDetails.facilities.map((facility, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-nepal-red rounded-full"></span>
                    <span className="text-muted-foreground">{facility}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-muted p-4 rounded-md mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> All participants are required to bring their own laptops and any specific 
                  hardware needed for their projects. Power strips and basic office supplies will be provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
