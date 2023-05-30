<template>
  <!-- component -->
  <div class="bg-slate-100  pt-24">
    <div class="container h-screen lg:h-auto" v-if="isLoading">
        <CardGallerySekeleton :dataFoto="momentList" name="Moments" />
        <CardGallerySekeleton :dataFoto="eventList" name="Events"/>
        <CardGallerySekeleton :dataFoto="randomList" name="Randoms"/>
    </div>
    <div class="container h-screen lg:h-auto" v-else>
        <CardGalleryComponents :dataFoto="momentList" name="Moments" />
        <CardGalleryComponents :dataFoto="eventList" name="Events"/>
        <CardGalleryComponents :dataFoto="randomList" name="Randoms"/>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";
import jsonData from "../../src/assets/data/foto.json";
import CardGalleryComponents from "../components/CardGalleryComponents.vue";
import CardGallerySekeleton from "../components/sekeleton/CardGallerySekeleton.vue";
export default {
  components: {
    CardGalleryComponents, CardGallerySekeleton
  },
  setup() {
    const dataFoto = ref(jsonData.data);
    const momentList = dataFoto.value[0].moments;
    const eventList = dataFoto.value[1].events;
    const randomList = dataFoto.value[2].randoms;

    //     const handleScroll = () => {
    //   const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    //   if (isDesktop) {
    //     window.removeEventListener("scroll", handleScroll);
    //     alert("Tahan tombol shift pada keyboard dan scroll untuk menggeser foto!");
    //   }
    // };
    
    // onBeforeUnmount(() => {
    //   window.removeEventListener('scroll', handleScroll);
    // });

    const isLoading = ref(true);
    onMounted(() => {
      // window.addEventListener('scroll', handleScroll);
      setTimeout(() => {  
        isLoading.value = false;
      }, 800);
    });
    return { momentList, eventList, randomList, dataFoto, isLoading };
  },
};
</script>
<style></style>
