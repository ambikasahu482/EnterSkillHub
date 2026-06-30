import React from "react";

const MentorProfile = ({ mentor, onBookSession, onChat }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
        <img 
          src={mentor.image} 
          alt={mentor.name} 
          className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500 shadow"
        />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-2xl font-bold text-gray-900">{mentor.name}</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-500 font-bold bg-yellow-50 px-3 py-1 rounded-full text-sm w-fit mx-auto sm:mx-0">
              ⭐ {mentor.rating} ({mentor.sessions} sessions)
            </div>
          </div>
          
          <p className="text-emerald-600 font-medium text-base mt-1">{mentor.expertise}</p>
          <p className="text-gray-500 text-sm mt-1">📍 {mentor.location} | ⏳ {mentor.experience} Experience</p>
          
          <div className="mt-4">
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${mentor.availability === 'Available' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
              ● {mentor.availability}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 my-6"></div>

      {/* About Section */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2">About Mentor</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{mentor.bio}</p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Key Skills</h3>
        <div className="flex flex-wrap gap-2">
          {mentor.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button 
          onClick={() => onBookSession(mentor)}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
        >
          Book Active Session
        </button>
        <button 
          onClick={() => onChat(mentor)}
          className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors text-center"
        >
          Start Conversation (Chat)
        </button>
      </div>
    </div>
  );
};

export default MentorProfile;