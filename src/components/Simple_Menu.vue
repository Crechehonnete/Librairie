<template>
  <div class="py-2">
       <ul class="space-y-8">

        <div  class="flex flex-row p-3  bg-pain   font-semibold shadow-lg" >
          <div class="flex w-full  justify-between">
             <li> Fiction </li>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
          
        <div v-show="active1">
            <li>Roman</li>
            <li>Science-fiction</li>
            <li>Fantaisy</li>
            <li>Thriller</li>
            <li>Romance</li>
            <li>Littérature contemporaine</li>
          </div>
         </div>


       
         <div class="flex flex-row p-3 bg-pain font-semibold shadow-lg" >
          <div class="flex w-full  justify-between">
              <li>Non-Fiction</li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
         <div v-show="active2">
            <li>Biograpgie</li>
            <li>Essai</li>
            <li>Documentaire</li>
            <li>Autobiographie</li>
            <li>Mémoires</li>
          </div>
        </div>



          <div class="flex flex-row p-3 bg-pain  font-semibold shadow-lg ">
          <div class="flex w-full  justify-between">  <li>Littéerature jeunesse</li>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
         
        <div v-show="active3">
            <li>Albums illusliés</li>
            <li>Romans pour enfant</li>
            <li>Young adult</li>
          </div>
        </div>
       

        <div class="flex flex-row p-3 bg-pain  font-semibold shadow-lg" >
        <div class="flex  justify-between  w-full">    <li>Poésie</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
        <div v-show="active4">
            <li>Poésie classique<</li>
            <li>Poésie contemporaine</li>
            <li>Anthologies</li>
          </div>
        </div>



        <div class="flex flex-row p-3 bg-pain  font-semibold shadow-lg" >
        <div class="flex  justify-between w-full">   <li>Théâtre</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
          
         <div v-show="active5">
            <li>Monologue</li>
            <li>Pièce de théâlie</li>
            <li>Comédies</li>
          </div>
        </div>



        <div class=" flex flex-row p-3 bg-pain  font-semibold shadow-lg" >
        <div class="flex  justify-between  w-full">   <li>Essais critiques</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
        <div v-show="active6">
            <li>Critiques littéraires</li>
            <li>Critiques philosophiques</li> 
            <li>Essais philosophiques</li>
          </div>
        </div>



        <div class="flex flex-row p-3 bg-pain  font-semibold shadow-lg ">
        <div class="flex justify-between  w-full" >   <li>Manuels et Guides</li>
          <svg class="flex justify-end" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>

        <div v-show="active7">
            <li>Livres de cuisine</li>
            <li>Mannuels scolaires</li>
            <li>Guides voyages</li>
          </div>
        </div>


        </ul>
        </div>

     
</template>

<script setup>
import { ref, onMounted } from "vue";

const active1 =  ref(false);

const active_menu1 = ()=>{
  active1.value =!active1.value;
}


const active2 =  ref(false);

const active_menu2 = ()=>{
  active2.value =!active2.value;
}


const active3 =  ref(false);

const active_menu3 = ()=>{
  active3.value =!active3.value;
}

const active4 =  ref(false);

const active_menu4 = ()=>{
  active4.value =!active4.value;
}

const active5 =  ref(false);

const active_menu5 = ()=>{
  active5.value =!active5.value;
}

const active6 =  ref(false);

const active_menu6 = ()=>{
  active6.value =!active6.value;
}

const active7 =  ref(false);

const active_menu7 = ()=>{
  active7.value =!active7.value;
}





</script>

<style  scoped>

</style>