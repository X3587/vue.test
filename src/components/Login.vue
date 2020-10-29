<!--
 * @Author: your name
 * @Date: 2020-10-21 10:21:14
 * @LastEditTime: 2020-10-29 13:43:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\Login.vue
-->
<!--  -->
<template>
  <div>
    <!-- <div>{{ message }}</div>
    <div v-for="(item, i) in arr" :key="i">
      {{ item }}
    </div>
    <ul>
      <li v-for="(item, i) in arrObj" :key="i">{{ item.name + item.age }}</li>
    </ul>
    <h1>当前计数：{{ num }}</h1>
    <button @click="add()">+</button>
    <button @click="reduce()">-</button> -->
    <div class="forms">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { login } from "@/request/api"; // 导入我们的api接口
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      message: "哈哈哈哈哈1",
      arr: ["a", "b", "c"],
      arrObj: [
        { name: "aaaa", age: 19 },
        { name: "ccccc", age: 20 },
      ],
      num: 0,
      form: {
        name: "",
        pwd: "",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    add() {
      this.num++;
    },
    reduce() {
      this.num--;
    },
    onSubmit() {
      const { name, pwd } = this.form;
      console.log("name!", name);
      console.log("pwd!", pwd);
      login({
        userName: name,
        userPwd: pwd,
      }).then((res) => {
        console.log(res);
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.forms {
  margin: 0 auto;
  width: 500px;
}
</style>