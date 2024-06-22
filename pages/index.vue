<script setup lang="ts">
import TopPage from '~/components/top/TopPage.vue';
// function enableCustomLayout():void { // setPageLayout関数で表示する事ができる
//   setPageLayout('default');
// }
// definePageMeta({ //ページ内で使いたくない時の関数
//   layout: false,
// });
interface listContent {
  titleContent: String,
  imgContent: String,
  figContent: String,
  linkContent: String,
}

interface newsList {
  datetime: string,
  listcontent: String
}

const workList:listContent[] = [
  { titleContent: "WORKS", imgContent: "image02.jpg", figContent: "DIGSMILEの制作実績を紹介します。", linkContent: "/about/"},
  { titleContent: "CULTURE", imgContent: "image03.jpg", figContent: "DIGSMILEの社内文化について紹介します。", linkContent: "/about/"}
]

const news:newsList[] = [
  { datetime: '2022.02.02', listcontent: 'イベントレポート「VRクリエイター座談会〜 5Gの次に来るもの〜」' },
  { datetime: '2022.02.02', listcontent: 'イベントレポート「VRクリエイター座談会〜 5Gの次に来るもの〜」' },
  { datetime: '2022.02.02', listcontent: 'イベントレポート「VRクリエイター座談会〜 5Gの次に来るもの〜」' }
]
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
          <div class="mod__read-link">
            <a href="/about/">READ MORE</a>
          </div>
        </div>
      </article>
    </div>
  </section>
  <section class="listColum" id="works">
    <TopPage :items="workList" />
  </section>
  <section class="topics">
    <h2 class="mod__section-title">
      LATEST TOPICS
    </h2>
    <!-- components化 -->
    <div class="news-list-wrap">
      <ul>
        <li v-for="(item,index) in news" :key="index">
          <p><time :datetime="item.datetime">{{ item.datetime }}</time></p>
          <p>{{ item.listcontent }}</p>
        </li>
      </ul>
      <div class="mod__read-link">
        <a href="/about/">READ MORE</a>
      </div>
    </div>
    <!-- /components化 -->
  </section>
  <section class="contact">
    <div class="contact__wrap">
      <div class="contact__wrap--description">
        <h2 class="mod__section-title">
          CONTACT
        </h2>
        <p>制作の依頼、取材の依頼、IRや採用についての連絡・お問い合わせはコンタクトページから承っております。<br>まずはお気軽にご連絡ください。担当者から改めて返信いたします。</p>
        <div class="mod__read-link">
          <a href="/about/">READ MORE</a>
        </div>
      </div>
      <figure>
        <img src="@/assets/img/image04.jpg" alt="" srcset="">
      </figure>
    </div>
  </section>
</template>
<style scoped lang="scss">
.fv_wrap {
  width: 100%;
  height: 100vh;
  margin-bottom: 200px;
  &__content {
    position: relative;
    & > .img_area {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(1100 / 1440 * 100vw);
      z-index: 1;
      figure {
        height: 89vh;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }
    & .title_area {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(780 / 1440 * 100vw);
      height: 100vh;
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
      }
    }
  }
}
.listColum {
  width: 100%;
  background: #F0F0F0;
  margin-top: -100px;
}
.topics {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
  .news-list-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      margin-bottom: 30px;
      width: 700px;
      li {
        border-bottom: 1px solid #DDDDDD;
        padding-bottom: 9px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        p {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          time {
            font-size: 10px;
            font-weight: bold;
            color: #CECECE;
          }
        }
      }
    }
  }
}
.contact {
  width: 100%;
  background-color: #f2f2f2;
  padding: 60px 0 120px;
  &__wrap {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &--description {
      max-width: 437px;
      width: 100%;
      p {
        margin: 32px 0 56px;
        font-size: 16px;
        color: #333333;
        line-height: 2;
      }
    }
  }
}

</style>