<!--
 * @Author: your name
 * @Date: 2020-11-19 13:35:37
 * @LastEditTime: 2020-11-20 15:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\components\templete\index.vue
-->
<template>
  <div class="templete">
    <el-row>
      <el-col :span="8">
        <div>
          <div class="componnets-list">
            <div class="alists">
              <div
                v-for="item in baseComponentList"
                :key="item.id"
                class="item flex-center"
                @click="onAddComponent(item, 'baseComponentList')"
              >
                {{ item.componentName }}
              </div>
            </div>
          </div>
          <div class="componnets-list">
            <div class="alists">
              <div
                v-for="item in bizComponentList"
                :key="item.id"
                class="item flex-center"
                @click="onAddComponent(item, 'bizComponentList')"
              >
                {{ item.componentName }}
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <phone :config="formConfig" />
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <seeting />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import phone from "@/components/templete/phone";
import seeting from "@/components/templete/seeting-details";
import {
  baseComponentList,
  bizComponentList,
  bannerComponent,
  saveBtnComponent,
} from "./components.preset";
export default {
  components: {
    phone: phone,
    seeting: seeting,
  },
  data() {
    return {
      baseComponentList, //基本组件
      bizComponentList, //业务组件
      formConfig: [], // 预约表单的具体配置,传给中间的模拟器
    };
  },
  methods: {
    onAddComponent(e, type) {
      // console.log(e,type)
      let id = e.id;
      // 区分是业务组件还是基础组件
      let componentsList = [];
      let preFormConfig = this.formConfig;
      if (type == "baseComponentList") {
        componentsList = this.baseComponentList;
      } else if (type == "bizComponentList") {
        componentsList = this.bizComponentList;
      }
      console.log("组件列表", componentsList);
      if (!componentsList) console.error("错误的ctype");
      let selectedComponent;
      // 选中的组件
      componentsList.forEach((element) => {
        if (element.id === id) {
          selectedComponent = element;
          // this.$message({
          //   message: "恭喜你，添加成功",
          //   type: "success",
          // });
        }
      });
      console.log("选中的组件", selectedComponent);
      let list = [];
      if (type == "bizComponentList") {
        for (let key in this.formConfig) {
          list.push(this.formConfig[key]);
        }
        if (
          list.filter((item) => item.id == selectedComponent.id).length > 0 ||
          list.filter(
            (item) => item.componentName == selectedComponent.componentName
          ).length > 0
        ) {
          console.log("重复组件");
          this.$message({ message: "已存在该组件" });
        } else {
          this.formConfig.push(selectedComponent);
        }
      } else {
        this.formConfig.push(selectedComponent);
      }
      console.log("所有点击的组件", this.formConfig);
    },
  },
};
</script>
<style scoped>
.templete{
  background-color: #fff;
  padding: 20px;
}
.componnets-list {
  width: 100%;
}
.componnets-list .title {
  font-size: 14px;
  font-weight: bold;
}

.componnets-list .alists {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 20px;
  text-align: center;
}
.componnets-list .alists .item:hover {
  border: 1px solid #1e90ff;
  color: #1e90ff;
}
.componnets-list .alists .item {
  margin-right: 10px;
  margin-top: 10px;
  border: 1px solid #c0c0c0;
  width: 185px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.componnets-list .alists .items {
  margin-right: 10px;
  margin-top: 10px;
  border: 1px solid #c0c0c0;
  width: 185px;
  height: 40px;
}
</style>