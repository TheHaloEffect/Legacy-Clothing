const Form = () => {
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
            type='password'
            className='py-2 px-5 mt-10 bg-transparent border-b-2 border-white outline-none'
            placeholder='Password'
            autoComplete='on'
          ></input>
        </form>
      </div>

      <Link href='/'>
        <div className='inline-flex justify-center'>
          <h1 className='text-xs sm:text-md text-gray-400 text-center mt-10 cursor-pointer transition duration-200 hover:text-white'>
            Already have an account? Login here
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Form;
