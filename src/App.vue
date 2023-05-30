<template>
  <header
    class="bg-transparent top-0 left-0 w-full items-center fixed shadow-lg backdrop-blur-sm z-10"
  >
    <div class="px-[52px] items-center justify-center">
      <div class="my-4 px-4 rounded-full ring-primary ring-2 bg-secondary">
        <div class="flex items-center justify-between relative">
          <div class="px-4 py-2">
            <a class="font-bold font-mono text-lg text-slate-200 dark:text-primarydark"
              >XII RPL 1`23</a
            >
          </div>
          <button
            :class="{ 'hamburger-active': isActive }"
            @click="toggleActive"
            type="button"
            class="block absolute right-4 lg:hidden"
          >
            <span
              class="hamburger-line origin-top-left transition duration-200 ease-in"
            ></span>
            <span
              class="hamburger-line transition duration-200 delay-50 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-200 ease-in"
            ></span>
          </button>
          <div class="flex items-center px-4">
            <nav
              :class="{ hidden: !isActive }"
              class="absolute bg-secondary dark:bg-dark lg:dark:bg-transparent my-2 lg:my-0 shadow-slate-700 ring-1 ring-primary lg:ring-0 shadow-lg rounded-lg max-w-full w-full right-0 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul class="block lg:flex my-3 lg:my-0">
                <li class="group">
                  <router-link
                    :class="{ 'active-page': isActivePage('home') }"
                    @click="closeNavbar"
                    :to="{ name: 'home' }"
                    class="font-normal text-slate-100 py-2 px-6 flex hover:bg-primary lg:hover:bg-[#222222] lg:hover:text-primary transition duration-300 ease-in-out"
                    >Home</router-link
                  >
                </li>
                <li class="group">
                  <router-link
                    :class="{ 'active-page': isActivePage('siswa') }"
                    @click="closeNavbar"
                    :to="{ name: 'siswa' }"
                    class="font-normal text-slate-100 py-2 px-6 flex hover:bg-primary lg:hover:bg-[#222222] lg:hover:text-primary transition duration-500 ease-in-out"
                    >Students</router-link
                  >
                </li>
                <li class="group">
                  <router-link
                    :class="{ 'active-page': isActivePage('gallery') }"
                    @click="closeNavbar"
                    :to="{ name: 'gallery' }"
                    class="font-normal text-slate-100 py-2 px-6 flex hover:bg-primary lg:hover:bg-[#222222] lg:hover:text-primary transition duration-500 ease-in-out"
                    >Gallery</router-link
                  >
                </li>
                <li class="group">
                  <router-link
                    :class="{ 'active-page': isActivePage('about') }"
                    @click="closeNavbar"
                    :to="{ name: 'about' }"
                    class="font-normal text-slate-100 py-2 px-6 flex hover:bg-primary lg:hover:bg-[#222222] lg:hover:text-primary transition duration-500 ease-in-out"
                    >About Us</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const isActive = ref(false);
    const route = useRoute();

    const toggleActive = () => {
      isActive.value = !isActive.value;
    };
    const closeNavbar = () => {
      isActive.value = false;
    };
    const isActivePage = (pageName) => {
      return computed(() => route.name === pageName).value;
    };

    return {
      isActive,
      toggleActive,
      closeNavbar,
      isActivePage,
    };
  },
};
</script>