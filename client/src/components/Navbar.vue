<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/images/logo.png";
const tabs = ref([
  { name: "Products", url: "/" },
  // { name: "Products", url: "/products" },
  { name: "Add Products", url: "/add" },
]);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <div
    class="p-3 flex justify-evenly md:justify-between items-center "
  >
    <div class="relative w-12 h-12">
      <img :src="logo" alt="Logo" class="w-full h-full bg-white rounded-full" />
    </div>
    <ul class="flex gap-5">
      <RouterLink
        v-for="(tab, idx) in tabs"
        :key="idx"
        :class="[
          isActiveLink(tab.url) ? ' bg-orange-400' :
          'hover:bg-gray-200',
          'text-gray-800',
          'px-2',
          ' py-1',
          'rounded-sm',
        ]"
        :to="tab.url"
      >
        {{ tab.name }}</RouterLink
      >
    </ul>
  </div>
</template>
