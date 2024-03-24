<script setup lang="ts">
const products = [


  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]
const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]
</script>

<template>
  <div class="p-3 mt-6">
    <h2 class="text-2xl text-center tracking-tight text-gray-900">Customers also purchased</h2>
  </div>

  <UDivider class="mt-6"/>
  <div class="flex mt-6 justify-center">
     <UCarousel
        class="rounded-lg w-[75vw]"
        v-slot="{ item }"
        :items="items"
        :ui="{item: 'snap-start basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6'}"
      :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: '-left-12'
      }"
        :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: '-right-12'
      }"
        arrows
    >
      <NuxtLink to="https://google.com" class="relative p-2">
        <div class="mt-6 grid  gap-x-6 gap-y-10">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class=" overflow-hidden rounded-md bg-gray-200 ">
              <img :src="item" :alt="product.imageAlt" class="h-full w-full object-cover" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </UCarousel>


  </div>
</template>