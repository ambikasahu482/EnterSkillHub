import React from "react";
import { resources } from "../data/resources"; 
import ResourceCard from "../components/resources/ResourceCard";

const LearningResources = () => {
  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto min-h-screen">
      
      {/* Header Info Area */}
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
          Learning Resources <span role="img" aria-label="books">📚</span>
        </h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Handpicked high-quality videos, articles, and guides to boost your enterprise skills.
        </p>
      </div>

      {/* Empty State Defense Handler */}
      {(!resources || resources.length === 0) ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No resources found. Check back later!</p>
        </div>
      ) : (
        /* Highly Fluid Tailwind Grid Framework */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
            <ResourceCard key={item.id} item={item} />
          ))}
        </div>
      )}

    </div>
  );
};

export default LearningResources;