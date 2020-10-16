<!--
 * @Author: your name
 * @Date: 2020-10-16 11:25:39
 * @LastEditTime: 2020-10-16 15:16:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pytest\src\components\Test.vue
-->
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="pwd" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    axios
      .get("newapp/index/")
      .then((res) => {
        console.log(res.data.list);
        this.tableData = res.data.list;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
  methods: {},
};
</script>