import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const RoadmapStep = ({ step, isCompleted, onToggle }) => {
  if (!step) return null;

  return (
    <div
      onClick={() => onToggle?.(step.id)}
      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-start ${
        isCompleted
          ? "bg-green-50 border-green-400"
          : "bg-white border-gray-200 hover:border-green-300"
      }`}
    >

      {/* Icon */}
      <div className="mt-1">
        <FiCheckCircle
          className={`text-xl ${
            isCompleted ? "text-green-600" : "text-gray-300"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-1">

        {/* Title */}
        <h3
          className={`font-semibold ${
            isCompleted ? "text-green-700" : "text-gray-800"
          }`}
        >
          {step.title}
        </h3>

        {/* Detail */}
        <p className="text-sm text-gray-600 mt-1">
          {step.detail}
        </p>

      </div>

      {/* Status */}
      <div className="text-xs text-gray-400">
        {isCompleted ? "Done" : "Pending"}
      </div>

    </div>
  );
};

export default RoadmapStep;