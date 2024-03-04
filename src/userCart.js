import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function addToCart(productId) {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/cart",
    { productId },
    { headers: { token: localStorage.getItem("userToken") } }
  );
}

export function addToWishlist(productId) {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    { productId },
    { headers: { token: localStorage.getItem("userToken") } }
  );
}



export function getCart() {
    return axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { headers: { token: localStorage.getItem("userToken") } }
    );
  }

  export function useCart(key,fn){
    return useQuery( key, fn);
  }




  export function deleteCart(id) {
    return axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
      { headers: { token: localStorage.getItem("userToken") } }
    );
  }
  export function updateCart({id, count}) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{ count}, {
        headers: {
            "Content-Type":'application/json',
            token: localStorage.getItem("userToken")
        }
    })
}

export function checkout({id,shippingAddress}) {
  return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?642e5663fc6ec80008fc40bf?url=http://localhost:3000`,{shippingAddress}, {
      headers: {
          "Content-Type":'application/json',
          token: localStorage.getItem("userToken")
      }
  })
}

export function GetCartCrud(fn) {
  const queryClient = useQueryClient()
    return useMutation(fn,{
        onSuccess: (data) => {
            toast.success(data?.data?.message)
            queryClient.invalidateQueries('getCart')
        },
        onError: (data) => {
            toast.error( "This didn't work.")
        }
    })
}