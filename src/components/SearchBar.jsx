import React from "react";

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search skills, categories..."}
        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-sm shadow-sm"
      />
    </div>
  );
};

export default SearchBar;