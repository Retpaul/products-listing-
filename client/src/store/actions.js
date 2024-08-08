import { axiosClient } from "@/axiosClient";

export async function searchProducts({commit},keyword){
   const res = await axiosClient.get(`products?query=${keyword}`)
   commit("setSearchProducts", res.data)
}
export async function allProducts({commit},pathUrl){
   const res = await axiosClient.get(pathUrl)
   commit("setAllProducts", res.data)
}
