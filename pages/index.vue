<script setup lang="ts">
// function enableCustomLayout():void { // setPageLayout関数で表示する事ができる
//   setPageLayout('default');
// }
// definePageMeta({ //ページ内で使いたくない時の関数
//   layout: false,
// });
</script>
<template>
  <div>
    <h1>トップページ</h1>
    <hr />
    <NuxtLink to="/About/">aboutページ</NuxtLink>
    <br />
    <NuxtLink to="https://www.google.co.jp/">Google</NuxtLink>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>