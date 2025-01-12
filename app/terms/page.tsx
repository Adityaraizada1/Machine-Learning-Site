"use client";

import { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMail, FiExternalLink } from "react-icons/fi";

const TermsConditions: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-16 py-12 mt-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent 
            bg-gradient-to-r from-white via-white to-white/70">
            Terms and Conditions
          </h1>
          
          <div className="text-lg space-y-8">
            <p className="text-white/90">
              Last updated: January 12, 2025
            </p>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((section) => (
              <div key={section} className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {getTermsTitle(section)}
                </h2>
                <div className="text-white/80 space-y-4">
                  {getTermsContent(section)}
                </div>
              </div>
            ))}

            {/* Contact Section with Card Style */}
            <motion.div 
              className="bg-gradient-to-br from-black/50 to-blue-950/30 backdrop-blur-sm rounded-xl p-8 
                border border-white/10 mt-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <FiMail className="text-2xl text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80">
                  If you have any questions about these Terms and Conditions, feel free to reach out to us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:adityaraizada59@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg text-green-400 
                      hover:bg-black/50 transition-all group"
                  >
                    <FiMail />
                    <span>adityaraizada59@gmail.com</span>
                    <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="mailto:saketdev12@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg text-green-400 
                      hover:bg-black/50 transition-all group"
                  >
                    <FiMail />
                    <span>saketdev12@gmail.com</span>
                    <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 py-3 px-6 bg-blue-500/20 text-blue-400 rounded-xl 
                hover:bg-blue-500/30 transition-all duration-300 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const getTermsTitle = (section: number): string => {
  const titles = {
    1: "1. Acceptance of Terms",
    2: "2. Use License",
    3: "3. Disclaimer",
    4: "4. Limitations",
    5: "5. Privacy Policy",
    6: "6. User Content",
    7: "7. Links and Third Party Content",
    8: "8. Site Terms of Use Modifications",
    9: "9. Governing Law"
  };
  return titles[section as keyof typeof titles];
};

const getTermsContent = (section: number): ReactNode => {
  const content = {
    1: (
      <div className="space-y-4">
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
        </p>
        <p>
          This website is intended for educational purposes and to provide information about machine learning concepts and applications.
        </p>
      </div>
    ),
    2: (
      <div className="space-y-4">
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on ML School's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software contained on ML School's website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
      </div>
    ),
    3: (
      <div className="space-y-4">
        <p>The materials on ML School's website are provided on an 'as is' basis. ML School makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Merchantability</li>
          <li>Fitness for a particular purpose</li>
          <li>Non-infringement of intellectual property or other violation of rights</li>
        </ul>
      </div>
    ),
    4: (
      <div className="space-y-4">
        <p>In no event shall ML School or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ML School's website.</p>
      </div>
    ),
    5: (
      <div className="space-y-4">
        <p>Your privacy is important to us. Our Privacy Policy explains:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>What information we collect and why we collect it</li>
          <li>How we use that information</li>
          <li>The choices we offer, including how to access and update information</li>
        </ul>
        <p>We do not collect any personal information unless explicitly provided by you.</p>
      </div>
    ),
    6: (
      <div className="space-y-4">
        <p>Users may submit content through comments, contributions, or other means. By submitting content, you grant ML School a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, and distribute such content.</p>
      </div>
    ),
    7: (
      <div className="space-y-4">
        <p>ML School has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ML School of the site. Use of any such linked website is at the user's own risk.</p>
      </div>
    ),
    8: (
      <div className="space-y-4">
        <p>ML School may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
      </div>
    ),
    9: (
      <div className="space-y-4">
        <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
      </div>
    )
  };
  return content[section as keyof typeof content];
};

export default TermsConditions;
