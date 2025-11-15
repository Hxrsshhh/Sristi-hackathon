import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportProblem from './pages/ReportProblem';
import BrowseReports from './pages/BrowseReports';
import ReportDetails from './pages/ReportDetails';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportProblem />} />
            <Route path="/browse" element={<BrowseReports />} />
            <Route path="/report/:id" element={<ReportDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
