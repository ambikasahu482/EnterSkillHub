import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Ensure this matches your project path

const Profile = () => {
  const { user, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // User data sync (Safe loading)
  useEffect(() => {
    if (user) {
      setName(user.name || "User");
      setEmail(user.email || "email@example.com");
    }
  }, [user]);

  // Agar user nahi hai, toh login page par bhej dein
  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-slate-500">
        <p className="mb-4">You are not logged in.</p>
        <button 
          onClick={() => navigate("/login")} 
          className="bg-teal-800 text-white px-6 py-2 rounded-xl"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleSave = () => {
    setEditMode(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">My Profile</h1>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        {/* Avatar & Info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-teal-800 text-white flex items-center justify-center text-2xl font-black">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{name}</h2>
            <p className="text-sm text-slate-500">{email}</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
            <input
              disabled={!editMode}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1 disabled:bg-slate-100 focus:ring-2 focus:ring-teal-600 outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
            <input
              disabled={!editMode}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mt-1 disabled:bg-slate-100 focus:ring-2 focus:ring-teal-600 outline-none transition-all"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-teal-800 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-teal-900 transition-all"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              Save Changes
            </button>
          )}

          <button
            onClick={() => { logout(); navigate("/login"); }}
            className="bg-red-50 text-red-600 px-6 py-2.5 rounded-xl font-bold hover:bg-red-100 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;