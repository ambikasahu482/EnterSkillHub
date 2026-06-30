import React from "react";
import { FiBookmark, FiCheck } from "react-icons/fi";
import { useBookmarks } from "../../context/BookmarkContext";

const BookmarkButton = ({ item }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const saved = isBookmarked(item.id);

  const toggleBookmark = () => {
    if (saved) removeBookmark(item.id);
    else addBookmark(item);
  };

  return (
    <button
      onClick={toggleBookmark}
      className="text-sm flex items-center gap-1 px-3 py-1 border rounded-lg hover:bg-gray-100"
    >
      {saved ? <FiCheck className="text-green-600" /> : <FiBookmark />}
      {saved ? "Saved" : "Save"}
    </button>
  );
};

export default BookmarkButton;