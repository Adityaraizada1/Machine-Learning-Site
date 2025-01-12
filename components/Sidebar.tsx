import React from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TbDoorExit } from "react-icons/tb";
import { mlTopics, TopicKey } from '@/utils/mlContent';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContent: React.Dispatch<React.SetStateAction<{ heading: string; content: string }>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, setContent }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTopicClick = (topic: TopicKey) => {
    setContent(mlTopics[topic]);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          />
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-20 right-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-black/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition-colors duration-300"
          aria-label="Toggle sidebar"
        >
          <FaBars size={18} />
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-72 bg-black/95 backdrop-blur-md 
          border-r border-white/10 z-50 transform transition-transform duration-300
          md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 bg-black/95 backdrop-blur-md z-10 px-6 py-4 border-b border-white/10">
          <div className="flex justify-between items-center">
            <motion.h2 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ML School
            </motion.h2>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSidebar}
              className="md:hidden text-white/80 hover:text-white transition-colors"
              aria-label="Close sidebar"
            >
              <FaTimes size={20} />
            </motion.button>
          </div>

          {/* Return to Docs Link */}
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/docs" 
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <TbDoorExit size={18} className="group-hover:translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Return to Docs</span>
            </Link>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="p-6 overflow-y-auto h-[calc(100vh-140px)] sidebar-scroll">
          <motion.ul 
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {Object.keys(mlTopics).map((topic, index) => (
              <motion.li 
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <button
                  onClick={() => handleTopicClick(topic as TopicKey)}
                  className="w-full text-left px-4 py-2 rounded-lg text-white/70 hover:text-white
                    hover:bg-white/5 transition-all duration-300 group"
                >
                  <span className="text-sm font-medium relative">
                    {topic}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white/30 
                      group-hover:w-full transition-all duration-300" />
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
