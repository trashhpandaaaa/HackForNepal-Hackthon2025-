<<<<<<< HEAD

=======
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-nepal-red">Hack</span>
              <span className="text-xl font-bold text-nepal-blue">ForNepal</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/schedule" className="nav-link">Schedule</Link>
<<<<<<< HEAD
=======
            <Link to="/participants" className="nav-link">Participants</Link>
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
            <Link to="/faq" className="nav-link">FAQ</Link>
            <Link to="/sponsors" className="nav-link">Sponsors</Link>
            <Button asChild className="ml-4">
              <Link to="/register">Register Now</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-nepal-blue focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link to="/" className="block py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>About</Link>
            <Link to="/schedule" className="block py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>Schedule</Link>
<<<<<<< HEAD
=======
            <Link to="/participants" className="block py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>Participants</Link>
>>>>>>> 2595e11 (added animations and working on the contant, fixed some bugs and added the page for google forms.)
            <Link to="/faq" className="block py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>FAQ</Link>
            <Link to="/sponsors" className="block py-2 px-4 hover:bg-muted rounded-md" onClick={toggleMenu}>Sponsors</Link>
            <div className="px-4 py-2">
              <Button asChild className="w-full">
                <Link to="/register" onClick={toggleMenu}>Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
