export default function setSearchProducts(state,products){
    state.searchedProducts = products
}
export function setAllProducts (state,products){
    state.allProducts.isLoading = false
    state.allProducts.products = products
}