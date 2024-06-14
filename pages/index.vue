<script setup lang="ts">
// function enableCustomLayout():void { // setPageLayout関数で表示する事ができる
//   setPageLayout('default');
// }
// definePageMeta({ //ページ内で使いたくない時の関数
//   layout: false,
// });
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
  <section class="top_about">
    <div class="top_about__img_wrap">
      <img src="@/assets/img/image01.jpg" alt="about us" srcset="">
      <article class="caption_wrap">
        <div class="document_area">
          <h2 class="mod__section-title">
            ABOUT US
          </h2>
          <p>DIGSMILEは、デザインで人を笑顔にする会社。<br>なんでもない日常に少しワクワクと遊び心を提供します。笑顔には世界を変える力がある。デザインには人を幸せにする力がある。毎日に幸せをを感じて生きていきたい。<br>DIGSMILEの社名には、そんな想いが込められています。</p>
          <div class="link-about">
            <a href="/about/">READ MORE</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<style scoped lang="scss">
.fv_wrap {
  width: 100%;
  height: calc(740 / 1400* 100vw);
  margin-bottom: 120px;
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
          font-size: 20px;
          font-weight: bold;
        }
        & > h1 {
          color: #fff;
          font-family: var(--main-font);
          font-size: calc( 72 / 1440 * 100vw );
        }
      }
    }
  }
}
.top_about {
  &__img_wrap {
    max-width: 1100px;
    min-width: 1100px;
    margin: 0 auto;
    position: relative;
    .caption_wrap {
      position: absolute;
      top: 50%;
      left: 50px;
      padding: 50px 42px 50px 30px;
      background-color: #fff;
      transform: translateY(- 50%);
      .document_area {
        > p {
          margin-top: 32px;
          margin-bottom: 64px;
          font-size: 16px;
          max-width: 518px;
          line-height: 2;
        }
        > .link-about {
          background-color: #000;
          width: 160px;
          height: 36px;
          a {
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}

</style>