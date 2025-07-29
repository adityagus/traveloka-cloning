import React from 'react';
import WhatsAppShareButton from './WhatsAppShareButton';
import { shareDestination } from '@/lib/whatsappShare';

const Card = ({ title, description, imageUrl }) => {
  const destination = { title, description };
  const shareURL = shareDestination(destination);
  
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md group">
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

      {/* WhatsApp Share Button - appears on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <WhatsAppShareButton 
          shareURL={shareURL}
          variant="icon"
          size="sm"
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
        />
      </div>
    </div>
  );
};

export default Card;
