<script setup lang="ts">
import NavBer from '~/components/nav/NavBer.vue';
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 basic` : 'Nuxt 3 basic';
  },
});
</script>
<template>
  <div>
    <NavBer />
    <slot />
  </div>
</template>
<style scoped lang="scss"></style>
