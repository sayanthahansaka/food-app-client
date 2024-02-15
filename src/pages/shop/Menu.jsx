import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from "react-icons/fa"

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(["all"]);
    const [sortOption, setSortOption] = useState(["default"]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPrePage] = useState(8);

    // loding data
    useEffect(() => {
        // fatc backend data
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:6001/menu");
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
        setCurrentPage(1);
    };

    // show all data
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");
        setCurrentPage(1);
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
          setCurrentPage(1);
    }
     
    // Pagination 
    const indexOfLastItem = currentPage + itemsPrePage;
    const indexOfFirstItem = indexOfLastItem - itemsPrePage;
    const currentItem = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-3'>
                    {/* all catagory btns */}
                <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                    <button onClick={showAll}
                    className={selectedCategory === "all" ? "active" : ""}
                    >All</button>
                    <button onClick={() => filterItems("rice")}
                    className={selectedCategory === "rice" ? "active" : ""}
                    >Rice</button>
                    <button onClick={() => filterItems("kottu")}
                    className={selectedCategory === "kottu" ? "active" : ""}
                    >Kottu</button>
                    <button onClick={() => filterItems("curry")}
                    className={selectedCategory === "curry" ? "active" : ""}
                    >Curry</button>
                    <button onClick={() => filterItems("d&f")}
                    className={selectedCategory === "d&f" ? "active" : ""}
                    >Dewal & Fried</button>
                    <button onClick={() => filterItems("beverages")}
                    className={selectedCategory === "beverages" ? "active" : ""}
                    >Beverages</button>
                    <button onClick={() => filterItems("dessert")}
                    className={selectedCategory === "dessert" ? "active" : ""}
                    >Dessert</button>
                    <button onClick={() => filterItems("other")}
                    className={selectedCategory === "other" ? "active" : ""}
                    >Other foods</button>
                </div>
                    {/* sorting types */}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <FaFilter className='h-4 w-4 text-white'/>
                        </div>
                        <select name="sort" id="sort"
                        onChange={(e) => handleSortChange(e.target.value)}
                         value={sortOption}
                         className='bg-black text-white px-2 py-1 rounded-sm'
                        >
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Low-to-High</option>
                            <option value="high-to-low">High-to-Low</option>
                        </select>
                    </div>
                </div>

                {/* products card */}
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    currentItem.map((item) => (
                        <Cards key={item._id} item={item} />
                    ))
                }

                </div>
            </div>
            {/* Pagination section */}
            <div className='flex justify-center my-8'>
                {
                    Array.from({length: Math.ceil(filteredItems.length / itemsPrePage)}).map((_, index) =>(
                        <button
                        key={index +1}
                        onClick={() => paginate(index + 1)}
                        className={'mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"}'}>
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu