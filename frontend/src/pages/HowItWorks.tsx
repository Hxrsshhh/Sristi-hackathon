import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Users, CheckCircle, Bell, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Report an Issue',
      description: 'Spot a problem in your community? Submit a detailed report with photos and location information.',
      color: 'teal',
    },
    {
      icon: Search,
      title: 'Review & Verification',
      description: 'Our team reviews your report and verifies the details to ensure accuracy and relevance.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Other residents can vote and comment on reports, showing community priority.',
      color: 'purple',
    },
    {
      icon: Bell,
      title: 'Assignment & Action',
      description: 'The issue is assigned to the relevant department or team for resolution.',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'Progress Updates',
      description: 'Track the status of your report with regular updates throughout the resolution process.',
      color: 'yellow',
    },
    {
      icon: CheckCircle,
      title: 'Resolution',
      description: 'Once resolved, the report is marked as complete and the community is notified.',
      color: 'green',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to resolve an issue?',
      answer: 'Resolution time varies depending on the complexity and urgency of the issue. Most reports are reviewed within 24-48 hours, and resolution can take anywhere from a few days to several weeks.',
    },
    {
      question: 'Can I report issues anonymously?',
      answer: 'Yes, you can submit reports without providing contact information. However, we encourage you to include your details so we can update you on the progress.',
    },
    {
      question: 'What types of issues can I report?',
      answer: 'You can report various community issues including infrastructure problems, cleanliness concerns, street lighting, public safety issues, utilities, and more.',
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Our website is fully responsive and works seamlessly on mobile devices. A dedicated mobile app is currently in development.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-teal-50 max-w-3xl mx-auto">
              A simple, transparent process from reporting to resolution
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-xl p-8 h-full hover:shadow-lg transition-all border border-gray-200">
                  <div className="absolute -top-4 left-8">
                    <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center shadow-lg`}>
                      <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="text-sm font-bold text-teal-600 mb-2">STEP {index + 1}</div>
                    <h3 className="text-xl font-bold text-dark-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-dark-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Report your first issue and help make your community better today.
          </p>
          <a
            href="/report"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Submit a Report
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
