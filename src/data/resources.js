import startupVideo from "../assets/videos/statup.mp4"; 
import marketingVideo from "../assets/videos/marketing.mp4";

import startupPdf from "../assets/articles/sturtup-guide.pdf"; 

export const resources = [
  {
    id: 1,
    type: "video",
    title: "Startup Basics",
    description: "Learn how to start your first business from scratch with industry insights.",
    url: startupVideo,
    thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    type: "video",
    title: "Marketing Fundamentals",
    description: "Basic marketing strategies and promotional skills tailored for beginners.",
    url: marketingVideo,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    type: "article",
    title: "Startup Complete Guide",
    description: "Comprehensive step-by-step PDF handbook guide for starting your entrepreneurial journey.",
    url: startupPdf,
    thumbnail: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80"
  }
];