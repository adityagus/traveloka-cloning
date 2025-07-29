/**
 * WhatsApp sharing utility functions
 * Supports sharing different types of content to WhatsApp
 */

/**
 * Generate WhatsApp share URL
 * @param {string} text - The text to share
 * @param {string} url - Optional URL to include in the share
 * @returns {string} WhatsApp share URL
 */
export const generateWhatsAppURL = (text, url = '') => {
  const baseURL = 'https://wa.me/?text=';
  const shareText = url ? `${text} ${url}` : text;
  return baseURL + encodeURIComponent(shareText);
};

/**
 * Share destination/vacation spot to WhatsApp
 * @param {Object} destination - Destination object
 * @param {string} destination.title - Destination title
 * @param {string} destination.description - Destination description
 * @param {string} baseURL - Base URL of the website
 * @returns {string} WhatsApp share URL
 */
export const shareDestination = (destination, baseURL = 'https://traveloka.com') => {
  const text = `🌴 Lihat destinasi wisata menarik ini: *${destination.title}*

${destination.description}

Temukan paket wisata terbaik di Traveloka!`;
  
  return generateWhatsAppURL(text, baseURL);
};

/**
 * Share activity/attraction to WhatsApp
 * @param {Object} activity - Activity object
 * @param {string} activity.title - Activity title
 * @param {string} activity.tag - Activity location/tag
 * @param {string} activity.rating - Activity rating
 * @param {number} activity.price - Activity price
 * @param {string} baseURL - Base URL of the website
 * @returns {string} WhatsApp share URL
 */
export const shareActivity = (activity, baseURL = 'https://traveloka.com') => {
  const formattedPrice = activity.price ? `Rp ${activity.price.toLocaleString()}` : 'Harga menarik';
  const text = `🎢 Aktivitas seru di ${activity.tag}!

*${activity.title}*
⭐ Rating: ${activity.rating}
💰 Mulai dari: ${formattedPrice}

Booking sekarang di Traveloka dan dapatkan pengalaman tak terlupakan!`;
  
  return generateWhatsAppURL(text, baseURL);
};

/**
 * Share promo/promotion to WhatsApp
 * @param {Object} promo - Promo object
 * @param {string} promo.alt - Promo description
 * @param {string} promoTitle - Promo section title
 * @param {string} baseURL - Base URL of the website
 * @returns {string} WhatsApp share URL
 */
export const sharePromo = (promo, promoTitle = 'Promo Menarik', baseURL = 'https://traveloka.com') => {
  const text = `🔥 ${promoTitle}!

${promo.alt}

Jangan sampai terlewat! Booking sekarang di Traveloka.`;
  
  return generateWhatsAppURL(text, baseURL);
};

/**
 * Share hotel to WhatsApp
 * @param {Object} hotel - Hotel object
 * @param {string} hotel.title - Hotel title
 * @param {string} hotel.location - Hotel location
 * @param {string} hotel.rating - Hotel rating
 * @param {number} hotel.newPrice - Hotel price
 * @param {string} baseURL - Base URL of the website
 * @returns {string} WhatsApp share URL
 */
export const shareHotel = (hotel, baseURL = 'https://traveloka.com') => {
  const formattedPrice = `Rp ${hotel.newPrice.toLocaleString()}`;
  const text = `🏨 Hotel Rekomendasi!

*${hotel.title}*
📍 ${hotel.location}
⭐ Rating: ${hotel.rating}
💰 Mulai dari: ${formattedPrice}/malam

Booking sekarang di Traveloka untuk pengalaman menginap terbaik!`;
  
  return generateWhatsAppURL(text, baseURL);
};

/**
 * Open WhatsApp share dialog
 * @param {string} shareURL - WhatsApp share URL
 */
export const openWhatsAppShare = (shareURL) => {
  window.open(shareURL, '_blank');
};