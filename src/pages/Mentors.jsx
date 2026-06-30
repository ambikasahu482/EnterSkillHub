import React, { useState } from "react";
import MentorList from "../components/mentor/MentorList";
import MentorProfile from "../components/mentor/MentorProfile";
import mentorsData from "../data/mentors";

const Mentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleOpenProfile = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleBookSession = (mentor) => {
    alert(`Session booked with ${mentor.name} (demo mode)`);
  };

  const handleChat = (mentor) => {
    alert(`Starting chat with ${mentor.name} (demo mode)`);
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 border-b pb-3">
        Mentors Hub
      </h1>

      {selectedMentor ? (
        <div>
          <button
            onClick={() => setSelectedMentor(null)}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-4 py-2 rounded-xl"
          >
            ← Back to Mentors List
          </button>

          <MentorProfile
            mentor={selectedMentor}
            onBookSession={handleBookSession}
            onChat={handleChat}
          />
        </div>
      ) : (
        <MentorList
          mentors={mentorsData}
          onOpenProfile={handleOpenProfile}
          onBookSession={handleBookSession}
          onChat={handleChat}
        />
      )}
    </div>
  );
};

export default Mentors;