import React from 'react'
import Image from '@node_modules/next/image'
import PaymentList from '@components/container/PaymentList';



const PartnerFooter = () => {
  const Data = [
    {
      id: 1,
      name: 'Credit Card',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736492162683-c3a2914aac88339e94c66ae1d6c7657e.png?tr=h-19,q-75,w-57'
    },
    {
      id: 2,
      name: 'PayPal',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481353079-9a343ddf66f59d363664a31a80e5ab22.webp?tr=h-19,q-75,w-57',
    },
    {
      id: 3,
      name: 'Google Pay',
      icon: 'assets/icons/mastercard.png',
    },
    {
      id: 4,
      name: 'Alipay',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481368525-404515cee423ab6c46064e93e8be4068.webp?tr=h-19,q-75,w-57',
    },
    {
      id: 1,
      name: 'Credit Card',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736492162683-c3a2914aac88339e94c66ae1d6c7657e.png?tr=h-19,q-75,w-57'
    },
    {
      id: 2,
      name: 'PayPal',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481353079-9a343ddf66f59d363664a31a80e5ab22.webp?tr=h-19,q-75,w-57',
    },
    {
      id: 3,
      name: 'Google Pay',
      icon: 'assets/icons/mastercard.png',
    },
    {
      id: 4,
      name: 'Alipay',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481368525-404515cee423ab6c46064e93e8be4068.webp?tr=h-19,q-75,w-57',
    },
    {
      id: 1,
      name: 'Credit Card',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736492162683-c3a2914aac88339e94c66ae1d6c7657e.png?tr=h-19,q-75,w-57'
    },
    {
      id: 2,
      name: 'PayPal',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481353079-9a343ddf66f59d363664a31a80e5ab22.webp?tr=h-19,q-75,w-57',
    },
    {
      id: 3,
      name: 'Google Pay',
      icon: 'assets/icons/mastercard.png',
    },
    {
      id: 4,
      name: 'Alipay',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481368525-404515cee423ab6c46064e93e8be4068.webp?tr=h-19,q-75,w-57',
    },
    {
      id: 1,
      name: 'Credit Card',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736492162683-c3a2914aac88339e94c66ae1d6c7657e.png?tr=h-19,q-75,w-57'
    },
    {
      id: 2,
      name: 'PayPal',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481353079-9a343ddf66f59d363664a31a80e5ab22.webp?tr=h-19,q-75,w-57',
    },
    {
      id: 3,
      name: 'Google Pay',
      icon: 'assets/icons/mastercard.png',
    },
    {
      id: 4,
      name: 'Alipay',
      icon: 'https://ik.imagekit.io/tvlk/image/imageResource/2025/01/10/1736481368525-404515cee423ab6c46064e93e8be4068.webp?tr=h-19,q-75,w-57',
    },
  ]

  
  return (
    <div className="grid-flow-col col-span-2">
      <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ad89f39fe62c8b500e6f9a25fa4427d8.svg'/>
      <div className='flex gap-5 items-center'>
        <Image
          src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75'
          alt='Partner 1'
          width={40}
          height={40}/>
        <Image
          src='https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562226590916-2361205eaa5ec2f3e1807157cd842950.svg?tr=h-35,q-75'
          alt='Partner 1'
          width={40}
          height={40}/>
        <Image
          src='/assets/images/icon-partner.jpg'
          alt='Partner 1'
          width={40}
          height={40}/>
      </div>
      <div className="flex items-center gap-5 text-white bg-slate-700 px-8 py-3 font-satoshi rounded-lg my-4" style={{ width: "300px" }}>
        <Image
          src='assets/icons/greating.svg'
          alt='greating'
          width={40}
          height={40}
        />
        Jadi Partner Traveloka  
      </div>
      <PaymentList data={Data}/>
    </div>
  )
}

export default PartnerFooter