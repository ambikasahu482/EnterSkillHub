import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { roadmapsData } from '../data/roadmaps';

const RoadmapDetails = () => {
  const { id } = useParams(); 

  //  Find actual data key base
  let resolvedId = id;
  let targetData = roadmapsData[id];
  
  if (targetData && targetData.referenceTo) {
    resolvedId = targetData.referenceTo;
    targetData = roadmapsData[resolvedId];
  }

  //  Standalone State
  const [completedSteps, setCompletedSteps] = useState(() => {
    const saved = localStorage.getItem('user_roadmap_progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed[resolvedId] || [];
    }
    return [];
  });

  // Jab bhi steps change hon, use LocalStorage me backup push karein
  useEffect(() => {
    const saved = localStorage.getItem('user_roadmap_progress');
    const currentProgressMap = saved ? JSON.parse(saved) : {};
    
    currentProgressMap[resolvedId] = completedSteps;
    localStorage.setItem('user_roadmap_progress', JSON.stringify(currentProgressMap));
  }, [completedSteps, resolvedId]);

  // Crash Guard Handling
  if (!targetData || !targetData.steps) {
    return (
      <div className="text-center py-16 bg-white max-w-xl mx-auto rounded-xl border mt-10 p-6">
        <p className="text-slate-500 font-medium mb-4">Roadmap blueprint steps are currently unavailable.</p>
        <Link to="/business-ideas" className="inline-block bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-xl text-xs">
          Back to All Ideas
        </Link>
      </div>
    );
  }

  // Click Handler Logic
  const handleStepToggle = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  // Live Live Percentage Multiplier Calculator
  const totalStepsCount = targetData.steps.length;
  const currentPercentage = totalStepsCount > 0 
    ? Math.round((completedSteps.length / totalStepsCount) * 100) 
    : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Title Header Card */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white p-6 sm:p-8 rounded-2xl shadow-md mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">{targetData.title}</h1>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">{targetData.description}</p>
        
        {/* Progress Bar Layout */}
        <div>
          <div className="flex justify-between text-xs font-bold mb-1.5 text-emerald-400">
            <span>TRACK PROGRESSION MASTER</span>
            <span>{currentPercentage}% COMPLETED</span>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-500 ease-out" 
              style={{ width: `${currentPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Interactive Steps Render Grid */}
      <div className="space-y-4">
        {targetData.steps.map((step, idx) => {
          const isDone = completedSteps.includes(step.id);
          return (
            <div 
              key={step.id} 
              className={`bg-white border rounded-xl p-5 flex items-start gap-4 transition-all ${
                isDone ? 'border-emerald-200 bg-emerald-50/20 shadow-inner' : 'border-slate-100 shadow-sm'
              }`}
            >
              {/* Clickable Circle Button */}
              <button 
                onClick={() => handleStepToggle(step.id)}
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-all ${
                  isDone ? 'bg-emerald-600 text-white shadow scale-105' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {isDone ? '✓' : idx + 1}
              </button>
              
              <div className="flex-grow">
                <h3 className={`font-bold text-base transition-all ${isDone ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapDetails;