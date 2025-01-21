import Image from 'next/image';
import React from 'react'
import PromoSwiper from '@components/presentational/PromoSwiper';
import data from '@data/data.json'

function ButtonTab({title}) {
  console.log(title);
    return (<div className='flex gap-2 py-2 px-3'>
          <button className="bg-gray-100 hover:bg-gray-200 text-colors-primary-blue rounded-full px-5 py-1 text-sm font-semibold flex items-center justify-between gap-1" type="button"><span>
            <img className='w-4' src="https://de2sjuwtxpj10.cloudfront.net/imageResource/sectionFilterIcon/8df18828-a870-4210-8d42-1eae6ab2e58e" alt="Attraction Icon" />
          </span> {title}</button>
        </div>);
}


const ContentGridSection = () => {
  const result = data.promos[0]
  
  return (
    <div className="master w-full text-left my-8">
      <div className="">
        <div className="flex gap-2 pb-4 items-center">
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/31/1685509983611-a25f46a53c13da46a43bf8f542076cd2.png?_src=imagekit&tr=q-40,h-24"
            alt=""
            style={{ "height": "24px" }}
          />
          <h1 className="text-2xl font-bold">{result.title}</h1>
        </div>
        <ButtonTab title="Flight" onClick={() => {}} />
        <PromoSwiper />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ContentGridSection;