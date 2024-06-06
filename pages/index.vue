<script setup lang="ts">
// function enableCustomLayout():void { // setPageLayout関数で表示する事ができる
//   setPageLayout('default');
// }
// definePageMeta({ //ページ内で使いたくない時の関数
//   layout: false,
// });
import TestTset from '~/components/nav/TestTest.vue';
const show = ref(false);

function clickShow():void {
  show.value = !show.value
}
</script>
<template>
  <div>
    <h1>トップページ<span>TOP</span></h1>
    <hr />
    <button @click="clickShow">クリックしてみて</button>
    <TestTset v-if="show" />
    <NuxtLink to="/About/">aboutページ</NuxtLink>
    <br />
    <NuxtLink to="https://www.google.co.jp/">Google</NuxtLink>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>
<style scoped lang="scss">
h1 {
  font-family: "Noto Serif JP", sans-serif;
}
</style>