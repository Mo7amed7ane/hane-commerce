import React, { useState } from "react";
import Loading from "./../../Loading";
import { useProducts, featuredProducts } from "../../useProducts";
import { Link } from "react-router-dom";
import { addToCart, GetCartCrud } from "../../userCart";
import MainSlider from './../../MainSlider';
import CategorySlider from "../../CategorySlider";
import { Helmet } from "react-helmet";

export default function Product() {
  let { data, error, isError, isLoading, isFetching } = useProducts(
    "product",
    featuredProducts
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
  <>
    <MainSlider />
     < CategorySlider/>
    <div className="row">
      {data?.map((prod) => (
        <Product key={prod._id} prod={prod}></Product>
      ))}
    </div>
  </>
  );

  function Product({ prod }) {
    let {  mutate } = GetCartCrud(addToCart);
    let [heart, setHeart] = useState(false)
  
 
    return (
    <>

    <Helmet>
    <title>Home</title>
    <meta name="description" content="Helmet application" />
</Helmet>

      <div className="col-md-3 ">
        <div className="product p-3 cursor-pointer rounded-3">
        <i className='fa-solid fa-heart fa-1x m-3 cursor-pointer' style={heart ? { color: 'green' } : { color: 'unset' }} onClick={() => setHeart(!heart)}></i>
          <Link to={`/productDetails/${prod._id}`}>
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
