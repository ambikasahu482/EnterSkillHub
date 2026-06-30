import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Central Providers Context wrapper assembly mapping */
import { AuthProvider } from "./context/AuthContext";
import { BookmarkProvider } from "./context/BookmarkContext"; 
import { ProgressProvider } from "./context/ProgressContext";

/* Router Visual Structural Layout Wrapper nodes */
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

/* Public / Private Feature Target View Nodes */
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SkillAssessment from './pages/SkillAssessment';
import BusinessIdeas from './pages/BusinessIdeas';
import RoadmapDetails from './pages/RoadmapDetails';
import LearningResources from './pages/LearningResources';
import Mentors from './pages/Mentors';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import InfoPage from './pages/Infopage';

const App = () => {
  return (
    <AuthProvider>
      <BookmarkProvider>
        <ProgressProvider>
          <Routes>
            
            {/* 🌐 MAIN PUBLIC INTERFACE WRAPPER */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/skill-assessment" element={<SkillAssessment />} />
              <Route path="/business-ideas" element={<BusinessIdeas />} />
              <Route path="/roadmap/:id" element={<RoadmapDetails />} />
              <Route path="/resources" element={<LearningResources />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<InfoPage />} />
              <Route path="/contact" element={<InfoPage />} />
              <Route path="/privacy" element={<InfoPage />} />
              <Route path="/terms" element={<InfoPage />} />
            </Route>

            {/* 📊 DEDICATED AUTH CONTROLLED PANEL DASHBOARD ROUTE */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

          </Routes>
        </ProgressProvider>
      </BookmarkProvider>
    </AuthProvider>
  );
};

export default App;