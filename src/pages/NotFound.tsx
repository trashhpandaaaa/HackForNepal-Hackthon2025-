import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-6xl font-bold text-nepal-blue mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
          }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          We couldn't find the page you were looking for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button asChild className="hover:scale-105 transition-transform">
            <Link to="/">Return to Home</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
