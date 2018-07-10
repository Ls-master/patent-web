<template lang="html">
  <div class="containers-instructions">
    <div class="instructions-title" v-if="!readonly">
      说明书附图
      <el-button type="danger" @click="() => {this.$router.push({path: '/'})}" style="float: right"> 返回</el-button>
    </div>
    <div class="instructions-content" v-if="!readonly">
      <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="handleChange"/>
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
      fileList: []
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
    handleChange(e) {
      let file = e.target.files[0];           
      let param = new FormData(); //创建form对象
      param.append('file', file, file.name);//通过append向form对象添加数据
      param.append('chunk','0');//添加form表单中其他数据
      console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type':'multipart/form-data'}
      };  //添加请求头
      axios.post('http://localhost:50090/send/v2', param, config)
      .then(response=>{
        console.log(response.data);
      })        
    },
    beforeUpload(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      this.fileList = fileList;
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
