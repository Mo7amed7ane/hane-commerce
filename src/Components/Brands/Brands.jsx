import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'


export default function Brands() {
  

  function getBrands() {
   return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

  let{data} = useQuery('brands',getBrands,
{  select:(data) => data?.data?.data}
  )
  console.log(data);
  return (
    <div className="container">
       <Helmet>
    <title>Brands</title>
    <meta name="description" content="Helmet application" />
</Helmet>

      <div className='row'>
        <h2 className='cursor-pointer' >Brands</h2>
        {data?.map((ele) => <div className='col-md-4 my-2' key={ele._id}>
          <div className="item text-center p-3 rounded-3 cursor-pointer product">
            <img src={ele.image} alt="" />
            <h3>{ele.name}</h3>
          </div>
        </div>)}
      </div>
    </div>
  )
}
