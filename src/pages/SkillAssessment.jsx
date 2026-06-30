import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import skillsData from "../data/skills"; 

const SkillAssessment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSkillId, setActiveSkillId] = useState(null); 
  const navigate = useNavigate();

  const safeSkills = skillsData || [];

  // Categories extraction layer
  const categories = ["All", ...new Set(safeSkills.map((s) => s.category).filter(Boolean))];

  // Advanced Filtering Mechanism
  const filteredSkills = safeSkills.filter((skill) => {
    const matchesSearch =
      skill.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.category?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50/60 px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto">

          {/* Header Section: Responsive Typography with Fluid Spacing */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Learn & Explore New Skills 🚀
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2.5 px-2 leading-relaxed">
            Select your favorite skill, click and check it out and unlock step-by-step verified business blueprints.</p>
        </div>

        {/* Search Input Wrapper Box */}
          <div className="max-w-md mx-auto mb-6 sm:mb-8 px-1">
          <div className="relative shadow-sm rounded-xl overflow-hidden border border-slate-200 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
            <input
              type="text"
              placeholder="Search skills (e.g. Cooking, Design)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 text-sm focus:outline-none bg-white text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

          {/* Grid Layout For Categories Filters: Flex Wrap for small layouts */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 break-words ${
                selectedCategory === cat 
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/15 scale-105" 
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

{/* Main Dynamic Accordion Grid System */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm bg-white rounded-2xl border border-slate-100 max-w-xs sm:max-w-sm mx-auto shadow-sm">
            No items matched your filter criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredSkills.map((skill) => {
              const isOpen = activeSkillId === skill.id;

              return (
                <div 
                  key={skill.id} 
                  className={`bg-white p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isOpen 
                      ? "border-emerald-500 ring-4 ring-emerald-500/5 shadow-md" 
                      : "border-slate-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Top Interactive Click Area Container */}
                  <div 
                    className="cursor-pointer select-none group w-full"
                    onClick={() => setActiveSkillId(isOpen ? null : skill.id)}
                  >
                    <div className="flex justify-between items-center gap-2 mb-3">
                      <span className="text-2xl sm:text-3xl filter drop-shadow-sm flex-shrink-0">
                        {skill.icon || "💡"}
                      </span>
                      <span className="text-[9px] sm:text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold tracking-wider uppercase whitespace-nowrap">
                        {skill.category}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-3 w-full">
                      <h3 className="font-bold text-slate-800 text-base sm:text-lg group-hover:text-emerald-600 transition-colors break-words line-clamp-2">
                        {skill.name}
                      </h3>
                      {/* Smooth rotating arrow vector icon */}
                      <span className={`text-slate-400 text-[9px] sm:text-[10px] font-black transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-90 text-emerald-600" : "rotate-0"
                      }`}>
                        ▶
                      </span>
                    </div>
                  </div>
                  
                   {/* Dynamic Submenu Dropdown Panel (Smooth Height Transitions)  */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden w-full ${
                      isOpen 
                        ? "max-h-[500px] opacity-100 mt-4 pt-3 border-t border-dashed border-slate-100" 
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2.5 tracking-widest">
                      Available Blueprints:
                    </p>
                    
                    <div className="space-y-2">
                      {skill.businessIdeas && skill.businessIdeas.length > 0 ? (
                        skill.businessIdeas.map((idea, index) => (
                          <div 
                            key={index}
                            onClick={() => navigate(`/roadmap/${skill.id}`)}
                            className="p-2.5 bg-slate-50 hover:bg-emerald-50/70 rounded-xl text-xs font-semibold cursor-pointer transition-all flex justify-between items-center gap-3 border border-transparent hover:border-emerald-100 group"
                          >
                            <span className="text-slate-600 group-hover:text-slate-900 leading-tight break-words">
                              {idea}
                            </span>
                            {/* Direction vector inline-arrow indicator */}
                            <span className="text-emerald-600 font-bold text-xs transform translate-x-0 group-hover:translate-x-1 transition-transform flex-shrink-0">
                              ➔
                            </span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400 italic">No business ideas map ready yet.</p>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillAssessment;