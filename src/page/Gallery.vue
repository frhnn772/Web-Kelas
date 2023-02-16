<template>
  <navbar/>
  <!-- component -->
  <div class="flex flex-col bg-slate-100 m-auto p-auto pt-24">
    <div class="container">
      <h1>Members/<b>Moments</b></h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap pt-4 ml-5">
        <card-gallery-components :gallery="{ foto: 'members/users-1.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-none.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-3.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-4.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-none.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-6.jpg'}"/>
      </div>
    </div>
<h1>Members/<b>Events</b></h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap pt-4 ml-5">
        <card-gallery-components :gallery="{ foto: 'members/users-7.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-8.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-9.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-none.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-11.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-12.jpg'}"/>
      </div>
    </div>
<h1>Members/<b>Randoms</b></h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap pt-4 ml-5">
        <card-gallery-components :gallery="{ foto: 'members/users-13.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-14.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-15.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-16.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-17.jpg'}"/>
        <card-gallery-components :gallery="{ foto: 'members/users-none.jpg'}"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import CardGalleryComponents from "../components/CardGalleryComponents.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, CardGalleryComponents },
};
</script>

<style>
</style>