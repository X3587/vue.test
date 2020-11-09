<!--
 * @Author: your name
 * @Date: 2020-11-09 08:53:19
 * @LastEditTime: 2020-11-09 11:24:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\input.vue
-->
<template>
  <div>
    <input :value="title" @input="inputChange" />
  </div>
</template>
<script>
export default {
  props: ["title"],
  methods: {
    inputChange(e) {
      console.log(e.target.value)
      this.$emit("inputValue",e.target.value)
    },
  },
};
</script>
