import { useQuery } from "react-query";
import axios from "axios";

export function featuredProducts() {
  return axios.get("https://ecommerce.routemisr.com/api/v1/products");
}

export function featuredCategories() {
  return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
}


export function featuredSingleProduct(id) {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
}

export function useProducts(key,fn) {
  return useQuery( key , fn, {
    select: (data) => data.data.data,
  });
}
