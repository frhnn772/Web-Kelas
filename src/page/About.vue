<template>
  <Navbar />
  <section class="h-screen bg-slate-100 transition duration-100 ease-in-out">
    <div class="container pt-48">
      <div class="box-border flex flex-wrap">
        <div class="w-full md:w-1/2 p-4 rounded-3xl">
          <div class="flex flex-wrap">
            <div class="w-full self-center px-4 pb-4">
              <h1 class="text-base font-semibold text-dark md:text-xl">
                Haloo Guys,
                <p>Lorem ipsum dolor sit amet dicta vitae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </h1>
              <p
                class="
                  text-medium
                  dark:text-secondarydark
                  mb-6
                  leading-relaxed
                  lg:text-lg
                "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus alias beatae reiciendis magni neque voluptas suscipit,
                quis, nulla dignissimos id ratione consequuntur cum eligendi
                nobis repellat.
              </p>
              <div class="px-4 flex items-center">
                <a
                  href="https://instagram.com/smkn4tgpinang"
                  target="_blank"
                  class="
                    w-9
                    h-9
                    mr-3
                    rounded-full
                    flex
                    justify-center
                    items-center
                    border border-slate-300
                    text-slate-400
                    hover:border-primarydark
                    bg-red-600
                    dark:hover:bg-primarydark
                    hover:text-white
                    dark:hover:text-dark
                  "
                  data-aos="fade-out"
                  data-aos-delay="2600"
                  data-aos-duration="2000"
                >
                  <svg
                    class="hover:fill-current fill-red-600"
                    width="20"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path
                      d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@smkn4tanjungpinang751"
                  target="_blank"
                  class="
                    w-9
                    h-9
                    mr-3
                    rounded-full
                    flex
                    justify-center
                    items-center
                    border border-slate-300
                    text-slate-400
                    hover:border-primarydark
                    bg-yellow-500
                    dark:hover:bg-primarydark
                    hover:text-white
                    dark:hover:text-dark
                  "
                  data-aos="fade-out"
                  data-aos-delay="2600"
                  data-aos-duration="2000"
                >
                  <svg
                    class="hover:fill-current fill-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="-35.20005 -41.33325 305.0671 247.9995"
                  >
                    <path
                      d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"
                    />
                  </svg>
                </a>
                <a
                  href="https://smkn4-tanjungpinang.sch.id/"
                  target="_blank"
                  class="
                    w-9
                    h-9
                    mr-3
                    rounded-full
                    flex
                    justify-center
                    items-center
                    border border-slate-300
                    text-slate-400
                    hover:border-primarydark
                    bg-green-600
                    dark:hover:bg-primarydark
                    hover:text-white
                    dark:hover:text-dark
                  "
                  data-aos="fade-out"
                  data-aos-delay="2600"
                  data-aos-duration="2000"
                >
                  <svg
                    class="hover:fill-current fill-green-600"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <MapComponents/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MapComponents from '../components/MapComponents.vue';
import Navbar from "../components/Navbar.vue";
import MapSekeleton from '../components/sekeleton/MapSekeleton.vue';
export default {
  components: { Navbar, MapComponents,MapSekeleton },
};
</script>