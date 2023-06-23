<template>
  <!-- component -->
  <div class="bg-slate-100  pt-24 mb-14">
    <div class="container h-screen lg:h-auto" v-if="isLoading" data-aos="fade-left" data-aos-delay="200">
        <CardGallerySekeleton :dataFoto="momentList" name="Moments"/>
        <CardGallerySekeleton :dataFoto="eventList" name="Events"/>
        <CardGallerySekeleton :dataFoto="randomList" name="Randoms"/>
    </div>
    <div class="container h-screen lg:h-auto" v-else>
        <CardGalleryComponents :dataFoto="momentList" name="Moments" />
        <CardGalleryComponents :dataFoto="eventList" name="Events"/>
        <CardGalleryComponents :dataFoto="randomList" name="Randoms"/>
    </div>
  </div>
  <div class="fixed lg:-bottom-8 bottom-0 w-full">
<svg viewBox="0 0 1280 126" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-delay="800">
<path d="M-1.01562 0L43.4858 4.68125C87.9872 9.1875 176.99 18.8125 265.993 25.6812C354.996 32.8125 443.998 37.1875 533.001 32.6812C622.004 28 711.007 14 800.01 18.6812C889.013 23.1875 978.015 46.8125 1067.02 44.3188C1156.02 42 1235.48 16.9937 1279.98 2.99375V56.5V126L1279.48 126.5C1234.98 126.5 1156.02 126 1067.02 126C978.015 126 889.013 126 800.01 126C711.007 126 622.004 126 533.001 126C443.998 126 354.996 126 265.993 126C176.99 126 87.9872 126 43.4858 126H-1.01562V0Z" fill="url(#paint0_linear_16_914)"/>
<defs>
<linearGradient id="paint0_linear_16_914" x1="639.484" y1="0" x2="639.484" y2="126.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF4910"/>
<stop offset="1" stop-color="#FF7A00"/>
</linearGradient>
</defs>
</svg>
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
