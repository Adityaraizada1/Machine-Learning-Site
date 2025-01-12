import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Adityaraizada1/Machine-Learning-Site", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/your-handle", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  ];

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Docs", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "Sources", href: "/source" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background Text with Flicker Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative">
          {/* Base ML Text */}
          <span className="text-[25vw] font-bold text-white/[0.02] whitespace-nowrap">
            ML
          </span>
          
          {/* Glow Effect */}
          <span className="absolute inset-0 flex items-center justify-center text-[25vw] font-bold text-white/[0.01] whitespace-nowrap blur-sm animate-glow">
            ML
          </span>
          
          {/* Flicker Effect */}
          <span className="absolute inset-0 flex items-center justify-center text-[25vw] font-bold text-white/[0.01] whitespace-nowrap animate-flicker">
            ML
          </span>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/95 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">ML One-on-One</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Empowering developers to master machine learning through interactive learning and community collaboration.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/terms"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} ML.</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-red-500 animate-pulse w-4 h-4" /> by Team
              </span>
            </div>
            
            <motion.div 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="https://github.com/Adityaraizada1/Machine-Learning-Site"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Open Source Project
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
};

export default Footer;
