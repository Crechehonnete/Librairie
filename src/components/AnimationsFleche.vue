<template>
    <Transition name="ouverture">
        <slot></slot>
    </Transition>
</template>

<script setup>

</script>

<style scoped>

ouverture-enter-from {
    animation-duration: 5s;
    opacity: 0;
    transform: translateX(-20px);

}
ouverture-enter-active, ouverture-leave-active{
   transition: 1s linear ;
   
}

</style>