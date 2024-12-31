"use client";

import { FC } from "react";
import Navbar from "@/components/Navbar"; // Assuming Navbar is available
import Link from "next/link";

const TermsConditions: FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-16 py-12 mt-12"> {/* Added mt-12 for spacing */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
            Terms and Conditions
          </h1>
          
          <div className="text-lg space-y-6">
            <div>
              <p>
                By accessing or using this website or any services associated with it, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully. If you do not agree with any of these terms, do not use the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
              <p>
                By using our website and services, you agree to follow these Terms and Conditions. If you disagree with any part of the terms, you should not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">2. Use of the Website</h2>
              <p>
                You are granted permission to use this website for personal, non-commercial purposes only. You agree not to:
              </p>
              <ul className="list-disc ml-6">
                <li>Copy, reproduce, or distribute any part of the website without permission.</li>
                <li>Modify, reverse-engineer, or tamper with the code or content.</li>
                <li>Use the website to harm, disrupt, or interfere with the functioning of the website or other users.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">3. Contributions</h2>
              <p>
                As an open-source project, we encourage you to contribute. If you submit code or suggestions, you agree that:
              </p>
              <ul className="list-disc ml-6">
                <li>You have the right to share the code and ideas.</li>
                <li>Your contributions are under the same open-source license as the project is under <span className="text-blue-500">MIT license</span>.</li>
                <li>We can freely use, modify, and distribute your contributions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">4. License</h2>
              <p>
                This project is <span className="text-blue-500">licensed under MIT</span> which means:
              </p>
              <ul className="list-disc ml-6">
                <li>You can use, modify, and distribute the code freely.</li>
                <li>You must give credit to the original authors when using or distributing the code.</li>
                <li>Commercial use may be limited depending on the license terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">5. Privacy</h2>
              <p>
                We care about your privacy. We may collect personal data, such as email addresses for updates or contributions. We will not share your personal information without your consent, except when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">6. Third-Party Links</h2>
              <p>
                Our website may have links to third-party sites. We are not responsible for the content, accuracy, or practices of those sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">7. Disclaimer</h2>
              <p>
                The website and all content are provided "as-is." We do not guarantee that the website will be error-free, secure, or always available. You use the website at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">8. Limitation of Liability</h2>
              <p>
                We are not responsible for any damages that may result from using the website, including but not limited to direct, indirect, or incidental damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">9. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions at any time. We will notify users of significant changes. By continuing to use the website after changes are made, you agree to the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-6">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, feel free to reach out to us at <span className="text-green-500">adityaraizada59@gmail.com</span> or <span className="text-green-500">saketdev12@gmail.com</span> .
              </p>
            </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
    </>
  );
};

export default TermsConditions;
