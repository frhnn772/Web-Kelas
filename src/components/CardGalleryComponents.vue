<template>
  <h1>
    Photos/<b>{{ name }}</b>
  </h1>
  <div class="flex overflow-x-scroll pb-10 hide-scroll-bar snap-mandatory snap-x">
    <div
      class="flex flex-nowrap pt-4 ml-5 snap-center"
      v-for="foto in dataFoto"
      :key="foto.id_foto"
    >
      <div class="inline-block px-3">
        <div
          ref="fotoRefs"
          :data-foto-id="foto.id_foto"
          @mouseover="setHovered(true, foto.id_foto)"
          @mouseleave="setHovered(false)"
          :style="{ 'background-image': 'url(' + foto.url + ')' }"
          class="w-64 h-64 hover:scale-105 rounded-md shadow-md hover:shadow-xl transition-all duration-300 ease-in-out justify-center items-center flex object-center bg-center bg-cover brightness-50 hover:saturate-100 hover:brightness-100"
        >
          <span
            @click="clickPreview(foto.id_foto)"
            v-if="isHovered && hoveredFoto === foto.id_foto"
            class="px-4 py-2 bg-secondary hover:text-secondary hover:bg-primary hover:shadow-lg text-white font-bold rounded-md mt-44 hover:cursor-pointer transition-all duration-300"
            >View</span
          >
        </div>
      </div>
      <div
        :class="{ hidden: !isActive }"
        class="fixed z-10 inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-40 bg-black"
      >
        <div class="bg-white rounded shadow mx-8">
          <div class="py-4 px-6 flex flex-col md:flex-row relative">
            <div class="md:w-2/3 md:pr-2" v-if="selectedFoto">
              <img
                :src="selectedFoto.url"
                alt=""
                loading="lazy"
                class="ring-2 rounded-sm ring-primary"
              />
            </div>

            <div class="md:w-1/3 py-2 md:py-0">
              <div class="px-2 ring-2 rounded-sm ring-primary">
                <h1 class="text-lg font-bold">{{name}}: {{getSelectedFotoKet(selectedFoto)}}</h1>
                <p>

                </p>
              </div>
            </div>
            <div
              @click="closePreview()"
              class="modal-close absolute -top-8 right-2 cursor-pointer flex flex-col items-center text-primary text-sm"
            >
              <svg
                class="fill-current text-slate-200"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  props: ["dataFoto", "name"],
  setup(props) {
    const isHovered = ref(false);
    const hoveredFoto = ref(null);
    const isActive = ref(false);
    const observer = ref(null);
    const fotoRefs = ref([]);
    const selectedFoto = ref(null);

    function setHovered(value, idFoto) {
      isHovered.value = value;
      hoveredFoto.value = value ? idFoto : null;
    }
    function clickPreview(idFoto) {
      const fotoRef = fotoRefs.value.find(
        (ref) => ref.getAttribute("data-foto-id") === idFoto
      );
      if (fotoRef) {
        observer.value.unobserve(fotoRef);
      }
      const moment = props.dataFoto.find((foto) => foto.id_foto === idFoto);
      if (moment) {
        selectedFoto.value = moment;
        isActive.value = true;
        document.body.style.overflow = "hidden";
      }
    }
    function closePreview(idFoto) {
      selectedFoto.value = null;
      isActive.value = false;
      document.body.style.overflow = "";
    }
    function loadFoto(fotoId) {
      const moment = props.dataFoto.find((foto) => foto.id_foto === fotoId);
      if (moment) {
        selectedFoto.value = moment;
        isActive.value = true;
      }
    }
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fotoId = entry.target.getAttribute("data-foto-id");
          loadFoto(fotoId);
          observer.unobserve(entry.target);
        }
      });
    }
    function getSelectedFotoKet(foto) {
      if (foto) {
        return foto.ket;
      }
      return '';
    }


    onMounted(() => {
      observer.value = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Sesuaikan dengan threshold yang diinginkan
      });
      fotoRefs.value.forEach((fotoRef) => {
        observer.value.observe(fotoRef);
      });
    });
    return {
      isHovered,
      setHovered,
      hoveredFoto,
      clickPreview,
      closePreview,
      isActive,
      selectedFoto,
      getSelectedFotoKet
    };
  },
};
</script>
