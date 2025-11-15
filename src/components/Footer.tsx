import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Community Reports</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Making our community better, one report at a time. Together we can create a safer, cleaner environment.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-teal-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/browse" className="text-sm hover:text-teal-400 transition-colors">Browse Reports</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm hover:text-teal-400 transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-teal-400 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Community Street, City Centre, CC1 2AB</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-sm">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-sm">hello@communityreports.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-10 h-10 bg-dark-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400">
              Stay updated with community news and resolved issues.
            </p>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Community Reports. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
