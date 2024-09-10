<template>
    
        <!-- menu pour telephone    -->

        <div
          v-show="active"
          class="absolute items-center top-2 left-0 Z-20 shadow-xl rounded-sm w-[60%] px-4 bg-slate-200 transition-transform transition-opacity duration-500 md:hidden lg:hidden"
        >
          <svg
            @click="active = !active"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            class="ml-44 mt-2 border-2 mb-10 w-10 h-10 border-red-600 rounded-full"
          >
            <path
              d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"
            />
          </svg>

          <span
            class="block rounded-lg mx-auto w-[96%] mt-4 px-3 py-2 text-base text-center font-medium text-white bg-gray-700 border-2 border-gray-500 cursor-pointer"
            ><a href="">Menu</a></span
          >

          <ul
            class="space-y-4 w-full font-semibold text-black justify-center items-center text-left py-8 px-8"
          >
            <li
              class="block rounded-md mx-auto w-[80%] mt-2 px-5 py-2 text-center font-medium text-black hover:bg-gray-700 hover:text-white border-2 border-gray-500 cursor-pointer active:bg-gray-700 active:text-white"
            >
              <a href="">HOME</a>
            </li>
            <li
              class="block rounded-md mx-auto w-[80%] border-2 px-5 py-2 text-center font-medium text-black hover:bg-gray-700 hover:text-white border-gray-500 cursor-pointer active:bg-gray-700 active:text-white"
            >
              <a href=""> LIVRES</a>
            </li>
            <li
              class="block rounded-md mx-auto w-[80%] mb-4 overflow-hidden border-2 px-3 py-2 text-center font-medium text-black hover:bg-gray-700 hover:text-white border-gray-500 cursor-pointer active:bg-gray-700 active:text-white"
            >
              <a href="page2.html">CATEGORIES</a>
            </li>
          </ul>
        </div>
        
</template>

<script setup>

</script>

<style  scoped>

</style>