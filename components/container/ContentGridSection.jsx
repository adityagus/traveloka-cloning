import Image from "next/image";
import React from "react";
import PromoSwiper from "@components/presentational/SwiperCard";
import TrendingSwiper from "@components/presentational/TrendingSwiper";
import SwiperCard from "@components/presentational/SwiperCard";

function ButtonTab({ title }) {
  console.log(title);
  return (
    <button className="grey_btn rounded-full" type="button">
      <span>
        <img
          className="w-4"
          src="https://de2sjuwtxpj10.cloudfront.net/imageResource/sectionFilterIcon/8df18828-a870-4210-8d42-1eae6ab2e58e"
          alt="Attraction Icon"
        />
      </span>{" "}
      {title}
    </button>
  );
}

const ContentGridSection = ({ data, className='' }) => {
  console.log("data grid section", data.cards);
  return (
    <div className={`master w-full text-left my-8 ${className}`}>
      <div className="">
        <div className="flex gap-2 pb-4 items-center">
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/31/1685509983611-a25f46a53c13da46a43bf8f542076cd2.png?_src=imagekit&tr=q-40,h-24"
            alt=""
            style={{ height: "24px" }}
          />
          <h1 className="text-2xl font-bold">{data.title}</h1>
        </div>

        <div className="flex gap-2 py-2 px-3">
          {(data.buttons || []).map((item, index) => (
            <ButtonTab key={index} title={item.label} />
          ))}
          {/* <ButtonTab title="Flight" onClick={() => {}} /> */}
        </div>
        <SwiperCard cards={data.cards} type={data.type}/>
      </div>
      <div className="flex justify-center">
        <button className="grey_btn rounded-md">{data.more}</button>
      </div>
      <div></div>
    </div>
  );
};

export default ContentGridSection;
