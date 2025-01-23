import React from "react";

const PartnerCard = () => {
  return (
    <div className="grid grid-cols-3 master px-28">
      <div className="col-span-1">
        <h2 className="text-2xl font-bold">Partner Hotel</h2>
        <span className="text-sm mt-2 text-gray-500">
          Partner Hotel di Dalam & Luar Negeri
        </span>
        <p className="mt-4">
          Kami bekerja sama dengan berbagai jaringan hotel di seluruh dunia
          untuk memastikan kenyamanan Anda saat menginap di belahan dunia
          manapun!
        </p>
      </div>
      <div className="col-span-2">
        <img src="assets/images/partner.png" alt="partner" />
      </div>
    </div>
  );
};

export default PartnerCard;
