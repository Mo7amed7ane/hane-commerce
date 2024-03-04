import React from 'react'
import Slider from "react-slick";
import img1 from "../src/assets/slider-image-1.jpeg"
import img2 from "../src/assets/slider-image-2.jpeg"
import img3 from "../src/assets/slider-image-3.jpeg"
import img4 from "../src/assets/slide4.avif"
import img5 from "../src/assets/slide5.avif"
import img6 from "../src/assets/slide6.avif"
import img7 from "../src/assets/slide7.avif"
import img8 from "../src/assets/slide8.avif"
import img9 from "../src/assets/slide9.avif"
import img10 from "../src/assets/slide10.avif"
import img11 from "../src/assets/slide11.avif"







export default function MainSlider() {

    var settings = {
      
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      
        cssEase: 'linear'
      };
  return (
    <header>
    <div className='row gx-0 mt-5'>
    <div className="col-md-12 ">
        <Slider {...settings}>
            <img src={img1} className='rounded-5' height={300} alt="slider1" />
            <img src={img2} className='rounded-5' height={300} alt="slider2" />
            <img src={img3}  className='rounded-5' height={300} alt="slider3" />
            <img src={img4}  className='rounded-5'  alt="slider4" />
            <img src={img5}  className='rounded-5'  alt="slider5" />
            <img src={img6}  className='rounded-5'  alt="slider6" />
            <img src={img7}  className='rounded-5'  alt="slider7" />
            <img src={img8}  className='rounded-5'  alt="slider8" />
            <img src={img9}  className='rounded-5'  alt="slider9" />
            <img src={img10}  className='rounded-5'  alt="slider10" />
            <img src={img11}  className='rounded-5'  alt="slider11" />


        </Slider>
    </div>
       
    </div>
    </header>
  )
}
