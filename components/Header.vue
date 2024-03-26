
<script setup lang="ts">
  var [query] = defineModel('query');
  const loading = ref(false)
  let sug_box = ref(false)
  const cursor_in_box = ref(false);
  const products = useState('products', () => [])

  onMounted(async () => {
    const data = await getData('/products?limit=10&skip=10&select=title,price')
    products.value = data.products;
  })

  const handleSugBox = (type) => {
    if (type == true){
      sug_box.value = true;
    }
    else{
      if (!cursor_in_box.value){
        sug_box.value = false;
      }
    }
  }


  const handleSearch = () => {
    navigateTo('/product/search?q='+query.value)
  }

  let timeout;

  watch(query, (newValue, oldValue) => {
     clearTimeout(timeout)
     timeout = setTimeout(async () => {
       loading.value = true;
       const data = await getData('/products/search?q='+newValue)
       products.value = data.products;
       loading.value = false;
     }, 1500)
  })



  const getProductText = (e) => {
    query.value= e.target.getAttribute('title')
    sug_box.value = false;
    navigateTo('/product/search?q='+query.value)
  }


  const mouseInArea = () => {
    cursor_in_box.value = true;
  }

  const mouseOutOfArea = () => {
    cursor_in_box.value = false;
  }



</script>

<template>
     <div class="py-8 flex items-center justify-between" >
       <NuxtLink to="/">
         <h1 class="text-3xl">Dummy Ecommerce</h1>
       </NuxtLink>
       <div class="relative">
         <UInput
             icon="i-heroicons-magnifying-glass-20-solid"
             size="md"
             color="indigo"
             :trailing="true"
             placeholder="Search..."
             :model-value="query"
             v-model="query"
             :loading="loading"
             @focusin="handleSugBox(true)"
             @focusout="handleSugBox(false)"
             @mouseleave="mouseOutOfArea" @mouseenter="mouseInArea"
             @keyup.enter="handleSearch"
         />
         <div @mouseleave="mouseOutOfArea" @mouseenter="mouseInArea" v-show="sug_box"  class="min-w-[250px] rounded-sm z-10 absolute top-[40px] bg-white shadow">
            <ul class="divide-y divide-slate-200">
              <li :title="title" @click="getProductText" v-for="{title} in products" class="p-2 px-4 hover:bg-slate-100 cursor-pointer">
                {{title}}
              </li>
            </ul>
         </div>
       </div>


     </div>
    <UDivider/>
</template>