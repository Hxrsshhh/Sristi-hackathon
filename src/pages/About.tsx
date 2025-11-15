import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of community collaboration to create positive change.',
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Every report is tracked openly, ensuring accountability at every step.',
    },
    {
      icon: Heart,
      title: 'Care & Compassion',
      description: 'We care about making our neighbourhoods safer and more liveable for everyone.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in how we address and resolve community issues.',
    },
  ];

  const team = [
    { name: 'John Smith', role: 'Founder & CEO', image: 'https://i.pravatar.cc/150?img=12' },
    { name: 'Sarah Johnson', role: 'Community Manager', image: 'https://i.pravatar.cc/150?img=45' },
    { name: 'Michael Brown', role: 'Technical Lead', image: 'https://i.pravatar.cc/150?img=33' },
    { name: 'Emma Wilson', role: 'Operations Director', image: 'https://i.pravatar.cc/150?img=47' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-teal-50 max-w-3xl mx-auto">
              We're on a mission to empower communities to report, track, and resolve local issues together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Community Reports was born from a simple observation: many local issues go unreported or unresolved because there's no easy way for residents to communicate with local authorities.
                </p>
                <p>
                  In 2023, we launched this platform to bridge that gap. What started as a small initiative in one neighbourhood has grown into a movement that's helping thousands of communities across the country.
                </p>
                <p>
                  Today, we're proud to have facilitated the resolution of over 2,000 community issues, from broken streetlights to damaged infrastructure, making neighbourhoods safer and more liveable for everyone.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/14b8a6/ffffff?text=Community+Together"
                alt="Community"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working to make communities better
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-lg font-bold text-dark-800 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">Join Our Mission</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Together, we can create cleaner, safer, and more vibrant communities for everyone.
          </p>
          <a
            href="/report"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Making a Difference
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
