<template>
    <div class="h-[600px] px-4">
        <div class="relative h-[400px]  text-center flex justify-center bg-white space-x-4 px-2 py-28">
            <button @click="previous" :disabled="currentPage === 0" class="bg-blue text-white text-center cursor-pointer  px-2 h-12 mt-24">Previous
                <svg    class="fill-current hover:-translate-x-4 ml-2"
                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/>
                </svg>
            </button>

            <template v-for="(product, i) in visibleProducts" :key="i">

                <div class="border border-pain w-[20%] h-[250px] flex-col flex justify-center py-1">
                    <div class=" h-[50%] mx-auto bg-white px-2 -translate-y-12">
                        <img :src="product.img" alt="" class="h-full">
                    </div>
                    <div class="h-[60%] text-center">
                        <h2 class="text-xl font-bold">{{ product.title }}</h2><br>
                        <p>{{ product.description }}</p>
                        <a href="#" class="text-blue-500" :link="product.link"></a>
                    </div>
                </div>
            </template>
            <button @click="next" :disabled="currentPage >= maxPage" class="bg-blue text-white px-4  h-12 mt-24">Next
                <svg 
                class="fill-current hover:translate-x-4"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path
                    d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"
                  />
                </svg>
            </button>
          
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import apologie_socrate from "../assets/livres/apologie_socrate.jpg";
import livre_damso from "../assets/livres/dictionnaire_critique.jpg";
import B_dames from "../assets/livres/zola.jpg";
import towa from "../assets/livres/essai.jpg";
import inconnue1 from "../assets/livres/premiereExpo/livre1.jpg";
import inconnue2 from "../assets/livres/premiereExpo/livre2.jpg";
import inconnue3 from "../assets/livres/premiereExpo/livre3.jpg";
import inconnue4 from "../assets/livres/premiereExpo/livre4.jpg";
import inconnue5 from "../assets/livres/premiereExpo/livre5.jpg";
import inconnue6 from "../assets/livres/premiereExpo/livre6.jpg";

const produits = [
    { title: "Livre1", img: apologie_socrate, description: "Description 1", link: '' },
    { title: "Livre2", img: livre_damso, description: "Description 2", link: '' },
    { title: "Livre3", img: B_dames, description: "Description 3", link: '' },
    { title: "Livre4", img: towa, description: "Description 4", link: '' },
    { title: "Livre5", img: inconnue1, description: "Description 5", link: '' },
    { title: "Livre6", img: inconnue2, description: "Description 6", link: '' },
    { title: "Livre7", img: inconnue3, description: "Description 7", link: '' },
    { title: "Livre8", img: inconnue4, description: "Description 8", link: '' },
    { title: "Livre9", img: inconnue5, description: "Description 9", link: '' },
    { title: "Livre10", img: inconnue6, description: "Description 10", link: '' },
];

const currentPage = ref(0);
const itemsPerPage = 5;
const maxPage = Math.ceil(produits.length / itemsPerPage) - 1;
console.log(produits.length)

const visibleProducts = computed(() => {
    const start = currentPage.value * itemsPerPage;
    return produits.slice(start, start + itemsPerPage);
});

function next() {
    if (currentPage.value < maxPage) {
        currentPage.value++;
    }
}

function previous() {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
}
</script>

<style scoped>
</style>
