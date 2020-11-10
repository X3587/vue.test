<!--
 * @Author: your name
 * @Date: 2020-11-09 14:48:05
 * @LastEditTime: 2020-11-10 08:50:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.test\src\Views\todoList.vue
-->
<!--

<template>
  <div>
    <div>
      <el-input
        @change="InputChange"
        v-model="input"
        placeholder="请输入内容"
        style="width: 200px"
      ></el-input>
    </div>
    <div>
      <div v-for="(item, index) in list" :key="item">
        <span v-if="index == arrIndex">
          <el-input
            v-model="val"
            @blur="editInputChange(index)"
            style="width: 200px"
          ></el-input>
        </span>
        <span v-else>{{ item }}</span>
        <span style="color: blue" @click="deletArr(index)">delet</span>
        <span style="color: blue" @click="editArr(index, $event.target.value)"
          >edit</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      inputs: "",
      list: [],
      arrIndex: null,
      val: "",
    };
  },
  methods: {
    InputChange(e) {
      console.log(e);
      this.list.push(e);
      this.input = "";
    },
    editInputChange(i) {
      this.list[i] = this.val;
      this.arrIndex = null;
    },
    deletArr(index) {
      console.log(index);
      this.list.splice(index, 1);
    },
    editArr(index, val) {
      this.arrIndex = index;
      this.val = val;
    },
  },
};
</script>
<style scoped>
</style>


-->

<template>
  <div>
    <el-input v-model="inputValue" @change="cmyItem" />
    <div>
      <uk>
        <li v-for="(item, index) in list" :key="index">
          <el-input
            style="width: 100px"
            v-model="inputV"
            v-if="cmyI === index"
            @change="cmyItemSix(index)"
          />
          <span>{{ item }}</span>
          <span @click="ccmyItem(index)">DEL</span>
          <span @click="ccc(index)">edit</span>
        </li>
      </uk>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: "",
      list: [],
      cmyI: undefined,
      inputV: "",
    };
  },
  methods: {
    cmyItem() {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    ccmyItem(i) {
      this.list.splice(i, 1);
    },

    ccc(i) {
      this.cmyI = i;
      console.log(this)
      this.inputV = this.list[i];
      this.list[i] = "";
    },

    cmyItemSix(i) {
      this.list[i] = this.inputV;
      this.cmyI = undefined;
    },
  },
};
</script>
<style scoped>
</style>