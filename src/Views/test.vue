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
    <div style="margin-bottom: 20px">
      父：<input v-model="msg" />
    </div>
    <div style="display: flex">子：<tests :title="msg" v-on:inputValue="inputValue" /></div>
  </div>
</template>

<script>
import test from "@/components/Test1";
export default {
  components: {
    tests: test,
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    inputValue(value) {
        console.log(value)
        this.msg = value
    },
  },
};
</script>

<style scoped>
</style>