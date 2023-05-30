<template>
  <section class="h-screen bg-slate-100">
    <div class="container ">
      <div class="box-border flex flex-wrap lg:flex-row pt-28">
        <div class="lg:w-1/2 xl:mt-20 xl:px-4">
        <div class="drop-shadow-lg w-full  px-5 py-4 bg-gradient-to-br from-primary to-[#FE6B04] rounded-3xl rounded-br-[120px]">
            <div class="w-full self-center mb-4">
              <h1
                class="text-xl md:text-2xl font-semibold text-white lg:text-xl underline underline-offset-1"
              >
                Hello Prenn..
              </h1>
              <p
                class="text-lg md:text-xl dark:text-secondarydark mb-10 leading-relaxed lg:text-lg text-white pt-2"
              >
                Website ini dibuat sebagai kenangan semasa di smk di kelas 12
                Disini berisi foto para siswa di kelas 12 RPL 1 dan disini juga
                untuk menyimpan moment ga jelas bareng teman-teman
              </p>
              <router-link
                :to="{ name: 'siswa' }"
                class="text-lg font-mono px-4 py-2 bg-secondary hover:text-secondary hover:bg-slate-100 hover:shadow-lg text-white font-bold rounded-full transition duration-200 ease-in"
                >Explore -></router-link
              >
            </div>
        </div>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <div class="md:pl-20 lg:-mt-7 lg:pl-24 lg:right-0">
            <img :src="'blob1.png'" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
