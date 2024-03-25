
<script setup lang="ts">
const route = useRoute();
const name = route.params.name;
const products = reactive(await $fetch('https://dummyjson.com/products/category/'+name, {
  method: "GET"
}));
</script>



<template>
  <Header/>
  <Navbar/>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">{{name}}</h2>


      <div class="flex flex-wrap mt-6">
        <ProductCart
            v-for="product in products.products"
            :id = "product.id"
            :href="`/product/`+product.id"
            :imageSrc="product.thumbnail"
            :imageAlt="product.title"
            :name="product.title"
            :price="'$'+product.price"
            :color="product.category"
        />

      </div>

    </div>
  </div>
</template>