import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className='object-cover w-full max-h-[550px] text-white'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/d4f217b2-4001-4df5-bef8-0b026ec133fe/IN-en-20221031-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
            <div className='bg-black/60 fixed top-0 left-0 w-fill h-[550px] '>
            <div className='absolute top-[20%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-5xl font-bold' >My Shows</h1>
            </div>
            </div>
            <SavedShows />
      
      </div>
    </>
  )
}

export default Account