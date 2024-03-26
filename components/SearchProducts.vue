
<script setup lang="ts">
const route = useRoute();
const query = computed(() => route.query.q);
import {useStore} from "~/composables/store";
const limit = ref(15);
const skip = ref(0);
const total_product = ref(0);
const is_load_more = ref(false);
const {products} = useStore();
const loading = ref(false);


watch(query, async () => {
  await fetchData();
})




onMounted(async () => {
  await fetchData();
})

const fetchData = async () => {
  const data = await getData(`/products/search?q=${query.value}&limit=${limit.value}&skip=${skip.value}`);
  products.value = data.products;
  total_product.value = data.total;
}

//events
const loadMore = async (e) => {
  skip.value = skip.value+20;
  loading.value = true;
  const data = await getData(`/products/search?q=${query}&limit=${limit.value}&skip=${skip.value}`);
  loading.value = false;
  if (data.products.length > 0){
    products.value.push(...data.products)
    total_product.value = total_product.value+data.total
  }
  else{
    e.target.style.display = 'none'
  }
}


</script>



<template>
<!--  {{products}}-->
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl tracking-tight text-gray-900">{{ total_product }} items found for <b class="text-indigo-800">{{query}}</b></h2>


      <div class="flex flex-wrap mt-6">

<!--        <ul>
          <li v-for="product in products">{{product.title}}</li>
        </ul>-->

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
        <UButton v-show="is_load_more" color="indigo" :loading="loading" @click="loadMore">Load More</UButton>
      </div>

    </div>
  </div>
</template>