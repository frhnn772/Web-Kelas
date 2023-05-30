<template>
  <h1>
    Photos/<b>{{ name }}</b>
  </h1>
  <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
    <div
      class="flex flex-nowrap pt-4 ml-5"
      v-for="foto in dataFoto"
      :key="foto.id_foto"
    >
      <div class="inline-block px-3 animate-pulse">
        <div
          style="background-image: url('gallery-svgrepo-com.svg')"
          class="w-64 h-64 hover:scale-105 rounded-md shadow-md hover:shadow-xl transition-all duration-300 ease-in-out justify-center items-center flex object-center bg-center bg-cover brightness-50 hover:saturate-100 hover:brightness-100"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['dataFoto','name'],
};
</script>
