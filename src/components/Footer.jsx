import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-500 to-zinc-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              EntreSkill Hub
            </h2>

            <p className="text-sm leading-6">
              Transform your skills into successful businesses.
              Discover opportunities, follow structured roadmaps,
              learn from resources, and connect with expert mentors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link 
  to="/skill-assessment" 
  className="hover:text-white transition"
>
  Skills Assessment
</Link>
              </li>

              <li>
                <Link
                  to="/business-ideas"
                  className="hover:text-white transition"
                >
                  Business Ideas
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="hover:text-white transition"
                >
                  Learning Resources
                </Link>
              </li>

              <li>
                <Link
                  to="/mentors"
                  className="hover:text-white transition"
                >
                  Mentors
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link 
  to="/privacy" 
  className="hover:text-white transition text-sm"
>
  Privacy Policy
</Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <FiMail />
                <span>support@entreskillhub.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone />
                <span>+91 9123456789</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMapPin />
                <span>India</span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">

              <a
                href="#"
                className="hover:text-white transition"
              >
                <FiFacebook />
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                <FiLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                <FiYoutube />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} EntreSkill Hub. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;