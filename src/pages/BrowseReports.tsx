import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, AlertCircle, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const BrowseReports: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const categories = ['All', 'Infrastructure', 'Cleanliness', 'Street Lighting', 'Public Safety', 'Utilities', 'Other'];
  const statuses = ['All', 'Pending', 'In Progress', 'Resolved'];

  const reports = [
    { id: 1, title: 'Broken Street Light on Main Road', category: 'Street Lighting', status: 'pending', location: 'High Street', date: '2025-01-15', priority: 'high', votes: 23 },
    { id: 2, title: 'Pothole Near Community Centre', category: 'Infrastructure', status: 'in-progress', location: 'Park Avenue', date: '2025-01-14', priority: 'critical', votes: 45 },
    { id: 3, title: 'Overflowing Bin in Park', category: 'Cleanliness', status: 'resolved', location: 'Central Park', date: '2025-01-13', priority: 'medium', votes: 12 },
    { id: 4, title: 'Graffiti on Public Building', category: 'Public Safety', status: 'pending', location: 'Library Square', date: '2025-01-15', priority: 'low', votes: 8 },
    { id: 5, title: 'Damaged Pavement on Oak Street', category: 'Infrastructure', status: 'in-progress', location: 'Oak Street', date: '2025-01-12', priority: 'high', votes: 34 },
    { id: 6, title: 'Water Leak in Community Garden', category: 'Utilities', status: 'pending', location: 'Rose Garden', date: '2025-01-14', priority: 'medium', votes: 19 },
    { id: 7, title: 'Broken Bench in Playground', category: 'Infrastructure', status: 'resolved', location: 'Kids Park', date: '2025-01-11', priority: 'medium', votes: 15 },
    { id: 8, title: 'Blocked Storm Drain', category: 'Utilities', status: 'in-progress', location: 'River Road', date: '2025-01-13', priority: 'high', votes: 28 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-5 h-5" />;
      case 'in-progress': return <AlertTriangle className="w-5 h-5" />;
      case 'resolved': return <CheckCircle className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'resolved': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || report.status === selectedStatus.toLowerCase().replace(' ', '-');
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-dark-800 mb-3">Browse Reports</h1>
          <p className="text-gray-600">
            View and track all reported issues in the community
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-3">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                {statuses.map(status => (
                  <option key={status} value={status.toLowerCase()}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-dark-800">{filteredReports.length}</span> reports
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Sort by: Most Recent</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/report/${report.id}`}>
                <div className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all p-6 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <AlertCircle className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-800 mb-2 group-hover:text-teal-600 transition-colors">
                          {report.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                            {report.category}
                          </span>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 ${getStatusColor(report.status)}`}>
                            {getStatusIcon(report.status)}
                            {report.status.charAt(0).toUpperCase() + report.status.slice(1).replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{report.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{new Date(report.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${getPriorityColor(report.priority)}`}>
                        {report.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{report.votes} votes</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-dark-800 mb-2">No Reports Found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseReports;
