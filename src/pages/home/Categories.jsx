import React from 'react'

const categoryItems = [
    {
        id: 1,
        title: "Main Dish",
        des:"(15 dishes)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcey0nW6czaqNQRRbJs1zjnHyduYzzC25iFg&usqp=CAU"
    },
    {
        id: 2,
        title: "Break Fast",
        des:"(10 break)",
        image: "https://i.pinimg.com/originals/9e/d5/b0/9ed5b0372f9003f512ae43607a6cddfc.jpg"
    },
    {
        id: 3,
        title: "Dessert",
        des:"(10 dessert)",
        image: "https://srilankatravelnotes.com/wp-content/uploads/2023/08/p73633-Delicious-Sri-Lankan-Desserts_-Exploring-the-Sweet-Flavors-of-Sri-Lanka-db5f34707c-4014964746.jpg"
    },
    {
        id: 4,
        title: "Browse All",
        des:"(50+ Items)",
        image: "https://static.vecteezy.com/system/resources/thumbnails/029/624/953/small/flavors-of-indonesia-a-feast-of-padang-style-delights-adorning-the-table-generative-ai-photo.jpg"
    }
]

const Categories = () => {
  return (
    <div className='max-w-screen-2x1 container mx-auto xl:px-24 pxp4 py-16'>
        <div className='text-center '>
            <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Popular Categorise</h2>
        </div>

        {/* cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) =>(
                    <div key={i} className='shadow-lg rounded-md bg-white py-6 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div>
                            <img src={item.image} alt="" className='p-1 rounded-full w-28 h-28' />
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5>{item.title}</h5>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories