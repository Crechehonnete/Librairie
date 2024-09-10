<template>
  <div class="py-2">
       <ul class="space-y-8">

        <div  class="flex flex-row p-3  bg-gradient-to-r from-amber-600 via-amber-600 to-amber-400   font-semibold shadow-lg" >
          <div class="flex w-full  justify-between">
             <li> Fiction </li>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
          
        <div v-show="active1">
            <tr><td>Roman</td></tr>
            <tr><td>Science-fiction</td></tr>
            <tr><td>Fantaisy</td></tr>
            <tr><td>Thriller</td></tr>
            <tr><td>Romance</td></tr>
            <tr><td>Littérature contemporaine</td></tr>
          </div>
         </div>


       
         <div class="flex flex-row p-3 bg-gradient-to-r from-amber-600 via-amber-600 to-amber-400 font-semibold shadow-lg" >
          <div class="flex w-full  justify-between">
              <li>Non-Fiction</li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
         <div v-show="active2">
            <tr><td>Biograpgie</td></tr>
            <tr><td>Essai</td></tr>
            <tr><td>Documentaire</td></tr>
            <tr><td>Autobiographie</td></tr>
            <tr><td>Mémoires</td></tr>
          </div>
        </div>



          <div class="flex flex-row p-3 bg-gradient-to-r from-amber-600 via-amber-600 to-amber-400  font-semibold shadow-lg ">
          <div class="flex w-full  justify-between">  <li>Littéerature jeunesse</li>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
         
        <div v-show="active3">
            <tr><td>Albums illustrés</td></tr>
            <tr><td>Romans pour enfant</td></tr>
            <tr><td>Young adult</td></tr>
          </div>
        </div>
       

        <div class="flex flex-row p-3 bg-gradient-to-r from-amber-600 via-amber-600 to-amber-400  font-semibold shadow-lg" >
        <div class="flex  justify-between  w-full">    <li>Poésie</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
        <div v-show="active4">
            <tr><td>Poésie classique</td></tr>
            <tr><td>Poésie contemporaine</td></tr>
            <tr><td>Anthologies</td></tr>
          </div>
        </div>



        <div class="flex flex-row p-3 bg-gradient-to-r from-amber-600 via-amber-600 to-amber-400  font-semibold shadow-lg" >
        <div class="flex  justify-between w-full">   <li>Théâtre</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
          
         <div v-show="active5">
            <tr><td>Monologue</td></tr>
            <tr><td>Pièce de théâtre</td></tr>
            <tr><td>Comédies</td></tr>
          </div>
        </div>



        <div class=" flex flex-row p-3 bg-gradient-to-r from-amber-600 via-amber-600 to-amber-400  font-semibold shadow-lg" >
        <div class="flex  justify-between  w-full">   <li>Essais critiques</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
        <div v-show="active6">
            <tr><td>Critiques littéraires</td></tr>
            <tr><td>Critiques philosophiques</td></tr> 
            <tr><td>Essais philosophiques</td></tr>
          </div>
        </div>



        <div class="flex flex-row p-3 bg-gradient-to-r from-amber-600 via-amber-600 to-amber-400  font-semibold shadow-lg ">
        <div class="flex justify-between  w-full" >   <li>Manuels et Guides</li>
          <svg class="flex justify-end" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>

        <div v-show="active7">
            <tr><td>Livres de cuisine</td></tr>
            <tr><td>Mauesl scolaires</td></tr>
            <tr><td>Guides voyages</td></tr>
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