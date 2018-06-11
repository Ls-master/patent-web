<template lang="html">
  <div class="comp-top">
    <div class="top-item">
      <!-- <span> 种类: </span> -->
      <el-input v-model="typenumber" placeholder="请输入种类数量"></el-input>
    </div>
    <div class="top-item">
      <!-- <span> 案号: </span> -->
      <el-input v-model="casenumber" placeholder="请输入案号"></el-input>
    </div>
    <el-button type="primary">导出 word</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typenumber: '',
      casenumber: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .comp-top {
    // background: #e5e9f2;
    // border-radius: 4px;
    min-height: 36px;
    display: flex;
    justify-content: space-between;
    // padding: 10px;

    .top-item {
      margin-right: 20px;
    }
  }
</style>
