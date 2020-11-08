<!--
 * @Author: your name
 * @Date: 2020-11-08 14:29:30
 * @LastEditTime: 2020-11-08 15:48:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\Views\AddShop.vue
-->
<template>
  <div class="addShop">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品标题">
        <el-input v-model="form.name" style="width: 400px"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price" style="width: 200px"
          ><div slot="suffix" style="margin-right: 10px">元</div></el-input
        >
      </el-form-item>
      <el-form-item label="库存数量">
        <el-input-number
          v-model="form.num"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="100"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="商品主图">
        <el-upload
          action="https://sucai.wangpu.taobao.com/#/manage/?_k=2ozt05"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="form.dialogVisible">
          <img width="100%" :src="form.dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input
          type="textarea"
          style="width: 400px"
          v-model="form.desc"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.addShop {
  width: 100%;
  background: #fff;
  padding: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        num: 1,
        price: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        dialogImageUrl: "",
        dialogVisible: false,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleChange(value) {
      console.log(value);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>