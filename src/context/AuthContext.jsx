import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    // Simulated auth logic
    const mockUser = { id: 'u1', name: 'Ambika Sahu', email, role: 'user', skillsScored: null };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return true;
  };

  const register = (name, email, password) => {
    const mockUser = { id: 'u1', name, email, role: 'user', skillsScored: null };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateAssessment = (scores) => {
    if (!user) return;
    const updated = { ...user, skillsScored: scores };
    setUser(updated);
    localStorage.setItem('user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateAssessment }}>
      {children}
    </AuthContext.Provider>
  );
};