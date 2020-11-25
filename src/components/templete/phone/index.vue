<!--
 * @Author: your name
 * @Date: 2020-11-19 13:36:56
 * @LastEditTime: 2020-11-20 16:08:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\templete\phone\index.vue
-->
<template>
  <div class="phone">
    <div v-for="item in config" :key="item.id">
        {{item.title}}
    <!-- input组件 -->
    <div v-if="item.elementType == 'TEXT'" class="desc">
        <el-input style="width:200px"  v-model="input" :placeholder="item.placeholder"></el-input>
    </div>
    <div v-else class="desc">
      <div>这是{{item.title}}组件</div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["config"],
  data(){
      return{
          input:""
      }
  },
  methods: {},
};
</script>
<style scoped>
.phone{
    width: 100%;
    height: 600px;
    overflow-y:scroll;
}
.desc{
  margin-bottom: 20px;
}
</style>