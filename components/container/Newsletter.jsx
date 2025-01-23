import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div
      className="object-fit h-96 mt-12 flex justify-center "
      style={{ backgroundImage: "url('./assets/images/banner-2.webp')" }}
    >
      <div className="">
        <Image
          src="/assets/images/bg-blue.png"
          alt="Newsletter"
          width={350}
          height={800}
          objectFit="cover"
          quality={100}
          className="absolute ml-0 z-10 mt-0"
          style={{ left: "0", "z-index": "0" }}
        />
      </div>
      <div className="text-white text-center flex " style={{ width: "800px" }}>
        <div className="flex-1 flex items-end justify-center">
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/07/03/1688370082420-ea9f0f5530ce9e6a7b36fcec8aa60664.png?tr=q-75"
            alt=""
            className="mb-0 flex items-end"
            style={{
              objectFit: "fill",
              objectPosition: "50% 50%",
              position: "absolute",
              width: "280px",
            }}
          />
        </div>
        <div className="flex flex-row flex-1 z-10 items-center">
          <div className="">
            <h1 className="text-left text-xl font-bold">
              Dapatkan info terbaru seputar tips perjalanan, rekomendasi, serta
              promo.
            </h1>
            <div className="flex">
              <div className="flex">
                <label
                  for="email"
                  className="block text-sm/6 font-medium text-gray-900"
                ></label>
                <div className="my-5 gap-3 flex">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-id="IcContactMail"
                      >
                        <path
                          d="M4.45711 5.04289C4.06658 4.65237 3.43342 4.65237 3.04289 5.04289C2.65237 5.43342 2.65237 6.06658 3.04289 6.45711L4.45711 5.04289ZM20.9571 6.45711C21.3476 6.06658 21.3476 5.43342 20.9571 5.04289C20.5666 4.65237 19.9334 4.65237 19.5429 5.04289L20.9571 6.45711ZM20.2929 15.7071C20.6834 16.0976 21.3166 16.0976 21.7071 15.7071C22.0976 15.3166 22.0976 14.6834 21.7071 14.2929L20.2929 15.7071ZM2.29289 14.2929C1.90237 14.6834 1.90237 15.3166 2.29289 15.7071C2.68342 16.0976 3.31658 16.0976 3.70711 15.7071L2.29289 14.2929ZM5 6H19V4H5V6ZM20 7V17H22V7H20ZM19 18H5V20H19V18ZM4 17V7H2V17H4ZM3.04289 6.45711L7.29289 10.7071L8.70711 9.29289L4.45711 5.04289L3.04289 6.45711ZM7.29289 10.7071L9.52513 12.9393L10.9393 11.5251L8.70711 9.29289L7.29289 10.7071ZM14.4749 12.9393L16.7071 10.7071L15.2929 9.29289L13.0607 11.5251L14.4749 12.9393ZM16.7071 10.7071L20.9571 6.45711L19.5429 5.04289L15.2929 9.29289L16.7071 10.7071ZM15.2929 10.7071L20.2929 15.7071L21.7071 14.2929L16.7071 9.29289L15.2929 10.7071ZM3.70711 15.7071L8.70711 10.7071L7.29289 9.29289L2.29289 14.2929L3.70711 15.7071ZM5 18C4.44772 18 4 17.5523 4 17H2C2 18.6569 3.34315 20 5 20V18ZM20 17C20 17.5523 19.5523 18 19 18V20C20.6569 20 22 18.6569 22 17H20ZM9.52513 12.9393C10.892 14.3062 13.108 14.3062 14.4749 12.9393L13.0607 11.5251C12.4749 12.1109 11.5251 12.1109 10.9393 11.5251L9.52513 12.9393ZM19 6C19.5523 6 20 6.44772 20 7H22C22 5.34315 20.6569 4 19 4V6ZM5 4C3.34315 4 2 5.34315 2 7H4C4 6.44772 4.44772 6 5 6V4Z"
                          fill="#0194f3"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      placeholder="Alamat Emailmu"
                    />
                    <button className="">Subscribe</button>
                  </div>
                <button className="bg-orange-500 rounded-md block min-w-0 grow  text-base text-white placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 px-3 py-1">
                  Subcriber
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Image className="crete"
      
        // src='/assets/images/banner-2.webp'
        alt='Newsletter'
        width={1920}
        height={800}
        objectFit='cover'
        quality={100}
      /> */}
    </div>
  );
};

export default Newsletter;
