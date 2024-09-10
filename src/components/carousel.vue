<template>
    
    <div class=" flex flex-row justify-center space-x-0 h-full ">
          <!-- Flèche gauche en dehors de l'image -->
          <button @click="prev" class="relative h-16 w-16 mt-[25%]  transform -translate-y-1/2  text-black border-none hover:-translate-x-2 hover:bg-amber-400/200 rounded-full">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368">
                <path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z"/>
            </svg>
          </button>
    <div class="relative w-[1200px]   mx-auto overflow-hidden rounded-md shadow-2xl  ">
      
       
           <transition name="fade" mode="out-in">
          <div
            key="carousel-item"
            class="flex transition-transform duration-500 "
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >

            <div
              v-for="(item, index) in items"
              :key="index"
              class="min-w-full "
            >
              <img :src="item.image" :alt="item.alt" class="w-full" />
            </div>
            
          </div>
         
        </transition>
   

        <!-- Indicateurs -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span
            v-for="(item, index) in items"
            :key="index"
            class="h-2 w-2 rounded-full cursor-pointer"
            :class="currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'"
            @click="currentIndex = index"
          ></span>
        </div>
      </div>
      
        <!-- Flèche droite en dehors de l'image -->
        <button @click="next" class="relative h-16 w-16 mt-[25%] transform -translate-y-1/2 text-black  justify-center flex  border-none hover:translate-x-2 hover:bg-amber-400/20 rounded-full">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368">
                <path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z"/>
            </svg>
          </button>
      
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import lecture7 from "../assets/images/lecture7.gif"
  import lecture3 from "../assets/images/lecture3.gif"
  import lecture6 from "../assets/images/lecture6.gif"


  
  const currentIndex = ref(0);
  const items = ref([
    { image: lecture7, alt: 'Image 1' },
    { image: lecture3, alt: 'Image 2' },
    { image: lecture6, alt: 'Image 3' },
  ]);
  
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
  };
  
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
  };
  
  const autoSlide = () => {
    setInterval(next, 8000); // Change d'image toutes les 3 secondes
  };
  
  onMounted(() => {
    autoSlide();
  });
  </script>
  
  <style scoped>
  </style>
  