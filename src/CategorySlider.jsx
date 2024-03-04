import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Slider from 'react-slick';

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


   function getCat() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  let {data} = useQuery('cateogry',getCat)
 

  return (
    <div className='row my-4'>
      <h3 className='text-main'>Shop Popular Categories:</h3>
      <Slider {...settings} className='px-2'>
        {data?.data?.data.map(  (ele)=> <div className='px-1 text-center'>
       <img key={ele._id} className='w-100 rounded-5' height={150} src={ele.image}></img>, <h5>{ele.name}</h5>
        </div>)}
        
      </Slider>
    </div>
  )
}
