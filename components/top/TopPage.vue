<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  items: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="listContent">
    <div class="works" v-for="(item,index) in items" :key="index" >
      <h2 class="mod__section-title">{{ item.titleContent }}</h2>
      <figure>
        <img :src="'/_nuxt/assets/img/' + item.imgContent" alt="works" srcset="">
        <figcaption>{{ item.figContent }}</figcaption>
      </figure>
      <div class="link-area">
        <a :href="item.linkContent">READ MORE</a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>