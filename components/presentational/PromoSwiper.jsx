"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';

const PromoSwiper = () => {
  const swiper = useSwiper();
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  // State untuk mengatur visibilitas tombol
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const promos = [
    {
      image: "/assets/images/promo1.webp",
      alt: "Selalu Ada Promo di Dalam Negeri",
    },
    {
      image: "/assets/images/promo2.webp",
      alt: "Siapin Liburan Akhir & Awal Tahun",
    },
    {
      image: "/assets/images/promo3.webp",
      alt: "Asupan Harian buat ke Destinasi Impian",
    },
    {
      image: "/assets/images/promo3.webp",
      alt: "Asupan Harian buat ke Destinasi Impian",
    },
    {
      image: "/assets/images/promo3.webp",
      alt: "Asupan Harian buat ke Destinasi Impian",
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
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={promo.image}
              alt={promo.alt}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          {/* <img src={promo.image} alt={promo.alt} /> */}
        </SwiperSlide>
      ))}

      {/* Tombol navigasi ke kiri */}
      <button className="nav-button prev" ref={navigationPrevRef}
      style={{ opacity: isBeginning ? "0" : "100", }}>
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
      <button className="nav-button next" ref={navigationNextRef} 
      style={{ opacity: isEnd ? "0" : "100", }}>
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

export default PromoSwiper;
