<template>
 <div class="p-6 bg-transparent w-full h-full" >
    <div class="w-full h-48 shadow-3d border-black border-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700"> 
    </div>
      <div class="w-full h-48 mt-3 grid grid-cols-3 gap-2">
        <div class="w-full h-48 shadow-3d bg-white border-black border-2 rounded-2xl">
        <div class="h-1/3">
          <p class="text-center p-4 font-bold text-xl">OUT OF STOCK PRODUCTS</p>
        </div>
        <div class="h-2/3 flex items-center justify-center">
          <img src="/exred.png" class="max-w-16 max-h-16 p-1 border-black border-3 mr-3">
          <p class="font-bold text-4xl">{{ z }}</p>
        </div>
      </div>
      <div class="w-full h-48 shadow-3d bg-white border-black border-2 rounded-2xl">
        <div class="h-1/3">
          <p class="text-center p-4 font-bold text-xl">PRODUCTS ON LOW STOCK</p>
        </div>
        <div class="h-2/3 flex items-center justify-center">
          <img src="/exblue.png" class="max-w-16 max-h-16 p-1 border-black border-3 mr-3">
          <p class="font-bold text-4xl">{{ y }}</p>
        </div>
      </div>
      <div class="w-full h-48 shadow-3d bg-white border-black border-2 rounded-2xl">
        <div class="h-1/3">
          <p class="text-center p-4 font-bold text-xl">NUMBER OF PRODUCTS TO BE ARRIVED</p>
        </div>
        <div class="h-2/3 flex items-center justify-center">
          <img src="/arrive.png" class="max-w-16 max-h-16 p-1 border-black border-3 mr-3">
          <p class="font-bold text-4xl">{{ x }}</p>
        </div>
      </div>
      </div>
      <div class="w-full h-48 mt-3 grid grid-cols-2 gap-2">
        <div class="w-full h-48 shadow-3d bg-white border-black border-2 rounded-xl flex items-center justify-center">
          <!--for illustration purposes-->
          <img class="w-4/5 h-full" src="graph.jpg" alt="" />
        </div>
        <div class="w-full h-48 shadow-3d bg-white border-black border-2 rounded-xl flex items-center justify-center">
          <audio ref="audioPlayer" :src="musicSrc" autoplay></audio>
          <!--for illustration purposes-->
          <img class="w-4/5 h-full" src="graph2.jpg" alt="" />
        </div>
      </div>
  </div>
</template>

<script setup>
const x = 10, y = 3, z=1;
</script>

<script>
export default {
  data() {
    return {
      musicSrc: "/bgmusic.mp3"
    };
  }
};
</script>

<style>
.shadow-3d {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>