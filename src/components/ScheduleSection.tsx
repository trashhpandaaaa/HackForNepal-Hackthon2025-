
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "@/components/ui/motion";

export default function ScheduleSection() {
  const scheduleData = {
    day1: [
      { time: "08:00 AM", event: "Registration & Breakfast", description: "Check-in and enjoy breakfast while networking with fellow participants" },
      { time: "09:30 AM", event: "Opening Ceremony", description: "Welcome address, rules explanation, and theme announcement" },
      { time: "10:30 AM", event: "Team Formation", description: "Find teammates or finalize your existing team" },
      { time: "11:00 AM", event: "Hacking Begins", description: "Start building your innovative solutions" },
      { time: "01:00 PM", event: "Lunch Break", description: "Refuel with a delicious lunch" },
      { time: "02:00 PM", event: "Workshop: UI/UX Design", description: "Learn about effective design principles for your project" },
      { time: "04:00 PM", event: "Mentor Sessions", description: "One-on-one sessions with industry experts" },
      { time: "07:00 PM", event: "Dinner", description: "Enjoy dinner with fellow participants" },
      { time: "08:00 PM", event: "Evening Activities", description: "Fun games and networking activities" },
      { time: "Onwards", event: "Overnight Hacking", description: "Continue working on your projects" }
    ],
    day2: [
      { time: "07:30 AM", event: "Breakfast", description: "Good Morning snacks" },
      { time: "11:00 AM", event: "Lunch", description: "Hungry? Grab your lunches" },
      { time: "12:00 AM", event: "Mentoring Round", description: "Lemme do it for you" },
      { time: "03:00 PM", event: "Snacks", description: "Midday refuel" },
      { time: "Evening", event: "Fun Session", description: "Fun during the evening" },
      { time: "08:00 PM", event: "Dinner", description: "Dinner time" },
      { time: "Night", event: "Goodnight", description: "Raise ye! O Tarnished!!" },
    ],
    day3: [
      { time: "07:30 AM", event: "Breakfast", description: "Good Morning snacks" },
      { time: "09:00 AM", event: "Code Freeze", description: "Hungry? Grab your lunches" },
      { time: "09:30 AM", event: "Lunch", description: "Lemme do it for you" },
      { time: "11:00 PM", event: "Judging Round", description: "Midday refuel" },
      { time: "03:00 PM", event: "Winner Announcement", description: "Fun during the evening" },
      { time: "At the end of the time", event: "Prize Distribution", description: "Dinner time" },
    ]
  };

  return (
    <div className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Event Schedule</h2>
          <p className="text-lg text-muted-foreground">
            A packed 48-hour journey of innovation, learning, and building. 
            Mark your calendar and join us for this transformative experience.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
              <TabsTrigger value="day3">Day 3</TabsTrigger>
            </TabsList>
            
            <TabsContent value="day1" className="pt-4">
              <div className="space-y-8">
                {scheduleData.day1.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-28 shrink-0 text-right">
                      <span className="text-nepal-red font-semibold">{item.time}</span>
                    </div>
                    <div className="flex-1 border-l-2 border-muted pl-6 pb-8 relative">
                      <div className="absolute w-3 h-3 bg-nepal-blue rounded-full -left-[7px] top-1"></div>
                      <h3 className="text-lg font-medium mb-1">{item.event}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="day2" className="pt-4">
              <div className="space-y-8">
                {scheduleData.day2.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-28 shrink-0 text-right">
                      <span className="text-nepal-red font-semibold">{item.time}</span>
                    </div>
                    <div className="flex-1 border-l-2 border-muted pl-6 pb-8 relative">
                      <div className="absolute w-3 h-3 bg-nepal-blue rounded-full -left-[7px] top-1"></div>
                      <h3 className="text-lg font-medium mb-1">{item.event}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="day3" className="pt-4">
              <div className="space-y-8">
                {scheduleData.day3.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-28 shrink-0 text-right">
                      <span className="text-nepal-red font-semibold">{item.time}</span>
                    </div>
                    <div className="flex-1 border-l-2 border-muted pl-6 pb-8 relative">
                      <div className="absolute w-3 h-3 bg-nepal-blue rounded-full -left-[7px] top-1"></div>
                      <h3 className="text-lg font-medium mb-1">{item.event}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
