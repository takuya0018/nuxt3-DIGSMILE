<script setup lang="ts">
// definePageMeta({
//   layout: 'custom',
// });
const title = ref('Aboutページ')
definePageMeta({
  pageTransition: false
})
useHead({
  title,
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