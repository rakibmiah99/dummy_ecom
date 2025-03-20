<script setup lang="ts">
const isOpen = ref(false)


var categories = useState('categories', () => [])
var all_categories = reactive([]);
const data = await $fetch('https://dummyjson.com/products/categories', {
  method: 'GET'
})



data.forEach(function (item: string){
  all_categories.push({
    label: item.name,
    // icon: 'i-heroicons-home',
    to: '/category/'+item.slug
  })
})



onMounted(() => {
  showMenuItem(window.innerWidth - 20)
  window.onresize =function (){
    const width = window.innerWidth;
    showMenuItem(width)
  }


})


function showMenuItem(width: number){
  //sm
  if (width <= 640){
    categories.value = all_categories.slice(0,4)
  }
  //md
  if (width > 640 && width < 768){
    categories.value = all_categories.slice(0,6)
  }
  //lg
  if (width > 768 && width < 1024){
    categories.value = all_categories.slice(0,8)
  }
  //xl
  if (width > 1024 && width < 1280){
    categories.value = all_categories.slice(0,10)
  }
  //2xl
  if (width > 1280 && width < 1536){
    categories.value = all_categories.slice(0,12)
  }
  //more then 2xl
  if (width > 1536){
    categories.value = all_categories.slice(0,12)
  }
}



</script>

<template>
  <div class="flex justify-between items-center">
    <UHorizontalNavigation :links="categories" class="border-b border-gray-200 dark:border-gray-800 overflow-scroll" >
      <template #default="{ link }">
        <span class="group-hover:text-indigo-800 relative capitalize">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>

    <UButton icon="i-heroicons-bars-3" color="indigo" @click="isOpen = true" />
  </div>


  <USlideover side="right" :transition="false" :ui="{width: 'max-w-[19rem]'}" v-model="isOpen">
    <div class="p-4 flex-1 overflow-scroll">
      <h2 class="tex-lg p-3">All Categories</h2>
      <ul role="list" class="">
        <li v-for="category in all_categories" class="border-b block last:border-none">
          <div class=" overflow-hidden">
            <ULink
                :to="category.to"
                active-class="text-indigo"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 p-3 dark:hover:text-gray-200"
                class="block"
            >
              {{category.label}}
            </ULink>
          </div>
        </li>
      </ul>
    </div>
  </USlideover>
</template>