<template lang="html">
  <div class="container-main">
    <top />

    <div class="main-content">
      <el-row :gutter="20">
        <el-col :span="12">
          <home-window :num="0"/>
        </el-col>

        <el-col :span="12"><home-window :num="1"/></el-col>
        <el-col :span="12"><home-window :num="2"/></el-col>
        <el-col :span="12"><home-window :num="3"/></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue';
import HomeWindow from '../components/HomeWindow.vue';
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Top,
    HomeWindow
  },
  data() {
    return {

    }
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
  },
  computed: {
    ...mapGetters(["getComps"]),
  },
}
</script>

<style lang="scss">
.container-main {
  .main-content {
    .el-row {
    }
    .el-col {
      margin-top: 20px;
    }
    
  }
}
</style>
