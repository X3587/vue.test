<!--
 * @Author: your name
 * @Date: 2020-11-03 20:19:10
 * @LastEditTime: 2020-11-20 15:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\index.vue
-->
<template>
  <div class="index">
    <!-- 哔哩哔哩首页的banner -->
    <!-- <headerTop /> -->
    <el-container>
      <el-aside><leftMenu /></el-aside>
      <el-container>
        <el-header><headers /></el-header>
        <el-main style="background-color: #f0f2f5">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftMenu from "@/components/LeftMenu";
import headers from "@/components/Header";
import headerTop from "@/components/HeaderTop";
export default {
  components: {
    headers: headers,
    leftMenu: leftMenu,
    headerTop: headerTop,
  },
};
</script>

<style>
.index {
  width: 100%;
}
.el-header {
  padding: 0 !important;
}
.el-aside {
  width: auto !important;
}
.el-main {
}
</style>
