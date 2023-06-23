<template>
  <section class="bg-slate-100 ">
    <div class="container pt-24 mb-20">
      <h1>Photos/<b>Students</b></h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4" v-if="isLoading" data-aos="fade-up">
        <CardSekeleton :dataSiswa="dataSiswa" />
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4" v-else>
        <CardComponents :dataSiswa="dataSiswa" />
      </div>
    </div>
    <div class="fixed lg:-bottom-8 bottom-0 w-full">
<svg viewBox="0 0 1280 125" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-delay="800">
<path d="M0 0L71.1111 10.7C142.222 21 284.444 43 426.667 42.7C568.889 43 711.111 21 853.333 10.7C995.556 -2.86102e-06 1137.78 0 1208.89 0H1280V125H1208.89C1137.78 125 995.556 125 853.333 125C711.111 125 561.222 125 419 125C276.778 125 142.222 125 71.1111 125H0V0Z" fill="url(#paint0_linear_16_912)"/>
<defs>
<linearGradient id="paint0_linear_16_912" x1="640" y1="0" x2="640" y2="125" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF4910"/>
<stop offset="1" stop-color="#FF7A00"/>
</linearGradient>
</defs>
</svg>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import jsonData from "../../src/assets/data/siswa.json";
import CardComponents from "../components/CardComponents.vue";
import CardSekeleton from "../components/sekeleton/CardSekeleton.vue";
export default {
  components: {
    CardComponents, CardSekeleton
  },
  setup() {
    const dataSiswa = ref(jsonData.data);
    const isLoading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 800);
    });
    return { dataSiswa, isLoading };
  },
};
</script>
<style></style>
