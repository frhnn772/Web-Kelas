<template>
  <section class="h-screen bg-slate-100">
    <div class="container">
      <div class="box-border flex flex-wrap lg:flex-row pt-28">
        <div class="lg:w-1/2 xl:mt-16 xl:px-4">
          <div
            class="drop-shadow-lg w-full px-5 py-4 bg-gradient-to-br from-primary to-[#FE6B04] rounded-3xl rounded-br-[120px]" data-aos="fade-right" data-aos-delay="300"
          >
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
          <div class="md:pl-20 lg:-mt-7 lg:pl-24 lg:right-0" data-aos="fade-left"  data-aos-delay="600">
            <div class="relative mt-40 lg:mt-12 lg:right-0">
              <img
                :src="'logo-rpl.png'"
                alt="Logo"
                class="relative w-80 sm:w-80  z-10 max-w-full mx-auto transition duration-500 transform hover:-translate-y-1 hover:rotate-6 hover:scale-105"
              />
              <div
                class="transition duration-500 transform hover:-translate-y-1 hover:rotate-3 hover:scale-105 hover:shadow-lg"
              ></div>
              <span
                class="absolute -top-10 left-1/2 -translate-x-1/2 md:scale-110 w-[28rem] sm:w-11/12"
              >
              
                <svg

                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FF590A"
                    d="M55.6,-55.3C67.9,-43.2,71,-21.6,70.6,-0.4C70.3,20.9,66.4,41.7,54.1,52.7C41.7,63.7,20.9,64.9,2.7,62.1C-15.4,59.4,-30.8,52.8,-44,41.8C-57.2,30.8,-68.2,15.4,-67.4,0.7C-66.7,-13.9,-54.2,-27.8,-41,-39.9C-27.8,-52,-13.9,-62.2,3.8,-66.1C21.6,-69.9,43.2,-67.4,55.6,-55.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed lg:-bottom-8 bottom-0 w-full" >
<svg  viewBox="0 0 1280 142" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-delay="800">
<path d="M0 17.1193L42.6667 32.9836C85.3333 48.8479 170.667 80.5765 256 80.5765C341.333 80.5765 426.667 48.8479 512 27.7285C597.333 6.21257 682.667 -3.70261 768 1.25498C853.333 6.21257 938.667 28.026 1024 32.9836C1109.33 37.9412 1194.67 28.026 1237.33 22.3743L1280 17.1193V141.007H1224.5C1181.83 141.007 1109.33 141.007 1024 141.007C938.667 141.007 853.333 142 768 142C682.667 142 597.333 141.007 512 141.007C426.667 141.007 341.333 141.007 256 141.007C170.667 141.007 88.1667 141.007 45.5 141.007H0V17.1193Z" fill="url(#paint0_linear_16_910)"/>
<defs>
<linearGradient id="paint0_linear_16_910" x1="640" y1="0" x2="640" y2="297.902" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF4910"/>
<stop offset="1" stop-color="#FF7A00"/>
</linearGradient>
</defs>
</svg>

    </div>
  </section>
</template>
