<template lang="html">
  <div class="comp-leftmenu">
    <el-menu
      default-active=""
      router
      class="comp-leftmenu-vertical"
      @open="handleOpen"
      @close="handleClose">

      <el-menu-item index="claim" :route="{path: `/main/claim`}">
        <i class="el-icon-menu"></i>
        <span slot="title">权利要求书</span>
      </el-menu-item>
      <el-menu-item index="implementation" :route="{path: `/main/implementation`}">
        <i class="el-icon-document"></i>
        <span slot="title">具体实施方式</span>
      </el-menu-item>
      <el-menu-item index="instructions" :route="{path: `/main/instructions`}">
        <i class="el-icon-setting"></i>
        <span slot="title">说明书附图</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
  .comp-leftmenu {
    width: 100%;
    height: 100%;
    background: #fff;
    border-right: solid 1px #e6e6e6;
  }
</style>
