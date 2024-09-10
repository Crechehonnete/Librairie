<template>
  <!--Debut de ce qui concerne les categories-->
  <div
   
    class="relative inline"
  >
    <div>
      <span
        @mouseover=" ouverture_auto"
        type="button"
        class="inline-flex w-full justify-center gap-x-1.5 rounded-none  border-none px-3 py-[9%] text-sm font-semibold text-gray-900"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Categories
        <svg
          v-show="show_categories == false"
          class="inline"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>

        <svg
          v-show="show_categories == true"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
        </svg>
      </span>
    </div>


<Transition>
    <div
    ref="menu"
      v-show="show_categories == true"
      class="absolute  z-10 mt-1 w-72 origin-top-right  bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1 h-76" role="none">
        <!-- first category" -->

        <div class="inline py-2 overflow-visible z-40">
          <div class="">
            <button
              @mouseover="show_premiere_category = true, show_seconde_category = false,show_troisieme_category = false,
               show_quatrieme_category = false, show_cinquieme_category = false, show_sixieme_category = false, show_septieme_category = false"

              class="block w-[90%] space-x-[118px] text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-400 hover:rounded-lg lg:py-3"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Fiction
              <AnimationsFleche>
                
              <svg v-show="show_premiere_category == true"
               
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path
                  d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z"
                />
              </svg>
            
              </AnimationsFleche>
              <svg
                v-show="show_premiere_category == false"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Deuxieme categorie" -->

        <div class="py-2">
          <div class="">
            <button
            @mouseover="show_premiere_category = false, show_seconde_category = true, show_premiere_category = false,show_troisieme_category = false,
               show_quatrieme_category = false, show_cinquieme_category = false, show_sixieme_category = false, show_septieme_category = false"
            
              class="block w-[90%] space-x-[88px] text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-400 hover:rounded-lg lg:py-3"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Non-fiction
              <svg
                v-show="show_seconde_category == true"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path
                  d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z"
                />
              </svg>
              <svg
                v-show="show_seconde_category == false"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- troisieme categorie" -->

        <div class="py-2">
          <div class="">
            <button
            @mouseover="show_premiere_category = false, show_seconde_category = false, show_troisieme_category = true,
               show_quatrieme_category = false, show_cinquieme_category = false, show_sixieme_category = false, show_septieme_category = false"
              
              class="block w-[90%] space-x-[40px] text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-400 hover:rounded-lg lg:py-3"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Littérature jeunesse
              <svg
                v-show="show_troisieme_category == true"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path
                  d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z"
                />
              </svg>
              <svg
                v-show="show_troisieme_category == false"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- quatrieme categorie -->

        <div class="py-2">
          <div class="">
            <button
            @mouseover="show_premiere_category = false, show_seconde_category = false,  show_troisieme_category = false,
            show_quatrieme_category = true, show_cinquieme_category = false, show_sixieme_category = false, show_septieme_category = false "
              
              class="block w-[90%] space-x-32 text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-400 hover:rounded-lg lg:py-3"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Poésie
              <svg
                v-show="show_quatrieme_category == true"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path
                  d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z"
                />
              </svg>
              <svg
                v-show="show_quatrieme_category == false"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Cinquieme categorie" -->

        <div class="py-2">
          <div class="">
            <button
            @mouseover="show_premiere_category = false, show_seconde_category = false, show_troisieme_category = false,
               show_quatrieme_category = false, show_cinquieme_category = true, show_sixieme_category = false, show_septieme_category = false"
              
              class="block w-[90%] space-x-[120px] text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-400 hover:rounded-lg lg:py-3"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Théâtre
              <svg
                v-show="show_cinquieme_category == true"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path
                  d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z"
                />
              </svg>
              <svg
                v-show="show_cinquieme_category == false"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Sixieme categorie" -->

        <div class="py-2">
          <div class="">
            <button
            @mouseover="show_premiere_category = false, show_seconde_category = false, show_troisieme_category = false,
               show_quatrieme_category = false, show_cinquieme_category = false, show_sixieme_category = true, show_septieme_category = false" 
              
              class="block w-[90%] space-x-[53px] text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-400 hover:rounded-lg lg:py-3"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Essais et Critiques
              <svg
                v-show="show_sixieme_category == true"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path
                  d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z"
                />
              </svg>
              <svg
                v-show="show_sixieme_category == false"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Septieme categorie" -->

        <div class="py-2">
          <div class="">
            <button
            @mouseover="show_premiere_category = false, show_troisieme_category = false,
               show_quatrieme_category = false, show_cinquieme_category = false, show_sixieme_category = false, show_seconde_category = false, show_septieme_category = true"
              
              class="block w-[90%] space-x-[50px] text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-300 hover:rounded-lg lg:py-3"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Manuels et Guides
              <svg
                v-show="show_septieme_category == true"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path
                  d="M624-96 240-480l384-384 68 68-316 316 316 316-68 68Z"
                />
              </svg>
              <svg
                v-show="show_septieme_category == false"
                class="inline"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  </Transition>
</div>

<!--debut sous categories-->

    <div class="justify-between">
      <div
        v-if="show_premiere_category == true"
        class="absolute left-[35%]  h-[53%] w-[20%] mt-1 text-black  z-40 bg-gradient-to-r from-slate-200 from-30% to-gray-50 py-4 "
      >
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Roman</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Science-fiction</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Fantasy
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Thriller
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Romance
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Littérature contemporaine
        </button>
      </div>

      <!--Seconde Sous categories-->

      <div
        v-if="show_seconde_category == true"
        class="absolute w-[20%] left-[35%]  h-[53%]  mt-1 text-black z-40 bg-gradient-to-r from-slate-200 from-30% to-gray-50 py-4 "
      >
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Biograpgie</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Essai</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Documentaire
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Autobiographie
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Mémoires
        </button>
      </div>

      <!--Troisieme Sous categories-->

      <div
        v-if="show_troisieme_category == true"
        class="absolute left-[35%]  h-[53%] w-[20%] mt-1 text-black z-40 bg-gradient-to-r from-slate-200 from-30% to-gray-50 py-4 border-gray-500 "
      >
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Albums illustrés</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Romans pour enfants</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Young Adult
        </button>
      </div>

      <!--quatrieme Sous categories-->

      <div
        v-if="show_quatrieme_category == true"
        class="absolute left-[35%]  h-[53%] w-[20%] mt-1 text-black z-40 bg-gradient-to-r from-slate-200 from-30% to-gray-50 py-4   "
      >
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Poésie classique</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Poésie contemporaine</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Anthologies
        </button>
      </div>


      <!--cinquieme Sous categories-->
      <div
        v-if="show_cinquieme_category == true"
        class="absolute left-[35%]  h-[53%] w-[20%] mt-1 text-black z-40 bg-gradient-to-r from-slate-200 from-30% to-gray-50 py-4   "
      >
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Pièce de Théâtre</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Monologues</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Comédies
        </button>
      </div>

      <!--Sixieme Sous categories-->

      <div
        v-if="show_sixieme_category == true"
        class="absolute left-[35%]  h-[53%] w-[20%] mt-1 text-black z-40 bg-gradient-to-r from-slate-200 from-30% to-gray-50 py-4  "
      >
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Critiques Littéraires</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Critiques Philosophique</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Essais Philosophique
        </button>
      </div>

      <!--Septieme Sous categories-->

      <div
        v-if="show_septieme_category == true"
        class="absolute left-[35%]  h-[53%] w-[20%] mt-1 text-black z-40 bg-gradient-to-r from-slate-200 from-30% to-gray-50 py-4   "
      >
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Livres de cusine</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href="">Manuels scolaire</a>
        </button>
        <button
          class="block text-left w-[85%] py-2 px-4 text-sm hover:bg-indigo-200 hover:rounded-r-lg"
        >
          <a href=""></a>Guides de voyage
        </button>
      </div>
    </div>
  
</template>

<script setup>

import {ref, onMounted, onBeforeUnmount} from "vue";
const show_categories = ref(false);
const show_premiere_category = ref(false);
const show_seconde_category = ref(false);
const show_troisieme_category = ref(false);
const show_quatrieme_category = ref(false);
const show_cinquieme_category = ref(false);
const show_sixieme_category = ref(false);
const show_septieme_category = ref(false);


const ouverture_auto = (e) => {
  if (show_categories.value === false) {
    show_categories.value = true;
  }
};
//setTimeout(fermeture_auto,1000)
const menu = ref(null);

const fermeture_auto = (event) => {
    if (menu.value && !menu.value.contains(event.target)){
  show_categories.value = false;
  show_premiere_category.value = false;
  show_seconde_category.value = false;
  show_troisieme_category.value = false;
  show_quatrieme_category.value = false;
  show_cinquieme_category.value = false;
  show_sixieme_category.value = false;
  show_septieme_category.value = false;
  show_categories.value = false;
};}

onMounted(() => {
  document.addEventListener('click', fermeture_auto);
});


onBeforeUnmount(() => {
   document.removeEventListener('click', fermeture_auto);
 });



 

</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
 

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
