import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import  { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './UserContext';
import {QueryClient, QueryClientProvider} from 'react-query'


const queryClient = new QueryClient({defaultOptions:{queries:{ cacheTime: 600000 ,
        refetchOnWindowFocus:false,
        }}})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UserContextProvider>
     
   <QueryClientProvider client={queryClient}>
   <Toaster   position="top-left"
  reverseOrder={false} />
        <App />
       
        </QueryClientProvider>
</UserContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
