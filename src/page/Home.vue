<template>
  <div id="preloader"></div>
  <Navbar />

  <section
    class="h-screen bg-slate-100 transition duration-100 ease-in-out"
  >
    <div class="container pt-48">
      <div class="box-border flex flex-wrap">
        <div class="w-full md:w-1/2 p-4 bg-primary rounded-3xl">
          <div class="flex flex-wrap">
            <div class="w-full self-center px-4 pb-4">
              <h1
                class="text-base font-semibold text-dark dark:text-white md:text-xl"
              >
                Haloo Guys,
                <p>Lorem ipsum dolor sit amet dicta vitae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </h1>
              <p
                class="text-medium dark:text-secondarydark mb-6 leading-relaxed lg:text-lg text-white"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus alias beatae reiciendis magni neque voluptas suscipit,
                quis, nulla dignissimos id ratione consequuntur cum eligendi
                nobis repellat.
              </p>
              <a
                href="#"
                class="px-4 py-2 bg-secondary hover:text-secondary hover:bg-slate-100 hover:shadow-lg text-white font-bold rounded-full"
                >Explore -></a
              >
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="-mt-24 pl-24 lg:right-0">
            <img :src="('blob1.png')" alt="Logo" class="absolute" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
