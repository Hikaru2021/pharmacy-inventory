<template>
  <header class="w-full h-20 bg-blue-600">
    <div class="grid grid-cols-2">
      <!-- col 1 nav -->
      <div class="w-full h-20 relative flex justify-start items-center p-3 gap-x-2">
        <img src="/logobutton.png" class="max-w-sm max-h-12 p-1 border-black border-3">
      </div>
      <!-- col 2 nav -->
      <div class="w-full h-20 relative flex justify-end items-center p-3 gap-x-2">
        <p class="font-semibold text-2xl">HIKARU'S PHARMACY</p>
        <button v-on:click="box1Collapse = !box1Collapse">
          <img src="/bell.png" class="rounded-full w-10 h-10 border-black border-3">
        </button>
        <button v-on:click="box2Collapse = !box2Collapse">
          <img src="/profile.jpg" class="rounded-full w-16 h-16 border-black border-3">
        </button>
      </div>
    </div>
    <transition name="fade">
      <div class="w-72 h-96 bg-white border-gray-200 border-2 absolute right-1 mr-2 shadow-3d p-3 flex items-center justify-center flex-col" v-if="box1Collapse">
        <p>No Notifications</p>
      </div>
    </transition>
    <transition name="fade">
      <div class="w-72 h-96 bg-white border-gray-200 border-2 absolute right-1 shadow-3d p-3 flex flex-col" v-if="box2Collapse">
        <p class="text-center mt-1 font-bold">Profile Information</p>
        <div class="w-65 h-20 bg-white border-gray-200 border-2 shadow-3d  mt-3 flex items-center justify-center">
            <div class="flex items-center">
                <div class="mr-2">
                    <img src="/profile.jpg" class="rounded-full w-8 h-8 border-black border-3">
                </div>
                <div>
                    <p>Jose Mari Hinolan</p>
                </div>
            </div>
        </div>
        <div class="">
          <div class="mt-5">
            <p class="text-center">Setting and Privacy</p>
        </div>
        <div class="mt-5">
            <p class="text-center">Help and Support</p>
        </div>
        <div class="mt-5">
            <p class="text-center">Display & Accessibility</p>
        </div>
        <div class="mt-5">
            <p class="text-center">Give Feedback</p>
        </div>
        <div class="mt-5 flex items-center justify-center">
          <router-link to="/"><button class="">Log Out</button></router-link>
        </div>
</div>
</div>
</transition>
</header>
</template>

<script>
export default {
  data() {
    return {
      box1Collapse: false,
      box2Collapse: false
    };
  },
  methods: {
    toggleBox() {
      this.box1Collapse = !this.box2Collapse;
      this.box2Collapse = !this.box1Collapse;
    }
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.shadow-3d {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>


