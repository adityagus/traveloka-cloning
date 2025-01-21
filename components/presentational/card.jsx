import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  
  
  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-md">
      {/* Gambar */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Overlay dengan Judul dan Deskripsi */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-slate-900 via-transparent to-transparent p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
