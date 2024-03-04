import React, { useContext, useState } from "react";
import { userContext } from "../../UserContext";
import { checkout, deleteCart, getCart, updateCart, useCart } from "../../userCart";
import Loading from "./../../Loading";
import { GetCartCrud } from "./../../userCart";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Cart() {
  let { open, setOpen } = useContext(userContext);
  let { isError, error, isLoading, data } = useCart("getCart", getCart);
  let { mutate: deletedMutate, data: deletedData } = GetCartCrud(deleteCart);
  let { mutate, data: updateddata } = GetCartCrud(updateCart);
  let { mutate: mutateonline, data: dataonline } = GetCartCrud(checkout);

  let [details,setDetails] = useState('')
  let [phone,setPhone] = useState('')
  let [city,setCity] = useState('')

  


  function addAdd(e){
    e.preventDefault()
    let shippingAddress = {
      details,
      phone,
      city
    }
   mutateonline({id:data?.data?.data?._id , shippingAddress})
   if(dataonline?.data?.status === 'success')
   window.location.href = dataonline?.data?.session.url
  }

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <div>
       <Helmet>
    <title>Cart</title>
    <meta name="description" content="Helmet application" />
</Helmet>

      <aside
        className="right"
        style={
          open
            ? { right: 0, transition: "all 1s" }
            : { right: "-100%", transition: "all 1s" }
        }
      >
        <i
          className="fa-solid fa-close p-3 fa-2x cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        ></i>

        <div className="container">
          {data?.data?.numOfCartItems ? (
            <>
              <h1 className="fw-bolder mb-4">Shop Now:</h1>
              <h3 className=" fw-bolder text-uppercase">
                {" "}
                Items:{" "}
                <span className="text-main">{data?.data?.numOfCartItems}</span>
              </h3>
              <p className="fw-bold text-capitalize">
                total price:{" "}
                <span className="text-main fw-bolder">
                  {data?.data?.data?.totalCartPrice} EGP
                </span>
              </p>
              {data?.data?.data?.products.map((prod) => (
                <div
                  className="row gy-2 align-items-center "
                  key={prod.product._id}
                >
                  <div className="col-md-8">
                    <div className="row gy-3">
                      <div className="col-md-2 mb-4">
                        <img
                          src={prod.product.imageCover}
                          className="w-100"
                          alt={prod.title}
                        />
                      </div>
                      <div className="col-md-10">
                        <h3 className="fw-bolder">{prod.product.title}</h3>
                        <p className="text-main fw-bolder">{prod.price} EGP</p>
                        <span
                          className="text-main cursor-pointer"
                          onClick={() => {
                            deletedMutate(prod.product._id);
                          }}
                        >
                          <i className="fa-solid fa-trash"> </i> Remove
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-end">
                    <div>
                      <button
                        className="btn btn-border p-1"
                        onClick={() => {
                          mutate({
                            id: prod.product._id,
                            count: prod.count + 1,
                          });
                        }}
                      >
                        +
                      </button>
                      <span className="mx-2">{prod.count}</span>
                      <button
                        className="btn btn-border p-1"
                        onClick={() => {
                          mutate({
                            id: prod.product._id,
                            count: prod.count - 1,
                          });
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}

          <button className="btn btn-border fw-bolder"  data-bs-toggle="modal" data-bs-target="#modalId">Checkout</button>    

<div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body ">
        <form action="">
        <input type="text" onChange={(e)=>setDetails(e.target.value)} placeholder="Details" className="form-control mb-2"/>
        <input type="tel"  onChange={(e)=>setPhone(e.target.value)}  placeholder="Phone" className="form-control mb-2"/>
        <input type="text"  onChange={(e)=>setCity(e.target.value)}  placeholder="City" className="form-control mb-2"/>
        <button type="submit" className="btn btn-border" onClick={addAdd}>Submit</button>
        </form>
      </div>
    
    </div>
  </div>
</div>


            </>     
          )
          
          
          : (
            <div className="d-flex justify-content-center align-items-center">
              {" "}
             <div className="d-flex flex-column text-center "> 
             <h1 className="main-color text-center fw-bolder mb-5">Cart is Empty</h1>
              <NavLink className="nav-link" to="/product">
                <button className="btn btn-border fw-bold">Back TO Shopping</button>
              </NavLink>
             </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

