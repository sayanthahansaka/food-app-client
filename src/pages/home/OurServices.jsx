import React from 'react'

const serviceLists = [
  {
    id: 1,
    title:"Catering",
    des: "Elevate your events with our exceptional catering services. From intimate gatherings to grand celebrations, our culinary team crafts exquisite menus to delight your guests and create memorable experiences.",
    image: "public/images/home/services/icon1.png"
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "Experience lightning-fast delivery with our dedicated team. We prioritize efficiency without compromising the quality of your order. Your satisfaction is our top priority.",
    image: "public/images/home/services/icon2.png"
  },  
  {
    id: 3,
    title: "Online Ordering",
    des: "Enjoy the convenience of ordering your favorite dishes online from the comfort of your home. Our user-friendly platform ensures a seamless and secure ordering experience.",
    image: "public/images/home/services/icon3.png"
  },  
  {
    id: 4,
    title: "Gift Cards",
    des: "Surprise your loved ones with the perfect gift of delicious experiences. Our gift cards are a delightful way to share the joy of Oshin Lanka's culinary delights.",
    image: "public/images/home/services/icon4.png"
  }  
]

const OurServices = () => {
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 pxp4 my-16'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

      <div className='md:w-1/2'>
          <div className='text-left md:w-4/5'>
            <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Our Culinary Journey And Services</h2>
            <p className='my-5 text-secondary leading-[30px]'>
            Explore the exquisite flavors of Oshin Lanka's culinary delights. Our passion for food is reflected in every dish we serve.
             From traditional favorites to innovative creations, our culinary journey is a celebration of taste and authenticity.
            </p>
            <button className='btn bg-green text-white px-8 py-3 rounded-full'>Explore</button>
          </div>
        </div>

        <div className='md:w-1/2'>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
            {
              serviceLists.map((service) => (
                <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border'>
                  <img src={service.image} alt="" className='mx-auto'/>
                  <h5 className='pt-3 font-semibold'>{service.title}</h5>
                  <p className='text-[#90BD95]'>{service.des}</p>
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default OurServices