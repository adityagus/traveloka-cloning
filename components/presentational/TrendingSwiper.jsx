"use client";

import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const TrendingSwiper = () => {
  const swiper = useSwiper();
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  // State untuk mengatur visibilitas tombol
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const promos = [
    {
      title: "Ancol",
      image: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001186750067/Dufan-Ancol-Tickets-a813e980-43b7-4673-989b-f0831f0b14ff.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      alt: "Selalu Ada Promo di Dalam Negeri",
    },
    {
      title: "Ancol",
      image: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000364679993/Ancol-Entrance-Gate-085b2a15-1ac2-47b8-aaf0-fcb5f88f147c.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      alt: "Siapin Liburan Akhir & Awal Tahun",
    },
    {
      title: "Gambir",
      image: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2002053221267/Sea-World-Ancol-Tickets-07f2ff6b-6f07-46aa-a52d-1b43173ae69a.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      alt: "Asupan Harian buat ke Destinasi Impian",
    },
    {
      title: "Ancol",
      image: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/4484433519186/Museum-Nasional-Indonesia-1ea6bc44-f8a3-4ae9-bab7-18e1a9dfbd6c.png?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      alt: "Asupan Harian buat ke Destinasi Impian",
    },
    {
      image: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000015213877/Samudra-Ancol-Tickets-fbf85c8e-c905-4b3d-bbf1-ff5f900bc314.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      alt: "Asupan Harian buat ke Destinasi Impian",
      title: "Kota Tua",
    },
  ];
  // Swiper.use([Navigation, Pagination]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // autoplay= {{
      //   delay:2500,
      //   disableOnInteraction: false,
      // }}
      // loop={true}
      // navigation={true}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-4 mySwiper"
      onInit={(swiper) => {
        // Sambungkan referensi navigasi setelah Swiper diinisialisasi
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      onSlideChange={(swiper) => {
        // Update state saat slide berubah
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      onReachBeginning={() => setIsBeginning(true)}
      onReachEnd={() => setIsEnd(true)}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {promos.map((promo, index) => (
        <SwiperSlide key={index}>
            <div className="my-8">
              {/* Title */}
              {/* Container for Cards */}
              <div className="grid grid-cols-1 gap-6">
                {/* Map over the cards array to render each card */}
                  <div
                    key={index}
                    className="col-span-2 bg-white rounded-lg shadow-lg">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold text-black">{promo.title}</h3>
                    <p className="text-gray-600 mt-2">{promo.description}</p>
                  </div>
              </div>
            </div>
          {/* <img src={promo.image} alt={promo.alt} /> */}
        </SwiperSlide>
      ))}

      {/* Tombol navigasi ke kiri */}
      <button
        className="nav-button prev"
        ref={navigationPrevRef}
        style={{ opacity: isBeginning ? "0" : "100" }}
      >
        <span>
          <svg
            height="512px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="30px"
          >
            <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
          </svg>
        </span>
      </button>

      {/* Tombol navigasi ke kanan */}
      <button
        className="nav-button next"
        ref={navigationNextRef}
        style={{ opacity: isEnd ? "0" : "100" }}
      >
        <span>
          <svg
            height="512px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="30px"
          >
            <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
          </svg>
        </span>
      </button>
    </Swiper>
  );
};

export default TrendingSwiper;
