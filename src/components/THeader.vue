<script setup>
import { ref } from "vue";
import MenuCategories from "./MenuCategories.vue";
import Lang_Devise from "../components/Lang_Devise.vue";
import { RouterLink, RouterView } from "vue-router";

const active = ref(false);

const mobile_menu = () => {
  active.value = !active.value;
};

var languages = [
  { langue: "Français", value: "French" },
  { langue: "Anglais ", value: "english" },
  { langue: "Espagnol", value: "spanish" },
  { langue: "Italien", value: "Italien" },
  { langue: "Chinois", value: "chinois" },
  { langue: "Arabe", value: "Arabe" },
  { langue: "Allemand", value: "Allemand" },
];

var monnaies = [
  { monnaie: "Euros", value: "EUR" },
  { monnaie: "Dollars", value: "USD" },
  { monnaie: "Francs", value: "CHF" },
  { monnaie: "Yen", value: "JPY" },
  { monnaie: "Dollars Canadiens", value: "CAD" },
  { monnaie: "Pounds Sterling", value: "GBP" },
  { monnaie: "Dollards Américains", value: "USD" },
];


const dedans = ()=>{

  console.log("je hover");
};

</script>

<template>
  <header >
    <section class=" w-full bg-sky-900 py-5">
      <div class="justify-between flex px-4 w-full ">
        <div class="w-[60%] flex flex-row px-2 py-2  ">
          <Lang_Devise :langues="languages" :monnaies="monnaies" > </Lang_Devise>
        </div>

        <div class="w-[30%] ">

          <div class="inline-flex bg-white  space-x-2 py-1 px-1 border border-gray-white w-full rounded-full  justify-between">
            <input type="mail" class="border border-sky-500 rounded-full px-2 w-[70%] focus:outline-none" placeholder="Entrez votre mail">
              <RouterLink to="/connexion">
                <button class="btn rounded-full bg-sky-400">commencez</button>
              </RouterLink>
        </div>
        </div>
      </div>
    </section>

    <section>
      <div class="px-8">
        <div
          class="flex flex-row justify-center  text-center items-center mx-auto   "
        >
          <div>
            <img src="../assets/images/logo.png" alt="" />
          </div>

          <div class="flex flex-row w-[40%] mx-auto space-x-0">
            <button class="w-[20%] h-[48px] rounded-none border-2 py-2 border-slate-500 inline-flex  ">
              <MenuCategories></MenuCategories> 
               <svg
              class="inline mt-2"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
            </svg>
            </button>

            <label
              class="input input-bordered border-2 border-slate-500 border-x-0  rounded-none bg-white flex items-center  w-[80%]"
            >
              <input
                type="search"
                class="grow w-[80%]"
                placeholder="recherchez"

              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>

            <button class="   border-l-none  border-slate-500 rounded-none px-2 lg:w-[20%] bg-sky-400 hover:font-semibold">
              Recherchez
            </button>
          </div>






          <div class="w-[30%] h-[5%]   space-x-10 flex  justify-center">
              <div
                class="flex flex-row w-[40%]  hover:text-amber-800 hover:font-bold cursor-pointer active:text-amber-800 active:font-bold"
              >
                <div
                  class="border border-black rounded-full  text-center flex justify-center items-center  h-12 w-12  hover:text-black hover:bg-sky-400 active:text-black active:bg-sky-400 overflow-hidden"
                >
                     <svg
                    class="flex flex-row overflow-hidden fill-current mx-auto my-auto hover:translate-y-12  "
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#5f6368"
                  >
                    <path
                      d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"
                    />
                  </svg>
                </div>
                <div class="w-[100px] h-4 flex mt-5 justify-center text-center text-sm ">
                  <p class="">657-779-342</p>
                </div>
              
            </div>





              <div
                class="w-[40%] flex flex-row hover:text-amber-800 hover:font-bold active:text-amber-800 active:font-bold cursor-pointer"
              >
                <div
                  class=" border border-black rounded-full  text-center flex justify-center items-center  h-12 w-12  hover:text-black hover:bg-sky-400 active:text-black active:bg-sky-400 overflow-hidden"
           >
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#5f6368"
                  >
                    <path
                      d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"
                    />
                  </svg>
                </div>
                <div class="w-[40%] text-sm">
                  <p class="text-left mt-2">Chariot</p>
                  <p class="text-left lg:w-[70px] flex flex-row font-bold ">0 articles</p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>

    <section>

      <div class=" flex flex-row  h-10 w-full  bg-gradient-to-r from-sky-700 from-80% to-sky-900 ">
        <div class="   w-[20%]  h-full text-right pl-8">
          <div class="flex flex-row justify-center bg-sky-700 w-[100%] space-x-20 text-left">
          <span class=" w-[40%] h-full   font-semibold text-white mt-2">
            Categories
          </span>
          <svg class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#FFFFFF"
          >
            <path
              d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
            />
          </svg>
        </div>
        </div>
  
        <div class="w-[70%] h-full text-white items-center  justify-center ">
          <nav class=" p-1 h-full ">
            <ul class="flex flex-wrap h-[100%] text-center justify-center space-x-14  ">
              <li class="px-8 py-1  hover:bg-white hover:text-black hover:font-semibold active:bg-white "><a href="">LIVRES</a></li>
              <RouterLink to="/"><li class="px-8  py-1 hover:bg-white hover:text-black hover:font-semibold active:bg-white">ACCUEIL</li></RouterLink>
              <li class="px-8  py-1  hover:bg-white hover:text-black hover:font-semibold active:bg-white"><a href="">LIVRAISON</a></li>
              <li class="px-8  py-1  hover:bg-white hover:text-black hover:font-semibold active:bg-white"><a href="">A PROPOS</a></li>
              <li class="px-8  py-1  hover:bg-white hover:text-black hover:font-semibold active:bg-white"><a href="">BLOG</a></li>
            </ul>
          </nav>
    
        </div>
      </div>
  
      
    </section>
  </header>

  
</template>

<style scoped>

</style>
