import React from 'react'
import { useParams } from 'react-router-dom'
import { featuredSingleProduct, useProducts } from './useProducts';
import Loading from './Loading';
import { GetCartCrud, addToCart } from './userCart';
import Slider from "react-slick";

export default function ProductDetails() {
  let {  mutate } = GetCartCrud(addToCart);

  let {id} = useParams()
  

  let {isError , isLoading , data , error} = useProducts('productdetails', ()=> featuredSingleProduct(id))

  if (isLoading)
  {
   return <Loading></Loading>
  }
  if (isError) {
   return <h3>Error: {error.message}</h3>
  }
  var settings = {
     dots: true, 
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
    
    <div>
    <div className="row justify-content-center align-items-center my-5" >
      <div className="col-md-4">
        {/* <img src={data?.imageCover} className='w-100' alt="" /> */}
        <Slider {...settings}> 
        {data?.images.map((img)=><img key={img} src={img}></img>)}
        </Slider>
      </div>
      <div className="col-md-8">
        <h3 className='fw-bolder'>{data?.title}</h3>
        <p>{data?.description}</p>
        <div>
          <span className=' main-color my-3'>{data?.category?.name}</span>
        </div>
        <div className='d-flex justify-content-between my-3'> 
      <span className='fw-bolder'>{data?.price} EGP</span>
      <span>{data?.ratingsAverage} <i className='fa-solid fa-star rating-color'></i></span>
     </div>
     <button className='btn bg-main text-white w-100 my-3' onClick={()=>{mutate(data?._id)}}>Add to Cart</button>
      </div>
    </div>

    </div>
  )
}
