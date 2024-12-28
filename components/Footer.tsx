import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      {/* Separator Line
      <div className="border-t border-gray-600 my-4 mx-auto w-1/3"></div> */}

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          {/* Funny line about Machine Learning */}
          <div className="text-center text-gray-400">
            <p className="text-sm">Machine learning: because sometimes humans need help to be "smarter" 😜</p>
          </div>

          {/* Bottom section: Copyright */}
          <div className="mt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ML. Made with Love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
