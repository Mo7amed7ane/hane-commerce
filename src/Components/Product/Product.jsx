import React, { useState } from "react";

import Loading from "../../Loading";
import { useProducts, featuredProducts } from "../../useProducts";
import { Link } from "react-router-dom";
import { addToCart, GetCartCrud } from "../../userCart";
import { Helmet } from "react-helmet";












export default function Product() {


  let { data, error, isError, isLoading, isFetching } = useProducts(
    "product",
    featuredProducts
  );
 


  // let [searchedArr, setSearchedArr] = useState([])

  // function search(e) {
  //   let term = e.target.value
  //   let newArr = data?.filter((ele) => ele?.title.toLowerCase().trim().includes(term.toLowerCase().trim()))
  //   setSearchedArr(newArr)
  // }
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="row">
      {data?.map((prod) => (
        <Product key={prod._id} prod={prod}></Product>
      ))}
    </div>
  );

  function Product({ prod }) {
    let { mutate } = GetCartCrud(addToCart);
  
    let [heart, setHeart] = useState(false)
  

    return (
   <>
{/* 
<div className='w-75 mx-auto main-color p-5 my-3' onChange={search}>
        <input type="text" className='form-control ' />
      </div> */}
    <Helmet>
    <title>Products</title>
    <meta name="description" content="Helmet application" />
</Helmet>

{/*   
<div className="row">
        {
          searchedArr.length ? searchedArr?.map((prod) => <Product key={prod._id} prod={prod}></Product>) : data?.map((prod) => <Product key={prod._id} prod={prod}></Product>)
        }

      </div> */}



<div className="col-md-3 mt-3">
        <div className="product p-3 rounded-3 cursor-pointer">
        <i className='fa-solid fa-heart fa-1x m-3 cursor-pointer' style={heart ? { color: 'green' } : { color: 'unset' }} onClick={() => setHeart(!heart)}></i>
          <Link  to={`/productDetails/${prod._id}`}>
            <img src={prod.imageCover} className="w-100" alt={prod.title} />
            <h2 className="h5 main-color">{prod.category.name}</h2>
            <p>{prod.title}</p>
            <div className="d-flex justify-content-between">
              <span className="fw-bolder">{prod.price} EGP</span>
              <span>
                {prod.ratingsAverage}{" "}
                <i className="fa-solid fa-star rating-color"></i>
              </span>
            </div>
          </Link>
          <button
            className="btn btn-border mx-auto my-2"
            onClick={() => {
              mutate(prod._id);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div> 
   </>
    );
  }
}

