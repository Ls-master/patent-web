<template lang="html">
  <div class="containers-claim">
    <div class="claim-top">
      <el-button type="primary" @click="addAlone">增加独立权利要求</el-button>
      <el-button type="primary">增加从属权利要求</el-button>
      <el-button type="danger" @click="delData">删除</el-button>
    </div>
    <div class="claim-content">
      <el-checkbox-group v-model="checkList" @change="">
        <div v-for="(item, index) in dataList" :label="index" :key="index">
          <el-checkbox :label="index" >
            <div style="width: 500px">
              {{item.label}}
              <el-input
                class="list-item"
                type="textarea"
                :rows="3"
                placeholder="一种发明名称,其特征是..."
                v-model="item.value">
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
  data() {
    return {
      checkList: [],
      dataList: []
    }
  },
  methods: {
    addAlone() {
      this.dataList.push({
        label: this.dataList.length+1,
        value: ''
      })
    },
    delData() {
      kr.array.forDel(this.dataList, this.checkList);
      this.checkList = [];
    },
    ...mapMutations('pages',['setClaim']),
  },
  computed: {
    ...mapGetters("pages", ["getDataJson"])
  },
  watch: {
    dataList: {
      deep: true,
      handler (v) {
        this.setClaim({
          dataList: v
        })
      }
    },
  },
}
</script>

<style lang="scss">
  .containers-claim {
    .claim-top {
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
