import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, MapPin, Camera, AlertCircle, CheckCircle } from 'lucide-react';

const ReportProblem: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    address: '',
    urgency: 'medium',
    name: '',
    email: '',
    phone: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Infrastructure',
    'Cleanliness',
    'Street Lighting',
    'Public Safety',
    'Utilities',
    'Traffic & Roads',
    'Parks & Recreation',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        title: '',
        category: '',
        description: '',
        location: '',
        address: '',
        urgency: 'medium',
        name: '',
        email: '',
        phone: '',
      });
      setImagePreview(null);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">Report Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for helping improve our community. We've received your report and will review it shortly.
          </p>
          <p className="text-sm text-gray-500">
            Report ID: <span className="font-mono font-semibold text-teal-600">#CR-{Math.floor(Math.random() * 10000)}</span>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-dark-800 mb-3">Report a Problem</h1>
          <p className="text-gray-600">
            Help us improve the community by reporting issues. All fields marked with * are required.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-dark-800 mb-2">
                Problem Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Brief description of the issue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark-800 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-800 mb-2">
                  Urgency Level *
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-800 mb-2">
                Detailed Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Provide as much detail as possible about the issue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark-800 mb-2">
                  Location Name *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Central Park"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-800 mb-2">
                  Full Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Street address or landmark"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                {imagePreview ? (
                  <div className="space-y-4">
                    <img src={imagePreview} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                    <p className="text-sm text-teal-600 font-medium">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-dark-800 font-semibold mb-1">Upload Image</p>
                      <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                )}
              </label>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
              <h3 className="font-semibold text-dark-800 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-teal-600 mr-2" />
                Contact Information (Optional)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 20 1234 5678"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 md:px-8 py-6 flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Submit Report
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ReportProblem;
