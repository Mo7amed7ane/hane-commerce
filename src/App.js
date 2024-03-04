import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import NotFound from "./Components/NotFound";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";

import { useContext, useEffect } from "react";
import { userContext } from "./UserContext";
import ProtectedRouute from "./ProtectedRoute";
import Cart from './Components/Cart/Cart';
import ProductDetails from './productDetails';
import Orders from "./Orders";


function App() {
  let {setIsUser,setLogin} = useContext(userContext)

  useEffect(()=> {
  if (localStorage.getItem('userToken'))
  setIsUser(localStorage.getItem('userToken'))
  setLogin(localStorage.getItem('userName'))

  },[]);





  const routes = createHashRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Login></Login> },
        { path: "register", element: <Register></Register> },
        { path: "home", element: <ProtectedRouute> <Home /> </ProtectedRouute> },
        { path: "cart", element: <ProtectedRouute> <Cart /> </ProtectedRouute> },
        { path: "allorders", element: <ProtectedRouute> <Orders /> </ProtectedRouute> },
        { path: "productDetails/:id", element: <ProtectedRouute> <ProductDetails></ProductDetails></ProtectedRouute> },
        { path: "product", element: <ProtectedRouute> <Product></Product> </ProtectedRouute>},
        { path: "categories", element:<ProtectedRouute> <Categories></Categories></ProtectedRouute> },
        { path: "brands", element: <ProtectedRouute><Brands></Brands></ProtectedRouute> },
        { path: "*", element: <NotFound></NotFound> },
        { path: "login", element: <Login></Login> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
