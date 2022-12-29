<template>
  <header
    class="
      bg-transparent
      top-0
      left-0
      w-full
      items-center
      fixed
      shadow-lg
      backdrop-blur-sm
      z-10
    "
  >
    <div class="px-[52px] items-center justify-center ">
      <div class="my-4 px-4 rounded-full ring-primary ring-2 bg-secondary">
        <div class="flex items-center justify-between relative">
          <div class="px-4">
            <a
              class="
                font-bold
                text-lg text-slate-200
                dark:text-primarydark
                block
                py-2
              "
              >XII RPL 1`22</a
            >
          </div>
          <div class="flex items-center px-4">
            
            <nav
              id="nav-menu"
              class="
               
                bg-white
                py-1
                shadow-lg
                rounded-lg
                w-full
                top-full
                block
                static
                bg-transparent
                max-w-full
              "
            >
              <ul class=" flex">
                <li class="group">
                  <router-link
                  :to="{name: 'page.home'}"
                    class="
                      text-base
                      font-semibold
                      text-slate-200
                      dark:text-primarydark
                      py-2
                      px-6
                      flex
                      hover:text-primarydark
                      dark:hover:text-primary
                    "
                    >Home</router-link
                  >
                </li>
                <li class="group">
                  <router-link
                  :to="{name:'page.members'}"
                    class="
                      text-base
                      font-semibold
                      text-slate-200
                      dark:text-primarydark
                      py-2
                      px-6
                      flex
                      hover:text-primarydark
                      dark:hover:text-primary
                    "
                    >Members</router-link
                  >
                </li>
                <li class="group">
                  <router-link
                  :to="{name:'page.gallery'}"
                    class="
                      text-base
                      font-semibold
                      text-slate-200
                      dark:text-primarydark
                      py-2
                      px-6
                      flex
                      hover:text-primarydark
                      dark:hover:text-primary
                    "
                    >Gallery</router-link
                  >
                </li>
                <li class="group">
                  <router-link
                    :to="{name:'page.about'}"
                    class="
                      text-base
                      font-semibold
                      text-slate-200
                      dark:text-primarydark
                      py-2
                      px-6
                      flex
                      hover:text-primarydark
                      dark:hover:text-primary
                    "
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
</template>

<script>
export default {};
</script>

<style>
</style>