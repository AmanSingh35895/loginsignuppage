import React from 'react';

function SignUpForm() {
  return (
    <div className='bg-white h-[90%] px-6 py-8 lg:px-10 lg:py-10 rounded-3xl border-2 border-gray-200'>
      <h1 className='text-3xl lg:text-5xl font-semibold text-center'>TeamSync</h1>
      <p className='text-base lg:text-lg font-medium text-gray-500 mt-4 text-center'>Create your account</p>
      <div className='mt-6 lg:mt-8'>
        <div>
          <label className='text-lg font-medium'>Full Name</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            placeholder='Enter your full name'
            required
          />
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Date of Birth</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            type='date'
            required
          />
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Gender</label>
          <select 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            required
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Profile Picture</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            type='file'
          />
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Email</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            placeholder='Enter your email'
            type='email'
            required
          />
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Password</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            placeholder='Enter your password'
            type='password'
            required
          />
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Confirm Password</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            placeholder='Confirm your password'
            type='password'
            required
          />
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Communication Preferences</label>
          <div className='mt-2'>
            <input type='checkbox' id='emailPref' name='emailPref' />
            <label htmlFor='emailPref'>Email Notifications</label>
          </div>
          <div>
            <input type='checkbox' id='newsletterPref' name='newsletterPref' />
            <label htmlFor='newsletterPref'>Subscribe to Newsletter</label>
          </div>
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Theme Preferences</label>
          <select 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            required
          >
            <option value='light'>Light Mode</option>
            <option value='dark'>Dark Mode</option>
          </select>
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Language Preferences</label>
          <select 
            className='w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent'
            required
          >
            <option value='english'>English</option>
            <option value='spanish'>Spanish</option>
            <option value='french'>French</option>
          </select>
        </div>
        <div className='mt-6 lg:mt-8 flex justify-center'>
          <button className='font-medium text-base lg:text-lg text-violet-500 px-4 lg:px-6 py-2 lg:py-3 rounded-lg border-2 border-violet-500 hover:bg-violet-500 hover:text-white transition duration-300'>Sign up</button>
        </div>
        <div className='mt-4 lg:mt-4 lg'><p className='text-base font-medium text-gray-600'>Already have an account?</p>
<button className='text-base font-medium text-violet-500 ml-2 hover:underline'>Sign in</button>
</div>
</div>
</div>
);
}

export default SignUpForm;
