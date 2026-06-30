import React, { useMemo, useState } from "react";
import BusinessCard from "./BusinessCard";
import SearchBar from "../common/SearchBar";
import { businessIdeas } from "../../data/businessIdeas";

const BusinessList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [bookmarks, setBookmarks] = useState([]);

  // Unique Categories
  const categories = [
    "All",
    ...new Set(
      businessIdeas.map((item) => item.category)
    ),
  ];

  // Bookmark Handler
  const handleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(
        bookmarks.filter((item) => item !== id)
      );
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  // Filter Data
  const filteredIdeas = useMemo(() => {
    return businessIdeas.filter((idea) => {
      const matchesSearch =
        idea.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        idea.skill
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        idea.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Business Ideas
        </h2>

        <p className="text-gray-600 mt-2">
          Discover business opportunities based on
          your skills and interests.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        
        <div className="flex-1">
          <SearchBar
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search business ideas..."
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
          className="
            px-4
            py-3
            border
            border-gray-300
            rounded-xl
            outline-none
            focus:ring-2
            focus:ring-blue-500
            bg-white
          "
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {filteredIdeas.length} Business Ideas Found
        </p>
      </div>

      {/* Business Cards */}
      {filteredIdeas.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => (
            <BusinessCard
              key={idea.id}
              idea={idea}
              onBookmark={handleBookmark}
              isBookmarked={bookmarks.includes(
                idea.id
              )}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-2xl p-10 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No Business Ideas Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try searching with a different keyword
            or category.
          </p>
        </div>
      )}
    </div>
  );
};

export default BusinessList;