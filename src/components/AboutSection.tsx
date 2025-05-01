
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

export default function AboutSection() {
  return (
    <div className="py-24 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About the Hackathon</h2>
          <p className="text-lg text-muted-foreground">
            HackForNepal brings together innovators, developers, designers, and creators 
            to build solutions that address pressing challenges in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-6">
              <span className="text-nepal-red text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              Empowering Nepalese innovation through technology to build solutions 
              that address local challenges with global impact.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-nepal-blue/10 flex items-center justify-center rounded-full mb-6">
              <span className="text-nepal-blue text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Challenge Tracks</h3>
            <p className="text-muted-foreground mb-4">
              Focus on education, healthcare, sustainability, disaster resilience, 
              cultural preservation, or create your own impact project.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-6">
              <span className="text-nepal-red text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Prizes</h3>
            <p className="text-muted-foreground mb-4">
              Win cash prizes, mentorship opportunities, and the chance to showcase 
              your solutions to investors and industry leaders.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/about">Learn More About HackForNepal</Link>
          </Button>
        </div>
=======
import { motion } from '@/components/ui/motion';

export default function AboutSection() {
  return (
    <div className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-nepal-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-nepal-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">About the Hackathon</h2>
          <p className="text-xl text-muted-foreground">
            HackForNepal brings together innovators, developers, designers, and creators 
            to build solutions that address pressing challenges in Nepal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              number: "1",
              title: "Our Mission",
              description: "Empowering Nepalese innovation through technology to build solutions that address local challenges with global impact.",
              color: "nepal-red",
              delay: 0.1
            },
            {
              number: "2",
              title: "Challenge Tracks",
              description: "Focus on education, healthcare, sustainability, disaster resilience, cultural preservation, or create your own impact project.",
              color: "nepal-blue",
              delay: 0.2
            },
            {
              number: "3",
              title: "Prizes",
              description: "Win cash prizes, mentorship opportunities, and the chance to showcase your solutions to investors and industry leaders.",
              color: "nepal-red",
              delay: 0.3
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <div className="bg-card rounded-lg p-8 shadow-sm h-full border border-muted hover:border-primary/20 transition-colors relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-${item.color}/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl`}></div>
                <div className={`w-16 h-16 bg-${item.color}/10 flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                  <span className={`text-${item.color} text-2xl font-bold`}>{item.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                <div className="h-px w-full bg-muted my-6 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <Link to="/about" className="text-primary hover:text-primary/80 flex items-center">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link to="/about">Learn More About HackForNepal</Link>
          </Button>
        </motion.div>
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
      </div>
    </div>
  );
}
