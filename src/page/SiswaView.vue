<template>
  <section class="bg-slate-100 ">
    <div class="container pt-24">
      <h1>Photos/<b>Students</b></h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4" v-if="isLoading">
        <CardSekeleton :dataSiswa="dataSiswa" />
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4" v-else>
        <CardComponents :dataSiswa="dataSiswa" />
      </div>
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
