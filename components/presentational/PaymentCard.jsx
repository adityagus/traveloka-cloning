import Image from 'next/image';


const PaymentCard = ({icon}) => {
  
  return (
    <div className='payment-card card w-15 h-5 flex justify-center' style={{width: "72px",
    height: "48px"}}>
      <Image
        src='/assets/icons/mastercard.png'
        width={100}
        alt='mastercard'
        height={100}
        className='object-cover h-full w-full'
      />
    </div>
  )
}

export default PaymentCard  