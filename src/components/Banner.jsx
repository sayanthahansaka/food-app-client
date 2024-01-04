import React from 'react';

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] via-0% to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* Text */}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
            Delicious Delivered<br></br>
            <span className='text-green'>:</span><span className='text-red'>Oshin Lanka's</span>
            <br></br> Online Food Delivery
          </h2>
          <p className='text-xl text-[#4A4A4A]'>
            Indulge in the finest flavors with Oshin Lanka. Order now for a taste adventure brought straight to your door.
          </p>
          <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
        </div>

        {/* Image */}
        <div className='md:w-1/2'>
          <img src="public\images\home\srilankan food.jpg" alt="Delicious Sri Lankan Food" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
