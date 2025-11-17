import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-yellow-300 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-yellow-300 rounded-lg shadow-md p-6 sm:p-8">
        {/* Back Button */}
        <Link 
          to={createPageUrl("Home")} 
          className="inline-flex items-center font-medium text-red-600 hover:text-red-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: November 17, 2025</p>

        {/* Content */}
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
            <p>
              This Privacy Policy describes how Clown Music ("we", "our", or "us") collects, uses, and shares 
              information when you use our application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p className="mb-2">We are committed to protecting your privacy. This app:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Does not collect personal information</li>
              <li>Does not require user registration or login</li>
              <li>Does not track your location</li>
              <li>Does not access your contacts, photos, or other personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Information</h2>
            <p>
              Since we do not collect personal information, we do not use or share any personal data. 
              The app functions entirely on your device without transmitting data to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
            <p>
              This app may contain links to external websites or services (such as Buy Me a Coffee). 
              These third-party services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Children's Privacy</h2>
            <p>
              Our app does not knowingly collect any information from children under the age of 13. 
              The app is designed to be safe for all ages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
            <p>
              Since we do not collect or store personal information, there is no personal data at risk. 
              All app functionality occurs locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p className="mb-2">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p><strong>Email:</strong> privacy@circusclown.app</p>
              <p><strong>Website:</strong> <a href="https://circusclown.app" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline break-words">https://circusclown.app</a></p>

          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h2>
            <p>
              As we do not collect personal data, there is no personal information to access, modify, or delete. 
              You have full control over the app by simply uninstalling it from your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Finally..</h2>
            <p>
              Thanks to my lad, Matt - Our first app together!
            </p>
          </section>



        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-red-300 text-center">
          <Link 
            to={createPageUrl("Home")} 
            className="text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            Return to App
          </Link>
        </div>
      </div>
    </div>
  );
}