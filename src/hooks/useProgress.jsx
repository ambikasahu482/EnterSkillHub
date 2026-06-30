import { useState, useEffect } from 'react';

export const useProgress = () => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('user_roadmap_progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('user_roadmap_progress', JSON.stringify(progress));
  }, [progress]);

  // For Dashboard Metric
  const getTotalCompletedSteps = () => {
    return Object.values(progress).reduce((total, stepsArray) => total + stepsArray.length, 0);
  };

  return { progress, setProgress, getTotalCompletedSteps };
};