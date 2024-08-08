<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  product: Object,
});
</script>

<template>
  <RouterLink
    :to="`products/${product.id}`"
    class="p-2 font-mono font-semibold hover:shadow-2xl shadow-orange-600"
  >
    <div class="relative w-48 h-48 p-3">
      <img
        :src="
          product.image 
        "
        alt="image"
        class="w-full h-full bg-cover bg-center"
      />
    </div>
    <div class="text-sm space-y-3">
      <div>
        <h4>{{ product.name }}</h4>
        <p class="text-xs line-clamp-1">{{ product.description }}</p>
      </div>

      <p>$ {{ product.price }}</p>
    </div>
  </RouterLink>
</template>
