import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';

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
    const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
    };

    // show all data
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");
    }

    // sorting based on A-Z, Z-A, Low-High price
    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];

        switch(option) {
            case "A-Z":
                sortedItems.sort((a,b) => a.name.localeCompare(b.name))
              break;
            case "Z-A":
                sortedItems.sort((a,b) => b.name.localeCompare(a.name))
              break;
              case "low-to-high":
                sortedItems.sort((a,b) => a.price - b.price)
              break;
              case "high-to-low":
                sortedItems.sort((a,b) => b.price - a.price)
              break;
            default:
              break;
          }

          setFilteredItems(sortedItems);
    }
     


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
                {/* filtering and sort */}
                <div>
                    {/* all catagory btns */}
                <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                    <button onClick={showAll}>All</button>
                    <button onClick={() => filterItems("rice")}>Rice</button>
                    <button onClick={() => filterItems("kottu")}>Kottu</button>
                    <button onClick={() => filterItems("other")}>Other foods</button>
                    <button onClick={() => filterItems("curry")}>Curry</button>
                    <button onClick={() => filterItems("d&f")}>Dewal & Fried</button>
                    <button onClick={() => filterItems("beverages")}>Beverages</button>
                    <button onClick={() => filterItems("dessert")}>Dessert</button>
                </div>
                    
                </div>

                {/* products card */}
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    filteredItems.map((item) => (
                        <Cards key={item._id} item={item} />
                    ))
                }

                </div>
            </div>
        </div>
    )
}

export default Menu