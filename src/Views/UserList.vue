<!--
 * @Author: your name
 * @Date: 2020-10-16 11:25:39
 * @LastEditTime: 2020-11-05 20:04:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pytest\src\components\Test.vue
-->
<template>
  <div class="content">
    <div class="tables">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="编号" > </el-table-column>
        <el-table-column prop="name" label="姓名" >
        </el-table-column>
        <el-table-column prop="pwd" label="密码">暂无权限</el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { userList } from "@/request/api"; // 导入我们的api接口
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    userList().then((res) => {
      console.log(res);
      this.tableData = res.list;
    });
  },
  methods: {},
};
</script>
<style>
.content{
  width: 100%;
}
</style>