<template lang="html">
  <div class="containers-instructions">
    <div class="instructions-title" v-if="!readonly">
      说明书附图
      <el-button type="danger" @click="() => {this.$router.push({path: '/'})}" style="float: right"> 返回</el-button>
    </div>
    <div class="instructions-content" v-if="!readonly">
      <el-button style="margin: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
      <el-upload
        class="upload"
        ref="upload"
        action="http://localhost:50090/send/v2"
        :http-request="handleUpload"
        :headers="headers"
        list-type="picture-card"
        :file-list="fileList"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-change="handleChange"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        :auto-upload="false">
        <i class="el-icon-plus"></i>
        <!-- <el-button slot="trigger" size="small" type="primary">选取文件</el-button> -->
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <!-- 查看 -->
    <div  v-if="readonly">
      <div v-show="!fileList.length">
        暂无图片, 
        <router-link to="/instructions">请添加...</router-link>
      </div>
      <img width="100%" v-for="(file, index) in fileList" :src="file.url" >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from 'axios';

export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [],
      headers: {"Content-Type": 'multipart/form-data'}
    };
  },
  methods: {
    ...mapMutations('pages',['setInstructions']),
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChange(file, fileList) {
      console.log(file.url);
      this.fileList = fileList;
    },
    beforeUpload(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      this.fileList = fileList;
    },
    handleUpload(data) {
      
      let param = new FormData(); //创建form对象

      param.append('file', data.file);//通过append向form对象添加数据
      param.append('chunk','0');//添加form表单中其他数据
      console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type':'multipart/form-data'}
      };  //添加请求头
      axios.post('http://localhost:50090/send/v2', param, config)
      .then(response=>{
        console.log(response.data);
      }) 
    }
  },
  computed: {
    ...mapGetters("pages", ["getDataJson"])
  },
  mounted() {
    this.fileList = this.getDataJson.instructions;
  },
  watch: {
    fileList: {
      deep: true,
      handler (v) {
        this.setInstructions(v)
      }
    },
  }
}
</script>

<style lang="scss">
  .containers-instructions {
    padding: 10px;
    height: 100%;
    .instructions-title {
      margin-bottom: 10px;
      font-size: 20px;
    }
    .instructions-content {
      height: calc(100% - 30px);
      .upload {
        margin-left: 10px;
      }
    }
  }
</style>
