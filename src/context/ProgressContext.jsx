import React, { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('user_roadmap_progress');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem('user_roadmap_progress', JSON.stringify(progress));
  }, [progress]);

  const toggleStepCompletion = (roadmapId, stepId) => {
    setProgress((prev) => {
      const currentSteps = prev[roadmapId] || [];
      let updatedSteps;

      if (currentSteps.includes(stepId)) {
        updatedSteps = currentSteps.filter(id => id !== stepId);
      } else {
        updatedSteps = [...currentSteps, stepId];
      }

      return {
        ...prev,
        [roadmapId]: updatedSteps
      };
    });
  };

  // Live percentage calculate karne ka logic
  const getRoadmapProgress = (roadmapId, totalSteps) => {
    if (!totalSteps || totalSteps === 0) return 0;
    const completedSteps = progress[roadmapId] || [];
    const percentage = (completedSteps.length / totalSteps) * 100;
    return Math.round(percentage);
  };

  return (
    <ProgressContext.Provider value={{ progress, toggleStepCompletion, getRoadmapProgress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};