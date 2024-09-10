<template>

  
  <section>
    
    <div class="flex flex-row  ">
     
      <div class="h-full py-8 w-[20%] border-2 border-black pl-8 bg-amber-500/80 space-y-32">
        <div class="h-[50%]  overflow-hidden ">
         
<Simple_Menu></Simple_Menu>

        </div>
       


        <div class="h-[50%]  overflow-hidden">
         
          <Solde></Solde>
          
                  </div>

      </div>

      

      <div class="w-[80%]  flow-root h-[40%]  p-8 space-y-4 bg-retro/50">

      <div class="w-full mx-auto h-[27%] ">
        <carousel></carousel>
      </div>

      <div class="w-full mx-auto h-[50%] ">
        <Livres :livres="Livre"></Livres>
      </div>
    </div>
    </div>
    
  </section>

  <section>
    <ExpoLivres :expo_livres="Expo_livres"></ExpoLivres>
 
</section>


  <section>
    
    <Best_Autor></Best_Autor>
    </section>

  


    
</template>

<script setup>
import carousel from "../components/carousel.vue"
import Best_Autor from "../components/Best_Autor.vue";
import Livres from "../components/Livres.vue";
import Simple_Menu from "./Simple_Menu.vue";
import Solde from "./solde.vue";
import ExpoLivres from "./ExpoLivres.vue";


/*importation des livres*/
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






const Livre = [
  {Title:"MON LIVRE1", image:apologie_socrate  , description:"Marcel DEV", price:"200fcfa"},
  {Title:"MON LIVRE2", image:livre_damso, description:"Marcel DEV", price:"200fcfa"},
  {Title:"MON LIVRE3", image:B_dames, description:"Marcel DEV", price:"200fcfa"},
  {Title:"MON LIVRE4", image:towa, description:"Marcel DEV", price:"200fcfa"},
]

const Expo_livres = [
  {Title:"Inconnue1", image:inconnue1, description:"Marcel Dev", price:"500fcfa"},
  {Title:"Inconnue2", image:inconnue2, description:"Marcel Dev", price:"800fcfa"},
  {Title:"Inconnue3", image:inconnue3, description:"Marcel Dev", price:"2200fcfa"},
  {Title:"Iconnue4", image:inconnue4, description:"Marcel Dev", price:"3200fcfa"},
  {Title:"Iconnue5", image:inconnue5, description:"Marcel Dev", price:"2000fcfa"},
  {Title:"Iconnue6", image:inconnue6, description:"Marcel Dev", price:"2500fcfa"},
]


console.log(Expo_livres.value)

</script>

<style scoped>

</style>