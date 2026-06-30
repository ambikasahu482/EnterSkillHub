import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';     
import { useBookmarks } from '../hooks/useBookmarks';   
const Dashboard = () => {
  const navigate = useNavigate();
  
  // Custom hooks initializes hooks variables safely
  const { getTotalCompletedSteps } = useProgress();
  const { getTotalBookmarksCount } = useBookmarks();

  const totalSteps = getTotalCompletedSteps();
  const totalSaved = getTotalBookmarksCount();

  // Skill evaluation logic benchmark metrics
  const assessmentStatus = totalSteps > 0 ? "Active Progression" : "Pending Action";
  const assessmentColor = totalSteps > 0 ? "text-emerald-600 bg-emerald-50 border-emerald-200" : "text-amber-600 bg-amber-50 border-amber-200";

  return (
    <div className="w-full min-h-screen bg-slate-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
        
        {/* Top Floating Greetings Header bar layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-5 mb-6 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Welcome back, Ambika Sahu! 👋
            </h2>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Logged in authorization panel verified</p>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 px-3.5 py-2 rounded-xl transition-all"
          >
            ➔ Go to Home Screen
          </button>
        </div>

        {/* Dashboard core title segment description info */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Dashboard Panel Overview
          </h1>
          <p className="text-slate-500 text-sm mt-1 max-w-xl leading-relaxed">
            Apne targeted processing metrics score aur dynamic blueprints trace dekhein.
          </p>
        </div>

        {/* GRID METRICS HOOK MATRIX MODULES PANEL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          
          {/* Card 1: Completed Task Progression tracker counters */}
          <div className="bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow transition-all">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
              Completed Tasks Steps
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {totalSteps} <span className="text-sm font-semibold text-slate-500">Steps</span>
            </h3>
          </div>

          {/* Card 2: Saved Bookmarked dynamic Blueprints */}
          <div className="bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow transition-all">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
              Bookmarked Blueprints
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {totalSaved} <span className="text-sm font-semibold text-slate-500">Saved</span>
            </h3>
          </div>

          {/* Card 3: Live Assessment status condition trigger layout */}
          <div className="bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow transition-all sm:col-span-2 lg:col-span-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">
              Skill Assessment Status
            </p>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${assessmentColor}`}>
              <span>{totalSteps > 0 ? '✅' : '❌'}</span>
              <span>{assessmentStatus}</span>
            </div>
          </div>

        </div>

        {/* Dynamic Inner Vector analytical Matrix mapping sheet design layout box */}
        <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🎯</span>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base">
              My Identified Skill Vector Matrix
            </h4>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            {totalSteps > 0 
              ? "Badhai ho! Aapne active roadmaps ko explore karna shuru kar diya hai. Apne pending validation targets ko complete karne ke liye actions steps ko track karte rahein." 
              : "Aapka dynamic evaluation profile matrix khali hai. Apne blueprints ko unlock karne ke liye footer se Skill Assessment explore karein."
            }
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;