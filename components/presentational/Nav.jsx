"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tab from '@components/presentational/TabNav';
import { useState, useEffect } from 'react';
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
const Nav = () => {
  const isUserLoggedIn = false;

  return (
    <div className='bg-white w-full fixed top-0 z-50'>
    <nav className='navbar mb-4'>
      <div className='flex-between w-full py-3'>

      <Link href="/" className='flex gap-2 flex-center'>
        <Image
          src='assets/images/logo.svg'
          alt='Traveloka Logo'
          width={150}
          height={150}
        />
      </Link>

      {/* Mobile Navigation */}
      <div className='sm:flex hidden bg-dark'>
        {isUserLoggedIn == false ? (
          <div className='flex gap-3 md:gap-5 items-center'>
            <Link href="/">Promo</Link>
            <Link href="/">Bantuan</Link>
            <Link href="/">Jadi Mitra</Link>
            <Link href="/">For Corporates</Link>
            <Link href="/">Pesanan</Link>
            <Link href="/login" className='outline_btn'>
              Log in
            </Link>

            <button type='button' className='blue_btn'>Daftar</button>
            
          </div>
        ): (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/login">
              <button className='black_btn'>Sign In</button>
            </Link>
          </div>)}
      </div>
      </div>
      <Tab/>
    </nav>
    </div>
  )
}

export default Nav
