import React from "react";

const MentorList = ({ mentors, onOpenProfile, onBookSession, onChat }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold text-gray-800">Available Mentors</h2>
      <p className="text-gray-500 mb-6 text-sm">Connect with industry experts and grow your skills</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div 
            key={mentor.id} 
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
            onClick={() => onOpenProfile(mentor)}
          >
            <div>
              {/* Profile Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{mentor.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
                      <span className="material-icons text-base">💼</span>
                      <span>{mentor.expertise}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 font-semibold text-sm bg-yellow-50 px-2 py-1 rounded-lg">
                  <span>⭐</span> {mentor.rating}
                </div>
              </div>
              
              {/* Brief Intro */}
              <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                {mentor.bio}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-5" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => onBookSession(mentor)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors text-sm"
              >
                Book Session
              </button>
              <button 
                onClick={() => onChat(mentor)}
                className="flex items-center gap-1.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm"
              >
                💬 Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;