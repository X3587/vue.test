<!--
 * @Author: your name
 * @Date: 2020-11-03 20:13:58
 * @LastEditTime: 2020-11-05 15:34:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\Left.vue
-->
<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="item in routers[0].children"
        :key="item.name"
        :index="item.name"
      >
        <router-link tag="div" :to="item.path">
          <div>
            <i class="el-icon-menu"></i>
            <span slot="title"> {{ item.title }}</span>
          </div>
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}

.router-link-active {
  text-decoration: none;
}
</style>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      routers: [],
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
    const arr = router.options.routes.filter((v) => v.name === "index");
    console.log("arr", arr);
    this.routers = arr;
    console.log("this", this.routers);
  },
};
</script>