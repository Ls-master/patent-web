<template lang="html">
  <div class="containers-claim">
    <div class="claim-top" v-if="!readonly">
      <el-button type="primary" @click="addAlone">增加独立权利要求</el-button>
      <el-button type="primary" @click="addSub">增加从属权利要求</el-button>
      <el-button type="danger" @click="delData">删除</el-button>
      
      <el-button type="danger" @click="() => {this.$router.push({path: '/'})}" style="float: right"> 返回</el-button>
    </div>
    <div class="claim-content">
      <el-checkbox-group v-model="checkList" @change="">
        <div v-for="(item, index) in dataList" :label="index" :key="index">
          <el-checkbox :label="index" >
            <div style="width: 500px">
              {{item.label}}
              <el-input
                :readonly="readonly"
                class="list-item"
                type="textarea"
                :rows="3"
                placeholder="一种发明名称,其特征是..."
                v-model="item.claim">
              </el-input>
            </div>
          </el-checkbox>
        </div>
      </el-checkbox-group>
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
      checkList: [],
      dataList: [],
      
    }
  },
  methods: {
    addAlone() {
      this.dataList.push({
        label: this.dataList.length + 1,
        claim: '一种 <发明名称> , 其特征是...',
        fun: '',
        effect: ''
      })
    },
    addSub() {
      this.dataList.push({
        label: this.dataList.length + 1,
        claim: '一种 <从属权利> , 其特征是...',
        fun: '',
        effect: ''
      })
    },
    delData() {
      kr.array.forDel(this.dataList, this.checkList);
      this.checkList = [];
    },
    ...mapMutations('pages',['setImplementation']),
  },
  mounted(){
    this.dataList = this.getDataJson.implementation;
  },
  computed: {
    ...mapGetters("pages", ["getDataJson"]),
  },
  watch: {
    dataList: {
      deep: true,
      handler (v) {
        this.setImplementation(v)
      }
    },
  },
}
</script>

<style lang="scss">
  .containers-claim {
    padding: 10px;
    .claim-top {
      width: 100%;
      margin-bottom: 20px;
    }
    .claim-content {
      .list-item {
        margin-left: 10px;
        margin-bottom: 10px;
        vertical-align: top;
      }
    }
  }
</style>
