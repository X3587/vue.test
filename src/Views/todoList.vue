<!--
 * @Author: your name
 * @Date: 2020-11-09 14:48:05
 * @LastEditTime: 2020-11-11 11:22:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\Views\todoList.vue
-->
<template>
  <div>
    <el-input v-model="inputValue" @change="cmyItem" />
    <div>
      <uk>
        <li v-for="(item, index) in list" :key="index">
          <el-input
            style="width: 100px"
            v-model="inputV"
            v-if="cmyI === index"
            @change="cmyItemSix(index)"
          />
          <span>{{ item }}</span>
          <span @click="ccmyItem(index)">DEL</span>
          <span @click="ccc(index)">edit</span>
        </li>
      </uk>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: "",
      list: [],
      cmyI: undefined,
      inputV: "",
    };
  },
  methods: {
    cmyItem() {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    ccmyItem(i) {
      this.list.splice(i, 1);
    },

    ccc(i) {
      this.cmyI = i;
      console.log(this)
      this.inputV = this.list[i];
      this.list[i] = "";
    },

    cmyItemSix(i) {
      this.list[i] = this.inputV;
      this.cmyI = undefined;
    },
  },
};
</script>
<style scoped>
</style>