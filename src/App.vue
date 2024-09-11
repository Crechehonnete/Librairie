<script setup>
import THeader from './components/THeader.vue';
import TFooter from './components/TFooter.vue';

import { RouterView } from 'vue-router';

import {onMounted} from "vue";
import AOS from "aos"
import Produits from './components/produits.vue';





onMounted( async()=> {
  AOS.init();
  
})
</script>

<template>

  <THeader> </THeader> 
  <RouterView></RouterView>
<div class="">
  <Produits></Produits>
</div>
  <TFooter> </TFooter> 
  

  

  





</template>

<style scoped>

</style>
