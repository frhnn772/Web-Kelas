<template>

  <div class="inline-block px-3">
    <div
    ref="gambar"
    :style="{ 'background-image': 'url(' + props.gallery.foto + ')' }"
      class="
        w-64
        h-64
        overflow-hidden
        rounded-md  
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        ease-in-out
        justify-center
        items-center
        flex
        object-center
        bg-center
        bg-cover
        hover:-translate-y-0.5
      "
    >
      <span
      id="btn"
      @click="clickPreview()" 
      class="px-4
          py-2
          bg-secondary
          hover:text-secondary hover:bg-primary hover:shadow-lg
          text-white
          font-bold
          rounded-md
          mt-80
          hover:cursor-pointer transition-all duration-300">View</span>
          
    </div>
      
  </div>
  <div id="preview" class=" fixed z-10 inset-0 flex items-center justify-center hidden backdrop-blur-sm bg-opacity-40 bg-black">
  <div class="bg-white rounded shadow-md">
    <div class=" py-4 px-6 flex">
    <div class="w-1/2">
      <img id="gambar2" :src="props.gallery.foto" alt="Gambar" class="w-full h-full">
    </div>
    <div class="w-1/2">
     <div class="pl-4 border">
      <h1 class="">Ulang Tahun Guru</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium modi commodi eveniet!</p>
      </div>
  <div @click="closePreview()" class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
      <svg class="fill-current text-slate-800" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z"/>
      </svg>
      <span class="text-sm text-slate-800">(Esc)</span>
    </div>
    </div>

    </div>
  </div>

</div>
    

</template>
<style>
div:hover > #btn{
  margin-top: 176px;
}
</style>

<script>
export default {
  methods: {
    clickPreview(){
      var preview = document.getElementById('preview')
      preview.classList.remove('hidden');
      var gambar = this.$refs.gambar.style.backgroundImage
      var gambar2 = document.getElementById('gambar2')
      const imageValue = gambar.match(/\((.*?)\)/)[1].replace(/['"]/g, "")
      // const match = regex.exec(gambar);
      // const imageValue = match ? match[1] : "";
      // const newString = imageValue.replace(/"/g, "");
       gambar2.src = imageValue;
    },
    closePreview(){
      var preview = document.getElementById('preview');
      preview.classList.add('hidden');
    }
  }
}
</script>
<script setup>

// export default {
//   methods: {
//     addHover(){
//       const test2 = document.querySelectorAll('#test2');
//       test2.classList.remove('hidden');
//     },
//     removeHover(){
//       const test2 = document.querySelectorAll('#test2');
//       test2.classList.add('hidden');
//     }
//   },
//   data() {
//     return {
//     };
//   }
// };

// const test2 = document.querySelectorAll('test');
// test.addEventListener('mouseover', function(){
//   test2.classList.add('hidden');
// });
// test.addEventListener('mouseover', function(){
//   test2.classList.remove('hidden');
// });


// function clickPreview(){
//   const test2 = document.getElementById('test2');
//   test2.classList.remove('hidden');
  
//   // const test = document.getElementById('test');
//   // test.addEventListener('click', function() {
//     console.log('click');

// // });
// };
// const props = document.getElementsByTagName('span');
// test.addEventListener('mouseover', function() {
//   props.classList.remove('hidden');
// });

// myElement.addEventListener("mouseenter", function() {
//   this.classList.remove("my-class");
// });
    // function clickPreview(){
      // console.log("ditekan");
      // alert('ditekan');
      // this.$el.classList.remove("w-64");
      // document.querySelector(".hidden").classList,remove(".hidden");
    // }
    // $('#btn').hover(function(){ 
    //   console.log("dihover");
    // });

// const btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//   btn.classList.add('hidden');
// });
const props = defineProps(["gallery"]);
</script>