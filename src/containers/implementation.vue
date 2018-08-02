<template lang="html">
  <div class="containers-implementation">
    <div class="imp-title" v-if="!readonly">
      具体实施方法
      <el-button type="danger" @click="() => {this.$router.push({path: '/'})}" style="float: right"> 返回</el-button>
    </div>
    <div class="imp-table">
      <el-table
        v-if="!readonly"
        :data="tableData"
        height="100%"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="claim_reg"
          label="手段"
          >
        </el-table-column>
        <el-table-column
          prop="fun"
          label="功能"
          >
          <template slot-scope="scope">
              <!-- :readonly="readonly" -->
            <el-input
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
              <!-- :readonly="readonly" -->
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入效果"
              v-model="scope.row.effect">
            </el-input>
          </template>
        </el-table-column>
      </el-table>

      <div v-for="(item, i) in tableData" :key="i" v-if="readonly" class="img-check">
        <div class="left">
          {{i+1}}
        </div>
        <div class="right">
          <div class="child">
            <el-input
              type="textarea"
              :rows="3"
              :readonly="true"
              v-model="item.claim_reg">
            </el-input>
          </div >
          <!-- <p><b>功能:</b> {{item.fun}}</p> -->
          <div class="child"> 
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入功能"
              v-model="item.fun">
            </el-input>
          </div>
          <!-- <p><b>效果:</b> {{item.effect}}</p> -->
          <div class="child"> 
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入效果"
              v-model="item.effect">
            </el-input>
          </div>
        </div>
      </div>
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
    // this.tableData = this.getDataJson.implementation;
  },
  watch: {
    tableData: {
      deep: true,
      handler (v) {
        this.setImplementation(v);
        console.log(3333);
        
      }
    },
    getDataJson: {
      immediate: true,
      deep: true,
      handler(v) {
        this.tableData = v.implementation;
      }
    }
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
    .img-check {
      display: flex;
      border-bottom: 1px solid #CACEE0;
        margin-bottom: 10px;
      .left {
        width: 25px;
        margin-top: 15px;
        color: red;
      }
      .right {
        flex: 1;
        .child {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
