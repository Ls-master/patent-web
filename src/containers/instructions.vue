<template lang="html">
  <div class="containers-instructions">
    <div class="instructions-title">
      说明书附图
    </div>
    <div class="instructions-content">
      <el-button style="margin: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <el-upload
        class="upload"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChange(file, fileList) {
      console.log(fileList);
    },
    beforeUpload(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      console.log(response);
      console.log(file);
      console.log(fileList);
    }
  }
}
</script>

<style lang="scss">
  .containers-instructions {
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
