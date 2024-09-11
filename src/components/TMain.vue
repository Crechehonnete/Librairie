<template>

  
  <section>
    
    <div class="flex flex-row  ">
     
      <div class="h-full py-8 w-[20%] border-2 border-black pl-8 bg-gray-white space-y-32">
        <div class="h-[50%]  overflow-hidden ">
         
<Simple_Menu></Simple_Menu>

        </div>
       


        <div class="h-[50%]  overflow-hidden">
         
          <Solde></Solde>
          
                  </div>

      </div>

      

      <div class="w-[80%]  flow-root h-[40%]  p-8 space-y-4 bg-retro/50">

      <div class="w-full mx-auto  ">
        <carousel></carousel>
      </div>

      <div class="w-full mx-auto h-[50%] ">
        <Livres :livres="Livre"></Livres>
      </div>
    </div>
    </div>
    
  </section>

  <section>
<Produits></Produits>
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
import Produits from "./produits.vue";


/*importation des livres*/
import apologie_socrate from "../assets/livres/apologie_socrate.jpg";
import livre_damso from "../assets/livres/dictionnaire_critique.jpg";
import B_dames from "../assets/livres/zola.jpg";
import towa from "../assets/livres/essai.jpg";


const Livre = [
  {Title:"MON LIVRE1", image:apologie_socrate  , description:"Marcel DEV", price:"200fcfa"},
  {Title:"MON LIVRE2", image:livre_damso, description:"Marcel DEV", price:"200fcfa"},
  {Title:"MON LIVRE3", image:B_dames, description:"Marcel DEV", price:"200fcfa"},
  {Title:"MON LIVRE4", image:towa, description:"Marcel DEV", price:"200fcfa"},
]





</script>

<style scoped>

</style>