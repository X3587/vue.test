<!--
 * @Author: your name
 * @Date: 2020-11-03 20:19:10
 * @LastEditTime: 2020-11-03 20:27:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\index.vue
-->
<template>
  <div>
    <el-container>
      <el-aside width="210px"><leftMenu /></el-aside>
      <el-container>
        <el-header><headers /></el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftMenu from "@/components/LeftMenu";
import headers from "@/components/Header";
export default {
  components: {
    headers: headers,
    leftMenu: leftMenu
  }
};
</script>

<style></style>
