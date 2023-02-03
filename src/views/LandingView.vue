<script setup>

</script>

<template>
 <div class ="bg-cover" style="background-image: url('/landingpagebg.jpg');">
    <header>
        <div class="px-4 mx-auto sm:px-6 lg:px-8">

            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <router-link to="/">
                        <button title="" class="flex">
                        <img class="max-w-md max-h-14" src="logobutton.png" alt="" />
                    </button>
                    </router-link>
                </div> 
                <router-link to="/register">      
                    <button class="bg-white border-black border-2 bg-opacity-80 hover:bg-yellow-500 font-bold w-32 h-3/4 text-center align-middle rounded-md flex items-center justify-center p-5" tag="button"> Join Now </button>
                </router-link>   
            </div>
        </div>
        
    </header>
       
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p class="text-base font-semibold tracking-wider text-blue-800 uppercase">BETTER STOCK CONTROL</p>
                    <h1 class="mt-4 text-5xl font-bold text-black flex items-center justify-center">The latest business website design to give you more than just control over your stock and orders</h1>
                    <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Completely Flexible Multi-Location Stock</p>

                    <router-link to="/register" tag="button" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black text-2xl transition-all duration-200 bg-blue-700 bg-opacity-80 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-blue-900">
                        Get Started 
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </router-link>

                    <p class="mt-5 text-black text-lg font-semibold">Already joined us? <router-link to="/login" tag="button" class="underline">Login</router-link> </p>
                </div>
                
                <div class="flex items-center justify-center">
                    <img class="w-4/5 h-4/5" src="nurse.png" alt="" />
                </div>
            </div>
        </div>
</div>
</template>