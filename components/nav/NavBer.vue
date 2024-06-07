<script setup lang="ts">
import { ref } from "vue";
const btnNav = ref(true);

function change():void{
  btnNav.value =! btnNav.value
}
</script>

<template>
  <header>
    <nav>
      <ul class="headNavWrap">
        <li>
          <NuxtLink to="/">
            <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_14_2)">
                <path d="M19.9996 31.0002C17.4575 31.0019 14.963 30.3105 12.7846 29.0002H21.6326C24.8015 29.0996 27.9135 28.1432 30.4796 26.2812C29.1655 27.7638 27.5521 28.951 25.7456 29.7645C23.9391 30.5779 21.9807 30.999 19.9996 31.0002ZM10.8216 27.5722C9.30792 26.258 8.09413 24.634 7.2623 22.8102C6.43047 20.9864 6 19.0052 6 17.0007C6 14.9961 6.43047 13.0149 7.2623 11.1911C8.09413 9.36727 9.30792 7.74335 10.8216 6.42916V27.5722ZM21.3616 24.4782H16.3296V9.72216H21.3616C23.4391 9.63119 25.4725 10.3398 27.0436 11.7022C27.7578 12.4027 28.317 13.2453 28.6853 14.1754C29.0536 15.1055 29.2226 16.1026 29.1816 17.1022C29.2226 18.1017 29.0535 19.0987 28.6852 20.0289C28.3169 20.959 27.7577 21.8016 27.0436 22.5022C25.4719 23.8631 23.4386 24.5702 21.3616 24.4782ZM31.0066 8.35116C28.3714 6.19239 25.0377 5.07169 21.6336 5.20016H12.4626C14.498 3.90192 16.8342 3.15129 19.2449 3.02094C21.6555 2.8906 24.059 3.38496 26.2226 4.45616C28.0848 5.38604 29.7187 6.7157 31.0076 8.35016L31.0066 8.35116Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_14_2" x="0" y="0.000488281" width="37.0076" height="39.9997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="3"/>
                  <feGaussianBlur stdDeviation="3"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_2" result="shape"/>
                </filter>
              </defs>
            </svg>
            <p>DIGSMILE<span>INC.</span></p>
          </NuxtLink>
        </li>
        <li @click="change">
          <div class="navBtn">
            <p :class="[btnNav? 'btnNav' : 'closeBtn']">
              <span></span>
              <span></span>
              <span></span>
            </p>
            <p>MENU</p>
          </div>
        </li>
      </ul>
      <ul v-if="!btnNav" class="navContent">
        <li>
          <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_14_2)">
                <path d="M19.9996 31.0002C17.4575 31.0019 14.963 30.3105 12.7846 29.0002H21.6326C24.8015 29.0996 27.9135 28.1432 30.4796 26.2812C29.1655 27.7638 27.5521 28.951 25.7456 29.7645C23.9391 30.5779 21.9807 30.999 19.9996 31.0002ZM10.8216 27.5722C9.30792 26.258 8.09413 24.634 7.2623 22.8102C6.43047 20.9864 6 19.0052 6 17.0007C6 14.9961 6.43047 13.0149 7.2623 11.1911C8.09413 9.36727 9.30792 7.74335 10.8216 6.42916V27.5722ZM21.3616 24.4782H16.3296V9.72216H21.3616C23.4391 9.63119 25.4725 10.3398 27.0436 11.7022C27.7578 12.4027 28.317 13.2453 28.6853 14.1754C29.0536 15.1055 29.2226 16.1026 29.1816 17.1022C29.2226 18.1017 29.0535 19.0987 28.6852 20.0289C28.3169 20.959 27.7577 21.8016 27.0436 22.5022C25.4719 23.8631 23.4386 24.5702 21.3616 24.4782ZM31.0066 8.35116C28.3714 6.19239 25.0377 5.07169 21.6336 5.20016H12.4626C14.498 3.90192 16.8342 3.15129 19.2449 3.02094C21.6555 2.8906 24.059 3.38496 26.2226 4.45616C28.0848 5.38604 29.7187 6.7157 31.0076 8.35016L31.0066 8.35116Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_14_2" x="0" y="0.000488281" width="37.0076" height="39.9997" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="3"/>
                  <feGaussianBlur stdDeviation="3"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_2" result="shape"/>
                </filter>
              </defs>
            </svg>
        </li>
        <li>
          <a href="/about/">ABOUT US</a>
        </li>
        <li>
          <a href="/works/">WORKS</a>
        </li>
        <li>
          <NuxtLink to="/culture/">CULTURE</NuxtLink>
        </li>
        <li>
          <a href="/topics/">TOPICS</a>
        </li>
        <li>
          <NuxtLink to="/contact/">CONTACT</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav {
  position: fixed;
  width: 100%;
  z-index: 999;
  & > ul.headNavWrap{
    display: flex;
    justify-content: space-between;
    margin: 35px 43px 0;
    & > li {
      display: flex;
      transition: all 3s;// メニューの色の変化
      > a {
        display: flex;
        align-items: center;
        line-height: 0;
        z-index: 999;
        > svg {
          display: flex;
        }
        > p {
          font-family: "Montserrat", sans-serif;
          font-size: 34px;
          font-weight: bold;
          color: #fff;
          > span {
            font-size: 22px;
            margin-left: 6px;
          }
        }
      }
      & > .navBtn {
        display: flex;
        align-items: center;
        z-index: 999;
        cursor: pointer;
        column-gap: 7px;
        color: #fff;
        p.btnNav {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          position: relative;
          width: 22px;
          height: 10px;
          span {
            position: absolute;
            width: 22px;
            height: 2px;
            background-color: #fff;
            transition: all .5s;
            &:nth-of-type(1){
              top: 0;
            }
            &:nth-of-type(3){
              bottom: 0;
            }
          }
        }
        p.closeBtn {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          position: relative;
          width: 22px;
          height: 10px;
          span {
            position: absolute;
            width: 22px;
            height: 2px;
            background-color: #fff;
            transition: all .5s;
            &:nth-of-type(1){
              transform: rotate(-45deg)translateY(-50%);
              top: 50%;
            }
            &:nth-of-type(2){
              display: none;
            }
            &:nth-of-type(3){
              transform: rotate(45deg)translateY(-50%);
              top: 50%;
            }
          }
        }
      }
    }
    & > li.isActive {
        color: red;
      }
  }
  & > ul.navContent {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    top: 0;
    right: 0;
    width: 30%;
    height: 100vh;
    overflow: hidden;
    background-color: rgba($color: #6f6f6f, $alpha: .6);
    li {
      a {
        color: #fff;
      }
    }
  }
}

</style>