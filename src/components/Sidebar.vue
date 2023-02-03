<template>
    <div class="w-64 h-screen flex">
      <!-- side bar -->
      <aside class="h-screen w-64 border-gray-300 border-2 bg-transparent absolute top-20 left-0 p-5">
        <div class="ml-6 flex flex-col justify-between items-start">
          <div class="font-bold mt-10 mb-10"> 
            <button class="bg-blue-700 text-white w-40 p-4 rounded-3xl hover:bg-yellow-400">+ Quick Add</button> 
          </div>
          <div class ="font-bold flex mb-10">
            <img src="/dashboard.png" class="w-7 h-7 mr-2">
            <Router-link to="/dashboard"><button class="focus:outline-none focus:text-white">DASHBOARD</button></Router-link>
          </div>
          <div class="font-bold flex mb-10">
            <img src="/products.png" class="w-9 h-9 mr-2">
            <Router-link to="/products"><button class="focus:outline-none focus:text-white">PRODUCTS</button></Router-link>
          </div>
          <div class="font-bold flex mb-10">
            <img src="/billing.png" class="w-9 h-9 mr-2">
            <router-link to="/billing"><button class="focus:outline-none focus:text-white">BILLING</button></router-link>
          </div>
          <div class="font-bold flex mb-10">
            <img src="/delivery.png" class="w-8 h-8 mr-2">
            <router-link to="/delivery"><button class="focus:outline-none focus:text-white">DELIVERY</button></router-link>
          </div>
          <div class="font-bold flex mb-8">
            <img src="/vendor.png" class="w-9 h-9 mr-2">
            <router-link to="/vendors"><button class="focus:outline-none focus:text-white">VENDORS</button></router-link>
          </div>
          <div class="bg-blue-600 p-5 rounded-2xl">
            <p class="text-center">Have some questions?</p>
            <button class="bg-blue-700 rounded-md p-2 mt-1">LOOK FOR FAQS</button>
          </div>

        </div>
      </aside>
    </div>
  </template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import router from '../router';
</script>