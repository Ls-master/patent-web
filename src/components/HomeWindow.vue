<template>
  <div class="content-window">
    <el-dropdown @command="(command) => handleCommand(command, 'technical')" class="window-top" split-button type="primary" size="small">
      技术背景
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="edit">编辑</el-dropdown-item>
        <el-dropdown-item command="check">查看</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="(command) => handleCommand(command, 'claim')" class="window-top" split-button type="primary" size="small">
      权利要求书
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="edit">编辑</el-dropdown-item>
        <el-dropdown-item command="check">查看</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="(command) => handleCommand(command, 'implementation')" class="window-top" split-button type="primary" size="small">
      具体实施方式
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="edit">编辑</el-dropdown-item>
        <el-dropdown-item command="check">查看</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="(command) => handleCommand(command, 'instructions')" class="window-top" split-button type="primary" size="small">
      说明书附图
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="edit">编辑</el-dropdown-item>
        <el-dropdown-item command="check">查看</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="window-content">
      <component 
        :is="getComps[num]"
        :readonly="true"
      />
    </div>
  </div>
</template>

<script>
import claim from '../containers/claim.vue';
import implementation from '../containers/implementation.vue';
import instructions from '../containers/instructions.vue';
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleCommand(command, from) {
      if(command === 'edit') {
        this.$router.push({
          path: `/${from}`,
          name: from,
          // query: {}
        })
      }
      else {
        this.setComps({
          i: this.num,
          val: from
        });
      }
    },
    ...mapMutations(['setComps']),
  },
  computed: {
    ...mapGetters(["getComps"]),
  },
  components: {
    claim,
    implementation,
    instructions
  }
}
</script>

<style lang="scss">
  .content-window {
    border-radius: 4px;
    border: 1px solid #000;
    height: 400px;
    padding: 10px;
    // min-width: 525px;
    .window-top {
      margin: 0px 0px 10px 5px;
    }
    .window-content {
      width: 100%;
      height: 358px;
      border: 1px solid #000;
      overflow: scroll;
    }
  }

</style>