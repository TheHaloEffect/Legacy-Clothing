import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

const Home: NextPage = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen'>
      <Head>
        <title>Legacy Clothing</title>
      </Head>

      <main>
        {/* Image on the side */}
        <div className='flex h-screen'>
          <div className='contrast-150 brightness-50 md:w-1/2 relative hidden md:block'>
            <Image alt='model image' src='/model.jpg' layout='fill' objectFit='cover' quality={100} priority></Image>
          </div>

          {/* The sign up section */}
          <div className='flex flex-col w-screen md:w-1/2 bg-black text-white justify-center'>
            
            {/* Header */}
            <div className='mt-5 text-center'>
               <h1 className='text-3xl sm:text-5xl tracking-wide font-bold'>Legacy Clothing</h1>
               <p id='subtitle' className='text-lg sm:text-2xl text-gray-500 mt-5'>Welcome to Prestige</p>
               <h1 className='text-xl sm:text-3xl mt-20'>Sign Up</h1>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
