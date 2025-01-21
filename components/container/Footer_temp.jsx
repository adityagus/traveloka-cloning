import React from 'react'
import PartnerFooter from '@components/presentational/PartnerFooter'
import SupportFooter from '@components/presentational/SupportFooter'

const Footer = () => {
  return (
    <footer className='pt-14 pb-4 bg-slate-800 w-full absolute'>
    <div className='flex grid-flow-col justify-between items-center w-full container max-w-7xl mx-auto sm:px-16 px-6'>
      <PartnerFooter className='grid-col-1'/>
      <SupportFooter className=''/>
    </div>
      <hr className='mb-8' />
      <p className='text-white text-sm text-center mb-4'>Copyright © 2025 Traveloka. All rights reserved.</p>
    </footer>
  )
}

export default Footer
