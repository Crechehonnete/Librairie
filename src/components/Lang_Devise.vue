<template>   
    <div class="lg:inline-flex space-x-2 hidden " >

      
        <div>
          <select class="select w-24 border-none focus:outline-none bg-white hover:font-semibold text-sm  font-semibold">
            <option v-for="(item,i) in langues" :key="i" :value="item.value">{{item.langue}}</option>
          </select>
        </div>
        
        
      
        <div>
          <select class="select w-24 border-none focus:outline-none bg-white hover:font-semibold text-sm font-semibold">
            <option v-for="(item, i) in monnaies" :key="i" :value="item.value">{{item.monnaie}}</option>
        
          </select>
        
        </div>
       
        </div>
      
      </template>


<script setup>
const props = defineProps({
    langues:Array,
    monnaies : Array,

    Required:true
});

</script>

<style scoped>

</style>