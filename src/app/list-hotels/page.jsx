"use client";
// mengambil data
import data from "@data/data.json";

import Feed from "@components/presentational/Feed";
import CardList from "@components/container/CardList";
import Ads from "@components/presentational/Ads";
import HotelCard from "@components/presentational/HotelCard";
import { useState, useEffect } from "react";
import PartnerCard from "@components/container/PartnerCard";
import ContentGridSection from "@components/container/ContentGridSection";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const hotelData = [
    {
      images: [
        "https://via.placeholder.com/300x200", // Main image
        "https://via.placeholder.com/50", // Thumbnail 1
        "https://via.placeholder.com/50", // Thumbnail 2
        "https://via.placeholder.com/50", // Thumbnail 3
        "https://via.placeholder.com/50", // Thumbnail 4
      ],
      title: "The Trans Luxury Hotel",
      location: "Buahbatu, Bandung",
      rating: "9.0",
      reviews: "6,300",
      features: [
        "Klub anak",
        "Layanan pijat",
        "Pusat kebugaran",
        "Fasilitas bisnis",
        "Sauna",
        "Bar",
      ],
      cancellation: "Gratis Pembatalan",
      oldPrice: 1735186,
      newPrice: 1613677,
    },
    {
      images: [
        "https://via.placeholder.com/300x200", // Main image
        "https://via.placeholder.com/50", // Thumbnail 1
        "https://via.placeholder.com/50", // Thumbnail 2
        "https://via.placeholder.com/50", // Thumbnail 3
        "https://via.placeholder.com/50", // Thumbnail 4
      ],
      title: "Hilton Bandung",
      location: "Cihampelas, Bandung",
      rating: "8.8",
      reviews: "4,500",
      features: [
        "Kolam renang",
        "Restoran",
        "Wi-Fi gratis",
        "Pusat kebugaran",
        "Parkir gratis",
      ],
      cancellation: "Gratis Pembatalan",
      oldPrice: 1500000,
      newPrice: 1350000,
    },
    {
      images: [
        "https://via.placeholder.com/300x200", // Main image
        "https://via.placeholder.com/50", // Thumbnail 1
        "https://via.placeholder.com/50", // Thumbnail 2
        "https://via.placeholder.com/50", // Thumbnail 3
        "https://via.placeholder.com/50", // Thumbnail 4
      ],
      title: "Padma Hotel Bandung",
      location: "Ciumbuleuit, Bandung",
      rating: "9.5",
      reviews: "7,200",
      features: [
        "Pemandangan indah",
        "Kolam renang infinity",
        "Spa & sauna",
        "Wi-Fi gratis",
        "Parkir gratis",
      ],
      cancellation: "Gratis Pembatalan",
      oldPrice: 2000000,
      newPrice: 1800000,
    },
  ];

  useEffect(() => {
    // Ambil posisi scroll dari localStorage
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    // Simpan posisi scroll sebelum refresh
    const handleScroll = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hotels-form w-full flex flex-center flex-col">
      <div className="w-full background bg-white navbar-2">
        <div className="block mt-32 h-12 shadow-md text-black object-fit  w-full">
          <div className="grid grid-cols-3 master">
            <div className="mt-1 flex items-center rounded-md rounded-r-none bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7f57d24fd3db681418a3694bd71cb93b.svg"
                  alt=""
                />
              </div>
              <input
                type="text"
                name="kota"
                id="kota"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-md font-medium items-center text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                placeholder="Kota, Hotel, Tempat Wisata"
                value="Bandung"
              />
            </div>
            <div className="mt-1 flex items-center rounded-md rounded-r-none rounded-l-none bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemCalendar"><path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
              <input
                type="text"
                name="tanggal"
                id="tanggal"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-md font-medium items-center text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                placeholder="Tanggal"
                value="10 Feb - 11 Feb, 1 malam"
              />
            </div>
            <div className="mt-1 flex items-center rounded-md rounded-l-none bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue">
              <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5a57930d7440fc7da6cf246864f10fe9.svg"
                  alt=""
                />
              </div>
              <input
                type="text"
                name="kota"
                id="kota"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-md font-medium items-center text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                placeholder="Kota, Hotel, Tempat Wisata"
                value="2 Dewasa, 0 Anak, 1 Kamar"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-12 master">
        <div className="col-span-3 mt-4 mr-4">
          <div className="">
            <div className="card-image rounded-xl">
              <img
                className="rounded-lg"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/05/1725509884357-7c1a5596fb0e685b4d41bee6ba3b3edd.svg?tr=q-75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <h1 className="text-2xl font-bold mb-4"></h1>
          {data.hotelData.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>

      {/* {ads()} */}
      <Ads Img="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/13/1736734673131-805f718191b71e484b3b6a623f580d2d.jpeg?tr=q-75,w-1280" />
    </section>
  );
};

export default Home;
