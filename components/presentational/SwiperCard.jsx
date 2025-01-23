"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';

const SwiperCard = ({ cards, type }) => {
  console.log("type", type);

  console.log("cards", cards);
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiper = useSwiper();

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
      {type == "banner" &&
        cards.map((promo, index) => (
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

      {type == "vocation" &&
        cards.map((promo, index) => (
          <SwiperSlide key={index}>
            <div className="my-8">
              {/* Title */}
              {/* Container for Cards */}
              <div className="grid grid-cols-1 gap-6">
                {/* Map over the cards array to render each card */}
                <div
                  key={index}
                  className="col-span-2 bg-white rounded-lg shadow-lg"
                >
                <div class="relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                  <div class="absolute top-0 left-0 text-sm bg-red-400 px-2 py-2 flex gap-2 rounded-br-md">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                  {promo.tag}</div>
                </div>
                  <div class="p-2">
                    <h3 className="text-base font-bold text-black">
                    
                      {promo.title}
                    </h3>
                    <div class="flex text-blue-500 items-center gap-2  py-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        accentcolor="#687176"
                        fillcolor="#0194F3"
                      >
                        <g clip-path="url(#clip0_5387_0)">
                          <path
                            d="M15.9886 16.0268C15.9886 14.0528 18.3724 11.6204 19.4865 10.1939C21.5632 7.53787 24 5.00369 24 5.00369C24 5.00369 21.2666 5.31206 18.465 6.21272C16.7087 6.77652 15.0488 7.59063 13.3958 8.3995C13.3073 6.27545 13.4489 4.12079 13.5969 2C13.5969 2 9.56369 3.00599 8.26139 5.90024C7.5257 7.53724 8.72553 9.70817 9.01454 11.3204C9.14141 12.0365 8.74246 14.1024 7.52665 13.4945C7.0365 13.2401 6.22054 12.8296 5.52132 12.8223C5.03946 12.8223 4.69858 12.9923 4.41455 13.1339C4.16528 13.2582 3.90097 13.3748 3.61625 13.3698L0 12.6424C0 12.6424 2.36095 13.5555 4.25 14.5C5.22762 14.9888 5.75278 15.4971 6.25943 15.9874C6.78926 16.5002 7.29886 16.9934 8.28455 17.4243C10.2083 18.2631 13.0065 18.7688 15.5 19.5C18.0862 20.2674 20.0568 21.0384 20.6976 21.3836C20.4968 21.2735 20.4721 21.0343 20.5 21C20.553 20.9223 21.1995 21.1212 21.1995 21.1212C19.2753 20.2945 15.9478 18.5279 15.9886 16.0268Z"
                            fill="#1BA0E2"
                          ></path>
                          <path
                            d="M15.9887 16.0043C15.9886 16.0118 15.9886 16.0193 15.9886 16.0268C15.9783 16.6591 16.1833 17.2445 16.5265 17.7797C14.8854 15.6821 13.3292 9.05031 13.3973 8.3987L13.4263 8.3845C14.0737 8.0677 14.7223 7.75033 15.3774 7.44775C15.358 7.97928 15.2069 12.824 15.9887 16.0043Z"
                            fill="#0F7EA6"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_5387_0">
                            <rect width="24" height="24" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="text-gray-600 text-sm">
                        {promo.rating} <span>( {promo.customer} )</span>
                      </p>
                    </div>
                  </div>
                  <span></span>
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

export default SwiperCard;
