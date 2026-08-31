import React from 'react';

export default function Logo({ className = "h-11 sm:h-14" }) {
  return (
    <div className={`flex items-center cursor-pointer group ${className}`}>
      <img
        src="/logo.png"
        alt="Kokan Nirvana - Sea-Shore Property"
        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
