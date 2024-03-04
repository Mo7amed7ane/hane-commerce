import React from 'react'
import { featuredCategories, useProducts } from './../../useProducts';
import Loading from './../../Loading';
import { GetCartCrud, addToCart } from '../../userCart';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


export default function Categories() {

  let { data, isError, error, isLoading } = useProducts('categories', featuredCategories)



  if (isLoading)
    return <Loading></Loading>

    if (isError) {
      return <h2 className='mt-5 text-center text-capitalize'>Error: {error.message}</h2>;
    }

   
  return (
    <div className="row">
      {data?.map((data) => (
        <Categories key={data._id} data={data}></Categories>
      ))}
    </div>
  );
   
  
  function Categories({ data }) {
    let { mutate } = GetCartCrud(addToCart);
  
  return (
    <>
      <Helmet>
    <title>Categories</title>
    <meta name="description" content="Helmet application" />
</Helmet>
    


<div className="col-md-4 mt-5">
        <div className="product p-3 rounded-3 cursor-pointer d-flex align-items-center justify-content-center flex-column">
        <img src={data.image} className='w-75' alt={data._id} />
        <hr className='fw-bolder'/>
        <p className='fw-bolder text-center'>{data.name}</p>
        </div>
      </div>  
  

    </>
  )
}
}