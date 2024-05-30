<script setup lang="ts">
// definePageMeta({
//   layout: 'custom',
// });
definePageMeta({
  pageTransition: false
})
useHead({
  title: 'Aboutページ',
  meta: [
    {
      name: 'description',
      content: 'Aboutページ',
    },
  ]
})
</script>
<template>
  <div>
    <h1>料金ページ</h1>
    <hr />
    <NuxtLink to="/">トップページへ</NuxtLink>
  </div>
</template>