
<template>
  <div class="p-5 basis-1/5 border">
    <div :key="product.id" class="group  p-2 relative">
      <div class=" overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
        <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <!--            <a :href="product.href">-->
            <NuxtLink :to="product.href">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ product.name }}
            </NuxtLink>
            <!--            </a>-->
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const product = defineProps([
  'id',
  'name',
  'href',
  'imageSrc',
  'imageAlt',
  'price',
  'color'
])

</script>
