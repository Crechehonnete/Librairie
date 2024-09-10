<script setup>
import THeader from './components/THeader.vue';
import TFooter from './components/TFooter.vue';
import Connexion from './Pages/Connexion.vue';








import {onMounted} from "vue";

import AOS from "aos"
import Accueil from './Pages/Accueil.vue';

onMounted( async()=> {
  AOS.init();
  
})
</script>

<template>

  <THeader> </THeader> 

  <Accueil></Accueil>
  <TFooter> </TFooter> 
  

  

  





</template>

<style scoped>

</style>
