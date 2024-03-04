import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { FallingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../UserContext';

export default function Login() {
let {user,setIsUser,setLogin} = useContext(userContext)
 const navigate = useNavigate()
  let [msg,setMsg] = useState('')
  let [loading,setLoading] = useState(false)
 async function getLogin(values){
   try {
    setLoading(true)
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
    if (data.message === 'success')
    {
      setIsUser(data.token)
      setLogin(data.user.name)
      localStorage.setItem('userToken', data.token)
      localStorage.setItem('userName', data.user.name)
     navigate('/home')
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
  
  email: Yup.string().email().required(),
  password: Yup.string().required().matches(/^[A-Z][a-z0-9]{5,10}$/,"password must match the following:start with capital char at least 5 characters"),
 
  })
  return schema
 }


  let formik = useFormik({
    initialValues: {
    
    email:"",
    password:"",
  
    },
  validationSchema
,
    onSubmit:getLogin
  })



  return (
    <div>
      <h4 className='fw-bold'>Login Now:</h4>

      <form className='w-75 mx-auto my-3' onSubmit={formik.handleSubmit}>
       


          <label htmlFor="email">email:</label>
          <input type="email" className='form-control mb-3' placeholder="Examble@examble.com" id='email'  value={formik.values.email} onChange={formik.handleChange} 
            onBlur={formik.handleBlur}/>
          {formik.errors.email && formik.touched.email? <p className='alert alert-danger'>{formik.errors.email}</p>:'' }


          <label htmlFor="password">password:</label>
          <input type="password" className='form-control mb-3' placeholder="Enter your password" id='password'  value={formik.values.password} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
          {formik.errors.password && formik.touched.password? <p className='alert alert-danger'>{formik.errors.password}</p>:'' }

        

          <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white ms-auto d-block' type='submit'> {loading ? <FallingLines
  color="#fff"
  width="40"
  visible={true}
  ariaLabel="falling-circles-loading"></FallingLines> : 'Login'}</button>
      {msg?  <p className='alert alert-danger mt-3'>{msg}</p> : ''}
      </form>
    </div>
  )
}
