<template>
    <div class="w-full h-screen bg-cover fixed" style="background-image: url('/landingpagebg.jpg');">
        <header><Navbar/></header>
        <div class="w-full h-full flex">
            <aside><Sidebar/></aside>
            <main class="w-full h-fulloverflow-y-auto"><router-view/></main>
        </div>
    </div>
</template>

  <script>
  import Navbar from '@/components/Navbar.vue'
  import Sidebar from '@/components/Sidebar.vue'
  
  export default {
  components: {
    Navbar,
    Sidebar,
  }
  }
  </script>