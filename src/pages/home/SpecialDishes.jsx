import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import { } from "react-icons/fa6"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const simpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >NEXT</div>
    );
};

const simplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >BACK</div>
    );
}


const SpecialDishes = () => {

    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const specials = data.filter((item) => item.category === "popular")
                // console.log(specials)
                setRecipes(specials)
            });
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <simpleNextArrow />,
        prevArrow: <simplePrevArrow /> 
    };
    
    return (
        <div className='max-w-screen-2x1 container mx-auto xl:px-24 pxp4 my-20 relative'>
            <div className='text-lift '>
                <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Standout Dishes from our Menu</h2>
            </div>

            <div className='md:absolute right-3 top-8 mb-10'>
                <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>
                    <FaAngleLeft className='w-8 h-8 p-1' />
                </button>
                <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-green'>
                    <FaAngleRight className='w-8 h-8 p-1' />
                </button>
            </div>
            <Slider ref={slider}{...settings} className='overflow-hidden mt-10 space-c-5'>
                {
                    recipes.map((item, i) => (
                        <Cards key={i} item={item} />
                    ))
                }
            </Slider>
        </div>
    )
}

export default SpecialDishes