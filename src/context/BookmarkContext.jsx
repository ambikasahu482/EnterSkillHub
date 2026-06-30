import React, { createContext, useState, useEffect } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : { ideas: [], mentors: [], resources: [] };
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (category, item) => {
    setBookmarks(prev => {
      const list = prev[category] || [];
      const exists = list.some(i => i.id === item.id);
      const updatedList = exists 
        ? list.filter(i => i.id !== item.id)
        : [...list, item];
      return { ...prev, [category]: updatedList };
    });
  };

  const isBookmarked = (category, id) => {
    return (bookmarks[category] || []).some(i => i.id === id);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};