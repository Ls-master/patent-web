<template lang="html">
  <div class="comp-top">
    <div class="top-item">
      <!-- <span> 种类: </span> -->
      <el-input v-model="typenumber" placeholder="请输入发明名称"></el-input>
    </div>
    <div class="top-item">
      <!-- <span> 案号: </span> -->
      <el-input v-model="casenumber" placeholder="请输入案号"></el-input>
    </div>
    <el-button type="primary" @click="exportData">导出 word</el-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from 'axios';

export default {
  data() {
    return {
      typenumber: '',
      casenumber: ''
    }
  },
  methods: {
    ...mapMutations('pages',['setTopdata']),
    exportData() {
      console.log(this.getDataJson);
      // axios({
      //   method: 'post',
      //   baseURL: '/api',
      //   url: 'send/v1',
      //   data: this.getDataJson
      // }).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   console.log(err);
      // });
      axios.post('http://localhost:50090/send/v1', this.getDataJson)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapGetters("pages", ["getDataJson"])
  },
  watch: {
    typenumber(v) {
      this.setTopdata({
        typenumber: this.typenumber,
        casenumber: this.casenumber
      })
    },
    casenumber(v) {
      this.setTopdata({
        typenumber: this.typenumber,
        casenumber: this.casenumber
      })
    }
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
