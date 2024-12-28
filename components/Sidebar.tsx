import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { FaBars, FaTimes} from 'react-icons/fa';
import { TbDoorExit } from "react-icons/tb";
import { mlTopics, TopicKey } from '@/utils/mlContent'; // Ensure the correct import path

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContent: React.Dispatch<React.SetStateAction<{ heading: string; content: string }>>; // To update content
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, setContent }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTopicClick = (topic: TopicKey) => {
    setContent(mlTopics[topic]); // Update content based on topic
    setIsOpen(false); // Close the sidebar after selection
  };

  return (
    <div className="relative h-full">
      {/* Hamburger icon shifted to the top-right */}
      {!isOpen && (
        <div className="fixed top-4 right-4 md:hidden p-2 z-50">
          <button onClick={toggleSidebar} className="text-black" aria-label="Toggle sidebar">
            <FaBars size={20} />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-56 h-full bg-gray-800 text-white p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
        aria-hidden={!isOpen}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">ML School</h2>

          {/* Close button */}
          <button onClick={toggleSidebar} className="md:hidden text-white" aria-label="Close sidebar">
            <FaTimes size={20} />
          </button>
        </div>

        {/* "Go to Home" icon positioned below the header */}
        <div className="mb-4">
          <Link href="/docs" aria-label="Go to main page">
            <TbDoorExit
              size={18}
              className="text-gray-300 hover:text-gray-100 cursor-pointer inline-block mr-2"
            />
            <span className="text-sm">Return to Doc</span>
          </Link>
        </div>

        {/* Navigation links */}
        <nav>
          <ul>
            {Object.keys(mlTopics).map((topic) => (
              <li key={topic} className="mb-2">
                <button
                  className="text-lg hover:text-gray-400 cursor-pointer"
                  onClick={() => handleTopicClick(topic as TopicKey)} // Properly typecast the key
                >
                  {topic}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
