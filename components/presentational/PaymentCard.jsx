import Image from 'next/image';


const PaymentCard = ({icon}) => {
  // console.log('icon', icon);
  return (
    <div className='payment-card card w-15 h-5 flex justify-center' style={{width: "72px",
    height: "48px"}}>
      <img
        src={icon}
        width={100}
        alt='mastercard'
        height={100}
        className='object-cover h-full w-full'
      />
    </div>
  )
}

export default PaymentCard  