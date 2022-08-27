import Link from 'next/link';
import {useState} from 'react';

const Form = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className='flex justify-center mt-10'>
        <form className='flex flex-col'>
          <input
            type='email'
            className='py-2 px-5 bg-transparent border-b-2 border-white outline-none'
            placeholder='Email'
          ></input>
          <input
            type={showPassword ? 'text' : 'password'}
            className='py-2 px-5 mt-10 bg-transparent border-b-2 border-white outline-none'
            placeholder='Password'
            autoComplete='on'
          ></input>
          <div className='mt-5'>
            <input onChange={() => setShowPassword(!showPassword)} type='checkbox'></input>
            <p className='text-xs inline-flex ml-2'>Show Password</p>
          </div>
        </form>
      </div>

      <Link href='/'>
        <div className='inline-flex justify-center'>
          <p className='text-xs sm:text-md text-gray-400 text-center mt-10 cursor-pointer transition duration-200 hover:text-white'>
            Already have an account? Login here
          </p>
        </div>
      </Link>
    </>
  );
};

export default Form;
