import React from 'react';
import Link from 'next/link'; // Import Next.js Link for navigation

const Footer: React.FC = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          {/* Funny line about Machine Learning */}
          <div className="text-center text-gray-400 mb-4">
            <p className="text-sm">
              Machine learning: because sometimes humans need help to be "smarter" 😜
            </p>
          </div>

          {/* Bottom section: Copyright */}
          <div className="mt-4 text-center text-gray-400">
            <p className="text-sm sm:text-base">
              &copy; {new Date().getFullYear()} ML. Made with Love.
            </p>
          </div>
          
          {/* Terms and Conditions Link */}
          <div className="mt-6 text-center text-gray-400">
            <p className="text-sm">
              This is an open-source project. By using our website, you agree to our{' '}
              <Link href="/terms" className="text-blue-500 hover:text-blue-700">
                Terms and Conditions
              </Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
