import React from "react";
import CouponCard from "@components/presentational/CouponCard";

const coupons = [
  { id: 1, title: "Diskon 12%", minTransaction: "Rp 150rb", code: "JALANYUK" },
  { id: 2, title: "Diskon 10%", minTransaction: "Rp 100rb", code: "HEMAT10" },
  { id: 3, title: "Diskon 15%", minTransaction: "Rp 200rb", code: "SAVEMORE" },
];

const CouponList = () => {
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Kode kupon ${code} telah disalin!`);
  };

  return (
    <div
      className="h-64 w-full items-center bg-gradient-to-r from-blue-300 via-white to-emerald-300">
      <div className="coupon w-full my-10 max-w-7xl mx-auto sm:px-16 px-6">
        <h1 className="text-xl font-bold font-satoshi text-blue-800 mb-4">
          Daftar untuk Menggunakan Coupon
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
          {coupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              title={coupon.title}
              minTransaction={coupon.minTransaction}
              code={coupon.code}
              onCopy={handleCopy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponList;
