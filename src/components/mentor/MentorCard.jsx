import React from "react";
import { FiStar, FiMessageCircle, FiBriefcase } from "react-icons/fi";

const MentorCard = ({ mentor, onBookSession }) => {
  if (!mentor) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col gap-4">
      
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-14 h-14 rounded-full object-cover border"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {mentor.name}
          </h3>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FiBriefcase /> {mentor.expertise}
          </p>
        </div>

        <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
          <FiStar />
          {mentor.rating}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-3">
        {mentor.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {mentor.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={() => onBookSession(mentor)}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-lg transition"
        >
          Book Session
        </button>

        <button className="flex items-center justify-center gap-1 px-3 py-2 border rounded-lg text-sm hover:bg-gray-100 transition">
          <FiMessageCircle />
          Chat
        </button>
      </div>
    </div>
  );
};

export default MentorCard;