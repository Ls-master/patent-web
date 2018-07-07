<template lang="html">
  <div class="containers-implementation">
    <!-- <div class="imp-title">
      具体实施方法
    </div> -->
    <div class="imp-table">
      <el-table
        :data="tableData"
        height="100%"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="claim"
          label="手段"
          width="180">
        </el-table-column>
        <el-table-column
          prop="fun"
          label="功能"
          width="180">
          <template slot-scope="scope">
            <el-input
              :readonly="readonly"
              type="textarea"
              :rows="3"
              placeholder="请输入功能"
              v-model="scope.row.fun">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="effect"
          label="效果">
          <template slot-scope="scope">
            <el-input
              :readonly="readonly"
              type="textarea"
              :rows="3"
              placeholder="请输入效果"
              v-model="scope.row.effect">
            </el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    ...mapMutations('pages',['setImplementation']),
  },
  computed: {
    ...mapGetters("pages", ["getDataJson"])
  },
  mounted() {
    this.tableData = this.getDataJson.implementation;
  },
  watch: {
    tableData: {
      deep: true,
      handler (v) {
        this.setImplementation(v)
      }
    },
  },
}
</script>

<style lang="scss">
  .containers-implementation {
    padding: 10px;
    height: 100%;
    .imp-title {
      margin-bottom: 20px;
      font-size: 20px;
    }
    .imp-table {
      height: calc(100% - 40px);
    }
  }
</style>
