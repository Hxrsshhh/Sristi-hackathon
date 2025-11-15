import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Clock, User, MessageSquare, ThumbsUp, Share2, Flag, CheckCircle, AlertTriangle } from 'lucide-react';

const ReportDetails: React.FC = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  const report = {
    id: id,
    title: 'Broken Street Light on Main Road',
    category: 'Street Lighting',
    status: 'in-progress',
    priority: 'high',
    location: 'High Street, Near Post Office',
    address: '123 High Street, City Centre, CC1 2AB',
    date: '2025-01-15',
    reportedBy: 'Sarah Johnson',
    description: 'The street light near the post office has been broken for the past week. This section of the road becomes very dark at night, creating safety concerns for pedestrians. The light appears to have electrical issues as it flickers occasionally before going completely dark.',
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/14b8a6/ffffff?text=Street+Light+Issue',
    votes: 23,
    updates: [
      { date: '2025-01-16', status: 'in-progress', message: 'Issue has been assigned to the maintenance team. Inspection scheduled for tomorrow.', author: 'City Council' },
      { date: '2025-01-15', status: 'pending', message: 'Report received and under review.', author: 'System' },
    ],
    comments: [
      { id: 1, author: 'John Smith', date: '2025-01-15', text: 'I\'ve noticed this too. Very dangerous at night, especially for elderly residents.' },
      { id: 2, author: 'Emma Wilson', date: '2025-01-16', text: 'Thank you for reporting this. It\'s been concerning for a while.' },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'resolved': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleVote = () => {
    setHasVoted(!hasVoted);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComment('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/browse" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Reports
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(report.status)}`}>
                    {report.status === 'in-progress' ? 'In Progress' : report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${getPriorityColor(report.priority)}`}>
                    {report.priority.toUpperCase()} Priority
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                    {report.category}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">{report.title}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">{report.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">{new Date(report.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">Reported by {report.reportedBy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm">Report #{report.id}</span>
                  </div>
                </div>

                <img 
                  src={report.image} 
                  alt={report.title} 
                  className="w-full h-auto rounded-xl mb-6"
                />

                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-dark-800 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{report.description}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-dark-800 mb-2">Full Address</h4>
                  <p className="text-gray-600">{report.address}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={handleVote}
                    className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      hasVoted
                        ? 'bg-teal-600 text-white'
                        : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                    }`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                    {hasVoted ? 'Voted' : 'Support This'} ({report.votes + (hasVoted ? 1 : 0)})
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center gap-2">
                    <Flag className="w-5 h-5" />
                    Flag
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-dark-800 mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-teal-600" />
                Comments ({report.comments.length})
              </h2>

              <form onSubmit={handleCommentSubmit} className="mb-6">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none mb-3"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Post Comment
                </button>
              </form>

              <div className="space-y-4">
                {report.comments.map((comment) => (
                  <div key={comment.id} className="border-l-4 border-teal-200 pl-4 py-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-dark-800">{comment.author}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-dark-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-teal-600" />
                Status Updates
              </h2>

              <div className="space-y-4">
                {report.updates.map((update, index) => (
                  <div key={index} className="relative pl-6 pb-4 last:pb-0">
                    <div className="absolute left-0 top-1 w-4 h-4 bg-teal-600 rounded-full"></div>
                    {index !== report.updates.length - 1 && (
                      <div className="absolute left-1.5 top-5 bottom-0 w-0.5 bg-gray-200"></div>
                    )}
                    <div className="mb-1">
                      <span className="text-xs text-gray-500">
                        {new Date(update.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(update.status)}`}>
                      {update.status === 'in-progress' ? 'In Progress' : update.status.charAt(0).toUpperCase() + update.status.slice(1)}
                    </div>
                    <p className="text-sm text-gray-700">{update.message}</p>
                    <p className="text-xs text-gray-500 mt-1">By {update.author}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
