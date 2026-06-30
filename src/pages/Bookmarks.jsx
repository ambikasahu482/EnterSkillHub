import React from "react";
import { useBookmarks } from "../context/BookmarkContext";

const Bookmarks = () => {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Saved Resources</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500">No bookmarks yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {bookmarks.map((item) => (
            <div key={item.id} className="p-4 border rounded-xl bg-white">
              <h3 className="font-semibold">{item.title}</h3>

              <button
                onClick={() => removeBookmark(item.id)}
                className="text-red-500 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;