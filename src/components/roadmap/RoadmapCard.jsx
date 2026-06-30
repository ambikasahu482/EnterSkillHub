import React from "react";
import { FiArrowRight, FiTarget } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const RoadmapCard = ({ roadmap, onOpen }) => {
  if (!roadmap) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-green-600">
          <FiTarget />
          <span className="text-xs font-medium">Roadmap</span>
        </div>

        <span className="text-xs text-gray-400">
          {roadmap.duration || "4-6 weeks"}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        {roadmap.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-2">
        {roadmap.description}
      </p>

      {/* Steps Info */}
      <div className="text-xs text-gray-500">
        {roadmap.steps?.length || 0} steps included
      </div>

      {/* Progress Bar */}
      {typeof roadmap.progress === "number" && (
        <ProgressBar progress={roadmap.progress} label={false} />
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {roadmap.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action */}
      <button
        onClick={() => onOpen?.(roadmap)}
        className="mt-2 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-lg transition"
      >
        View Roadmap <FiArrowRight />
      </button>
    </div>
  );
};

export default RoadmapCard;