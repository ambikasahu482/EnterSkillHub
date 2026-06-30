import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-gray-100">

      {/* Top Header */}
      <header className="p-4">
        <Link to="/" className="text-xl font-bold text-green-600">
          EntreSkill Hub
        </Link>
      </header>

      {/* Main Center Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} EntreSkill Hub. All rights reserved.
      </footer>

    </div>
  );
};

export default AuthLayout;