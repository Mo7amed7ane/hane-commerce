import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { FallingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

export default function Register() {

 const navigate = useNavigate()
  let [msg,setMsg] = useState('')
  let [loading,setLoading] = useState(false)
 async function getRegister(values){
   try {
    setLoading(true)
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
    if (data.message === 'success')
    {
     navigate('/login')
      setMsg('')
      setLoading(false)
    }
   } catch (error) {
    setMsg(error.response.data.message)
    setLoading(false)
   }
  }

  // function errorsValidate (values){
  // let errors = {}
  // if (!values.name) 
  //   errors.name = 'name is Required';
  
  // else if (!values.name.lenght<2) 
  // errors.name = 'name is too short';
  
  // else if (!values.name.length>8) 
  //   errors.name = 'name is too long';
  

  //    if (!values.email) 
  //     errors.email = 'email is Required'

  //   return errors
  // }
  
 function validationSchema(){
  let schema = new Yup.object({
  name: Yup.string().min(2).max(10).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().matches(/^[A-Z][a-z0-9]{5,10}$/,"password must match the following:start with capital char at least 5 characters"),
  rePassword: Yup.string().oneOf([Yup.ref('password')],"rePassword must be same").required(),
  phone:Yup.string().min(8,"phone must be higher than 8 numbers").max(11).matches(/^(002)?(01)[0-25][0-9]{8}$/,"phone not valid").required(),
  })
  return schema
 }


  let formik = useFormik({
    initialValues: {
      name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
    },
  validationSchema
,
    onSubmit:getRegister
  })



  return (
    <div>
      <h4 className='fw-bold'>Register Now:</h4>

      <form className='w-75 mx-auto my-3' onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name:</label>
          <input type="text" className='form-control mb-3' placeholder="Enter your name" id='name' value={formik.values.name} onChange={formik.handleChange}
           onBlur={formik.handleBlur}/>
         {formik.errors.name && formik.touched.name? <p className='alert alert-danger'>{formik.errors.name}</p>:'' }


          <label htmlFor="email">email:</label>
          <input type="email" className='form-control mb-3' placeholder="Examble@examble.com" id='email'  value={formik.values.email} onChange={formik.handleChange} 
            onBlur={formik.handleBlur}/>
          {formik.errors.email && formik.touched.email? <p className='alert alert-danger'>{formik.errors.email}</p>:'' }


          <label htmlFor="password">password:</label>
          <input type="password" className='form-control mb-3' placeholder="Enter your password" id='password'  value={formik.values.password} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
          {formik.errors.password && formik.touched.password? <p className='alert alert-danger'>{formik.errors.password}</p>:'' }

          <label htmlFor="rePassword">rePassword:</label>
          <input type="password" className='form-control mb-3' placeholder="Enter your rePassword" id='rePassword'  value={formik.values.rePassword} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
          {formik.errors.rePassword && formik.touched.rePassword? <p className='alert alert-danger'>{formik.errors.rePassword}</p>:'' }

          <label htmlFor="phone">phone:</label>
          <input type="tel" className='form-control mb-3' placeholder="Enter your phone" id='phone'  value={formik.values.phone} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
          {formik.errors.phone && formik.touched.phone? <p className='alert alert-danger'>{formik.errors.phone}</p>:'' }

          <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white ms-auto d-block' type='submit'> {loading ? <FallingLines
  color="#fff"
  width="40"
  visible={true}
  ariaLabel="falling-circles-loading"></FallingLines> : 'Register'}</button>
      {msg?  <p className='alert alert-danger mt-3'>{msg}</p> : ''}
      </form>
    </div>
  )
}
