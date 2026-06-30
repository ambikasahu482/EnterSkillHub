import React from "react";

const ResourceCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all duration-200 group">
      
      {/* Visual Header / Media Layer */}
      <div>
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badge Overlay */}
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm text-white ${
              item.type === "video" ? "bg-red-500" : "bg-emerald-500"
            }`}>
              {item.type === "video" ? "🎥 Video" : "📄 PDF Guide"}
            </span>
          </div>

          {/* Video Player Overlay Simulation */}
          {item.type === "video" && (
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white bg-opacity-90 text-red-600 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                <span className="text-xl ml-0.5">▶</span>
              </div>
            </div>
          )}
        </div>

        {/* Resource Body Content */}
        <div className="p-5">
          <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Responsive Call to Action Button */}
      <div className="p-5 pt-0">
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`block w-full text-center font-medium py-2.5 px-4 rounded-xl transition-colors text-sm shadow-sm ${
            item.type === "video" 
              ? "bg-gray-900 hover:bg-gray-800 text-white" 
              : "bg-emerald-600 hover:bg-emerald-700 text-white"
          }`}
        >
          {item.type === "video" ? "Watch Video" : "View / Download PDF"}
        </a>
      </div>

    </div>
  );
};

export default ResourceCard;