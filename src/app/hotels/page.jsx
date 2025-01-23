"use client"
// mengambil data 
import data from "@data/data.json"

import Feed from "@components/presentational/Feed";
import CardList from "@components/container/CardList";
import Ads from "@components/presentational/Ads";
import CouponList from "@components/container/CouponList";
import Newsletter from "@components/container/Newsletter";
import { useState, useEffect } from "react";
import ContentGridSection from "@components/container/ContentGridSection";

const Home = () => {

  useEffect(() => {
    // Ambil posisi scroll dari localStorage
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    // Simpan posisi scroll sebelum refresh
    const handleScroll = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="hotels-form w-full flex flex-center flex-col">
      <div className="w-full backgroun bg-blue-400">
        <div className="block mt-50 h-64 text-black object-fit  w-full">
          <h1>border</h1>
        </div>
      </div>


      {/* {ads()} */}
      <Ads />

      {/* Coupon */}
      <CouponList />

      {/* Content Grid */}
      <ContentGridSection data={data.promos[0]} />

      {/* Feed Section */}
      {/* <Feed /> */}

      {/* Card Section */}
      <CardList data={data.vocationSpots} />

      {/* Trending */}
      <ContentGridSection data={data.trending[0]} />

      {/* TAB */}
      {/* <Tab /> */}
    </section>
  );
}

export default Home
