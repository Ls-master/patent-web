<template lang="html">
  <div class="containers-claim">
    <div class="claim-top" >
      <el-button type="primary" @click="addAlone">增加独立权利要求</el-button>
      <el-button type="primary" @click="addSub">增加从属权利要求</el-button>
      <el-button type="danger" @click="delData">删除</el-button>
      
      <el-button type="danger" @click="() => {this.$router.push({path: '/'})}" style="float: right" v-if="!readonly"> 返回</el-button>
    </div>
    <div class="claim-content">
      <el-checkbox-group v-model="checkList" @change="" class="claim-check">
        <div v-for="(item, index) in dataList" :label="index" :key="index">
          <!-- 独立权利要求 -->
          <el-checkbox :label="index" v-if="item.type === 'alone'">
            <div style="width: 100%">
              {{item.label}}
              <el-input
                class="list-item"
                type="textarea"
                :rows="3"
                placeholder="一种发明名称,其特征是..."
                v-model="item.claim">
              </el-input>
            </div>
          </el-checkbox>
          <!-- 从属权利要求 -->
          <el-checkbox :label="index+1" v-if="item.type === 'sub'" >
            <div style="width: 100%" >
              {{item.label}}
              <el-input
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
        // claim: '一种 <发明名称> , 其特征在于...',
        claim: `一种${this.getDataJson.topdata.typenumber ? this.getDataJson.topdata.typenumber : '<发明名称>'}， 其特征在于，`,
        claim_reg: '',
        fun: '',
        effect: '',
        type: 'alone'
      })
    },
    addSub() {
      let arr = this.checkList.map(n => {
        return this.dataList[n].label
      });
      this.dataList.push({
        label: this.dataList.length + 1,
        // claim: '一种 <从属权利> , 其特征在于...',
        // claim: `一种${this.getDataJson.topdata.typenumber ? this.getDataJson.topdata.typenumber : '<从属权利>'}， 其特征在于，`,
        claim: `如权利要求${arr.sort().toString()}所述的${this.subName}，其特征在于，`,
        claim_reg: '',
        fun: '',
        effect: '',
        type: 'sub'
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
    subName() {
      if(this.checkList.length) {
        let num = this.checkList[0];
        var regex=/(.+?)\，/; // 正则匹配 ','前的字符
        let result = regex.exec(this.dataList[num+1].claim);
        if (result !== null) {
          return result[1];
        }
      } 
      return '';
    }
  },
  watch: {
    // getDataJson: {
    //   immediate: true,
    //   deep: true,
    //   handler(v) {
    //     this.dataList = this.getDataJson.implementation;
    //   }
    // },
    dataList: {
      deep: true,
      handler (v) {
        let arr = v.map(item => {
          return {
            label: item.label,
            claim: item.claim,
            claim_reg: item.claim.replace(/其特征在于|()|所述/g, ''),
            fun: item.fun,
            effect: item.effect,
            type: item.type
          }
        });
        this.setImplementation(arr)
      }
    },
  },
}
</script>

<style lang="scss">
  .containers-claim {
    padding: 10px;
    .claim-top {
      min-width: 550px;
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
