import React, { useContext } from 'react'
import logo from '../../assets/freshcart-logo.svg'  
import { Link } from 'react-router-dom'

import { userContext } from '../../UserContext';

import { Navigate, useNavigate } from 'react-router-dom';
import { getCart, useCart } from '../../userCart';




export default function Navbar() {
  let { data } = useCart("getCart", getCart);
  let {user,setIsUser,setOpen,login} = useContext(userContext)
  let pathactive=window.location.pathname
  let Navigate= useNavigate()
  function Logout ()
   {
    setIsUser(null)
    localStorage.removeItem('userToken')
    Navigate('/')
  }

  return (
 
 <>
 
 
 <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <Link className="navbar-brand" to='home'> <img src={logo} alt="logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  {user?   <ul className="navbar-nav me-auto">
      <li className="nav-item ">
        <Link  className={`nav-link ${pathactive === '/home'?'active':''}`} to="home">Home</Link>
      </li>
      <li className="nav-item">
        <Link  className={`nav-link ${pathactive === '/product'?'active':''}`} to="product">Product</Link>
      </li>
   
      <li className="nav-item">
        <Link className={`nav-link ${pathactive === '/brands'?'active':''}`} to="brands">Brands</Link>
      </li>

      <li className="nav-item">
        <Link  className={`nav-link ${pathactive === '/categories'?'active':''}`} to="categories">categories</Link>
      </li>
    </ul>:''}


    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
           <li className="nav-item">
             <Link className="nav-link" to="home" > <i className='fa-brands fa-facebook'></i></Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="home" > <i className='fa-brands fa-twitter'></i></Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="home" > <i className='fa-brands fa-youtube'></i></Link>
           </li>

           {!user? <>
            <li className="nav-item">
             <Link className="nav-link" to="register" >Register</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="login">Login</Link>
           </li>
           
           </> :  <li className="nav-item">
            <a className="nav-link cursor-pointer" onClick={Logout}>Logout</a>
           </li>


        }
  
    {/* <span>
      <div className="cart nav-item">
        <li>   <Link className="nav-link" to="" > <i className='fa-solid fa-shopping-cart'></i></Link></li>
      
      </div>
    </span> */}

    <li className='position-relative nav-item' data-bs-toggle={!user? 'modal':''} data-bs-target="#exampleModal" onClick={()=>{setOpen(true)}}>

    <div className='class="shopping-cart"'>
   <div className='shopping-cart-header'>
    <Link className='nav-link' to='cart'>   <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{data?.data?.numOfCartItems}</span></Link>
   </div>
   </div>
   
    </li>

   {user? 
      <li className='nav-item profile '>
        <span className='nav-link ms-3 fw-bolder  '>
          <span className='fw-bolder Hi'>Hi </span>{login}
        </span>
      </li>
   :'' }

          
        
         </ul>

  </div>
</nav>





<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-main">
    
      <div class="modal-body text-center fw-bolder text-white">
        <h3>Please Login First ........</h3>
      </div>
     
    </div>
  </div>
</div>





 </>



 










 

  


 )

}
