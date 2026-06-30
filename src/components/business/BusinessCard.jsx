import React from "react";
import { Link } from "react-router-dom";
import {
  FiBookmark,
  FiTrendingUp,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";

const BusinessCard = ({
  idea,
  onBookmark,
  isBookmarked = false,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={idea.image}
          alt={idea.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {idea.category}
        </span>

        {/* Bookmark */}
        <button
          onClick={() => onBookmark?.(idea.id)}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isBookmarked
              ? "bg-yellow-400 text-white"
              : "bg-white text-gray-700"
          } shadow`}
        >
          <FiBookmark />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {idea.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {idea.description}
        </p>

        {/* Info */}
        <div className="space-y-2 mb-5">

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FiDollarSign />
            <span>{idea.investment}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FiTrendingUp />
            <span>{idea.earnings}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FiClock />
            <span>{idea.duration}</span>
          </div>

        </div>

        {/* Skill */}
        <div className="mb-4">
          <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
            {idea.skill}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/roadmap/${idea.roadmapId}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Roadmap
          </Link>

          <button
            onClick={() => onBookmark?.(idea.id)}
            className="px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;