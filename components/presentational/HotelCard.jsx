import React from "react";

export default function HotelCard({
  images,
  title,
  location,
  rating,
  reviews,
  features,
  cancellation,
  oldPrice,
  newPrice,
}) {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden mb-5">
      {/* Left Section - Images */}
      <div className="w-1/3 relative">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="grid grid-cols-3">
          {images.slice(1, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              style={{width: "250px", "height":"58px"}}
              alt={`Preview ${index + 1}`}
              className="w-10 h-10 object-cover border rounded"
            />
          ))}
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="flex flex-col w-2/3 p-4">
        {/* Hotel Name and Rating */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex items-center text-sm text-blue-500">
              <span className="font-semibold">{rating}</span>
              <span className="ml-1 text-gray-600">({reviews} ulasan)</span>
            </div>
          </div>
          <div className="">
            <span className="bg-blue-100 text-blue-500 px-2 py-1 text-xs font-bold rounded">Hotel</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-sm text-gray-600">{location}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 my-2">
          {features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Cancellation Policy */}
        <p className="text-sm text-green-500">{cancellation}</p>

        {/* Price and CTA */}
        <div className="mt-auto flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 line-through">
              Rp {oldPrice.toLocaleString()}
            </p>
            <p className="text-xl text-orange-500 font-bold">
              Rp {newPrice.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Di luar pajak & biaya</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600">
            Pilih Kamar
          </button>
        </div>
      </div>
    </div>
  );
}
