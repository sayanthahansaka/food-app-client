import React from 'react'

const Banner = () => {
  return (
    <div className=' max-w-screen-2x1 container mx-auto xl:px-24 pxp4 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* txt */}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='md:text-5x1 text-4xl font-bold md:leading-snug leading-snug'>
            Delicious Delivered<br></br>
            <span className='text-green'>:</span><span className='text-red'>Oshin Lanka's</span>
            <br></br> Online Food Delivery</h2>
          <p className='text-xl text-[#4A4A4A]'>Indulge in the finest flavors with Oshin Lanka. Order now for a taste adventure brought straight to your door.</p>
          <button className='btn bg-green px-8 py-3 front-semibold text-white rounded-full'>Order Now</button>
        </div>

        {/* image */}
        <div className='md:w-1/2'>
          <img src="public\images\home\srilankan food.jpg" alt="" />
          <div>
            <div>
              <img src="public\images\home\b-food1.pngg" alt="" className='rounded 2x1 w-35 h-10' />
            </div>
            <h5>Cheese Kottu</h5>
            <div className="rating rating-sm">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <p className='text-red'>$ 6.5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner