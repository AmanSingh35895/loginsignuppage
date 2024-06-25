import React from 'react';

function Form({ onSignUpClick }) {
  return (
    <div className='bg-white h-[90%] px-10 pt-10 pb-20 rounded-3xl border-2 border-gray-200'>
      <h1 className='text-5xl font-semibold'>TeamSync</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details</p>
      <div className='mt-8 '>
        <div>
          <label className='text-lg font-medium'>Email</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your email'
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Password</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your password'
            type='password'
          />
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input 
              type='checkbox'
            />
            <label className='ml-2 font-medium text-base' htmlFor='remember'>Remember me</label>
          </div>
          <button className='font-medium text-base text-violet-500' onClick={onSignUpClick}>Register</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign in</button>
          <button className='flex rounded-xl py-3 border-2 border-gray-100  items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'> 
            Sign in with Google
          </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base mr-2'>Don't have an account</p>
          <button className='text-violet-500 text-base font-medium'>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
