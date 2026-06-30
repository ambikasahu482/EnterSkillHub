import React, { useContext } from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const DashboardLayout = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-500 text-white flex flex-col justify-between hidden md:flex">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-teal-900">Entre</span>
            <span className="text-slate-800">Skill</span>
            <span className="ml-1 bg-amber-500 text-white text-xs px-2 py-0.5 rounded-md">Hub</span>
          </Link>
          <nav className="mt-8 space-y-2">
            <Link to="/dashboard" className="block py-2.5 px-4 rounded transition bg-slate-800 hover:bg-slate-800">📊 Overview Dashboard</Link>
            <Link to="/profile" className="block py-2.5 px-4 rounded transition hover:bg-slate-800">👤 My User Profile</Link>
            <Link to="/business-ideas" className="block py-2.5 px-4 rounded transition hover:bg-slate-800">💡 Explore Ideas</Link>
          </nav>
        </div>
        <div className="p-6">
          <button onClick={logout} className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-xl transition-colors">
            Logout🚪
          </button>
        </div>
      </aside>

      {/* Main Panel View */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <header className="bg-white h-16 shadow-sm flex items-center justify-between px-6">
          <div className="font-bold text-lg text-slate-800">Welcome back, {user.name}!</div>
          <Link to="/" className="text-sm font-semibold text-emerald-600 hover:underline md:hidden">Home Menu</Link>
        </header>
        <main className="p-6 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;