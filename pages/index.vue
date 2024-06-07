<script setup lang="ts">
// function enableCustomLayout():void { // setPageLayout関数で表示する事ができる
//   setPageLayout('default');
// }
// definePageMeta({ //ページ内で使いたくない時の関数
//   layout: false,
// });
const show = ref(false);

function clickShow():void {
  show.value = !show.value
}
</script>
<template>
  <section class="fv_wrap">
    <ul class="fv_wrap__content">
      <li class="img_area">
        <figure>
          <img src="@/assets/img/kv-img.jpg" alt="fv画像">
        </figure>
      </li>
      <li class="title_area">
        <div class="title_area__wrap">
          <p>デザインで人を笑顔にする会社<br>DIGSMILE INC.</p>
          <h1>DESIGN<br>FOR<br>SMILE.</h1>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="scss">
.fv_wrap {
  width: 100%;
  height: 100vh;
  &__content {
    position: relative;
    & > .img_area {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(1100 / 1440 * 100vw);
      z-index: 1;
    }
    & .title_area {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(780 / 1440 * 100vw);
      height: calc( 740 / 1440 * 100vw);
      background-color: #222;
      &__wrap {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        & > p {
          color: #fff;
        }
        & > h1 {
          color: #fff;
        }
      }
    }
  }
}
h1 {
  font-family: "Noto Serif JP", sans-serif;
}
</style>