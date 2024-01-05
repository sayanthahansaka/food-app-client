import React, { useEffect, useState } from 'react'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(["all"]);
    const [sortOption, setSortOption] = useState(["default"]);

    // loding data
    useEffect(() => {
        // fatc backend data
        const fetchData = async () => {
            try{
                const response = await fetch("public/menu.json");
                const data = await response.json();
                // console.log(data);
                setMenu(data);
                setFilteredItems(data);

            }catch (err){
                console.log("yo yo err");
            }
        }
        fetchData();
    },[])

    // filtaring data


    return (
        <div>
            {/* menu top */}
            <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] via-0% to-[#FCFCFC] to-100%'>

                <div className='py-48 flex flex-col items-center justify-center gap-8'>
                    {/* Text */}
                    <div className='text-center px-4 space-y-7'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>

                            "Discover Culinary Bliss
                            <span className='text-red'>:</span><span className='text-green'>Oshin Lanka's </span>
                            Signature Flavors Await."
                        </h2>
                        {/* <p className='text-xl text-[#4A4A4A]'>
            Indulge in the finest flavors with Oshin Lanka. Order now for a taste adventure brought straight to your door.
          </p> */}
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                    </div>
                </div>
            </div>

            {/* menu orders */}
            <div max-w-screen-2x1 container mx-auto xl:px-24 pxp4>

            </div>

        </div>
    )
}

export default Menu