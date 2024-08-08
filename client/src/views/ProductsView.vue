<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { axiosClient } from "../axiosClient.js";
import store from "../store";
import ProductHero from "@/components/ProductsHero.vue";
import Product from "@/components/Product.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
// const state = reactive({
//   products: [],
//   isLoading: true,
// });

const isLoading = computed(() => store.state.allProducts.isLoading);
const products = computed(() => store.state.allProducts.products);
const searchedProducts = computed(() => store.state.searchedProducts);
const keyword = ref("");

const SearchProducts = () => {
  store.dispatch("searchProducts", keyword.value);
};

// onMounted(async () => {
//   try {
//     const res = await axiosClient.get("/products");
//     state.products = res.data;
//   } catch (error) {
//     console.log("Error");
//   } finally {
//     state.isLoading = false;
//   }
// });
onMounted(async () => {
  store.dispatch("allProducts", "/products");
});
</script>

<template>
  <div>
    <ProductHero />
    <div class="flex flex-col p-8">
      <div class="flex justify-center">
        <input
          type="text"
          class="w-72 rounded-md bg-gray-200 border-none"
          placeholder="Search for products here..."
          v-model="keyword"
          @change="SearchProducts"
        />
      </div>
      <div
        class="py-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        <div v-if="isLoading" class="text-center text-gray-500 py-6">
          <PulseLoader />
        </div>

    
          <Product
          v-else
            v-for="product in products"
            :key="product.id"
            
            :product="product"
          />
        </div>

    </div>
  </div>
</template>
