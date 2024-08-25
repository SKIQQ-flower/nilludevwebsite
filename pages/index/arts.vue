<template>
  <div class="flex flex-col items-center w-full">
      <p class="npatch-angled text-nowrap w-full py-4 font-pixel text-[#ffbfc6] text-3xl px-9">
          Arts
      </p>
      <div
          class="npatch-window flex flex-row flex-wrap label-heart text-white relative -mt-[1.5 bg-[#2c1e31] w-full p-5 font-bold text-1xl">
          <a v-for="image in images" :key="image" :href="`/images/${image}`" target="_blank">
              <img class="w-[10rem] npatch-window p-2" :src="`/images/${image}`">
          </a>
      </div>
  </div>
</template>

<script setup>
const images = ref([])

onMounted(async () => {
try {
  const response = await fetch('/api/list-images');
  images.value = await response.json();
} catch (error) {
  console.error('Erro ao carregar as imagens:', error);
}
})
</script>
