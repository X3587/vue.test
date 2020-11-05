<!--
 * @Author: your name
 * @Date: 2020-11-03 20:13:58
 * @LastEditTime: 2020-11-05 14:37:27
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
      <div>
        <div v-for="item in routers" :key="item.name">
          <div v-if="item.children">
            <el-menu-item
              :index="index"
              v-for="(child, index) in item.children"
              :key="child.name"
            >
              <router-link tag="div" :to="child.path">
                <div>
                  <i class="el-icon-menu"></i>
                  <span slot="title"> {{ child.title }}</span>
                </div>
              </router-link>
            </el-menu-item>
          </div>
        </div>
      </div>
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
    console.log("router", router.options.routes);
    this.routers = router.options.routes;
  },
};
</script>