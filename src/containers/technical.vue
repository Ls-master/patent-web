<template lang="html">
  <div class="containers-technical">
    <div class="technical-top" >
      <el-button type="primary" @click="addNow">增加现有技术</el-button>
      <el-button type="danger" @click="delData">删除</el-button>
      
      <el-button type="danger" @click="() => {this.$router.push({path: '/'})}" style="float: right" v-if="!readonly"> 返回</el-button>
    </div>
    <div class="technical-content">
      <el-checkbox-group v-model="checkList" @change="" class="technical-check">
        <div v-for="(item, index) in dataList" :label="index" :key="index">
          <!-- 独立权利要求 -->
          <el-checkbox :label="index" >
            <!-- <div > -->
              {{index + 1}}
              <el-input
                class="list-item"
                type="textarea"
                :rows="3"
                placeholder="请输入文献号"
                v-model="item.number">
              </el-input>
              <el-input
                class="list-item"
                type="textarea"
                :rows="3"
                placeholder="请输入现有技术公开的内容"
                v-model="item.message">
              </el-input>
              <el-input
                class="list-item"
                type="textarea"
                :rows="3"
                placeholder="请输入缺陷"
                v-model="item.defect">
              </el-input>
            <!-- </div> -->
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
    addNow() {
      this.dataList.push({
        number: '',
        message: '',
        defect: ''
      })
    },
    delData() {
      kr.array.forDel(this.dataList, this.checkList);
      this.checkList = [];
    },
    ...mapMutations('pages',['setTechnical']),
  },
  mounted(){
    this.dataList = this.getDataJson.technical;
  },
  computed: {
    ...mapGetters("pages", ["getDataJson"]),
  },
  watch: {
    dataList: {
      deep: true,
      handler (v) {
        this.setTechnical(v)
      }
    },
  },
}
</script>

<style lang="scss">
  .containers-technical {
    padding: 10px;
    .technical-top {
      min-width: 550px;
      width: 100%;
      margin-bottom: 20px;
    }
    .technical-content {
      .technical-check {
        .list-item {
          width: 300px;
          margin-left: 5px;
          margin-bottom: 10px;
          vertical-align: top;
        }

      }
    }
  }
</style>
