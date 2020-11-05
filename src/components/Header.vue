<!--
 * @Author: your name
 * @Date: 2020-11-03 20:09:48
 * @LastEditTime: 2020-11-05 16:05:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\header.vue
-->
<template>
  <div class="header">
    <div class="uname">
      <div class="logo">
        <img
          src="https://img.alicdn.com/imgextra/i1/2609832847/O1CN01yamezw1WtyEXQ5Rt3_!!2609832847.jpg"
        />
      </div>
      <div style="color: #fff">你好，{{ name }}</div>
      <div class="logout" @click="signOut()">
        <i class="el-icon-switch-button">退出</i>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
export default {
  data() {
    return {
      name: localStorage.getItem("userName"),
    };
  },
  methods: {
    signOut(){
     this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #545c64;
}
.uname {
  padding-top: 10px;
  display: flex;
  margin-right: 20px;
  justify-content: flex-end;
  align-items: center;
}
.logo {
  margin-right: 10px;
}
.logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.logout {
  margin-left: 30px;
  margin-top: 6px;
  cursor: pointer;
  color: #fff
}
</style>