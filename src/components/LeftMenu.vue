<!--
 * @Author: your name
 * @Date: 2020-11-03 20:13:58
 * @LastEditTime: 2020-11-04 12:46:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\Left.vue
-->
<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item, index) in list" :key="item.message">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ index }}-{{ item.message }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
</style>

<script>
export default {
  data() {
    return {
      list: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
  },
};
</script>