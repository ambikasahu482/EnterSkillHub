import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SkillAssessment from "../pages/SkillAssessment";
import BusinessIdeas from "../pages/BusinessIdeas";
import RoadmapDetails from "../pages/RoadmapDetails";
import LearningResources from "../pages/LearningResources";
import Mentors from "../pages/Mentors";
import Dashboard from "../pages/Dashboard";
import Bookmarks from "../pages/Bookmarks";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

// Layouts
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route
          path="skills"
          element={<SkillAssessment />}
        />

        <Route
          path="business-ideas"
          element={<BusinessIdeas />}
        />

        <Route
          path="roadmap/:id"
          element={<RoadmapDetails />}
        />

        <Route
          path="resources"
          element={<LearningResources />}
        />

        <Route
          path="mentors"
          element={<Mentors />}
        />

        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="bookmarks"
          element={<Bookmarks />}
        />

        <Route
          path="profile"
          element={<Profile />}
        />
      </Route>

      {/* Auth Routes */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* 404 Page */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;