import { useState, useEffect } from 'react';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('user_blueprints_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('user_blueprints_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (ideaId) => {
    setBookmarks((prev) => 
      prev.includes(ideaId) ? prev.filter(id => id !== ideaId) : [...prev, ideaId]
    );
  };

  const isBookmarked = (ideaId) => bookmarks.includes(ideaId);
  const getTotalBookmarksCount = () => bookmarks.length;

  return { bookmarks, toggleBookmark, isBookmarked, getTotalBookmarksCount };
};