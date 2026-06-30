import React, { useState, useContext, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { businessIdeas } from '../data/businessIdeas';
import { AuthContext } from '../context/AuthContext';
import { BookmarkContext } from '../context/BookmarkContext';

const BusinessIdeas = () => {
  const { user } = useContext(AuthContext);
  const { toggleBookmark, isBookmarked } = useContext(BookmarkContext);
  const [searchParams] = useSearchParams();
  const [filteredIdeas, setFilteredIdeas] = useState(businessIdeas);

  useEffect(() => {
    const filterActive = searchParams.get('filtered');
    if (filterActive && user?.skillsScored) {
      const highestSkill = Object.keys(user.skillsScored).reduce((a, b) => 
        user.skillsScored[a] > user.skillsScored[b] ? a : b
      );
      const matched = businessIdeas.filter(idea => idea.recommendedSkill === highestSkill);
      setFilteredIdeas(matched.length > 0 ? matched : businessIdeas);
    } else {
      setFilteredIdeas(businessIdeas);
    }
  }, [searchParams, user]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-950">Viable Business Ideas Hub</h1>
          <p className="text-slate-500 text-sm mt-1">Apne targeted core skillset score ke standard blueprints aur ideas launch karein.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => {
          const bookmarked = isBookmarked('ideas', idea.id);
          return (
            <div key={idea.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-semibold">{idea.category}</span>
                  <button 
                    onClick={() => toggleBookmark('ideas', idea)} 
                    className={`text-lg transition-transform active:scale-90 ${bookmarked ? 'text-amber-500' : 'text-slate-300 hover:text-slate-400'}`}
                  >
                    ★
                  </button>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{idea.title}</h3>
                <p className="text-slate-500 text-xs mb-3">Investment Range: <span className="font-bold text-slate-700">{idea.investment}</span></p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{idea.description}</p>
              </div>

              <Link 
                to={`/roadmap/${idea.roadmapId}`}
                className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition"
              >
                View Step-by-Step Roadmap ➔
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessIdeas;