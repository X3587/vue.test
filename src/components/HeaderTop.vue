<!--
 * @Author: your name
 * @Date: 2020-11-19 09:30:14
 * @LastEditTime: 2020-11-19 10:35:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\headerTop.vue
-->
<template>
  <div class="aa">
    <div class="top" @mousemove="header">
      <div v-for="item in list" :key="item" class="layer">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "https://img.alicdn.com/imgextra/i2/2609832847/O1CN01pJ9JFl1WtyEodsDLq_!!2609832847.png",
        "https://img.alicdn.com/imgextra/i1/2609832847/O1CN01vYVj4M1WtyEptKCwR_!!2609832847.png",
        "https://img.alicdn.com/imgextra/i4/2609832847/O1CN015F0tUL1WtyEjjNG8H_!!2609832847.png",
        "https://img.alicdn.com/imgextra/i1/2609832847/O1CN01in16l01WtyEn4yUGT_!!2609832847.png",
        "https://img.alicdn.com/imgextra/i2/2609832847/O1CN01j9ixvw1WtyEkjBQlM_!!2609832847.png",
        "https://img.alicdn.com/imgextra/i4/2609832847/O1CN01QqQ5l21WtyEk8kcgg_!!2609832847.png",
      ],
    };
  },
  methods: {
    header(e) {
      let images = document.querySelectorAll(".top > .layer > img");
      console.log(images);
      let percentage = e.clientX / window.outerWidth;
      //   console.log(percentage)
      let offset = 10 * percentage;
      let blur = 10;
      for (let [index, image] of images.entries()) {
        offset *= 1.3;
        let blurValue = Math.pow(index / images.length - percentage, 2) * blur;
        image.style.setProperty("--offset", `${offset}px`);
        image.style.setProperty("--blur", `${blurValue}px`);
      }
    },
  },
};
</script>
<style scoped>
.aa {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-height: 155px;
  height: 9.375vw;
  min-width: 999px;
  background-color: #f9f9f9;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}
.top {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.top > .layer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  --offset: 0px;
  --blur: 2px;
}
.top > .layer > img {
  transform: translatex(var(--offset));
  filter: blur(var(--blur));
}
</style>x