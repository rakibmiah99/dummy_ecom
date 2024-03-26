
<script setup lang="ts">
    import {useStore} from "~/composables/store";
    const limit = ref(15);
    const skip = ref(0);
    const {products} = useStore();
    const loading = useState('loading', () => false);
    const data = await getData(`/products?limit=${limit.value}&skip=${skip.value}`);
    products.value = data.products;


    //events
    const loadMore = async (e) => {
      skip.value = skip.value+20;
      loading.value = true;
      const data = await getData(`/products?limit=${limit.value}&skip=${skip.value}`);
      loading.value = false;
      if (data.products.length > 0){
        products.value.push(...data.products)
      }
      else{
        e.target.style.display = 'none'
      }

    }
</script>



<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>


      <div class="flex flex-wrap mt-6">
        <ProductCart
            v-for="product in products"
            :id = "product.id"
            :href="`/product/`+product.id"
            :imageSrc="product.thumbnail"
            :imageAlt="product.title"
            :name="product.title"
            :price="'$'+product.price"
            :color="product.category"
        />

      </div>

      <div class="p-3 mt-5 text-center">
        <UButton color="indigo" :loading="loading" @click="loadMore">Load More</UButton>
      </div>

    </div>
  </div>
</template>