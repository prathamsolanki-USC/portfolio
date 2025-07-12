import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils/temp';
import { Menu, Code, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Static data
const personalInfo = {
    full_name: "Pratham Solanki",
    social_links: {
        github: "https://github.com/prathamsolanki-USC?tab=repositories",
        linkedin: "https://www.linkedin.com/in/pratham-solanki12/",
        twitter: "https://twitter.com"
    }
};

const navItems = [
  { name: 'Home', path: createPageUrl('Home') },
  { name: 'Projects', path: createPageUrl('Projects') },
  { name: 'About', path: createPageUrl('About') },
  { name: 'Contact', path: createPageUrl('Contact') },
];

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative text-sm font-medium transition-colors ${
          isActive ? 'text-teal-400' : 'text-gray-300 hover:text-teal-300'
        }`}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400"
            layoutId="underline"
          />
        )}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 text-white hover:text-teal-300 transition-colors">
            <div className="h-8 w-8 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">{personalInfo.full_name}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-teal-300 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 hover:text-teal-400 text-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm">&copy; {new Date().getFullYear()} {personalInfo.full_name}. All rights reserved.</p>
                        <p className="text-xs text-gray-500 mt-1">Built with passion for data science</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href={personalInfo.social_links.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href={personalInfo.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={personalInfo.social_links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}