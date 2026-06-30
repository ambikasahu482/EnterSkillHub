import React from "react";

const ProgressBar = ({ progress = 0, label = true }) => {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full">

      {/* Label */}
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-green-600">
            {safeProgress}%
          </span>
        </div>
      )}

      {/* Bar Background */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        {/* Fill */}
        <div
          className="h-3 bg-green-500 rounded-full transition-all duration-500"
          style={{ width: `${safeProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;