<!--
 * @Author: your name
 * @Date: 2020-10-21 10:21:14
 * @LastEditTime: 2020-11-04 15:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\Login.vue
-->
<!--  -->
<template>
  <div class="login">
    <div class="forms">
      <h1 class="title"></h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名" style="width: 380px">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" style="width: 380px">
          <el-input
            v-model="form.pwd"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" style="width: 380px">
          <el-input
            v-model="form.repwd"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button @click="rest">重置</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { register } from "@/request/api"; // 导入我们的api接口
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      form: {
        name: "",
        pwd: "",
        repwd: "",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // add() {
    //   this.num++;
    // },
    // reduce() {
    //   this.num--;
    // },
    onSubmit() {
      const { name, pwd, repwd } = this.form;
      if (name == "" || pwd == "" || repwd == "") {
        this.$message.error("用户名或密码为空");
      } else if (pwd !== repwd) {
        this.$message.error("密码输入不一致");
      } else {
        register({
          userName: name,
          userPwd: pwd,
        }).then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message({
              message: "注册成功",
              type: "success",
              duration: "1000",
            });
            let that = this;
            setTimeout(function () {
              that.$router.push({ path: "/" });
            }, 1002);
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    rest() {
      this.form = {
        name: "",
        pwd: "",
        repwd: "",
      };
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
.login {
  width: 100%;
  height: 100vh;
  background: url(https://img.alicdn.com/imgextra/i1/2609832847/O1CN019eE4Y21WtyEUTWuPt_!!2609832847.jpg)
    no-repeat;
  background-size: 100% 100%;
}
.forms {
  width: 400px;
  height: 250px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  padding: 35px;
  background-color: #fff;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
