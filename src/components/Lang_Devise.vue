<template>   
    <div class="lg:inline-flex space-x-2 hidden " >

      
        <div>
          <select class="select w-32 border-none focus:outline-none bg-amber-200/90 hover:font-semibold lg:text-lg ">
            <option v-for="(item,i) in langues" :key="i" :value="item.value">{{item.langue}}</option>
          </select>
        </div>
        
        
      
        <div>
          <select class="select w-32 border-none focus:outline-none bg-amber-200/90 hover:font-semibold lg:text-lg">
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

console.log(props.value);
</script>

<style scoped>

</style>