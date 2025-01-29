"use client";
// mengambil data
import data from "@data/data.json";

import Feed from "@components/presentational/Feed";
import CardList from "@components/container/CardList";
import Ads from "@components/presentational/Ads";
import CouponList from "@components/container/CouponList";
import Newsletter from "@components/container/Newsletter";
import { useState, useEffect } from "react";
import PartnerCard from "@components/container/PartnerCard";
import ContentGridSection from "@components/container/ContentGridSection";

const Home = () => {
  const [isLoading, setLoading] = useState(false);


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
    // hotels page
    <section className="hotels-form w-full flex flex-center flex-col">
      <div className="w-full backgroun bg-blue-400">
        <div className="block mt-48 h-64 text-black object-fit  w-full">
        </div>
      </div>

      <div className="bg-white -mt-52 rounded-xl shadow-lg overflow-x-scroll" style={{ width: "800px" }}>
        <div className="bg-slate-300 text-colors-primary-blue py-4 rounded-t-lg flex gap-2 px-2 font-medium">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-id="IcSystemToolRecentSearch"
            >
              <path
                d="M16.5 15L22 20.5M4.78988 12C4.60128 11.3663 4.5 10.695 4.5 10C4.5 6.13401 7.63401 3 11.5 3C15.366 3 18.5 6.13401 18.5 10C18.5 13.866 15.366 17 11.5 17C10.0128 17 8.63383 16.5362 7.5 15.7453M2.5 9.75L4.75 12L7 9.75"
                stroke="#0194f3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M11 6.5V10H14"
                stroke="#0194F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          Hotel yang terakhir dilihat
        </div>
        <div className="w-full text-gray-500 px-4 py-4">
          <div className="input">
            <label className="mb-3" for="kota">
              Kota, tujuan, atau nama hotel
            </label>
            <div className="mt-1 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue">
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
          </div>
          <div className="grid grid-cols-3 mt-3">
            <div className="input mr-4">
              <label className="mb-3" for="checkin">
                Check-In
              </label>
              <div className="mt-1 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue">
                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemCalendar"><path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <input
                  type="text"
                  name="checkin"
                  id="checkin"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-md font-medium items-center text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  placeholder="Kota, Hotel, Tempat Wisata"
                  value="Kamis, 05 Feb 2025"
                />
              </div>
            </div>
            <div className="input">
              <label className="mb-3" for="durasi">
                Durasi
              </label>
              <div className="mt-1 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue">
                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                  <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e0a90245b7343af73aa2eb421c0d8d55.svg"
                    alt="durasi"
                  />
                </div>
                <input
                  type="text"
                  name="kota"
                  id="durasi"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-md font-medium items-center text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  placeholder="Kota, Hotel, Tempat Wisata"
                  value="1 Malam"
                />
              </div>
            </div>
            <div className="input ml-4">
              <label className="mb-3 mt-2 text-black font-bold" for="checkout">
                Check-Out
              </label>
              <div className="text-black font my-2">
                Jum, 07 Feb 2025
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-3">
          <div className="input col-span-2">
            <label className="mb-3" for="kota">
              Tamu dan Kamar
            </label>
            <div className="mt-1 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue">
              <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5a57930d7440fc7da6cf246864f10fe9.svg "
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
          <div className="input ml-4">
            <br className="mb-3"/>
            <div className={`mt-1 flex items-center rounded-md bg-orange-500  outline outline-1 -outline-offset-1 outline-orange-500 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colors-primary-blue ${isLoading && "hidden"}`}>
            <button className="bg-orange-500 hover:bg-orange-600 rounded-md block min-w-0 grow  text-base text-white placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 px-3 py-1" onClick={() => { setLoading(true); setTimeout(() => {setLoading(false); window.open('/list-hotels')}, 2500)}}>
                  Cari Hotel
                </button>
            </div>
                <button className={`bg-gray-300 w-full h-9 mt-1 rounded-md flex justify-center items-center ${!isLoading && "hidden" }`}>
                  <img src="/assets/images/gif/loading.gif" alt=""/>
                </button>
          </div>
          </div>
          <div className="flex text-colors-primary-blue mt-4 ml-2">
          <div className="">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcHotelPayUponCheckIn"><path d="M19.5 14H21V10.9C21 8.1938 18.8062 6 16.1 6H13.5M6 11V10.9C6 8.1938 8.1938 6 10.9 6H13.5M19.5 17H21.5M13.5 6V3.5M15.5 9H16C17.1046 9 18 9.89543 18 11V11.5M3.75 8C3.75 8 4 6.5 5.25 5.25C6.5 4 8 3.75 8 3.75M2.25 5C2.25 5 2.5 4 3.25 3.25C4 2.5 5 2.25 5 2.25" stroke="#0194f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 13.75L17 13.5V16M15 13.75V13.75C13.6703 13.9162 12.3269 13.9439 10.9914 13.8326L9.0086 13.6674C7.67314 13.5561 6.32974 13.5838 5 13.75V13.75M15 13.75V14C15 15.1046 15.8954 16 17 16V16M17 16V19M17 19V21L15 21.25M17 19V19C15.8954 19 15 19.8954 15 21V21.25M15 21.25V21.25C13.6703 21.4162 12.3269 21.4439 10.9914 21.3326L9.0086 21.1674C7.67314 21.0561 6.32974 21.0838 5 21.25V21.25M3 19V21.5L5 21.25M3 19V19C4.10457 19 5 19.8954 5 21V21.25M3 19V16M5 13.75L3 14V16M5 13.75V14C5 15.1046 4.10457 16 3 16V16M12 17.5C12 18.6046 11.1046 19.5 10 19.5C8.89543 19.5 8 18.6046 8 17.5C8 16.3954 8.89543 15.5 10 15.5C11.1046 15.5 12 16.3954 12 17.5Z" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <div className="ml-2 text-sm font-semibold">
            Bayar di Hotel
          </div>
          
          </div>
        </div>
      </div>

      {/* {ads()} */}
      <Ads Img="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/13/1736734673131-805f718191b71e484b3b6a623f580d2d.jpeg?tr=q-75,w-1280" />
    </section>
  );
};

export default Home;
