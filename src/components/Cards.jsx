import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaHeart} from "react-icons/fa"
import {AuthContext} from "../contexts/AuthProvider";

const Cards = ({ item }) => {
    const {name, image, price, recipe, _id} = item;

    const [isHeartFillted, setIsHeartFillted] = useState(false);
    const {user} = useContext(AuthContext);

    // Add to cart button
    const handleAddtoCart = (item) => {
        // console.log("yo yo btn working", item);
        if(user && user?.email){
            const cartItem = {menuItemId: _id, name, quantity: 1, image, price, email: user.email};
            console.log(cartItem);
        }

    }

    const handleHeartClick = () => {
        setIsHeartFillted(!isHeartFillted)
    }
    return (
        <div to={`/menu/${item._id}`} className='card shadow-xl relative mr-5 md:my-5'>
            <div
             className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green
              ${isHeartFillted ? "text-rose-500" : "text-white"}`}
            onClick={handleHeartClick}
            >
                <FaHeart className='h-5 w-5 cursor-pointer'/>
            </div>
            <Link to={`/menu/${item._id}`}>
                <figure className='rounded-full w-28px h-28px'>
                    <img
                        src={item.image}
                        alt=""
                        // hover:scale-105
                        className='hover:scale-105 transition-all duration-200 md:h-72'
                    />
                </figure>
            </Link>
            <div className="card-body">
               <Link to={'/menu/${item._id}'}> <h2 className="card-title">{item.name}</h2> </Link>
                <p>{item.recipe}</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className='font-semibold'><span className='text-sm text-red'>$</span>{item.price}</h5>
                    <button className="btn bg-green text-white" onClick={() => handleAddtoCart(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
// 14.20.1
export default Cards