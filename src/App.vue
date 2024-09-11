<script setup>
import THeader from './components/THeader.vue';
import TFooter from './components/TFooter.vue';

import { RouterView } from 'vue-router';

import {onMounted} from "vue";
import AOS from "aos"





onMounted( async()=> {
  AOS.init();
  
})
</script>

<template>

  <RouterView></RouterView>



</template>

<style scoped>

</style>
