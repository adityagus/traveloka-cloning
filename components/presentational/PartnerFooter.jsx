import React from 'react'
import Image from '@node_modules/next/image'
import PaymentList from '@components/container/PaymentList';



const PartnerFooter = () => {
  const Data = [
    {
      id: 1,
      name: 'Credit Card',
      icon: 'credit-card',
    },
    {
      id: 2,
      name: 'PayPal',
      icon: 'paypal',
    },
    {
      id: 3,
      name: 'Google Pay',
      icon: 'google-pay',
    },
    {
      id: 4,
      name: 'Alipay',
      icon: 'alipay',
    },
    {
      id: 5,
      name: 'WeChat Pay',
      icon: 'wechatpay',
    },
    {
      id: 6,
      name: 'Apple Pay',
      icon: 'applepay',
    },
    {
      id: 7,
      name: 'UnionPay',
      icon: 'unionpay',
    },
    {
      id: 8,
      name: 'Discover',
      icon: 'discover',
    },
    {
      id: 1,
      name: 'Credit Card',
      icon: 'credit-card',
    },
    {
      id: 2,
      name: 'PayPal',
      icon: 'paypal',
    },
    {
      id: 3,
      name: 'Google Pay',
      icon: 'google-pay',
    },
    {
      id: 4,
      name: 'Alipay',
      icon: 'alipay',
    },
    {
      id: 5,
      name: 'WeChat Pay',
      icon: 'wechatpay',
    },
    {
      id: 6,
      name: 'Apple Pay',
      icon: 'applepay',
    },
    {
      id: 7,
      name: 'UnionPay',
      icon: 'unionpay',
    },
    {
      id: 8,
      name: 'Discover',
      icon: 'discover',
    },
  ]

  
  return (
    <div className="grid-flow-col ">
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
      <div className="flex items-center gap-5 text-white bg-slate-700 px-8 py-3 font-satoshi rounded-lg my-4">
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