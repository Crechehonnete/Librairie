<template>
  <div class="bg-retro ">
    <div
      class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 ">
        <strong>Les plus demandés</strong>
      </h2>

      <div
        class="mt-6 flex flex-row gap-x-6 gap-y-10 xl:gap-x-8  px-8 justify-center"
      >
        <template
          v-for="(article, i) in livres"
          :key="i"
          :value="article.value"
        >
          <div class="border border-gray-700 w-[20%] py-2 px-2 bg-slate-100 cursor-pointer" @mouveover="visualisation">
            <div  ref="bloc_livre"
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 border-amber-500 border  "
            >
              <img
                :src="article.image"
                class="h-full w-full object-cover object-center  lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-black hover:font-bold">
                  <a href="#">
                    <span aria-hidden="true" class="inset-0"></span>
                    {{ article.Title }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-800">
                  {{ article.description }}
                </p>
              </div>
              <p class="text-sm font-medium text-gray-900">
                {{ article.price }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  livres: Array,
  required: true,
});


const bloc_livre = ref(null);
console.log(bloc_livre.value);

const visualisation = ()=>{
  console.log("fermé");
  livre.Classname.add = translate-y-8
}

</script>

<style scoped></style>
