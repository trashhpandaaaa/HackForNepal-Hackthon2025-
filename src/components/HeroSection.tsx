
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  // Set hackathon date - example: 2 months from now
  const hackathonDate = new Date();
  hackathonDate.setMonth(hackathonDate.getMonth() + 1);
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-12 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5" />
      
      <div className="container max-w-6xl mx-auto z-10 flex flex-col items-center">
        <div className="relative mb-6 animate-fade-in">
          <div className="absolute inset-0 bg-nepal-blue blur-3xl opacity-5 rounded-full" />
          <div className="py-2 px-4 rounded-full bg-muted text-sm font-medium text-nepal-blue mb-4 inline-block animate-pulse-soft">
            Registration Now Open
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          <span className="text-nepal-red">Hack</span>
          <span className="text-nepal-blue">ForNepal</span>
          <span className="block text-foreground mt-2">Innovation Challenge 2025</span>
        </h1>
        
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mb-8 animate-fade-in">
          Join Nepal's biggest hackathon to build solutions that empower communities, 
          preserve cultural heritage, and drive sustainable development.
        </p>
        
        <div className="w-full max-w-3xl mb-12 animate-fade-in">
          <CountdownTimer targetDate={hackathonDate} className="mb-8" />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/register">Register Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
