import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, MapPin, TrendingUp, Users, CheckCircle, Clock, AlertTriangle, Construction, Lightbulb, Trash2, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Total Reports', value: '2,847', icon: AlertCircle, color: 'teal' },
    { label: 'Resolved Issues', value: '1,923', icon: CheckCircle, color: 'green' },
    { label: 'In Progress', value: '642', icon: Clock, color: 'yellow' },
    { label: 'Active Users', value: '5,234', icon: Users, color: 'blue' },
  ];

  const categories = [
    { name: 'Infrastructure', icon: Construction, count: 456, color: 'bg-orange-100 text-orange-600' },
    { name: 'Cleanliness', icon: Trash2, count: 789, color: 'bg-green-100 text-green-600' },
    { name: 'Street Lighting', icon: Lightbulb, count: 234, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Public Safety', icon: AlertTriangle, count: 345, color: 'bg-red-100 text-red-600' },
    { name: 'Utilities', icon: Zap, count: 567, color: 'bg-blue-100 text-blue-600' },
    { name: 'Other', icon: AlertCircle, count: 456, color: 'bg-purple-100 text-purple-600' },
  ];

  const recentReports = [
    { id: 1, title: 'Broken Street Light on Main Road', category: 'Street Lighting', status: 'pending', location: 'High Street', time: '2 hours ago' },
    { id: 2, title: 'Pothole Near Community Centre', category: 'Infrastructure', status: 'in-progress', location: 'Park Avenue', time: '5 hours ago' },
    { id: 3, title: 'Overflowing Bin in Park', category: 'Cleanliness', status: 'resolved', location: 'Central Park', time: '1 day ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'resolved': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTEyIDZjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Report Problems,<br />Build Better Communities
            </h1>
            <p className="text-lg sm:text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Help improve your neighbourhood by reporting issues. From broken streetlights to potholes, your voice matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/report"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Report an Issue
              </Link>
              <Link
                to="/browse"
                className="px-8 py-4 bg-teal-700 bg-opacity-50 backdrop-blur-sm border-2 border-white border-opacity-30 text-white rounded-lg font-semibold hover:bg-opacity-70 transition-all"
              >
                Browse Reports
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl font-bold text-dark-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Problem Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a category to see related reports or submit a new issue
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-dark-800 mb-2 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} reports</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-2">Recent Reports</h2>
              <p className="text-gray-600">Latest issues reported by the community</p>
            </div>
            <Link
              to="/browse"
              className="hidden sm:flex items-center text-teal-600 hover:text-teal-700 font-medium"
            >
              View All
              <TrendingUp className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-800 mb-1">{report.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {report.location}
                          </span>
                          <span>•</span>
                          <span>{report.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:flex-shrink-0">
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                      {report.category}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(report.status)}`}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1).replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/browse"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
            >
              View All Reports
              <TrendingUp className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of community members working together to create a better environment for everyone.
          </p>
          <Link
            to="/report"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Submit Your First Report
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
