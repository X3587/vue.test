<!--
 * @Author: your name
 * @Date: 2020-11-09 08:52:07
 * @LastEditTime: 2020-11-09 11:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\Views\test.vue
-->
<template>
  <div>
    <div style="margin-bottom: 20px">父：<input v-model="msg" /></div>
    <div style="display: flex">
      子：<tests :title="msg" v-on:inputValue="inputValue" />
    </div>
    <div style="margin-top:50px">
      数据绑定小案例
      <ul>
        <li
          v-for="(i, index) in list"
          :key="index"
          @click="clickMe(index)"
          :class="['aa',index == num? 'list' : '']"
        >
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import test from "@/components/Test1";
export default {
  components: {
    tests: test
  },
  data() {
    return {
      msg: "",
      list: ["1", "2", "3", "4"],
      num: null
    };
  },
  methods: {
    inputValue(value) {
      console.log(value);
      this.msg = value;
    },
    clickMe(index) {
      console.log(index);
      this.num = index;
    }
  }
};
</script>

<style scoped>
.aa{
  margin-bottom: 20px;
  cursor: pointer;
}
.list {
  color: red;
}
</style>
