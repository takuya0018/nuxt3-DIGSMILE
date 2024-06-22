<script setup lang="ts">
import NavBer from '~/components/nav/NavBer.vue';
import FootContent from '~/components/foot/FooterContent.vue';
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
    <FootContent />
  </div>
</template>
<style scoped lang="scss"></style>
