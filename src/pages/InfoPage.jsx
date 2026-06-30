import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const InfoPage = () => {
  const location = useLocation();
  const path = location.pathname;

  // Dynamic Content Management System Based on URL Paths
  let title = "Page Not Found";
  let content = "Krpya check karein aap galat page link par aa gaye hain.";

  if (path === "/about") {
    title = "About EntreSkill Hub 🚀";
    content = "EntreSkill Hub ek aisi unique initiative hai jo micro-entrepreneurs aur aspiring students ko unke simple skillsets (jaise Tailoring, Cooking, Digital Marketing) ko profitable micro-businesses me convert karne me help karti hai. Hum pradan karte hain step-by-step custom interactive roadmaps aur industrial mentorship guidelines.";
  } else if (path === "/contact") {
    title = "Contact Support Center 📞";
    content = "Humse sampark karne ke liye aap niche diye gaye officially channels ka use kar sakte hain:\n\n📧 Email Support: support@entreskillhub.com\n📱 Phone Contact: +91 9876543210\n📍 Office Location: Pune, Maharashtra, India\n\nHumari team 24 to 48 ghante ke andar aapse connect karegi.";
  } else if (path === "/privacy") {
    title = "Privacy Policy 🔒";
    content = "EntreSkill Hub par aapka data 100% secure hai. Hum aapke assessment scores, saved bookmarks, aur profile inputs ko kisi bhi third-party networks ke sath share nahi karte hain. Aapka data local browsers storage engine aur user tracking panels ko smooth banane ke liye encrypted format me handle kiya jata hai.";
  } else if (path === "/terms") {
    title = "Terms & Conditions 📄";
    content = "Humari platform services ka use karne ke liye aapko in general terms ka dhyan rakhna hoga: \n1. Aapke dwara banaya gaya assessment score guidelines educational purposes ke liye hai.\n2. Roadmaps guidelines flexible hain aur market standard trends par based hain.\n3. Koi bhi business start karte waqt local government licenses (jaise FSSAI, GST) ka dhyan rakhein.";
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 min-h-[60vh] flex flex-col justify-center">
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm text-center sm:text-left">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          {title}
        </h1>
        <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6 mx-auto sm:mx-0"></div>
        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line mb-8">
          {content}
        </p>
        <Link 
          to="/" 
          className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
        >
          ➔ Back to Home Screen
        </Link>
      </div>
    </div>
  );
};

export default InfoPage;