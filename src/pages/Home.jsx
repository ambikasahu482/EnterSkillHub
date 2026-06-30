import React from "react";
import { Link } from "react-router-dom";
import {
  FiTrendingUp,
  FiBookOpen,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

import businessImg from "../assets/images/business.jpg";
import mentorsImg from "../assets/images/mentors.jpg";
import roadmapImg from "../assets/images/roadmap.jpg";
import thumbnailImg from "../assets/images/thumbnail.jpg";

import heroVideo from "../assets/videos/statup.mp4";

const Home = () => {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">

          <h1 className="text-3xl md:text-5xl font-bold">
            Turn Your Skills Into a Startup 🚀
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Learn, Build & Grow with AI-powered guidance, mentors and roadmaps.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/skill-assessment"
              className="bg-gray-200 text-blue-600 px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Start Assessment
            </Link>

            <Link
              to="/business-ideas"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Explore Ideas
            </Link>
          </div>

        </div>
      </section>

      {/* IMAGE SHOWCASE SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-2xl font-bold text-center mb-10">
    Explore EntreSkill Hub
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

    <div className="overflow-hidden rounded-xl shadow">
      <img
        src={businessImg}
        className="w-full h-56 object-cover"
        alt=""
      />
    </div>

    <div className="overflow-hidden rounded-xl shadow">
      <img
        src={mentorsImg}
        className="w-full h-56 object-cover"
        alt=""
      />
    </div>

    <div className="overflow-hidden rounded-xl shadow">
      <img
        src={roadmapImg}
        className="w-full h-56 object-cover"
        alt=""
      />
    </div>

    <div className="overflow-hidden rounded-xl shadow">
      <img
        src={thumbnailImg}
        className="w-full h-56 object-cover"
        alt=""
      />
    </div>

  </div>
</section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold text-center mb-10">
          Why EntreSkill Hub?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FiTrendingUp className="text-green-600 text-3xl mx-auto" />
            <h3 className="font-semibold mt-3">AI Growth</h3>
            <p className="text-sm text-gray-500">
              Smart recommendations for your skills
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FiBookOpen className="text-green-600 text-3xl mx-auto" />
            <h3 className="font-semibold mt-3">Learning Resources</h3>
            <p className="text-sm text-gray-500">
              Articles, videos & roadmaps
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FiUsers className="text-green-600 text-3xl mx-auto" />
            <h3 className="font-semibold mt-3">Expert Mentors</h3>
            <p className="text-sm text-gray-500">
              Connect with industry professionals
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FiTarget className="text-green-600 text-3xl mx-auto" />
            <h3 className="font-semibold mt-3">Roadmaps</h3>
            <p className="text-sm text-gray-500">
              Step-by-step startup journey
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-500 to-zinc-900 text-white py-16 text-center px-6">

        <h2 className="text-2xl font-bold">
          Ready to Build Your Startup?
        </h2>

        <p className="text-gray-300 mt-2">
          Start your journey today with AI-powered guidance
        </p>

        <Link
          to="/register"
          className="inline-block mt-5 bg-green-500 px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
        >
          Get Started
        </Link>

      </section>

    </div>
  );
};

export default Home;