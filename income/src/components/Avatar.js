"use client";

import React, { useState } from "react";
const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="relative">
        <img
          src="https://i.pinimg.com/564x/22/fa/a5/22faa5eadb8dae8177e3d16e5fd028b5.jpg"
          alt="Profile"
          className={`rounded-full cursor-pointer ${
            isExpanded ? "w-48 h-48" : "w-24 h-24"
          }`}
          onClick={toggleExpand}
        />
        {isExpanded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl"></span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
