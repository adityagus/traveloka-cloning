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
import SearchInput from "@components/presentational/SearchInput";
import InputHotel from "@components/presentational/InputHotel";

const Home = () => {
  // const vocationSpot = [
  //   { title: 'Singapura', description: '644 accomodations', imageUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721653524-bc0f2c3fffd4aeef0625f80be707e47e.png?tr=q-75,w-427" },
  //   { title: 'Malaysia', description: '644 accomodations', imageUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685328965749-d622f5f8496a6dc11d9b1aca65c6d58e.png?tr=q-75,w-427" },
  //   { title: 'Thailand', description: '644 accomodations', imageUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685329328194-3d7df8cb31d4a3bf69f10209ba8402ec.png?tr=q-75,w-427" },
  //   { title: 'Korea Selatan', description: '644 accomodations', imageUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809713621-ac488739179f461b75c53443441e5097.png?tr=q-75,w-256" },
  //   { title: 'Jepang', description: '644 accomodations', imageUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721668179-e94d7aabf9c42cfc8e91107be9bc9068.png?tr=q-75,w-427" },
  //   { title: 'Hongkong', description: '644 accomodations', imageUrl: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721674810-ed67c0dd0bf264ccd1eb4c79faa74d00.png?tr=q-75,w-427" },
  // ];

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
    <section className="w-full flex flex-center flex-col">
      {/* <div className="min-h-screen flex justify-center items-center flex-col" >
        <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden"/> 
        <span className="orange_gradient text-center">AI Powered Prompts</span>
        </h1>
        <p className="desc text-center">
          Promtopia is open source ai prompting tool for modern world to discover, create and share creative prompt
        </p>
      </div> */}

      {/* <SearchInput/> */}
      <InputHotel/>

      {/* {ads()} */}
      <Ads Img="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/13/1736734185183-75e7e39e5fb0cf587b6c3305a38fe600.png?tr=q-75,w-1280"/>

      {/* Coupon */}
      <CouponList/>


      {/* Content Grid */}
      <ContentGridSection data={data.promos[0]} />

      {/* Feed Section */}
      {/* <Feed /> */}

      {/* Card Section */}
      <CardList data={data.vocationSpots}/>

      {/* Trending */}
      <ContentGridSection data={data.trending[0]}/>

      {/* TAB */}
      {/* <Tab/> */}


    </section>
  )
}

export default Home
